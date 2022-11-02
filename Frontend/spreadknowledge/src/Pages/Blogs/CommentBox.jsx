import {  Input } from '@chakra-ui/react'
import React from 'react'
const CommentBox = ({changeHandler,addComment}) => {
 
  return (
    <Input type='text' name='comment' onChange={changeHandler} onKeyDown={addComment} placeholder='Comment here...' bg='white' m='10px 0' borderRadius='10px'/>
  )
}

export default CommentBox