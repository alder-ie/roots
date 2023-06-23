import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import colors from './colors'

const config: ThemeConfig = {
  useSystemColorMode: true
}

const theme = extendTheme({
  colors,
  config,
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`
  }
})

export default theme
