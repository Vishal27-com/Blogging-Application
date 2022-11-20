import { Box, Flex, Img, Stack, Text } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext';

const Profile = () => {
    const {isAuth}=useContext(AuthContext);

  return (
    <Box>
      <Box >
      <Flex justify='center' align='center' h='90vh'>
    <Box  boxShadow='lg' borderRadius='10px' p='10px' bg='#fff'>
    <Box>
    <Flex justify='center' align='center' gap='20px'>
    <Img h='100px' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw4IDQ0ODQ0NDQ0NDQ0KCAgNDg8IDQ0NFREWFhURExUYHSggGBolGxUTITEhJSk3Li4uFx8zODMtNygtLisBCgoKDg0OFRAPFSsdFh0rLSsrKystNy0rKys3Ky0tKy03LTc3KysrKysrKysrKysrLSs3KysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQUDBAYCB//EAC8QAQABAgQEBQMDBQAAAAAAAAABAgMEBREhEjFBURMiMmFxUoGhI2JyFTOCkcH/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAgMBBP/EAB0RAQEBAQEAAwEBAAAAAAAAAAABAhExA0FRIRL/2gAMAwEAAhEDEQA/APogD0sgAAAAAAAAAAAATFMz0lnowV2vlRPy511rjcnLrlMaztDTJegA64AAAAAAAAAAAAAAAAAAAgB6ppmraImZ7Ru2cHgasR7U/Uu8Ng6LEbRv9U80a1IqRUYfLK7m8+WPy37OVW6PV5vnZYDO7tVIxW7FFvlTEflk00SJdVGdXKo0iNqe/dUOqvWab0aVR8eyixuAqsTrG9Pfs1xqeIsaYDRIAAAAAAAAAAAAAAAAACFhl2A8aeKr09u7Uw9vxa6ae8umt0RRERHKI0hG9cVImimKY0iNIjlD0DFYAAAAiqmKo0nl1SApMywHh+ejl1jsrXV1U8UTE9XNYyz4NyqnprtLXGu/xFjCA0SAAAAAAAAAAAAAAISA3cop1ux7augUWSx55XrHfq8gCFAAAAAACjzqnSuJ7wvFNnvqo+JXj1zXirAbMwAAAAAAAAAAAAAAAFhks/qL1QZPP6sfdfsd+rz4AIUAAAAAAKbPfVR8SuVJnfrp+JXj1zXitAbMwAAAAAAAAAAAAABCQG7lH92PiXQNDKbdPhxVpHFrPm6t9hu9rSeACXQAAAAABRZzOtyPZetLM7dM25mYjXpPVWbyuXxz4hLdmAAAAAAAAAAAAAAAAu8lr1omO0rJT5FVpNcd9NIXDDXrSeACXQAAAAABoZzVpa+8N9U55X6Y+6s+uXxTpBuzAAAAAAAAAAAAAAAAZLF2bVUTG27prNfHTE941cq6DKrviWo/b5WfyT7VlugMlgAAAAAIqnSJn2cxib03qpmZ67L7Mbnh2qp68oc41+OfaNADRIAAAAAAAAAAAAAAAAscmv8ABXNMztPL5VyaappmJjaY5S5Z2Ox1gw4O54tumfbSWZ52gAAAADHiK+CiqesRMwCqzq/xTFEdN5lVpuVzXMzPOd5Q9EnIztAHXAAAAAAAAAAAAAAAAAAHSZdTw2qWyxYaOGin+MMrz31qAOAAAw4uNbdf8ZZni9GtNUd4kHKj1cjSqY93l6WQAAAAAAAAAAAAAAAAACFplGGpuxNVUa6TpCsdBlVrw7Ufu8yN3kVG5Eaf8SDFYAAAASAKfN8NTREVUxpMzPEqXSZjb8S1VHXTWHOTs2xexGgQlaQAAAAAAAAAAAATTTNXKNfZuYfLK7m8+WOuu0uW8d40mexg673KmdOs8tFzh8tt2uccU95bkRpyZ35Px2ZV2GyqmjeueKfbaFjTGm0cuiRFtqwBwAAAAAARMatDE5XTc1mnyz+FgOy8HNYjBV2ecbdKmu6yY1amIy+3d6cM/VC58n6m5c6lvYjLK7e9Pmj8tKqiadpiYntOzSWVPEAOuAAAACHu3bm5OlMTM/7W2EyqI0m5v+1y2R2RV2rFV2dKaZlY4fKNdJrn5p5StbdumiNIiIh7ZXdVMsFnC0Wo2pj5neWcEKAAAAAAAAAAAAAAAAGG7hqLvqpj56swCoxGUdaJ/wAZ3Vt3D12p0qpmPy6l5roiuNJiJXN1Ny5QXOKyqKt6Np+noqbtqq1OlUaNJqVPGNKEqHSYTC02I2jfrLZB5mgAAAAAAAAAAAAAAAAAAAAAAAAwYrDU36dJjfpV1ZwFJ/SK/qgXYr/Vc5EQJEugAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k="/>
    <Box  pt='30px'>
    <Text align='left' pb='20px' fontSize='20px' fontWeight='bold'>Profile</Text>
        <Stack spacing={3}>
     <Text align='left'><b>Name:</b>{isAuth.data.name}</Text>
     <Text align='left'><b>Email:</b>{isAuth.data.email}</Text>
        </Stack>
    </Box>
    </Flex>
    </Box>
        </Box>  
          </Flex>

      </Box>
    </Box>
  )
}

export default Profile