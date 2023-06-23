import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Navigation } from './components/Navigation'

import { ProtectedRoute } from './components/ProtectedRoute'

import Home from './pages/Home'
import Profile from './pages/Profile'
import PageNotFound from './pages/PageNotFound'
import { useAuth0 } from '@auth0/auth0-react'
import { Box, Progress } from '@chakra-ui/react'

const App = () => {
  const { isLoading } = useAuth0()

  return (
    <>
      <Router>
        <Navigation>
          {isLoading && (
            <Progress size="xs" colorScheme="primary" isIndeterminate />
          )}
          {!isLoading && (
            <Box px={4} py={2}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/profile"
                  element={<ProtectedRoute page={Profile} />}
                />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </Box>
          )}
        </Navigation>
      </Router>
    </>
  )
}

export default App
