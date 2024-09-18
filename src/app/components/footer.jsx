"use client"
import { Box } from "@mui/material"
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import React from 'react';

import Image from "next/image";
import Typography from "@mui/material/Typography";
import AssignmentReturnedOutlinedIcon from '@mui/icons-material/AssignmentReturnedOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import Me from './img/me.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import Link from "next/link";
import './../globals.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#242c39',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'start',
    color: theme.palette.text.secondary,
    boxShadow: 'none', // {{ edit_1 }} Remove box shadow
    ...theme.applyStyles('dark', {
        backgroundColor: '#242c39',
    }),
}));

export default function footer() {
    return (
        <>
            <Box sx={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'start', alignItems: 'start', backgroundColor: '#242c39', marginTop: '10%', color: 'white',direction:'rtl' ,borderTop:'10px solid #60e5bd' ,paddingRight: '10%', paddingLeft: '12%'}}>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%',  marginLeft: '5%', marginTop:'5%',direction:'rtl' }}> {/* Changed to column */}
              
            

                    {/* New Box for Return Policy and Warranty */}
                   

                    <Stack
                          direction={{ xs: 'column', sm: 'row' }}
                        spacing={{ xs: 3, sm: 2, md: 4 ,lg:10}}
                        sx={{direction:'rtl',}}
                    >
                        <Item><a href="#link1" style={{ color: 'white', textDecoration: 'none',direction:'rtl'}}>
                        

                            <p className="p-hover"  sx={{ textAlign: 'right', direction: 'rtl'}}>ارتباط با ما</p>
                            <p className="p-hover"  sx={{ textAlign: 'right', direction: 'rtl'}}>فرصت‌های شغلی</p>
                            <p className="p-hover"  sx={{ textAlign: 'right', direction: 'rtl'}}>نمایندگان فروش</p>
                            <p className="p-hover"  sx={{ textAlign: 'right', direction: 'rtl'}}>سوالات متداول</p>


                        </a></Item>
                        <Item><a href="#link1" style={{ color: 'white', textDecoration: 'none' }}>
                           

                            <p className="p-hover"  sx={{ textAlign: 'right', direction: 'rtl',}}>اخبار</p>
                            <p className="p-hover"  sx={{ textAlign: 'right', direction: 'rtl',}}>صدای مشتری</p>
                            <p className="p-hover"  sx={{ textAlign: 'right', direction: 'rtl',}}>مناقصه‌ها و مزایده‌ها</p>
                            <p className="p-hover"  sx={{ textAlign: 'right', direction: 'rtl',}}>سامانه رضایت‌سنجی</p>
                          


                        </a></Item>
         


                    </Stack>
                    <Box sx={{ width: '100%', my: '5%',direction:'rtl' }}>
                        <Stack spacing={2}>
                            <Item sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <Image src={Me} alt="me" width={100} height={100} style={{borderRadius:'50%' ,backgroundColor:'#63799e',color:'white'}} />
                               <Typography className="text-[#60E5BD] mx-5">کدنویسی با صبا عسگریان</Typography>
                                <Link href='https://www.instagram.com/saba_asgarian_web?igsh=M2Z2dTU3cHFmeW1o&utm_source=qr' target="_blank" >
                                    <Box sx={{background:'radial-gradient(circle at 33% 100%,#fed373 4%,#f15245 30%,#d92e7f 62%,#9b36b7 85%,#515ecf)',borderRadius:'50%',width:'40px',height:'40px',display:'flex',justifyContent:'center',alignItems:'center'}} className=" mx-2 box-hover">
                                    <InstagramIcon sx={{ color: 'white', ml: '2%' }} /> 
                                    </Box>
                                </Link>
                                <Link href='https://www.linkedin.com/in/saba-asgarian-69161088?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target="_blank">
                                    <Box sx={{backgroundColor:'#0077b5',borderRadius:'50%',width:'40px',height:'40px',display:'flex',justifyContent:'center',alignItems:'center'}}  className=" mx-2 box-hover">
                                    <LinkedInIcon sx={{ color: 'white', ml: '2%' }} /> {/* Set color here */}
                                    </Box>
                                </Link>
                                <Link href='https://github.com/SabaAsgarian' target="_blank">
                                <Box sx={{backgroundColor:'#0088cc',borderRadius:'50%',width:'40px',height:'40px',display:'flex',justifyContent:'center',alignItems:'center'}}  className=" mx-2 box-hover">
                                    <GitHubIcon sx={{ color: 'white', ml: '2%' }} /> {/* Set color here */}
                                </Box>
                                </Link>
                                <Link href='mailto:computer.sabaa@gmail.co'>
                                <Box sx={{backgroundColor:'red',borderRadius:'50%',width:'40px',height:'40px',display:'flex',justifyContent:'center',alignItems:'center'}}  className=" mx-2 box-hover">
                                    <MailIcon sx={{ color: 'white', ml: '2%', }} /> {/* Set color here */}
                                </Box>
                                </Link>
                            </Item>
                        </Stack>
                    </Box>

                </Box>
            </Box>
        </>
    )
}