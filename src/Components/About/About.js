import { Box, Slide, Typography, Zoom } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./About.css"

const About = () => {
    const [checked1,setChecked1]= useState(false);
    const [checked2,setChecked2]= useState(false);
    const [scrolled,setScrolled]= useState(0);
    
    window.addEventListener("scroll",()=>{
        setScrolled(document.documentElement.scrollTop);
    })

    if(scrolled>=56){
        setTimeout(()=>{
            setChecked1(true)
        },600) 
        setTimeout(()=>{
            setChecked2(true)
        },800) 
    }

  return (
    <Box id="aboutDiv" className='aboutContainer'  sx={{width:"80%",margin:"10% auto",padding:"0% 10px",display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"25px"}}>
        <Box sx={{borderTop:"2px solid rgb(35,53,84)",position:"relative"}} >
            <Zoom in={checked1}>
                <Typography className='aboutHeading' variant='h4' sx={{color:"rgb(191,201,232)",backgroundColor:"rgb(11,24,47)",position:"absolute",top:"-25px",padding:"0% 5% 0% 0%"}} >About Me</Typography>
            </Zoom>
            <Zoom  in={checked2}>

                <Typography className='aboutText' sx={{marginTop:"8%",color:"rgb(136,146,176)"}}>
                A passionate <span style={{color:"white"}}>MERN stack</span> developer with a knack for building robust and scalable web applications. 
                With a strong foundation in Java, JavaScript, HTML, CSS, and React, I thrive on turning ideas into 
                interactive and impactful digital experiences. On my portfolio, you'll find a collection of projects 
                showcasing my skills in full-stack development, from front-end design and user experience optimization to 
                back-end logic and database management using MongoDB, Express.js, and Node.js.
                </Typography>
            </Zoom>
        </Box>
        <Zoom  in={checked2}>

        <Box className='imageContainer' sx={{display:"grid",justifyContent:"right"}}>
            
                
            <img className='profileImage' style={{display:"block",margin:"auto",borderRadius:"5px"}} width={"70%"} src='https://avatars.githubusercontent.com/u/111170924?s=400&u=b4c5ff4c94440a2f43fb4dcac8fa28037caa042d&v=4'/>

            
        </Box>
        </Zoom>
        <div id="About"></div>
    </Box>
    // 151951
  )
}

export default About