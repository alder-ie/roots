import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Navbar } from './components/Navbar'

import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Navbar>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Navbar>
    </>
  )
}

export default App
