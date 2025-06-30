
import {Routes , Route, Outlet , Navigate } from 'react-router-dom'
import Login from './pages/Login'

import Navbar from './components/Navbar'
import Register from './pages/Register'
import Home from './pages/home'
// import { useState ,useEffect } from 'react'
// import axios from 'axios'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux'

function App() {

  const user = useSelector((state)=>state.userReducer);
 
  return (
    <>
      <Routes>
        <Route  element={user ? <Outlet/> : <Login/>} >
          <Route path='/' element={<Home  />}/>
        </Route>

        <Route element={user ? <Navigate to="/" /> : <Outlet/> }>
          <Route path='/login' element={<Login/>}/>
        </Route> 
       
        <Route path='/signup' element={<Register/>} />
        
      </Routes>
    </>
    
  )
}

export default App
