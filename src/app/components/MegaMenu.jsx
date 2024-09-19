"use client"
import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image'; // Ensure you're using the Next.js Image component
import phone from './img/phon.png'
import '../globals.css'
const MegaMenu = () => {
    return (
        <Box
            sx={{
                position: 'absolute',
                backgroundColor: 'white',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                display: 'none', // Initially hidden
                zIndex: 1000,
                padding: '20px',
                width:{md:'600px',lg:'800px'},
                top: '60px',
                borderTop: '5px solid black',
                borderRadius: '0 0 20px 20px',
                '&:hover': {
                    display: 'block', // Show on hover
                },
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }} className="*:font-is">
                {/* Column 1 */}
                <Box sx={{ width: '25%',fontFamily:'is' }}>
                    <Typography sx={{ borderBottom: '2px solid #facf54',fontWeight:'bolder' }} className='font-is text-[12px] font-extrabold'>خدمات اینترنت</Typography>
                    <Typography className='font-is text-[13px]'>اینترنت فیبر نوری</Typography>
                    <Typography className='font-is text-[13px]'>+ADSL2</Typography>
                    <Typography className='font-is text-[13px]'>VDSL</Typography>
                    <Typography className='font-is text-[13px]'>مجتمع‌های مسکونی و تجاری</Typography>
                </Box>

                {/* Column 2 */}
                <Box sx={{ width: '25%' ,fontFamily:'is'}}>
                    <Typography sx={{ borderBottom: '2px solid #facf54',fontWeight:'bolder' }} className='font-is text-[12px] font-extrabold'>خدمات تلفن</Typography>
                    <Typography className='font-is text-[13px]'>خدمات تلفن خانگی</Typography>
                


                </Box>

                {/* Column 3 */}
                <Box sx={{ width: '25%' ,fontFamily:'is'}}>
                    <Typography sx={{ borderBottom: '2px solid #facf54',fontWeight:'bolder' }} className='font-is text-[12px] font-extrabold'>خدمات همراه </Typography>
                    <Typography className='font-is text-[13px]'>شاتل موبایل </Typography>
                    <Typography className='font-is text-[13px]'>FMC</Typography>
                    {/* Add more items as needed */}
                </Box>
                {/* Column 4 */}
                <Box sx={{ width: '25%', fontFamily:'is'}}>
                    <Typography sx={{ borderBottom: '2px solid #facf54', fontWeight:'bolder'}} className='font-is text-[12px] font-extrabold'>خدمات محتوا</Typography>
                    <Typography className='font-is text-[13px]'>نماوا</Typography>
                    {/* Add more items as needed */}
                </Box>




                {/* Column 5 with Image */}
                <Box sx={{ width: '25%%', textAlign: 'center' }}>

                    <Image
                        src={phone} // Update with your image path
                        alt="Description"
                        // Set height as needed
                        style={{ width: '90%', height: '100%' }} // Optional styling
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default MegaMenu;
