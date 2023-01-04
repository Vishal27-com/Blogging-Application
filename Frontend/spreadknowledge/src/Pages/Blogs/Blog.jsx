import { Box, Button, Center, Flex, Img, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getAllBlogs } from '../../api'
import {Link} from "react-router-dom";
import { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'
const Blog = () => {
  const [blog,setBlog]=useState([]);
  const {isAuth}=useContext(AuthContext);
  const getBlog=async ()=>{
      let res= await getAllBlogs();
      setBlog(res.data.message);
  }
  useEffect(()=>{
    getBlog();
  },[])
  return (
    <Box m='20px auto' w='90%' >
        <SimpleGrid columns={[1,2,3]} gap='30px'>
        {
          blog.map(b=>
            
            <Box key={b._id} m='20px 0'  p='20px' bg='white'  position='relative'>
                {
                  b.author.name===isAuth.data.name?<Link to={`/blog/edit/${b._id}`}><Img h='30px' p='2px'  bg='blackAlpha.300' position='absolute' top='20px' right='20px' src="https://img.icons8.com/glyph-neue/64/null/edit--v1.png"/></Link>:null
                }
              <Center>
              <Img src={b.image}  h='300px' w='100%' objectFit='contain'/>
              </Center>
              <Text m='10px 0' fontSize='20px' align='left' >{b.title}</Text>
              <Text m='10px 0' fontSize='20px' align='left' >{b.content.slice(0,100)}<Link key={b._id} to={`/blog/${b._id}`}><Text color='blue'>Read more</Text></Link></Text>
            </Box>
            
            )
          }
      </SimpleGrid>
    </Box>
  )
}

export default Blog