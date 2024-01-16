import { Badge, Box, Tooltip } from '@mui/material'
import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BlinkingLight from '../Blinker/BlinkingLight';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TemporaryDrawer from './../Drawer/TemporaryDrawer';
const Navbar = ({ name }) => {

  return (
    <Box sx={{ display: "flex", width: "100%", border: "1px solid lightgray", height: "3.5rem", padding: "4px 6px", justifyContent: "space-between", alignItems: "center",position:"sticky" }}>
    <Tooltip title="menu">
     <TemporaryDrawer />
     </Tooltip>
      <Box sx={{ padding: ".3rem" }}>   </Box>
      <Box sx={{ padding: ".3rem" }}>  <BlinkingLight/></Box>
      <Box sx={{ padding: ".3rem",display:'flex', alignItems:"center", justifyContent:"center", gap:"2rem" }}> <Box display={"flex"} gap="10px" alignItems={"center"}>
     Wishlist  <Badge><FavoriteBorderIcon/></Badge></Box> <Box><Badge><AddShoppingCartIcon /></Badge></Box><Box>Profile</Box></Box>

    </Box>
  )
}

export default Navbar