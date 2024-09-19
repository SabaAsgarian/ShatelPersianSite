"use client"

import * as React from 'react';
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
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useMediaQuery } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
 // Import axios for API calls
import '../globals.css'
// New styled component for the header
const HeaderContainer = muiStyled(Box)(({ theme }) => ({
  backgroundColor: '#f1eee4',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1, 3),
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

const drawerWidth = 240;

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  position: 'static', // Change to static
  backgroundColor: 'white', // Set background color to white
  color: 'black',
  borderBottom: '1px solid black',
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
    backgroundColor: 'white', // Set background color to white
    color: 'black', // Set text color to black
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

  // Fetch gold price from API


 

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
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
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
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
      
    
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar>
          <Toolbar>
            {/* Left Icons */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Link href="../components/basket" style={{ color: 'black' }}>
                <IconButton sx={{ color: 'black' }}>
                  <LocalMallOutlinedIcon />
                </IconButton>
              </Link>
              <Link href="../components/account" style={{ color: 'black' }}> {/* {{ edit_1 }} Wrap Icon with Link */}
                <IconButton sx={{ color: 'black' }}>
                  <PersonOutlineOutlinedIcon />
                </IconButton>
              </Link>
              <IconButton sx={{ color: 'black' }}>
                <SearchOutlinedIcon />
              </IconButton>
            </Box>

 
            

            {/* Right Links and Menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              <Link href="/" style={{ color: 'black', margin: '0 10px', textDecoration: 'none' }}>Home</Link>
              <Link href="../components/shop" style={{ color: 'black', margin: '0 10px', textDecoration: 'none' }}>All</Link>
              <Link href="../components/bracelet" style={{ color: 'black', margin: '0 10px', textDecoration: 'none' }}>Bracelet</Link>
              <Link href="../components/earings" style={{ color: 'black', margin: '0 10px', textDecoration: 'none' }}>Earrings</Link>
              <Link href="../components/rings" style={{ color: 'black', margin: '0 10px', textDecoration: 'none' }}>Rings</Link>
              <Link href="../components/necklace" style={{ color: 'black', margin: '0 10px', textDecoration: 'none' }}>Necklace</Link>
            </Box>
            {isSmallScreen && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
        {isSmallScreen && (
          <StyledDrawer
            variant="persistent"
            anchor="right"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              <ListItem disablePadding>
                <ListItemButton component="a" href="/">
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="../components/shop">
                  <ListItemText primary="All" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="../components/bracelet">
                  <ListItemText primary="Bracelet" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="../components/earings">
                  <ListItemText primary="Earrings" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="../components/rings">
                  <ListItemText primary="Rings" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="../components/necklace">
                  <ListItemText primary="Necklace" />
                </ListItemButton>
              </ListItem>
            </List>
          </StyledDrawer>
        )}
      </Box>
      {renderMobileMenu}
      {renderMenu}
    </>
  );
}



























