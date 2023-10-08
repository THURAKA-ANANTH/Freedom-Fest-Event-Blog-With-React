import React from 'react';
import { AppBar, Toolbar, IconButton, Container, Grid, Typography } from '@mui/material';
import { Facebook, Instagram, Google, Telegram } from '@mui/icons-material';

const Footer = () => {
  return (
    <AppBar position="static" color="primary" style={{ backgroundColor: "black" }}>
      <Container>
        <Toolbar>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <Typography variant="h6" style={{ color: 'white',marginRight:"1rem" }}>
                Follow us on:
              </Typography>
            </Grid>
            <Grid item>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="Facebook"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '32px' }} // Increase icon size
              >
                <Facebook />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                color="inherit"
                aria-label="Instagram"
                href="https://www.instagram.com/swechaap/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '32px' }} // Increase icon size
              >
                <Instagram />
              </IconButton>
            </Grid>
            
            <Grid item>
              <IconButton
                color="inherit"
                aria-label="Telegram"
                href="https://telegram.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '32px' }} // Increase icon size
              >
                <Telegram />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
