import React from 'react';
import { AppBar, Toolbar, IconButton, Container, Grid, Typography } from '@mui/material';
import {  Instagram, Telegram, Phone } from '@mui/icons-material';

const Footer = () => {
  return (
    <AppBar position="static" color="primary" style={{ backgroundColor: "black" }}>
      <Container>
        <Toolbar>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <Typography variant="h6" style={{ color: 'white', marginRight: "1rem" }}>
                Follow us on:
              </Typography>
            </Grid>
            <Grid item>
            </Grid>
            <Grid item>
              <IconButton
                color="inherit"
                aria-label="Instagram"
                href="https://www.instagram.com/swechaap/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '32px' }}
              >
                <Instagram />
              </IconButton>
            </Grid>

            <Grid item>
              <IconButton
                color="inherit"
                aria-label="Telegram"
                href="https://t.me/freedomfest2023"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '32px' }}
              >
                <Telegram />
              </IconButton>
            </Grid>

            <Grid item>
              <Typography variant="h6" style={{ color: 'white', marginLeft: "1rem" }}>
                Contact Us: 
              </Typography>
            </Grid>
            <Grid item>
              <IconButton
                color="inherit"
                aria-label="Phone"
                href="tel:7730896829" // Replace with your phone number
                style={{ fontSize: '32px' }}
              >
                <Phone />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
