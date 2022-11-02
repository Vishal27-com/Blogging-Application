import { Box, Button, Flex, Input, Stack, Heading, Center, Text, InputGroup, InputRightElement, Img } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import {ViewIcon, ViewOffIcon} from '@chakra-ui/icons';
import AuthImage from "../../resources/AuthImage.jpg"
import { Link } from 'react-router-dom';
import { signup } from '../../api';
import ExternalLogin from './ExternalLogin';
const init={
  name:'',
  email:'',
  password:'',
}
const Signup = () => {
  const [formData,setFormData]=useState(init);
  const changeHandler=(e)=>{
   const {name,value}=e.target;
   setFormData({
    ...formData,[name]:value
   })
  }
  const submitHandler=async()=>{
    console.log(formData);
    let res=await signup(formData);
    console.log(res);
   
  }  
const [showPass,setShowPass]=useState(false);
  return (
    <Box >
    <Flex justify='center' align='center' h='98vh'>
    <Box  boxShadow='lg' borderRadius='10px' p='10px' bg='white'>
    <Box>
    <Flex>
   <Img h='400px' src={AuthImage} alt='Auth image' /> 
   <Box  w='300px'pt='30px'>
    <Text pb='20px' fontSize='20px' fontWeight='bold'>Spread Knowledge</Text>
    <form>
        <Stack spacing={2}>
        <Input type='text' placeholder="Enter Your Name" onChange={changeHandler} name='name' />
        <Input type='email' placeholder="Enter Email" onChange={changeHandler} name='email'  />
        <InputGroup>
        <Input type={showPass?'text':'password'} placeholder="Enter Password" name='password' onChange={changeHandler} />
        <InputRightElement>
        {
          showPass?<ViewIcon onClick={()=>setShowPass(!showPass)}/>:<ViewOffIcon onClick={()=>setShowPass(!showPass)}/>
        }
        </InputRightElement>
        </InputGroup>
        <Center>
        <Button variant='solid' colorScheme='teal'onClick={submitHandler}>Signup</Button>    
        </Center> 
        <Text fontWeight='600' fontSize='14px' color='grey'>or</Text>
        <Text fontWeight='600' fontSize='14px' color='grey'>Continue With</Text>
        <ExternalLogin />
        <Text fontWeight='600' fontSize='14px' color='grey' >Already have an account?<Link to='/login'>Login</Link></Text>
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

export default Signup