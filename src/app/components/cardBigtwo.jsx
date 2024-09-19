import * as React from 'react';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Image from 'next/image'; // Ensure you're using the Next.js Image component
import '../globals.css'
export default function CardBig({ image, title,titlesub,p,butt }) {
  return (
    <Card sx={{ display: 'flex', direction: 'rtl', boxShadow: 'none', flexDirection: { xs: 'column', sm: 'column', md: 'row' } }} >
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: { xs: '100%', sm: '100%', md: '50%' } }}>
        <Image src={image} alt={title} style={{ width:'80%',height:'80%', borderRadius: '10px' }} /> {/* Adjust width/height as needed */}
      </Box>
      <Box sx={{ width: { xs: '100%', sm: '100%', md: '50%' }, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '16px' }}>
        <CardContent>
          <Typography component="div" variant="h5" className='font-is'>
            {title} {/* Display the title */}
          </Typography>
          <Typography  component="div" sx={{ color: 'text.secondary',borderBottom:'1px solid #facf54' }} className='font-is text-[12px] my-[10px]'>
            {titlesub} {/* Optional additional text */}
          </Typography>
          <Typography  component="div" sx={{ color: 'text.secondary' }} className='font-is mb-4'>
            {p} {/* Optional additional text */}
          </Typography>
          <Button sx={{width:'180px',backgroundColor:'#5393ee',color:'white',borderRadius:'20px',boxShadow:'10px 10px 100px 0 black)'}} className='font-is butt'>
            {butt}
          </Button>
        </CardContent>
      </Box>
      
    </Card>
  );
}