import { HStack, Button } from '@chakra-ui/react'
import { useAuth0 } from '@auth0/auth0-react'

function Login() {
  const { loginWithRedirect } = useAuth0()
  return (
    <HStack>
      <Button
        bg="primary.500"
        color="white"
        _hover={{ bg: 'primary.600' }}
        onClick={() => loginWithRedirect()}
      >
        Login
      </Button>
      <Button
        bg="secondary.500"
        color="white"
        _hover={{ bg: 'secondary.400' }}
        onClick={() =>
          loginWithRedirect({
            authorizationParams: {
              screen_hint: 'signup'
            }
          })
        }
      >
        Register
      </Button>
    </HStack>
  )
}

export default Login
