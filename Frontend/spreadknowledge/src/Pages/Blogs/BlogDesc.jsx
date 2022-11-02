import React from 'react'
import {Box, Center,  Img, Text} from "@chakra-ui/react"
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { getBlogById, getComment } from '../../api'
import Comment from './Comment'
import CommentBox from './CommentBox'
import { commentPost } from '../../api'
import io from "socket.io-client";
const socket = io.connect("http://localhost:8000")
const initComment={
   comment:"",
   blog:"",
   iat:new Date().toISOString().slice(0, 10)
}
const BlogDesc = () => {
    const [data,setData]=useState([]);
    const [commentData,setCommentData]=useState([]);
    const params=useParams();
    const getData=async ()=>{
      let res=await getBlogById(params.id);
      setData(res.data.message);
    }
    useEffect(()=>{
      getData();
    },[])
    const [comment,setComment]=useState(initComment);
    const changeHandler=(e)=>{
         const {name,value}=e.target;
         setComment({
          ...comment,[name]:value,blog:params.id
         })
    }
    const addComment=async (e)=>{
      if(e.code==='Enter'){
        await commentPost(comment)
        AllComments();
      }
    }
    const AllComments=async ()=>{
      let res=await getComment(params.id);
      socket.emit("sent_by_client",res.data.message);
    }
        socket.on("sent_by_server",(data)=>{
         setCommentData(data);
        })
        console.log("io",commentData);
      useEffect(()=>{
        AllComments();
      },[socket])
      return (
    <Box w='60%' m='10px auto' p='10px 0'>
        { 
        data.map(data=>
            <Box  key={data._id} bg='white' p='10px' borderRadius='10px' boxShadow='2xl'>
              <Center>
              <Img src={data.image} alt='' h='200px'/>
              </Center>  
              <Text align='left'><b>{data.title}</b></Text>
              <Text align='left'>{data.content}</Text>
              {
                  data.author && 
                  <Text align='left'><b>By {data.author.name?data.author.name:"None"}</b></Text>
                }
              <Text align='left' fontSize='14px'><b>{data.iat}</b></Text>
            </Box>
            )
            }
        <CommentBox changeHandler={changeHandler} addComment={addComment} />
       {
        commentData.map(com=>
          <Comment key={com._id} author={com.author.name} comment={com.comment} />  
          )
       }
    </Box>
  )
}

export default BlogDesc