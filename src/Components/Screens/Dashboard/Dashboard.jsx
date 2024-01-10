import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Navbar/Navbar';
import TemporaryDrawer from './../Drawer/TemporaryDrawer';
const Dashboard = () => {
  const { email, password,name } = useSelector((state) => state.user);
  console.log(email,password,name)
  return (
    <>
      <Navbar name={name}/>
      <TemporaryDrawer />
    </>
  )
}

export default Dashboard