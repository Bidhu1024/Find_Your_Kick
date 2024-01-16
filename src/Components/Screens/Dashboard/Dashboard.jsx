import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

import { Box, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import One from "../../CarouselAssets/One.jpg"
import Two from "../../CarouselAssets/Two.jpg"
import Three from "../../CarouselAssets/Three.jpg"
import Four from "../../CarouselAssets/Four.jpg"
import Five from "../../CarouselAssets/Five.jpg"
const Dashboard = () => {
  const { email, password, name } = useSelector((state) => state.user);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  console.log(email, password, name)
  return (
    <>
      <Navbar name={name} />

      <Box display={"flex"} width={"100%"} justifyContent={"center"} gap="2.5rem">
        <Typography fontSize={"1.2rem"} fontWeight={"500"} color={"GrayText"}>MEN</Typography>

        <Typography fontSize={"1.2rem"} fontWeight={"500"} color={"GrayText"}>WOMEN</Typography>
        <Typography fontSize={"1.2rem"} fontWeight={"500"} color={"GrayText"}>KIDS</Typography>
        <Typography fontSize={"1.2rem"} fontWeight={"500"} color={"GrayText"}>CASUALS</Typography>
      </Box>
      <div style={{marginTop:"1rem"}}>
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
        <div style={{  width: 850, height: 450, background: '#065535' }}>
        <img src={Two} alt="" /> 
        </div>
        <div style={{  width: 850, height: 450, background: '#000000' }}>
        <img src={Three} alt="" /> 
        </div>
        <div style={{  width: 850, height: 450, background: '#133337' }}>
        <img src={Four} alt="" /> 
        </div>
        <div style={{  width: 850, height: 450, background: '#ffc0cb' }}>
        <img src={Five} alt="" /> 
        </div>
    
      </ReactSimplyCarousel>
    </div>
    
    </>
  )
}

export default Dashboard