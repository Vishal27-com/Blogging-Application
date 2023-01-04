import { Box, Input,Button, Img,  Stack, Center } from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from "./CreateBlog.module.css";
import { BlogPost } from '../../api';
import { categories } from '../../Components/Categories/categories';
import { useNavigate } from 'react-router-dom';
const initData={
  title:'',
  image:'',
  content:'',
  categories:'',
  iat:new Date().toISOString().slice(0, 10)
}
const CreateBlog = () => {
  const [toggel,setToggel]=useState(true);
  const navigate=useNavigate()
  const [post,setPost]=useState(initData);
  
  const changeHandler=(e)=>{
    const {name,value}=e.target;
    setPost({...post,[name]:value});
  }
  const submitHandler=async ()=>{
    let res=await BlogPost(post);
    if(!res.data.error){
      alert("Blog Posted Successfully");
      navigate("/blogs");
    }
    else {
      alert(res.data.message);
    }
  }

  return (
    <Box  p='10px' m='10px auto' bg='white' w={["90%","90%","50%"]} >
    <form>
      <Stack>

      <Center >
      {
        post.image &&
        < Img src={post.image} alt='upload Image' />
      }
      </Center>
     <Input type='url' name='image' value={post.image} placeholder='Post Image Url' onChange={changeHandler}  />
      <Stack direction={["column","column","row"]} spacing={10}>
      {
        toggel?
        <select name='categories' onChange={changeHandler} className={styles.cate}>
        {
          categories.map(c=>
            <option key={c} value={c}>{c}</option>
            )
          }
      </select>:
      <Input placeholder='Write category here' onChange={changeHandler} name='categories' required />
    } 
      <Button variant='solid' bg='white' onClick={()=>setToggel(!toggel)}>{toggel?'Other':'Select'}</Button>
    </Stack>
      <Box m='20px auto'   h='50px'>
      <Input className={styles.textarea} placeholder='Write your Title here' name='title' onChange={changeHandler} required />
      </Box>
      <Box m='20px auto'   h='200px'>
      <textarea className={styles.textarea} placeholder='Write your content here' name='content' onChange={changeHandler} required />
      </Box>
      <Button variant='solid' colorScheme='teal' onClick={submitHandler}>Post</Button>
    </Stack>
    </form>
    </Box>
  )
}

export default CreateBlog