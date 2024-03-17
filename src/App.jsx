import './App.css';
import MainLayout from './Components/MainLayout';
import Activity from './pages/Activity';
import Dashboard from './pages/Dashboard';
import Forgetpassword from './pages/Forgetpassword';
import Guard from './pages/Guard';
import Info from './pages/Info';
import Login from './pages/Login';
import ManageGuard from './pages/ManageGuard';



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
            <Route index element={<Dashboard />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='information' element={<Info />} />
            <Route path='guard' element={<Guard />} />
            <Route path='manageguard' element={<ManageGuard />} />
            <Route path='activity' element={<Activity />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
