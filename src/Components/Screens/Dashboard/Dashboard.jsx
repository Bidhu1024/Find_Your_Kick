import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Navbar/Navbar';
const Dashboard = () => {
  const { email, password,name } = useSelector((state) => state.user);
  console.log(email,password,name)
  return (
    <>
      <Navbar name={name}/>
    </>
  )
}

export default Dashboard