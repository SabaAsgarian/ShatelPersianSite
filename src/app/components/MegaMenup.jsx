"use client"
import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image'; // Ensure you're using the Next.js Image component
import headi from './img/head.png'
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
        width:{md:'500px',lg:'800px'},
        top:'60px',
        borderTop:'5px solid black',
        borderRadius:'0 0 20px 20px',
        '&:hover': {
          display: 'block', // Show on hover
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Column 1 */}
        <Box sx={{ width: '25%' }}>
            <Typography className='font-is text-[13px]'>تست سرعت</Typography>
            <Typography className='font-is text-[13px]'>محتوای آموزشی</Typography>
            <Typography className='font-is text-[13px]'>محتوای آموزشی</Typography>
        </Box>

        {/* Column 2 */}
        <Box sx={{ width: '25%' }}>
            <Typography className='font-is text-[13px]'>سیستم هوشمند پشتیبانی فنی</Typography>
            <Typography className='font-is text-[13px]'>مرکز دانلود</Typography>
            <Typography className='font-is text-[13px]'>درخواست SLA</Typography>
    
        
        </Box>

    

    
      

        {/* Column 4 with Image */}
        <Box sx={{ width: '25%%', textAlign: 'center' }}>
          
          <Image
            src={headi} // Update with your image path
            alt="Description"
             // Set height as needed
            style={{ width:'90%', height:'100%' }} // Optional styling
          />
        </Box>
      </Box>
    </Box>
  );
};

export default MegaMenu;