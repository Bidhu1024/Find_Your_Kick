import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

import { Box, Button, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import One from "../../CarouselAssets/One.jpg"
import Two from "../../CarouselAssets/Two.jpg"
import Three from "../../CarouselAssets/Three.jpg"
import Four from "../../CarouselAssets/Four.jpg"
import Five from "../../CarouselAssets/Five.jpg"
import Trending1 from "../../Assets/Trending1.jpg"
import Trending2 from "../../Assets/Trending2.jpg"
import Footbar from '../Pages/Footbar/Footbar';
const Dashboard = () => {
  const { email, password, name } = useSelector((state) => state.user);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  console.log(email, password, name)
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <>
      <Box position={"sticky"}>
        <Navbar name={name} />
      </Box>
      <Box display={"flex"} width={"100%"} justifyContent={"center"} gap="2.5rem">
        <Typography fontSize={"1.2rem"} fontWeight={"500"} color={"GrayText"}>MEN</Typography>

        <Typography fontSize={"1.2rem"} fontWeight={"500"} color={"GrayText"}>WOMEN</Typography>
        <Typography fontSize={"1.2rem"} fontWeight={"500"} color={"GrayText"}>KIDS</Typography>
        <Typography fontSize={"1.2rem"} fontWeight={"500"} color={"GrayText"}>CASUALS</Typography>
      </Box>
      <div style={{ marginTop: "1rem" }}>
        <ReactSimplyCarousel

          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={1}
          itemsToScroll={1}
          forwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: 'center',
              background: 'black',
              border: 'none',
              borderRadius: '50%',
              color: 'white',
              cursor: 'pointer',
              fontSize: '20px',
              height: 30,
              lineHeight: 1,
              textAlign: 'center',
              width: 30,
            },
            children: <span>{`>>`}</span>,
          }}
          backwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: 'center',
              background: 'black',
              border: 'none',
              borderRadius: '50%',
              color: 'white',
              cursor: 'pointer',
              fontSize: '20px',
              height: 30,
              lineHeight: 1,
              textAlign: 'center',
              width: 30,
            },
            children: <span>{`<<`}</span>,
          }}
          responsiveProps={[
            {
              itemsToShow: 1,
              itemsToScroll: 1,
              minWidth: 768,
            },
          ]}
          speed={400}
          easing="linear"
        >
          <div style={{ width: 850, height: 450, background: 'white' }}>
            <img src={One} alt="" />
          </div>
          <div style={{ width: 850, height: 450, background: '#065535' }}>
            <img src={Two} alt="" />
          </div>
          <div style={{ width: 850, height: 450, background: '#000000' }}>
            <img src={Three} alt="" />
          </div>
          <div style={{ width: 850, height: 450, background: '#133337' }}>
            <img src={Four} alt="" />
          </div>
          <div style={{ width: 850, height: 450, background: '#ffc0cb' }}>
            <img src={Five} alt="" />
          </div>

        </ReactSimplyCarousel>
      </div>
      <Stack alignItems={"center"} sx={{ mt: "2rem" }} padding={"2rem"}>
        <Typography fontSize={"5rem"} fontWeight={"bold"} >THIS SEASON'S FRESH FITS</Typography>
        <Typography textAlign={"center"} fontSize={"2rem"} fontWeight={"500"}>Step into the new year with a wardrobe refresh that brings out your best personal style. Shop our Lunar New Year collections</Typography>
        <Button variant='contained' sx={{ color: "white", borderRadius: "14px", mt: ".5rem", bgcolor: "black", ":hover": { bgcolor: "black", color: "white", transform: "scale(1.2)" } }}>{capitalizeFirstLetter("shop")}</Button>
      </Stack>
      <Stack padding={"2rem"} width={"100%"} >
        <Typography fontWeight={"bold"} fontSize={"2.2rem"} sx={{ textDecoration: "underline" }}>Trending Zone</Typography>
        <Box display="flex" gap="1rem" justifyContent={"center"}>
          <Box position={"relative"} width="50%" height="25rem"><img height={400} width={592} src={Trending1} alt="" /><Box padding="10px" position={"absolute"} top="300px"><Typography fontSize={"1.5rem"} fontWeight={"500"}>Low Dunk Pandas</Typography> <Button sx={{mt:".5rem"}} variant='contained'>Buy now</Button></Box> </Box>
          <Box position={"relative"} width="50%" height="25rem"><img height={400} width={592} src={Trending2} alt="" /><Box  padding="10px" position={"absolute"} top="300px"><Typography fontSize={"1.5rem"} fontWeight={"500"}>YEEZY 700 V3 Azael</Typography> <Button sx={{mt:".5rem"}} variant='contained'>Buy now</Button></Box></Box>
        </Box>
        
      </Stack>
      <Footbar />
    </>
  )
}

export default Dashboard