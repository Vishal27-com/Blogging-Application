import React, { useContext, useState } from 'react'
import {Box, Button, Center, Flex,  Img, Input, InputGroup, InputRightElement, Stack, Text} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link, useNavigate } from 'react-router-dom';
import AuthImage from "../../resources/AuthImage.jpg"
import { login } from '../../api';
import {AuthContext} from "../../Context/AuthContext"
const init={
  email:'',
  password:'',
}
const Login = () => {
  const [formData,setFormData]=useState(init);
  const {authHandler}=useContext(AuthContext);
  const navigate=useNavigate();
  const changeHandler=(e)=>{
   const {name,value}=e.target;
   setFormData({
    ...formData,[name]:value
   })
  }
  const submitHandler=async ()=>{
    let res=await login(formData);
    if(res.data.token && !res.data.error){     
      window.localStorage.setItem("access_token",res.data.token)
      window.localStorage.setItem("refresh_token",res.data.refreshToken)
      authHandler("true",res.data.message);
      alert("Login Successfull")
      navigate("/blogs");
    }
    else {
      alert(res.data.message);
    }
  }  
const [showPass,setShowPass]=useState(false);
  return (
    <Box>
    <Flex justify='center' align='center' h='90vh'>
    <Box  boxShadow='lg' borderRadius='10px' p='10px' bg='#fff'>
    <Box>
    <Flex>
    <Img h='400px' src={AuthImage} alt='Auth image' /> 
    <Box  w='300px'pt='30px'>
    <Text pb='20px' fontSize='20px' fontWeight='bold'>Spread Knowledge</Text>
    <form>
        <Stack spacing={3}>
        <Input type='email' placeholder="Enter Email" onChange={changeHandler} name='email' />
        <InputGroup>
        <Input type={showPass?'text':'password'} placeholder="Enter Password" onChange={changeHandler} name='password' />
        <InputRightElement>
        {
          showPass?<ViewIcon onClick={()=>setShowPass(!showPass)}/>:<ViewOffIcon onClick={()=>setShowPass(!showPass)}/>
        }
        </InputRightElement>
        </InputGroup>
        <Center>
        <Button variant='solid' colorScheme='teal' onClick={submitHandler}>Login</Button>    
        </Center> 
        <Text fontWeight='600' fontSize='14px' color='grey'>Don't have any account? <Link to='/signup'>Signup</Link></Text>
        </Stack>
    </form>
    </Box>
    </Flex>
    </Box>
        </Box>  
          </Flex>
        </Box>
  )
}

export default Login