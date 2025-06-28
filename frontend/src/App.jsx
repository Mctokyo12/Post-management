
import {Routes , Route } from 'react-router-dom'
import Login from './pages/Login'

import Navbar from './components/Navbar'
import Register from './pages/Register'
import Home from './pages/home'
import { useState ,useEffect } from 'react'
import axios from 'axios'



function App() {


  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
  const [posts , setposts] = useState();
  const [postUpdate , setpostUpdate] = useState(false);

  useEffect(()=>{
    getPosts();
  } , postUpdate)
  
  const getPosts =  async ()=>{
    try {
      const {data}  = await axios.get(
        'http://localhost:5000/post' , 
        {
          headers:{
            Authorization: `Bearer ${user.token}`,
          }
        }
      )
      setposts(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Routes>

        {user ? <Route path='/' element={<Home user={user} posts={posts} setpostUpdate={setpostUpdate} />}></Route> : <Route path='/login' element={<Login/>}/> } 
        <Route path='/signup' element={<Register/>} />
        
      </Routes>
    </>
    
  )
}

export default App
