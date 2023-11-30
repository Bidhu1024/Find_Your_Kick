import { Box,Typography } from '@mui/material'
import React from 'react'

const Navbar = ({name}) => {
    const names = localStorage.getItem('name')
    console.log(names)
  return (
    <Box sx={{display:"flex",width:"100vw",border:"1px solid red", height:"4rem",padding:"4px 6px" }}>
<Typography>Welcome {name} to Get Your Kick</Typography>
    </Box>
  )
}

export default Navbar