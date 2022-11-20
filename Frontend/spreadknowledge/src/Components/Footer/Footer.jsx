import {Box, Flex, Img, Text} from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box  borderTop='1px solid grey'>
      <Flex justify='center' p='30px' align='center' gap='20px'>
      <a href='https://www.linkedin.com/in/vishal-gupta-573335237/'><Img h='50px' src="https://img.icons8.com/3d-fluency/94/null/linkedin.png"/></a>  
      <a href='https://twitter.com/VishalG271203'><Img h='50px' src="https://img.icons8.com/3d-fluency/94/null/twitter-circled.png"/></a>
      <a href='https://www.facebook.com/profile.php?id=100049245343818'><Img h='50px' src="https://img.icons8.com/3d-fluency/94/null/facebook-circled.png"/></a>
      </Flex>
      <Flex justify='center' align='center'>
        <Text fontSize='18px' fontWeight='bold'>Made with ❤️ by me.</Text>
      </Flex>
    </Box>
  )
}

export default Footer