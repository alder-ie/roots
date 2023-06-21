import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './i18n'
import { ChakraProvider } from '@chakra-ui/react'
import { Auth0Provider } from '@auth0/auth0-react'
import { theme } from './theme'

const AUTH0_DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN as string
const AUTH0_CLIENT_ID = import.meta.env.VITE_AUTH0_CLIENT_ID as string

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Auth0Provider>
  </React.StrictMode>
)
