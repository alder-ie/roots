import { Box, Image, Text } from '@chakra-ui/react'
import { useAuth0 } from '@auth0/auth0-react'

function Profile() {
  const { user, isLoading } = useAuth0()

  if (!user && !isLoading) {
    return null
  }

  if (isLoading) {
    return <Box>Loading ...</Box>
  }

  if (user)
    return (
      <Box>
        <Image src={user.picture} alt={user.name} />
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
      </Box>
    )
}

export default Profile
