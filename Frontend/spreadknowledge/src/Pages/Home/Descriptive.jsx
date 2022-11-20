import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Image2 from "../../resources/Image2.png";
const Descriptive = () => {
  return (
    <Box>
      <Box h="98vh" w="90%" m="auto">
        <Flex h="94vh" gap="20px">
          {/* left */}
          <Box w="100%" h="94vh">
            <Flex justify="center" align="center" direction="column" h="94vh">
              <Img
                src={Image2}
                p="10px"
                borderRadius="10px"
                boxShadow="5px 20px 20px grey"
              />
            </Flex>
          </Box>
          {/* right */}
          <Box w="100%">
            <Flex justify="center" align="center" direction="column" h="94vh">
            <Text m='10px 0'  fontSize='20px' fontWeight='bold'>A beautiful blogging website.</Text>
        <Text m='10px 0'  fontSize='20px' fontWeight='bold'>You can write, update and delete your blog.</Text>
        <Text m='10px 0'  fontSize='20px' fontWeight='bold'>You can read and comments on others blog.</Text>
              <Link to="/login">
                <Button
                  mt="30px"
                  variant="solid"
                  bg="tomato"
                  color="#fff"
                  p="0 30px"
                  fontSize="20px"
                  _hover={{ background: "tomato" }}
                >
                  Get Started
                </Button>
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Descriptive;
