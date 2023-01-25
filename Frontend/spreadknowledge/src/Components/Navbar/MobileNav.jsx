import React from "react";
import {
  Avatar,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  SimpleGrid,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
const MobileNav = () => {
  const { isAuth, authHandler } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const navigate = useNavigate();
  const logoutHandler = () => {
    authHandler("false", {});
    window.localStorage.removeItem("access_token");
    window.localStorage.removeItem("refresh_token");
    navigate("/login");
  };
  return (
    <Box display={["block", "block", "none"]}>
      {/* left */}
      <Flex justify="space-between" align="center">
        <Box>
          <Link to="/blogs">
            <Text fontSize="18px" fontWeight="bold">
              Spread Knowledge
            </Text>
          </Link>
        </Box>
        {/* Right */}
        <Flex>
          <Box></Box>
          <HStack>
            {isAuth.data.name && (
              <Avatar
                name={isAuth.data.name}
                cursor="pointer"
                ref={btnRef}
                onClick={onOpen}
              />
            )}
            <Text>
              <b>{isAuth.data.name}</b>
            </Text>
          </HStack>
        </Flex>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            {/* header */}
            <Link to="/">
              <Text fontSize="18px" fontWeight="bold">
                Spread Knowledge
              </Text>
            </Link>
          </DrawerHeader>
          <DrawerBody>
            <SimpleGrid columns={[1, 2]} spacing={5}>
              <Button
                variant="solid"
                bg={"var(--mainbgcolor)"}
                _hover={{ bg: "teal", color: "white" }}
              >
                <Link to="/blogs">Blogs</Link>
              </Button>
              <Button
                variant="solid"
                bg={"var(--mainbgcolor)"}
                _hover={{ bg: "teal", color: "white" }}
              >
                <Link to="/create-blog">Create Blog</Link>
              </Button>
              <Button
                variant="solid"
                bg={"var(--mainbgcolor)"}
                _hover={{ bg: "teal", color: "white" }}
              >
                <Link to="/signup">Signup</Link>
              </Button>
              <Button
                variant="solid"
                bg={"var(--mainbgcolor)"}
                _hover={{ bg: "teal", color: "white" }}
              >
                <Link to="/profile">Profile</Link>
              </Button>
              <Button
                variant="solid"
                bg={"var(--mainbgcolor)"}
                _hover={{ bg: "teal", color: "white" }}
                onClick={logoutHandler}
              >
                Logout
              </Button>
            </SimpleGrid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MobileNav;
