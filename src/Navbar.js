import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleCloseNav = () => {
    setNav(false);
  };

  const isMobileScreen = () => {
    return window.innerWidth < 600;
  };
  const redirectToRazorpay = () => {
    // Redirect to the Razorpay URL when the button is clicked
    window.location.href = 'https://pages.razorpay.com/freedomfestnecg#view-1';
  };

  return (
    <AppBar position="fixed" color="primary" sx={{ backgroundColor: 'white', maxHeight: '100vh' }}>
      <Toolbar>
        <div style={{ width: '100px', height: 'auto', marginRight: 'auto' }}>
          <img alt="NECG SLC Logo" src="images/swecha.png" style={{ width: '100%', height: '100%' }} loading='lazy' />
        </div>
        {isMobileScreen() ? (
          <>
            <IconButton onClick={nav ? handleCloseNav : handleNav} sx={{ color: 'black', marginLeft: 'auto' }}>
              {nav ? (
                <CloseIcon color="inherit" />
              ) : (
                <MenuIcon sx={{ marginRight: 2 }} />
              )}
            </IconButton>
          
          </>
        ) : (
          <List
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'row',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            <ScrollLink to="home" spy={true} smooth={true} offset={-70} duration={500}>
              <ListItem button>
                <ListItemText primary="Home" sx={{ color: "black" }} />
              </ListItem>
            </ScrollLink>
            <ScrollLink to="our-journey" spy={true} smooth={true} offset={-70} duration={500}>
            <ListItem button>
              <ListItemText primary="Our Journey" sx={{color:"black"}}/>
            </ListItem>
          </ScrollLink>
          <ScrollLink to="workshops" spy={true} smooth={true} offset={-70} duration={500}>
            <ListItem button>
              <ListItemText primary="Workshops" sx={{color:"black"}}/>
            </ListItem>
          </ScrollLink>
          <ScrollLink to="tech" spy={true} smooth={true} offset={-70} duration={500}>
            <ListItem button>
              <ListItemText primary="Technical Events" sx={{color:"black"}}/>
            </ListItem>
          </ScrollLink>
          <ScrollLink to="non-tech" spy={true} smooth={true} offset={-70} duration={500}>
            <ListItem button>
              <ListItemText primary="Literary Events" sx={{color:"black"}}/>
            </ListItem>
          </ScrollLink>
          <ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={500}>
            <ListItem button>
              <ListItemText primary="Contact Us" sx={{color:"black"}}/>
            </ListItem>
          </ScrollLink>
          </List>
        )}
      </Toolbar>

      <Drawer anchor="right" open={nav} onClose={handleCloseNav} sx={{ '& .MuiDrawer-paper': { width: '60%' } }}>
        <List>
          <ListItem button onClick={handleCloseNav}>
            <ListItemIcon>
              <CloseIcon />
            </ListItemIcon>
          </ListItem>
          <ScrollLink to="home" spy={true} smooth={true} offset={-70} duration={500}>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
          </ScrollLink>
          <ScrollLink to="our-journey" spy={true} smooth={true} offset={-70} duration={500}>
            <ListItem button>
              <ListItemText primary="Our Journey" />
            </ListItem>
          </ScrollLink>
          <ScrollLink to="workshops" spy={true} smooth={true} offset={-50} duration={500}>
            <ListItem button>
              <ListItemText primary="Workshops" />
            </ListItem>
          </ScrollLink>
          <ScrollLink to="tech" spy={true} smooth={true} offset={-50} duration={500}>
            <ListItem button>
              <ListItemText primary="Technical Events" />
            </ListItem>
          </ScrollLink>
          <ScrollLink to="non-tech" spy={true} smooth={true} offset={-50} duration={500}>
            <ListItem button>
              <ListItemText primary="Literary Events" />
            </ListItem>
          </ScrollLink>
          <ScrollLink to="contact" spy={true} smooth={true} offset={-50} duration={500}>
            <ListItem button>
              <ListItemText primary="Contact Us" />
            </ListItem>
          </ScrollLink>

        </List>
        
      </Drawer>
    </AppBar>
  );
};

export default Navbar;

