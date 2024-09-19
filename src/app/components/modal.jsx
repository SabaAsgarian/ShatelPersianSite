"use client"
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import { Height } from '@mui/icons-material';
import Image from 'next/image';
import sup from './img/sup.png'
import sell from './img/sell.png'
import '../globals.css'
const style = {
  position: 'absolute',
  bottom: '10%',
  right: '5%',
 
  width:{xs:'300',sm:'350',md:'400'},
  Height:'auto',
  bgcolor: 'background.paper',

  borderRadius:'10px',
  boxShadow: 24,

};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div >
      <Button onClick={handleOpen}>
      <SmsOutlinedIcon className='text-white text-[30px]'/>
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} >
           <Box sx={{backgroundColor:'#3f86ec',textAlign:'center',backgroundColor:'#3f86ec',width:'100%',borderRadius:'10px 10px 0px 0px',color:'white'}}>
           <Typography id="transition-modal-title"  component="h2" className='font-is font-extrabold p-5' >
            
            
            به گفتگوی آنلاین شاتل خوش آمدید
            
            </Typography>
            <Typography className='font-is text-[11px] p-5'>
                
            لطفا بخش مورد نظر خود را انتخاب کنید
            </Typography>
           </Box>
           <Box sx={{height:'200px',backgroundColor:'white',borderRadius:'0px 0px 10px 10px',display:'flex',justifyContent:'center',alignItems:'center',textAlign:'center'}} className='my-[20%]'>
                <Box sx={{width:{xs:'100%',md:'50%'},height:{sx:'50%',md:'100%'},}}>
                  <Image src={sell} alt='sell'/>
                  <Button sx={{backgroundColor:'#56c45f',color:'white',borderRadius:'20px'}} className='font-is font-extrabold hb'>پشتیبانی فروش</Button>
                </Box>
                <Box sx={{width:{xs:'100%',md:'50%'},height:{sx:'50%',md:'100%'},}}>
                <Image src={sup} alt='sell'/>
                <Button sx={{backgroundColor:'#56c45f',color:'white',borderRadius:'20px'}} className='font-is font-extrabold hb'>پشتیبانی فنی</Button>
                </Box>
               
           </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}