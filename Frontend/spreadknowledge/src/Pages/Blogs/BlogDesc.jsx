import React from 'react'
import {Box, Center,  Img, Text} from "@chakra-ui/react"
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { deleteComment, getBlogById, getComment } from '../../api'
import Comment from './Comment'
import CommentBox from './CommentBox'
import { commentPost } from '../../api'
import io from "socket.io-client";
const socket = io.connect("https://spreadknowledge.onrender.com/")
const initComment={
   comment:"",
   blog:"",
   iat:new Date().toISOString().slice(0, 10)
}
const BlogDesc = () => {
    const [data,setData]=useState([]);
    const [commentData,setCommentData]=useState([]);
    const params=useParams();
  
    //  To get blog detail 
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

    // To post the comment to backend
    const addComment=async (e)=>{
      if(e.code==='Enter'){
        await commentPost(comment) 
        AllComments();
      }
    }

    // To get the live comment using socket.io from backend
    const AllComments=async ()=>{
      let res=await getComment(params.id);
      socket.emit("sent_by_client",res.data.message);
    }
        socket.on("sent_by_server",(data)=>{
         setCommentData(data);
        })
    
    // To delete the comment by commentor from backend    
    const deleteOneComment=async (id)=>{
        await deleteComment(id);
        AllComments();
    }    
      useEffect(()=>{
        AllComments();
      },[socket])
      return (
    <Box w={["90%","90%","60%"]} m='10px auto' p='10px 0'>
        { 
        data.map(data=>
            <Box  key={data._id} bg='white' p='10px' >
              <Text m='10px 0' fontSize='30px'><b>{data.title}</b></Text>
              <Center>
              <Img src={data.image} alt='' h='400px'  objectFit='cover' />
              </Center>  
              <Text m='10px 0' fontSize='18px' align='left'>{data.content}</Text>
              {
                  data.author && 
                  <Text align='left' fontSize='18px'><b>By {data.author.name?data.author.name:"None"}</b></Text>
                }
              <Text align='left' fontSize='14px'><b>{data.iat}</b></Text>
            </Box>
            )
            }
        <CommentBox changeHandler={changeHandler} addComment={addComment} />
       {
        commentData.map(com=>
          <Comment key={com._id} author={com.author.name} comment={com.comment} deleteComment={()=>deleteOneComment(com._id)} />  
          )
       }
    </Box>
  )
}

export default BlogDesc