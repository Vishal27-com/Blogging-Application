import { Avatar, Box, Flex, Img, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'

const Comment = ({author,comment,deleteComment}) => {
  const {isAuth}=useContext(AuthContext);
  console.log(isAuth);
  return (
    
    <Box  p='10px' bg='white' m='5px 0' >
    <Box>
      <Flex justify='space-between'>

      <Flex align='center' gap='5px'>
    <Avatar size='sm' name={author} />  
    <Text fontSize='18px' align='left'><b>
      {author}
    </b></Text>   
      </Flex>
      {
        isAuth.data?.name===author && <Box _hover={{cursor:"pointer"}} onClick={deleteComment}><Img h='30px' src="https://img.icons8.com/parakeet/48/null/trash.png"/></Box>
      }
      
      </Flex>
    <Text align='left'>
      {comment}
      </Text>
    </Box>
      {/* ) */}
    {/* }   */}
    </Box>
  )
}

export default Comment