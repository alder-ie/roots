import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Navigation } from './components/Navigation'

import { ProtectedRoute } from './components/ProtectedRoute'

import Home from './pages/Home'
import Profile from './pages/Profile'
import PageNotFound from './pages/PageNotFound'
import { useAuth0 } from '@auth0/auth0-react'
import { Spinner } from '@chakra-ui/react'

const App = () => {
  const { isLoading } = useAuth0()

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <Router>
        <Navigation>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/profile"
              element={<ProtectedRoute page={Profile} />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Navigation>
      </Router>
    </>
  )
}

export default App
