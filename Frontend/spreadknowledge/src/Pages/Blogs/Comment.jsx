import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Comment = ({author,comment}) => {
  return (
    
    <Box border='1px solid black' p='10px' bg='white' m='5px 0' borderRadius='10px'>
    <Box>
    <Text align='left'><b>
      {author}
    </b></Text>   
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