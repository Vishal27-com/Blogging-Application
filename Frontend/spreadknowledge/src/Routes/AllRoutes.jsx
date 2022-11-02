import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Auth/Login'
import Signup from '../Pages/Auth/Signup'
import Blog from '../Pages/Blogs/Blog'
import BlogDesc from '../Pages/Blogs/BlogDesc'
import CreateBlog from '../Pages/Create Blog/CreateBlog'
import Home from '../Pages/Home/Home'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/blogs' element={<PrivateRoute><Blog/></PrivateRoute>} />
        <Route path='/create-blog' element={<PrivateRoute><CreateBlog /></PrivateRoute>} />
        <Route path='/blog/:id' element={<PrivateRoute><BlogDesc /></PrivateRoute>} />
    </Routes>
  )
}

export default AllRoutes