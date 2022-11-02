import { Box, Center, Flex, Img, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getAllBlogs } from '../../api'
import CategoryTable from './CategoryTable'
import {Link} from "react-router-dom";
const Blog = () => {
  const [blog,setBlog]=useState([]);
  const getBlog=async ()=>{
      let res= await getAllBlogs();
      setBlog(res.data.message);
      console.log(res.data.message);
  }
  useEffect(()=>{
    getBlog();
  },[])
  return (
    <Box m='20px' >
      <Flex>
      <CategoryTable />
      <Box width='50%' m='auto' >
        {/* <Center> */}

        {/* <SimpleGrid columns={1}> */}
        {
          blog.map(b=>
            <Link key={b._id} to={`/blog/${b._id}`}>
            <Box m='20px 0'  p='20px' bg='white' borderRadius='10px'>
              <Center>
              <Img src={b.image} alt='' h='200px'/>
              </Center>
              <Text align='left'><b>{b.title}</b></Text>
              <Flex justify='space-between'>
              {
                b.author && 
              <Text>Author-<b>{b.author.name?b.author.name:"None"}</b></Text>
            }
              <Text fontSize='12px'>{b.iat}</Text>
              </Flex>
            </Box>
            </Link>
            )
          }
          {/* </SimpleGrid> */}
              {/* </Center> */}
      </Box>
      </Flex>
    </Box>
  )
}

export default Blog