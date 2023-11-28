import React from 'react'
import { useSelector } from 'react-redux'
const Dashboard = () => {
  const { email, password,name } = useSelector((state) => state.user);
  console.log(email,password,name)
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard