import React from 'react'
import {Box, Button, Flex, Img, Text} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
const Navbar = () => {
  const {isAuth}=useContext(AuthContext);
  return (
    <Box bg="blue">
      {/* left */}
      <Flex justify='space-around' align='center'>
      <Box>
      <Link to='/'><Img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-blog-new-media-flaticons-lineal-color-flat-icons.png"/></Link>
      </Box>
      {/* Right */}
      <Box>
      <Flex justify='space-around' align='center' gap='10'>
      <Button variant="solid" bg="blue"><Link to='/blogs'>Blogs</Link></Button>
      <Button variant="solid" bg="blue"><Link to='/signup'>Signup</Link></Button>
      <Button variant="solid" bg="blue"><Link to='/create-blog'>Create Blog</Link></Button>
       <Text>{isAuth.data.name}</Text>
      </Flex>  
      </Box>
      </Flex>
    </Box>
  )
}

export default Navbar