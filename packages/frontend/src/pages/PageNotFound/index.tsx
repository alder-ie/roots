import { Heading, Text, Button, Box } from '@chakra-ui/react'

export default function PageNotFound() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="4xl"
        bgGradient="linear(to-r, primary.400, primary.500, primary.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="2xl" fontWeight="bold" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        Sorry, we couldn’t find the page you’re looking for.
      </Text>

      <Button
        as="a"
        href="/"
        colorScheme="teal"
        bgColor="primary.500"
        color="white"
        variant="solid"
        width={40}
        mx="auto"
        _hover={{
          bgColor: 'primary.600'
        }}
      >
        Go to Home
      </Button>
    </Box>
  )
}
