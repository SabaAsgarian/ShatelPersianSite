import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import '../globals.css'

const Cardd = ({ image, title,description }) => {
    return (
        <Card sx={{ width: { xs: '100%', sm: '100%', md: '100%', lg: '20%' }, margin: '10px' ,direction:'rtl'}} className="my-10 page2">
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '110px' }}>
                    <Image src={image} alt={title} width={100} height={100} style={{ objectFit: 'cover' }} />
                </Box>
                <Typography variant="h6" sx={{ textAlign: 'center', marginTop: '10px' }} className='font-is text-[15px] font-extrabold'>
                    {title}
                </Typography>
                <Typography  component="div" sx={{ textAlign: 'center', marginTop: '10px' }} className='font-is text-[12px] text-[#6A6B6E]'>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Cardd;
