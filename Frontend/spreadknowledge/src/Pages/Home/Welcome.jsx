import { Box, Button, Flex, Img, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Image1 from "../../resources/Image1.png"

const Welcome = () => {
  return (
    <Box borderBottom='1px solid grey'>
    <Box  h='98vh' w='90%' m='auto' >
    <Flex h='94vh'>
      <Box w='100%' >
        <Flex justify='center' align='center' direction='column' h='94vh'>
        <Text mb='20px'  fontSize='30px' fontWeight='bold'>Welcome To <span style={{color:"tomato"}}>Spread Knowledge</span></Text>
        <Text align="left" fontSize="20px" mt="15px" fontWeight="bold">
                When you are passionate about something, you want to share it
                with the world. Whether it’s a passion for fishing, photography,
                or marketing, blogging is an excellent way to share that
                passion.
              </Text>
        <Link to='/login'><Button mt='20px' variant='solid' bg='tomato' color='#fff' p='0 30px' fontSize='20px' _hover={{background:'tomato'}}>Get Started</Button></Link>
        </Flex>
      </Box>
      <Box w='100%' h='94vh'>
      <Flex justify='center' align='center' direction='column' h='94vh'>
        <Img src={Image1}  p='10px'  borderRadius='10px' boxShadow='5px 20px 20px grey' />
        </Flex>
      </Box>
    </Flex>
    </Box>
  </Box>
  )
}

export default Welcome