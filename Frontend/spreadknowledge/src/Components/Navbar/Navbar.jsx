import React from 'react'
import {Box, Button, Flex, HStack, Text} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import MyMenu from './Menu';
import MobileNav from './MobileNav';
const Navbar = () => {
  const {isAuth}=useContext(AuthContext);
 
  return (
    <Box position='sticky' p='10px' top='0px' zIndex='10' bg={"var(--mainbgcolor)"} >
      <Box display={["none","none","block"]}>

      {/* left */}
      <Flex justify='space-around' align='center'>
      <Box>
      <Link to='/blogs'><Text fontSize='18px' fontWeight='bold'>Spread Knowledge</Text></Link>
      </Box>
      {/* Right */}
      <Box>
      <Flex justify='space-around' align='center' gap='10'>
      <Button variant="solid" bg={"var(--mainbgcolor)"} _hover={{bg:"teal",color:'white'}}><Link to='/blogs'>Blogs</Link></Button>
      <Button variant="solid" bg={"var(--mainbgcolor)"} _hover={{bg:"teal",color:'white'}}><Link to='/create-blog'>Create Blog</Link></Button>
      <Button variant="solid" bg={"var(--mainbgcolor)"} _hover={{bg:"teal",color:'white'}}><Link to='/signup'>Signup</Link></Button>
      <Box>
      <HStack>
        {
       isAuth.data.name && <MyMenu data={isAuth.data} />
        }
      <Text><b>{isAuth.data.name}</b></Text>
        </HStack>
      </Box>
      </Flex>  
      </Box>
      </Flex>
      </Box>
      <MobileNav />
    </Box>
  )
}

export default Navbar