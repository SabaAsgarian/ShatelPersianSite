"use client "
import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import './globals.css'
import Swiperfirst from './components/swiperfirst'
import { Grade, Height } from '@mui/icons-material'
import { Box, Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import ione from './components/img/icon-1.webp'
import itwo from './components/img/icon-2.webp'
import ithree from './components/img/sim-round.webp'
import ifour from './components/img/namava-shatel.webp'
import ifive from './components/img/borj.webp'
import isix from './components/img/FMC-.webp'
import iseven from './components/img/icon-7.webp'
import ieight from './components/img/icon-8.webp'
import inine from './components/img/rahkar-internet-optimal.webp'
import iten from './components/img/icon-10.webp'
import ieleven from './components/img/fibrnoori.webp'
import itwelve from './components/img/khadamat.webp'
import CustomCard from './components/card'
import Cardd from './components/cardfirst'
import CardBig from './components/cardBig'
import CardBigtwo from './components/cardBigtwo'
import SecondSwiper from './components/swip'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import TransitionsModal from './components/modal'
const cardData = [
  { image: iseven, title: 'خرید آنلاین' },
  { image: ieight, title: 'قیمت سرویس‌ها' },
  { image: inine, title: 'بررسی پوشش خدمات' },
  { image: iten, title: 'باشگاه مشتریان' },
];
const cardDatafirst = [
  { image: ione, title: 'خدمات اینترنت پر سرعت  ثابت', description: 'بهترین راهکار برای دستیابی به اینترنت ثابت' },
  { image: itwo, title: 'خدمات تلفن', description: 'نسل جدید خدمات تلفن با ویژگی‌های منحصربه‌فرد' },
  { image: ithree, title: 'سیم‌کارت هوشمند شاتل موبایل', description: 'تنها اپراتور ارائه‌دهنده سیم‌کارت هوشمند با خدمات مکالمه، پیامک و اینترنت4G/LTE' },

];
const cardDatasecond = [
  { image: ifour, title: 'تماشای آنلاین فیلم و سریال (نماوا)', description: 'خلق یک تجربه‌ی لذت‌بخش آنلاین' },
  { image: ifive, title: 'خدمات مجتمع‌های مسکونی و تجاری', description: 'سرویس مجتمع‌های مسکونی و تجاری راهی مطمئن برای دسترسی به اینترنت و برقراری ارتباط' },
  { image: isix, title: 'خدمات همگرایی ثابت و سیار', description: 'تنها سرویس ترکیبی و همگرای موبایل و +ADSL2' },

];
const cardDataBig = [
  { image: ieleven, title: 'اینترنت فیبر نوری شاتل', titlesub: 'تجربه تا ۱,۰۰۰ مگابیت بر ثانیه سرعت', p: 'سرویس اینترنت فیبر نوری یکی از جدیدترین فناوری‌های ارتباطات ثابت است که در آن برای دسترسی به شبکه جهانی اینترنت به جای کابل مسی از نور برای انتقال اطلاعات استفاده می‌شود، بنابراین نویزهای الکترومغناطیسی تاثیری بر روی کیفیت و پایداری این سرویس ندارد. کیفیت بالا، عدم نیاز به خط تلفن ثابت و سرعت ارسال و دریافت تا ۱۰۰۰ مگابیت بر ثانیه از مهم‌ترین مزایای سرویس اینترنت بر بستر فیبر نوری است. شاتل همگام با تکنولوژی روز دنیا اقدام به راه‌اندازی و توسعه بستر ارائه این سرویس در شبکه خود داشته است.', butt: 'اطلاعات بیشتر' },


];
const cardDataBigtwo = [
  { image: itwelve, title: 'خدمات اینترنت پرسرعت ثابت VDSL', titlesub: 'بالاترین سرعت، با مناسب‌‌ترین هزینه برای کاربران خانگی', p: 'در این روش می‌توانید اینترنت پرسرعت را با سرعت متوسط ۷۰ مگابیت بر ثانیه، با قیمتی به مراتب ارزان‌تر از ADSL دریافت کنید. این سرویس هم برای کاربران خانگی و هم برای کسب‌وکارها مورد استفاده قرار می‌گیرد.شاتل ارائه خدمات اینترنت پرسرعت بر بستر FTTC را برای نخستین بار در کشور آغاز کرده است.', butt: 'اطلاعات بیشتر' },


];
export default function page() {
  return (
    <div dir='rtl' className='font-is'>
      <Header />
      <Swiperfirst />

      <Box sx={{ width: '100%', height: '30%', display: 'flex', textAlign: 'center', justifyContent: 'center', alignContent: 'center', backgroundColor: '#fafcfd' }} >
        <Box className='*:text-center  flex flex-wrap justify-center items-center w-full h-full my-7 '>
          <h1 className='font-is text-[28px] text-black font-extrabold w-[100%]'>لبخندتان را به دنیا نمی‌دهیم!</h1>
          <h6 className='font-is text-[14px] text-[#6A6B6E] w-[50%] my-10'>شاتل با ارائه خدمات و راهکارهای ارتباطی و محتوایی ارزش‌آفرین و نوآورانه و نیز پای‌بندی به اخلاق حرفه‌ای و مسئولیت‌های اجتماعی، رسالت خود را خلق لبخند رضایت در جامعه می‌داند</h6>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: '#fafcfd', height: 'auto', direction: 'rtl' }} >
        {cardDatafirst.map((card, index) => (
          <Cardd key={index} image={card.image} title={card.title} description={card.description} />
        ))}
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: '#fafcfd', height: 'auto', direction: 'rtl' }} >
        {cardDatasecond.map((card, index) => (
          <Cardd key={index} image={card.image} title={card.title} description={card.description} />
        ))}
      </Box>



      {/* third ////////////////////////////////////////////////////////*/}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: '#f6f7fa', height: 'auto', direction: 'rtl' }} >
        {cardData.map((card, index) => (
          <CustomCard key={index} image={card.image} title={card.title} />
        ))}
      </Box>
      {/* four/////////////////////////////////// */}
      <Box className='fourth'>
        <Box sx={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', direction: 'rtl', width: '80%' }} className="my-[2%]">
            {cardDataBig.map((card, index) => (
              <CardBig key={index} image={card.image} title={card.title} titlesub={card.titlesub} p={card.p} butt={card.butt} />
            ))}
          </Box>

        </Box>
        <Box sx={{ width: '100%', justifyContent: 'center', display: 'flex' }} >
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', direction: 'rtl', width: '80%' }} className="my-[2%]">
            {cardDataBigtwo.map((card, index) => (
              <CardBigtwo key={index} image={card.image} title={card.title} titlesub={card.titlesub} p={card.p} butt={card.butt} />
            ))}
          </Box>
        </Box>
      </Box>
      {/* fifth///////////////////////////////////////////// */}
      <Box sx={{ height: 'auto', width: '100%', }} className='fifth'>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', height: '20%' }} className="">
          <Typography className='font-is font-extrabold text-[20px] text-black my-[5%]'>پیشنهادها</Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', width: '80%', height: '100%' }} className="my-7">
            <SecondSwiper />
          </Box>
        </Box>
      </Box>
      {/* last */}
      <Box sx={{ width: '100%', height: 'auto', direction: 'rtl' }} >
        <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', height: '20%' }}>
          <Typography className='font-is font-extrabold text-[20px] text-black my-[5%]'>اخبار و تازه‌ها</Typography>
        </Box>
       <Box sx={{width:'100%', height:'80%', display:'flex'}} className='p-[10%]'>

         <Box sx={{ width: '50%', }}>
          <Box sx={{ fontSize: '8px', display: 'flex' }}>
            <CalendarMonthIcon sx={{ fontSize: '10px' }} />
            <p   className='border-b-2 border-[#facf54]'>
              شنبه، ۲۴ شهریور ۱۴۰۳</p>
          </Box>
          <h1 className='w-full text-[18px] font-is font-extrabold my-10'>پیشنهادهای جذاب شاتل در روزهای پایانی تابستان، برای خرید ...</h1>
          <p className='w-[70%] text-[12px] font-is my-10'>بسته‌های ۱۰۰، ۲۰۰ و ۳۰۰ گیگابایتی ترافیک نقره‌ای اینترنت ثابت شاتل با تخفیف‌ ویژه، از ۲۴ تا ۳۱ شهریور ۱۴۰۳ در سراسر کشور ارائه می‌شود. با توجه به استقبال مشتریان عزیز از شرایط ویژه خرید بسته‌های ترافیک، شاتل پیشنهادهای ویژه‌ای برای خرید این بسته‌ها در نظر گرفته است. مشتریان فعلی شاتل می‌توانند از ۲۴ تا ...</p>
          <Button sx={{ width: '180px', backgroundColor: '#5393ee', color: 'white', borderRadius: '20px', boxShadow: '10px 10px 100px 0 black)' }} className='font-is butt'>
            بشتر بخوانید
          </Button>

        </Box>
        <Box sx={{ width: '50%' }}>
          <Box sx={{ fontSize: '8px', display: 'flex' ,}}>
            <CalendarMonthIcon sx={{ fontSize: '10px' }} />
            <p className='border-b-2 border-[#facf54]'>
            یکشنبه، ۱۸ شهریور ۱۴۰۳</p>
          </Box>
          <h1 className='w-full text-[18px] font-is font-extrabold my-10'>۶۰ گیگابایت ترافیک نقره‌ای با ۵۰‌درصد تخفیف در دوشنبه ...</h1>
          <p className='w-[70%] text-[12px] font-is my-10'>به پاس همراهی کاربران عزیز شاتل، این ماه نیز بر اساس وعده‌ای که پیش‌تر داده بودیم، یک تخفیف ویژه روی ترافیک اینترنت پرسرعت برای کاربران فعلی در نظر گرفته‌ایم. شاتلی‌ها می‌توانند این دوشنبه، ۱۹ شهریورماه، با مراجعه به پورتال کاربری خود (My.Shatel.ir) به‌مدت ۲۴ ساعت، ۶۰ گیگابایت ترافیک نقره‌ای اینترنت پرسرعت با اعتبار یک‌ساله را ...</p>
          <Button sx={{ width: '180px', backgroundColor: '#5393ee', color: 'white', borderRadius: '20px', boxShadow: '10px 10px 100px 0 black)' }} className='font-is butt'>
            بشتر بخوانید
          </Button>

        </Box>
       </Box>
      </Box>
      <Footer />
        <Box sx={{position:'fixed',width:'60px',height:'60px',borderRadius:'50%',backgroundColor:'#3f86ec',bottom:'1%',right:'1%',display:'flex',justifyContent:'center',alignItems:'center'}} >
            <TransitionsModal/>
        </Box>
    </div>
  )
}

