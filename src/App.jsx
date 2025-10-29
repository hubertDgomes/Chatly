import './App.css'
import { Route, Routes } from 'react-router-dom'
import RootLayout from './components/layouts/RootLayout'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import Dashboard from './components/pages/Dashboard'

function App() {
 
  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Route>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App
