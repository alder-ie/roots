import fp from 'fastify-plugin'
import fastifyauth0verify from 'fastify-auth0-verify'

export interface auth0VerifyOptions {}

export default fp<auth0VerifyOptions>(async (fastify) => {
  fastify.register(fastifyauth0verify, {
    domain: process.env.AUTH0_DOMAIN,
    secret: process.env.AUTH0_SECRET,
  })

  fastify.addHook('onRequest', async (request, reply) => {
    try {
      await request.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })
})
