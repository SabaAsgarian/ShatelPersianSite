"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './swiperfirst.css';
import Image from 'next/image';
import a from './img/1.webp'
import b from './img/2.webp'
import c from './img/3.webp'
import d from './img/4.webp'
import e from './img/5.webp'
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules'; {/* Ensure Autoplay is imported */ }

export default function App() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };
  return (
    <>
        <Swiper
        cssMode={true}
        navigation={true}
        pagination={pagination}
      
        mousewheel={true}
        keyboard={true}
        autoplay={{ delay: 5000 }}
     
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
        style={{direction:'rtl'}}
      >
        <SwiperSlide>
          <Image src={a} alt='img1' style={{direction:'rtl'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={b} alt='img2' style={{direction:'rtl'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={c} alt='img3' style={{direction:'rtl'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={d} alt='img4' style={{direction:'rtl'}}/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src={e} alt='img5' style={{direction:'rtl'}}/>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
