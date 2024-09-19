"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './swipersecond.css'; // Import the new CSS file
import aone from './img/a.webp'
import bone from './img/175.198-2.webp'
import cone from './img/Summer-175.198_8_11zon.webp'
import done from './img/175.198-01.webp'
import eone from './img/175.198-011-1.webp'
import fone from './img/200.200-01-2.webp'
import { Keyboard, Scrollbar, Navigation, Pagination,Autoplay } from 'swiper/modules';
import Image from 'next/image';
import CardBigtwo from './cardswiper';
import '../globals.css'
const slideData = [
    [
        { image: aone, title: 'اینترنت پر سرعت شاتل اینبار در دیجی کالا', titlesub: 'بالاترین سرعت، با مناسب‌‌ترین هزینه برای کاربران خانگی', p: 'در این روش می‌توانید اینترنت پرسرعت را با سرعت متوسط ۷۰ مگابیت بر ثانیه، با قیمتی به مراتب ارزان‌تر از ADSL دریافت کنید. این سرویس هم برای کاربران خانگی و هم برای کسب‌وکارها مورد استفاده قرار می‌گیرد.شاتل ارائه خدمات اینترنت پرسرعت بر بستر FTTC را برای نخستین بار در کشور آغاز کرده است.', butt: 'اطلاعات بیشتر' },
        { image: bone, title: 'تماشای فیلم و سریال در نماوا با ترافیک رایگان', titlesub: 'بالاترین سرعت، با مناسب‌‌ترین هزینه برای کاربران خانگی', p: 'در این روش می‌توانید اینترنت پرسرعت را با سرعت متوسط ۷۰ مگابیت بر ثانیه، با قیمتی به مراتب ارزان‌تر از ADSL دریافت کنید. این سرویس هم برای کاربران خانگی و هم برای کسب‌وکارها مورد استفاده قرار می‌گیرد.شاتل ارائه خدمات اینترنت پرسرعت بر بستر FTTC را برای نخستین بار در کشور آغاز کرده است.', butt: 'اطلاعات بیشتر' },
    ],
    [
        { image: cone, title: 'پیشنهادجذاب شاتل برای روزهای پایانی تابستان', titlesub: 'بالاترین سرعت، با مناسب‌‌ترین هزینه برای کاربران خانگی', p: 'در این روش می‌توانید اینترنت پرسرعت را با سرعت متوسط ۷۰ مگابیت بر ثانیه، با قیمتی به مراتب ارزان‌تر از ADSL دریافت کنید. این سرویس هم برای کاربران خانگی و هم برای کسب‌وکارها مورد استفاده قرار می‌گیرد.شاتل ارائه خدمات اینترنت پرسرعت بر بستر FTTC را برای نخستین بار در کشور آغاز کرده است.', butt: 'اطلاعات بیشتر' },
        { image: done, title: 'دوستان خودتان را شاتلی کنید هر دو تخفیف بگیرید', titlesub: 'بالاترین سرعت، با مناسب‌‌ترین هزینه برای کاربران خانگی', p: 'در این روش می‌توانید اینترنت پرسرعت را با سرعت متوسط ۷۰ مگابیت بر ثانیه، با قیمتی به مراتب ارزان‌تر از ADSL دریافت کنید. این سرویس هم برای کاربران خانگی و هم برای کسب‌وکارها مورد استفاده قرار می‌گیرد.شاتل ارائه خدمات اینترنت پرسرعت بر بستر FTTC را برای نخستین بار در کشور آغاز کرده است.', butt: 'اطلاعات بیشتر' },
    ],
    [
        { image: eone, title: ' تمدید جشنواره ی خرید مودم شاتل', titlesub: 'بالاترین سرعت، با مناسب‌‌ترین هزینه برای کاربران خانگی', p: 'در این روش می‌توانید اینترنت پرسرعت را با سرعت متوسط ۷۰ مگابیت بر ثانیه، با قیمتی به مراتب ارزان‌تر از ADSL دریافت کنید. این سرویس هم برای کاربران خانگی و هم برای کسب‌وکارها مورد استفاده قرار می‌گیرد.شاتل ارائه خدمات اینترنت پرسرعت بر بستر FTTC را برای نخستین بار در کشور آغاز کرده است.', butt: 'اطلاعات بیشتر' },
        { image: fone, title: 'تخیفیف های جذاب تابستانه', titlesub: 'بالاترین سرعت، با مناسب‌‌ترین هزینه برای کاربران خانگی', p: 'در این روش می‌توانید اینترنت پرسرعت را با سرعت متوسط ۷۰ مگابیت بر ثانیه، با قیمتی به مراتب ارزان‌تر از ADSL دریافت کنید. این سرویس هم برای کاربران خانگی و هم برای کسب‌وکارها مورد استفاده قرار می‌گیرد.شاتل ارائه خدمات اینترنت پرسرعت بر بستر FTTC را برای نخستین بار در کشور آغاز کرده است.', butt: 'اطلاعات بیشتر' },
    ],

];
export default function SecondSwiper() {
    return (
      <Swiper
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, // Delay between transitions (in milliseconds)
          disableOnInteraction: false, // Continue autoplay after user interactions
        }}
        
        spaceBetween={0} // Set space between slides to 0
        modules={[Navigation, Pagination, Autoplay]} // Include Autoplay module
        className="mySecondSwiper"
      >
        {slideData.map((cards, slideIndex) => (
          <SwiperSlide key={slideIndex}>
            <div className="slide-content" style={{ display: 'flex', justifyContent: 'space-between' }}>
              {cards.map((card, cardIndex) => (
                <div key={cardIndex} style={{ marginRight: cardIndex === 0 ? '50px' : '50px' }}> {/* Add margin to the first card */}
                  <CardBigtwo
                    image={card.image}
                    title={card.title}
                  
                    p={card.p}
                    butt={card.butt}
                  />
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }