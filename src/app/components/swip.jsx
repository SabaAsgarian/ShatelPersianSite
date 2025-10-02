"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';
import '../globals.css'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import aone from './img/digi.webp'
import bone from './img/namava.webp'
import cone from './img/dostan.webp'
import done from './img/tabestan.webp'
import eone from './img/tamdid.webp'
import fone from './img/payantabestan.webp'
export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000, // Delay between transitions (in milliseconds)
                    disableOnInteraction: false, // Continue autoplay after user interactions
                }}
                breakpoints={{
                    640: { // sm
                        slidesPerView: 1, // Show only the first card
                        spaceBetween: 20,
                    },
                    768: { // md
                        slidesPerView: 1, // Show only the first card
                        spaceBetween: 20,
                    },
                    1024: { // lg
                        slidesPerView: 2, // Show pairs of cards
                        spaceBetween: 20,
                    },
                    1280: { // xl
                        slidesPerView: 2, // Show pairs of cards
                        spaceBetween: 20,
                    },
                }}
                modules={[Navigation, Pagination, Autoplay]}
                className="swip"
            >
                <SwiperSlide>


                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: {xs:"300px",md:'200px'},margin:"15%" }} >
                        <Box sx={{ width: '40%', height: '100%' }} >
                            <Image src={aone} style={{ width: '90%', height: '100%', borderRadius: '20px' }} />
                        </Box>
                        <Box sx={{ width: '55%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h2  className='font-is text-[15px] font-extrabold'>اینترنت پر سرعت شاتل اینبار در دیجی کالا</h2>
                            <Typography component="div" sx={{ color: 'text.secondary' }} className='font-is mb-4 text-[12px]'>شاتل که همواره به دنبال ارائه شیوه‌های نوین در دسترسی کاربران به سرویس اینترنت پرسرعت بوده، با ارائه بسته‌های سرویس اینترنت ویژه در ...</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Button sx={{ width: '180px', backgroundColor: '#56c45f', color: 'white', borderRadius: '20px', boxShadow: '10px 10px 100px 0 black)' }} className='font-is butt'>اطلاعات بیشتر </Button>
                            </Box>
                        </Box>
                    </Box>

                </SwiperSlide>
                <SwiperSlide>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: {xs:"300px",md:'200px'},margin:"15%" }} >
                        <Box sx={{ width: '40%', height: '100%' }} >
                            <Image src={bone} style={{ width: '90%', height: '100%', borderRadius: '20px' }} />
                        </Box>
                        <Box sx={{ width: '55%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h2  className='font-is text-[15px] font-extrabold'>تماشای فیلم و سریال در نماوا با ترافیک رایگان!</h2>
                            <Typography component="div" sx={{ color: 'text.secondary' }} className='font-is mb-4 text-[12px]'>با معرفی سرویس اینترنت به دوستان، آشنایان  خود و دعوت از آن‌ها برای پیوستن به خانواده شاتل، به ازای تعداد دعوت‌های موفق، از تخفیف‌ روی سرویس  خود بهره‌مند شوند</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Button sx={{ width: '180px', backgroundColor: '#56c45f', color: 'white', borderRadius: '20px', boxShadow: '10px 10px 100px 0 black)' }} className='font-is butt'>اطلاعات بیشتر </Button>
                            </Box>
                        </Box>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',height: {xs:"300px",md:'200px'},margin:"15%" }} >
                        <Box sx={{ width: '40%', height: '100%' }}>
                            <Image src={cone} style={{ width: '90%', height: '100%', borderRadius: '20px' }} />
                        </Box>
                        <Box sx={{ width: '55%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h2  className='font-is text-[15px] font-extrabold'>دوستان  خود را شاتلی کنید و هر دو تخفیف بگیرید!</h2>
                            <Typography component="div" sx={{ color: 'text.secondary' }} className='font-is mb-4 text-[12px]'>شاتلی‌ها می‌توانند با ترافیک رایگان در پلتفرم نماوا فیلم و سریال تماشا کنند.شاتل اولین و تنها اپراتوری است که این امکان را برای کاربران خود فراهم کرده ‌است.</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Button sx={{ width: '180px', backgroundColor: '#56c45f', color: 'white', borderRadius: '20px', boxShadow: '10px 10px 100px 0 black)' }} className='font-is butt'>اطلاعات بیشتر </Button>
                            </Box>
                        </Box>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: {xs:"300px",md:'200px'},margin:"15%" }} >
                        <Box sx={{ width: '40%', height: '100%' }} >
                            <Image src={done} style={{ width: '90%', height: '100%', borderRadius: '20px' }} />
                        </Box>
                        <Box sx={{ width: '55%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h2 className='font-is text-[15px] font-extrabold'>تخفیف‌های چشمگیر شاتل برای تابستان</h2>
                            <Typography component="div" sx={{ color: 'text.secondary' }} className='font-is mb-4 text-[12px]'>به اندازه یک کوه عظیم یخ اینترنت می‌خرید، اما فقط هزینه قله را می‌پردازید. شاتل در جشنواره تابستانی امسال، سرویس اینترنت پرسرعت ثابت+ADSL۲ را با تخفیف‌های چشمگیری ارائه می‌کند.</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Button sx={{ width: '180px', backgroundColor: '#56c45f', color: 'white', borderRadius: '20px', boxShadow: '10px 10px 100px 0 black)' }} className='font-is butt'>اطلاعات بیشتر </Button>
                            </Box>
                        </Box>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: {xs:"300px",md:'200px'},margin:"15%" }} >
                        <Box sx={{ width: '40%', height: '100%' }} >
                            <Image src={eone} style={{ width: '90%', height: '100%', borderRadius: '20px' }} />
                        </Box>
                        <Box sx={{ width: '55%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h2  className='font-is  text-[15px] font-extrabold'>تمدید جشنواره خرید مودم اینترنت پرسرعت ثابت</h2>
                            <Typography component="div" sx={{ color: 'text.secondary' }} className='font-is mb-4 text-[12px]'>با توجه به استقبال کاربران شاتل از شرایط ویژه خرید مودم‌ اینترنت پرسرعت ثابت، مهلت استفاده از این پیشنهاد تا تاریخ ۳۱ شهریور ۱۴۰۳ تمدید شد. </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Button sx={{ width: '180px', backgroundColor: '#56c45f', color: 'white', borderRadius: '20px', boxShadow: '10px 10px 100px 0 black)' }} className='font-is butt'>اطلاعات بیشتر </Button>
                            </Box>
                        </Box>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',height: {xs:"300px",md:'200px'},margin:"15%" }} >
                        <Box sx={{ width: '40%', height: '100%' }} >
                            <Image src={fone} style={{ width: '100%', height: '100%', borderRadius: '20px' }} />
                        </Box>
                        <Box sx={{ width: '55%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h2 component="div" className='font-is text-[15px] font-extrabold'>پیشنهادهای جذاب شاتل روزهای پایانی تابستان</h2>
                            <Typography component="div" sx={{ color: 'text.secondary' }} className='font-is mb-4 text-[12px]'>بسته‌های ۱۰۰، ۲۰۰  گیگابایت اینترنت ثابت شاتل با تخفیف‌  ارائه می‌شود.تنهادو بسته است و دیگر بسته‌های ترافیک اینترنت شاتل را شامل نمی‌شود.</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Button sx={{marginBottom:"5%", width: '180px', backgroundColor: '#56c45f', color: 'white', borderRadius: '20px', boxShadow: '10px 10px 100px 0 black)' }} className='font-is butt'>اطلاعات بیشتر </Button>
                            </Box>
                        </Box>
                    </Box>
                </SwiperSlide>

            </Swiper>
        </>
    );
}
