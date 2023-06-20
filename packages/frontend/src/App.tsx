import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Navigation } from './components/Navigation'

import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Navigation>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Navigation>
    </>
  )
}

export default App
