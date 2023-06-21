import { extendTheme } from '@chakra-ui/react'
import colors from './colors'

const theme = extendTheme({
  colors,
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`
  }
})

export default theme
