import './App.css'
import MainLayout from './Components/MainLayout'
import Dashboard from './pages/Dashboard'
import Forgetpassword from './pages/Forgetpassword'
import Info from './pages/Info'
import Login from './pages/Login'


//import react router dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/forget-password' element={<Forgetpassword />} />
          <Route path='/admin' element={<MainLayout />}>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='information' element={<Info />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
