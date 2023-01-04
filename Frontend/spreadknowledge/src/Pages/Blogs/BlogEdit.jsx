import { Box, Input,Button, Img, Flex, Stack, Center } from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from "../Create Blog/CreateBlog.module.css";
import { useEffect } from 'react';
import { BlogDelete,  BlogUpdate, getBlogById } from '../../api';
import { categories } from '../../Components/Categories/categories';
import { useNavigate, useParams } from 'react-router-dom';
const initData={
  title:'',
  image:'',
  content:'',
  categories:'',
  iat:new Date().toISOString().slice(0, 10)
}

const BlogEdit = () => {
    const navigate=useNavigate()
    const params=useParams();
    const [toggel,setToggel]=useState(true);
    const [post,setPost]=useState(initData);
 
    const changeHandler=(e)=>{
      const {name,value}=e.target;
      setPost({...post,[name]:value});
    }
    const updateHandler=async ()=>{  
      let res=await BlogUpdate(params.id,post);
      if(!res.data.error){
        alert("Blog Edited Successfully");
        navigate("/blogs");
      }
      else {
        alert(res.data.message);
      }
    }
    const deleteHandler=async ()=>{
      let res=await BlogDelete(params.id);
      if(!res.data.error){
        alert("Blog Deleted Successfully");
        navigate("/blogs");
      }
    }

    const getData=async ()=>{
        let res=await getBlogById(params.id);
        setPost(res.data.message[0]);
      }
      useEffect(()=>{
        getData();
      },[])
  return (
    <Box w='60%' p='10px' m='10px auto'  borderRadius='10px' bg='white'>
    <form>
    <Stack>
<Center >
{
  post.image &&
  < Img src={post.image} alt='upload Image' />
}
</Center>
<Input type='url' name='image' value={post.image} placeholder='Post Image Url' onChange={changeHandler}  />
      <Stack direction='row' spacing={5}>

      {
        toggel?
        <select name='categories' onChange={changeHandler} value={post.categories}  className={styles.cate}>
        {
          categories.map(c=>
            <option key={c} value={c}>{c}</option>
            )
          }
      </select>:
      <Input placeholder='Write category here' onChange={changeHandler} name='categories'  />
    } 
      <Button variant='solid' bg='white' onClick={()=>setToggel(!toggel)}>{toggel?'Other':'Select'}</Button>
    </Stack>
      <Box m='20px auto'  borderRadius='10px' h='50px'>
      <Input className={styles.textarea} placeholder='Write your Title here' name='title' value={post.title} onChange={changeHandler}   />
      </Box>
      <Box m='20px auto'  borderRadius='10px' h='200px'>
      <textarea className={styles.textarea} placeholder='Write your content here' value={post.content} name='content' onChange={changeHandler}  />
      </Box>
      <Flex justify='center' gap='10px'>
      <Button variant='solid' colorScheme='teal' onClick={updateHandler}>Update</Button>
      <Button variant='solid' colorScheme='red' onClick={deleteHandler}>Delete</Button>
      </Flex>
    </Stack>
    </form>
    </Box>
  )
}

export default BlogEdit