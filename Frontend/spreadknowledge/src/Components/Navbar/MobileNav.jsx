import React, { useState } from 'react'
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex,  HStack,  SimpleGrid, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import MyMenu from './Menu';
const MobileNav = () => {
  const {isAuth}=useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const [navbg,setNavbg]=useState(false);
  const navbarBg=()=>{
  if(window.scrollY>=100){
    setNavbg(true);
  }else {
    setNavbg(false);
  }
  }
  window.addEventListener("scroll",navbarBg)
  return (
    <Box display={["block","block","none"]}>
      {/* left */}
      <Flex justify='space-between' align='center'>
      <Box>
      <Link to='/'><Text fontSize='18px' fontWeight='bold'>Spread Knowledge</Text></Link>
      </Box>
      {/* Right */}
      <Flex>    
      <Box>
      <HStack>
        {
            isAuth.data.name && <MyMenu data={isAuth.data} />
        }
      <Text><b>{isAuth.data.name}</b></Text>
        </HStack>
      </Box>
      <Button variant='solid' _hover={{bg:"none"}} ref={btnRef}  onClick={onOpen} bg={navbg?"#60fc8a":"a5fabc"}>
        <VStack spacing={1} >
        <Box w="35px"  color="teal" border='2px solid teal' ></Box>
        <Box w="35px"  color="teal" border='2px solid teal' ></Box>
        <Box w="35px"  color="teal" border='2px solid teal' ></Box>
        </VStack>
      </Button>
        </Flex>
      </Flex> 
      <Drawer
        isOpen={isOpen}
        placement='top'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
         {/* header */}
         <Link to='/'><Text fontSize='18px' fontWeight='bold'>Spread Knowledge</Text></Link>
          </DrawerHeader>
          <DrawerBody>
           <SimpleGrid columns={[1,2]} spacing={5} >
           <Button variant="solid" bg={navbg?"#60fc8a":"#a5fabc"} _hover={{bg:"teal",color:'white'}}><Link to='/blogs'>Blogs</Link></Button>
           <Button variant="solid" bg={navbg?"#60fc8a":"#a5fabc"} _hover={{bg:"teal",color:'white'}}><Link to='/create-blog'>Create Blog</Link></Button>
           <Button variant="solid" bg={navbg?"#60fc8a":"#a5fabc"} _hover={{bg:"teal",color:'white'}}><Link to='/signup'>Signup</Link></Button>
           </SimpleGrid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      </Box>
  )
}

export default MobileNav