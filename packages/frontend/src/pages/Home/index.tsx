import { Box, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()
  return (
    <Box>
      <Text as="h1" fontSize="3xl" fontWeight="bold" mb={4}>
        {t('home.welcome')}
      </Text>
    </Box>
  )
}

export default Home
