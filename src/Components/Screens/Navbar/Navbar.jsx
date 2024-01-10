import { Badge, Box, Typography } from '@mui/material'
import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BlinkingLight from '../Blinker/BlinkingLight';
const Navbar = ({ name }) => {

  return (
    <Box sx={{ display: "flex", width: "100%", border: "1px solid red", height: "3.5rem", padding: "4px 6px", bgcolor: "lightblue", justifyContent: "space-between", alignItems: "center" }}>
      <Box sx={{ padding: ".3rem" }}>   </Box>
      <Box sx={{ padding: ".3rem" }}>  <BlinkingLight/></Box>
      <Box sx={{ padding: ".3rem",display:'flex', alignItems:"center", justifyContent:"center", gap:"2rem" }}> <Box><Badge><AddShoppingCartIcon /></Badge></Box><Box>Profile</Box></Box>

    </Box>
  )
}

export default Navbar