import { Box, Input,Button, Img, Flex, Stack, Center } from '@chakra-ui/react'
import React, { useState } from 'react'
import styles from "./CreateBlog.module.css";
import {AddIcon} from "@chakra-ui/icons"
import { useEffect } from 'react';
import { BlogPost, uploadFile } from '../../api';
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
  const defaultImage=`https://www.lifewire.com/thmb/blKERZhp27lzE_9SjqlnovU0v-s=/1768x1326/smart/filters:no_upscale()/cloud-upload-a30f385a928e44e199a62210d578375a.jpg`
  const [url,setUrl]=useState(defaultImage);
  const [post,setPost]=useState(initData);
  const [file,setFile]=useState("");
  const getImage=async ()=>{
    if(file){
      const data=new FormData();
      data.append("name",file.name);
      data.append("file",file);
      const res= await uploadFile(data);
      post.image=res.data.message;
      setUrl(res.data.message);
    }
  }
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
  useEffect(()=>{
   getImage();
  },[file])

  return (
    <Box  p='10px' m='10px auto' borderRadius='10px' bg='white' w={["90%","90%","50%"]} >
    <form>
      <Box m='20px auto' h='200px' position='relative' >
        <Center>
       <Img src={url} alt='upload Image'  h='200px' objectFit="cover" borderRadius='10px' />
        </Center>
       <Box  position='absolute' bottom='5px' right='10px' bg='teal' p='5px 10px' borderRadius='100%'>
       <label htmlFor='fileInput'>
        <AddIcon />
       </label> 
       <input id='fileInput' className={styles.fileInput} type='file' onChange={(e)=>setFile(e.target.files[0])} required/>
       </Box>
      </Box>
      <Stack direction={["column","column","row"]} spacing={5}>
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
      <Box m='20px auto'  borderRadius='10px' h='50px'>
      <Input className={styles.textarea} placeholder='Write your Title here' name='title' onChange={changeHandler} required />
      </Box>
      <Box m='20px auto'  borderRadius='10px' h='200px'>
      <textarea className={styles.textarea} placeholder='Write your content here' name='content' onChange={changeHandler} required />
      </Box>
      <Button variant='solid' colorScheme='teal' onClick={submitHandler}>Post</Button>
    </form>
    </Box>
  )
}

export default CreateBlog