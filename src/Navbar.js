import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink

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

  return (
    <AppBar position="fixed" color="primary" sx={{ backgroundColor: 'black',maxHeight: '100vh' }}>
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: '#00df9a', fontWeight: 1000 }}>
          NECG SLC
        </Typography>
        {isMobileScreen() ? (
          <IconButton onClick={handleNav}>
            {nav ? (
              <CloseIcon color="inherit" onClick={handleCloseNav} />
            ) : (
              <MenuIcon sx={{ color: '#fff', marginRight:3 }} />
            )}
          </IconButton>
        ) : (
          <List
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexDirection: 'row',
              alignItems: 'center',
              gap: '24px',
              marginLeft: 'auto',
            }}
          >
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
            <ScrollLink to="workshops" spy={true} smooth={true} offset={-70} duration={500}>
              <ListItem button>
                <ListItemText primary="Workshops" />
              </ListItem>
            </ScrollLink>
            <ScrollLink to="non-tech" spy={true} smooth={true} offset={-70} duration={500}>
              <ListItem button>
                <ListItemText primary="Non-Technical Events" />
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
          <ScrollLink to="workshops" spy={true} smooth={true} offset={-70} duration={500}>
            <ListItem button>
              <ListItemText primary="Workshops" />
            </ListItem>
          </ScrollLink>
          <ScrollLink to="non-tech" spy={true} smooth={true} offset={-70} duration={500}>
            <ListItem button>
              <ListItemText primary="Non-Technical Events" />
            </ListItem>
          </ScrollLink>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
