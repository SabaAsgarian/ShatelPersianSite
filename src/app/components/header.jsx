"use client"


import { styled, alpha, useTheme } from '@mui/material/styles';
import CallIcon from '@mui/icons-material/Call';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import LongMenu from './LongMenu'; // Ensure this import is correct
import Link from 'next/link';
import Image from 'next/image';
import myContext from '../myContext';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled as muiStyled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Button, useMediaQuery } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
// Import axios for API calls
import logo from './img/shatel.png'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MegaMenu from './MegaMenu';
import MegaMenup from './MegaMenup';
import React, { useEffect, useRef } from 'react';
import '../globals.css'
const HeaderContainer = styled(Box)(({ isFixed }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100px',
    boxShadow: isFixed ? '0 0 50px 0 rgba(0, 0, 0, 0.1)' : 'none',
    paddingRight: '10%',
    paddingLeft: '12%',
    position: isFixed ? 'fixed' : 'relative',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    zIndex: 1000,
}));

// New styled component for WhatsApp support
const SupportContainer = styled(Box)({
    width: '100%',
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 0',
});

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const drawerWidth = '100%';

const AppBar = styled(MuiAppBar)(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    position: 'static', // Change to static
    background: 'linear-gradient(50deg,#00abf7,#007aef)',
    color: 'white',
    height: '50px',
    boxShadow: '0'  // Change to static
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
    zIndex: '999'
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    '& .MuiDrawer-paper': {
        width: drawerWidth,

        color: 'white',
        background: '#1b162d'

    },
    zIndex: theme.zIndex.drawer + 2,
}));

export default function PrimarySearchAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [goldPrice, setGoldPrice] = React.useState('Loading...'); // State to hold gold price
    const [displayText, setDisplayText] = React.useState('Shine With Rose'); // State for text display
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // Check if screen is small or medium
    const [isFixed, setIsFixed] = React.useState(false);
    const divRefs = useRef([]); // To hold references to the divs
    const links = useRef([]); // To hold references to the links

    useEffect(() => {
        // Set initial opacity and height for each div
        divRefs.current.forEach((value) => {
            value.setAttribute('data-h', value.clientHeight);
            value.style.opacity = '0';
        });

        links.current.forEach((value, index) => {
            value.addEventListener('click', () => {
                divRefs.current.forEach((div) => {
                  
                    div.style.opacity = '0'; // Hide all divs
                });
                if (index < divRefs.current.length) {
                    divRefs.current[index].style.opacity = '1'; // Show the clicked div
                }
            });
        });

        return () => {
            // Cleanup event listeners on unmount
            links.current.forEach((value) => {
                value.removeEventListener('click', () => {});
            });
        };
    }, []);

    const handleSpanClick = (index) => {
        links.current.forEach((link) => {
            link.style.background = 'transparent';
            link.style.color = 'white';
            link.style.boxShadow = 'none';
           
        });
        links.current[index].style.background = '#0097f4';
        links.current[index].style.color = 'white';
        links.current[index].style.boxShadow = 'inset 0 0 20px #009ef5';
       
    };

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Fetch gold price from API




    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'top',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'top',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'top',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'top',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <>


            <Box sx={{ fontFamily:'is',display: 'flex' }} className="*:font-is">
                <CssBaseline />
                <AppBar>
                    <Toolbar>





                        {/* Right Links and Menu */}
                        <Box sx={{ fontFamily:'is',flexGrow: 1, direction: 'rtl', display: 'flex', justifyContent: 'space-between', marginRight:{xs:'0%',md:'10%'}, marginLeft:{xs:'0%',md:'10%'} }} className='font-is *:text-[12px] *:font-extrabold'>
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <Link
                                    href="/"
                                    ref={(el) => (links.current[0] = el)}
                                    style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}
                                    className='headr'
                                    onClick={() => handleSpanClick(0)}
                                     >
                                    کاربران خانگی
                                </Link>
                                <Link
                                    href="/"
                                    ref={(el) => (links.current[1] = el)}
                                    style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}
                                    className='headr'
                                    onClick={() => handleSpanClick(1)}
                                >
                                    کاربران سازمانی
                                </Link>
                            </Box>
                            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                                <Link
                                    href="/"
                                    ref={(el) => (links.current[2] = el)}
                                    style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}
                                    className='headr'
                                    onClick={() => handleSpanClick(2)}
                                >
                                    درباره شاتل
                                </Link>
                                <Link
                                    href="/"
                                    ref={(el) => (links.current[3] = el)}
                                    style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}
                                    className='headr'
                                    onClick={() => handleSpanClick(3)}
                                >
                                    فرصت های شغلی
                                </Link>
                                <Link
                                    href="/"
                                    ref={(el) => (links.current[4] = el)}
                                    style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}
                                    className='headr'
                                    onClick={() => handleSpanClick(4)}
                                >
                                    ارتباط با ما
                                </Link>
                                <Link
                                    href="/"
                                    style={{ color: 'white', textDecoration: 'none', display: 'flex', alignContent: 'center', justifyContent: 'center',fontFamily:'is' }}
                                >
                                    <CallIcon className='flex justify-center items-center text-[12px]' />
                                    <Typography sx={{ fontFamily:'is', marginLeft: 1 }} className='font-is font-extrabold text-[12px]'> ۰۲۱۹۱۰۰۰۰۰۰ شماره سراسری</Typography>
                                </Link>
                                <Link
                                    href="/"
                                    ref={(el) => (links.current[5] = el)}
                                    style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}
                                    className='font-is headr'
                                    onClick={() => handleSpanClick(5)}
                                >
                                    English
                                </Link>
                            </Box>
                        </Box>
                        {isSmallScreen && (
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignContent: 'center' }}>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    edge="end" sx={{ display: 'flex ', }}>

                                    <MenuIcon className='border-2 border-white rounded'/>

                                </IconButton >
                                <Box sx={{ display: 'flex', fontSize: '12px', alignItems: 'center', justifyContent: 'center' }}>
                                    <CallIcon className='flex justify-center items-center text-[14px]'/>
                                    <Typography variant="h6" sx={{ fontFamily:'is', marginLeft: 1 }} className='font-is font-extrabold text-[12px]'> ۰۲۱۹۱۰۰۰۰۰۰ شماره سراسری</Typography>
                                </Box>
                            </Box>
                        )}
                    </Toolbar>
                </AppBar>
                {isSmallScreen && (
                    <StyledDrawer
                        variant="persistent"
                        anchor="top"
                        open={open}
                    >
                        <DrawerHeader sx={{ direction: 'rtl', width: '100%' }}>
                            <IconButton onClick={handleDrawerClose} sx={{ color: 'white' }}>
                                {theme.direction === 'rtl' ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                            </IconButton>
                        </DrawerHeader>
                        <Divider />
                        <List sx={{ textAlign: 'right', width: '100%' }} >
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="/" sx={{ textAlign: 'right', direction: 'rtl' ,borderBottom:'1px solid white'}} className='font-is text-[12px] hoverm'>
                                    <ListItemText primary="کاربران خانگی" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="/" sx={{ textAlign: 'right', direction: 'rtl',borderBottom:'1px solid white' }} className='font-is text-[12px] hoverm'>
                                    <ListItemText primary="کاربران سازمانی" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="/" sx={{ textAlign: 'right', direction: 'rtl',borderBottom:'1px solid white' }} className='font-is text-[12px] hoverm'>
                                    <ListItemText primary="پشتیبانی" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="/" sx={{ textAlign: 'right', direction: 'rtl' }} className='font-is text-[12px] hoverm'>
                                    <ListItemText primary="درباره شاتل" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="/" sx={{ textAlign: 'right', direction: 'rtl' }} className='font-is text-[12px] hoverm'>
                                    <ListItemText primary="فرصت های شغلی " />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="/" sx={{ textAlign: 'right', direction: 'rtl' }} className='font-is text-[12px] hoverm'>
                                    <ListItemText primary="محصولات و خدمات" />
                                </ListItemButton>
                            </ListItem>
                           
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="/" sx={{ textAlign: 'right', direction: 'rtl' }} className='font-is text-[12px] hoverm'>
                                    <ListItemText primary="چرا شاتل؟" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="/" sx={{ textAlign: 'right', direction: 'rtl' }} className='font-is text-[12px] hoverm'>
                                    <ListItemText primary="ارتباط با ما " />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="/" sx={{ textAlign: 'right', direction: 'rtl' }} className='font-is text-[12px] hoverm'>
                                    <ListItemText primary="English" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </StyledDrawer>
                )}
            </Box>
            <HeaderContainer isFixed={isFixed}>
                <Box sx={{ display: 'flex', alignItems: 'center', fontFamily:'is'}}>
                    <Image src={logo} alt='logo' />
                    <Box dir='rtl' sx={{ display: { xs: 'none', md: 'flex' } }} className="*:font-is">
                        <Box sx={{ position: 'relative' }}>
                            <Typography

                                sx={{
                                    fontFamily:'is',
                                    cursor: 'pointer',
                                    '&:hover + div': {
                                        display: 'block', // Show mega menu on hover
                                    },
                                }}
                                className="font-is"
                            >
                                محصولات و خدمات
                            </Typography>
                            <MegaMenu /> {/* Include the MegaMenu component */}
                        </Box>
                        <Box sx={{ position: 'relative', }} className="mx-3">
                            <Typography

                                sx={{
                                    fontFamily:'is',
                                    cursor: 'pointer',
                                    '&:hover + div': {
                                        display: 'block', // Show mega menu on hover
                                    },
                                }}
                                className="font-is"
                            >
                                پشتیبانی
                            </Typography>
                            <MegaMenup /> {/* Include the MegaMenu component */}
                        </Box>
                        <li className='list-none font-is text-[14px] mr-5 '>چرا شاتل؟</li>

                    </Box>
                </Box>
                <Box sx={{ display: 'flex' }}>
                    <SearchIcon sx={{ backgroundColor: "#cccdd1", borderRadius: '50%', color: 'white', width: '40px', height: '40px', marginLeft: '10px' }} className='text-[10px]' />
                    <Button sx={{ backgroundColor: '#56c45f', borderRadius: '20px', color: 'white', width: '190px' }} >
                        <PersonOutlineIcon />
                        <Typography sx={{fontFamily:'is'}} className='text-[14px] font-is'>

                            ورود به مای شاتل

                        </Typography>
                    </Button>
                </Box>
            </HeaderContainer>
            {/* Divs for each link */}
           
            {renderMobileMenu}
            {renderMenu}
        </>
    );
}




























