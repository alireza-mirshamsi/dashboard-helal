import './App.css'
import MainLayout from './pages/Dashboard'
import Login from './pages/Login'

//import react router dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/admin' element={<MainLayout />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
