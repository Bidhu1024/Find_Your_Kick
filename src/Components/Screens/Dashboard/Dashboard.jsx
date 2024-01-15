import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Navbar/Navbar';
import TemporaryDrawer from './../Drawer/TemporaryDrawer';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
const Dashboard = () => {
  const { email, password,name } = useSelector((state) => state.user);

  console.log(email,password,name)
  return (
    <>
      <Navbar name={name}/>
     
      <Box display={"flex"} width={"100%"} justifyContent={"center"} gap="2.5rem">
      <Typography fontSize={"1.2rem"} fontWeight={"500"} color={"GrayText"}>MEN</Typography>

        <Typography fontSize={"1.2rem"} fontWeight={"500"} color={"GrayText"}>WOMEN</Typography>
        <Typography fontSize={"1.2rem"} fontWeight={"500"} color={"GrayText"}>KIDS</Typography>
        <Typography fontSize={"1.2rem"} fontWeight={"500"} color={"GrayText"}>CASUALS</Typography>
      </Box>
    </>
  )
}

export default Dashboard