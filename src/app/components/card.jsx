import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';
import { Description } from '@mui/icons-material';
import '../globals.css'
const CustomCard = ({ image, title }) => {
    return (
        <Card sx={{ width: { xs: '100%', sm: '100%', md: '20%' }, margin: '10px' ,direction:'rtl',transition:"1s"}} className="my-10 page2">
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '110px' }}>
                    <Image src={image} alt={title} width={100} height={100} style={{ objectFit: 'cover' }} />
                </Box>
                <Typography variant="h6" sx={{ textAlign: 'center', marginTop: '10px' ,fontFamily:'is',fontSize:'15px',fontWeight:'bolder'}} className='font-is font-extrabold'>
                    {title}
                </Typography>
                
            </CardContent>
        </Card>
    );
};

export default CustomCard;

