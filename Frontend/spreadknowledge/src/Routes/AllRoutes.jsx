import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Login from '../Pages/Auth/Login'
import Signup from '../Pages/Auth/Signup'
import Blog from '../Pages/Blogs/Blog'
import BlogDesc from '../Pages/Blogs/BlogDesc'
import BlogEdit from '../Pages/Blogs/BlogEdit'
import CreateBlog from '../Pages/Create Blog/CreateBlog'
import Profile from '../Pages/Profile/Profile'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/blogs' element={<PrivateRoute><Navbar /><Blog/></PrivateRoute>} />
        <Route path='/create-blog' element={<PrivateRoute><Navbar /><CreateBlog /></PrivateRoute>} />
        <Route path='/blog/:id' element={<PrivateRoute><Navbar /><BlogDesc /></PrivateRoute>} />
        <Route path='/blog/edit/:id' element={<PrivateRoute><Navbar /><BlogEdit /></PrivateRoute>} />
        <Route path='/profile' element={<PrivateRoute><Navbar /><Profile /></PrivateRoute>} />
    </Routes>
  )
}

export default AllRoutes