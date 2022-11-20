import { Box,Button,Flex, Img, Text } from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom"
import Descriptive from './Descriptive'
import Welcome from './Welcome'
const Home = () => {

  return (
    <Box fontFamily='Poppins'>
     <Welcome />
     <Descriptive />
    </Box>
  )
}

export default Home