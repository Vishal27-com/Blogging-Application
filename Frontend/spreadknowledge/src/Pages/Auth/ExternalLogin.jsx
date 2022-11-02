import { Flex, Img } from '@chakra-ui/react'
import React from 'react'

const ExternalLogin = () => {
    const googleLoginHandler=async ()=>{
        window.open("http://localhost:8000/auth/google","_self");
      }
      const githubLoginHandler=async ()=>{
        window.open("https://github.com/login/oauth/authorize?client_id=1f4d3a41b94b6f03a351","_self");
    }
  return (
    <Flex justify='center' align='center' gap='5px' h='60px'>
    <Img w='45px' src="https://img.icons8.com/3d-fluency/100/000000/github.png" onClick={githubLoginHandler} />
    <Img w='45px' src="https://img.icons8.com/3d-fluency/100/000000/google-logo.png" onClick={googleLoginHandler}/>
    <Img w='45px' src="https://img.icons8.com/3d-fluency/100/000000/facebook-circled.png"/> 
    </Flex>
  )
}

export default ExternalLogin