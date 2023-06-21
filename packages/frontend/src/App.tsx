import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Navigation } from './components/Navigation'

import { ProtectedRoute } from './components/ProtectedRoute'

import Home from './pages/Home'
import Profile from './pages/Profile'

const App = () => {
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
          </Routes>
        </Navigation>
      </Router>
    </>
  )
}

export default App
