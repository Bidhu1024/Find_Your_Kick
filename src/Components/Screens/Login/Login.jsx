import React, { useState } from 'react'
import { Box, Stack, Typography, TextField, Button } from '@mui/material'
import logo from "../../Assets/sneakers.png"
import logo1 from "../../Assets/women-pants-jeans-sneakers-wallpaper-preview.jpg"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/Reducers/userSlice';
const Login = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const nav = useNavigate()
  const handleLogin = (e)=>{
    e.preventDefault()
    dispatch(setUser({ email, password, name }));
    nav("/dashboard")
  }
  return (
    <Stack sx={{ width: "100vw", position: "relative", height: "100vh", justifyContent: "center", alignItems: "center", backgroundImage: `url(${logo1})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
      <Box sx={{ borderRadius: "1rem", width: "35rem", height: "35rem", padding: "2rem", bgcolor: "white", boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
        <form autoComplete='off'>
          <Box display="flex" alignItems={"center"} gap=".5rem">

            <img src={logo} alt="" style={{ width: "2.5rem", height: "2.5rem" }} />

            <Typography fontSize={"1.2rem"} color="purple" fontWeight={"600"} fontFamily={"Arial, Helvetica, sans-serif"}>
              Get Your Kicks
            </Typography>
          </Box>
          <Stack sx={{ mt: "1rem" }}>
            <Typography fontWeight={"bold"} fontSize={"1.3rem"}>
              Login
            </Typography>
            <Typography fontSize={"1.1rem"} sx={{ mt: ".3rem" }}>
              Step into style with these killer kicks.
            </Typography>

          </Stack>
          <Stack sx={{ mt: "1rem" }}>
          <Typography fontSize={"1rem"} fontWeight={"600"} sx={{ mt: ".3rem" }}>
              Name
            </Typography>
            <TextField value={name} onChange={(e) => setName(e.target.value.toLowerCase())} size="small" type='text' />
            <Typography fontSize={"1rem"} fontWeight={"600"} sx={{ mt: ".3rem" }}>
              Email Address
            </Typography>
            <TextField value={email} onChange={(e) => setEmail(e.target.value.toLowerCase())} size="small" type='email' />
            <Typography fontSize={"1rem"} fontWeight={"600"} sx={{ mt: ".4rem" }}>
              Password
            </Typography>
            <TextField value={password} onChange={(e) => setPassword(e.target.value.toLowerCase())} size="small" type='password' />
            <Button sx={{ mt: "2.5rem" }} type="submit" onClick={handleLogin} fullWidth variant='contained'>Log In</Button>
            <Typography ontSize={"1rem"} fontWeight={"500"} width={"100%"} sx={{ mt: "1rem" }} textAlign={"center"}>
              Life is too short for boring shoes.
            </Typography>
          </Stack>
        </form>
      </Box>
    </Stack>
  )
}

export default Login
