import { Avatar, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react'
import { Link,  useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext';
const MyMenu = ({data}) => {
  const {isAuth,authHandler}=useContext(AuthContext);
  const navigate=useNavigate();
  const logoutHandler=()=>{
    authHandler("false",{});
    window.localStorage.removeItem("access_token")
    window.localStorage.removeItem("refresh_token")
    navigate("/login")
  }
  return (
    <Menu>
  <MenuButton as={Button} borderRadius='100%' p='0'>
    <Avatar name={data.name} bg='pink' color='black' />
  </MenuButton>
  <MenuList color='black'>
   <Link to='/profile'><MenuItem>Profile</MenuItem></Link>
    <MenuItem onClick={logoutHandler}>Logout</MenuItem>
  </MenuList>
</Menu>
  )
}

export default MyMenu