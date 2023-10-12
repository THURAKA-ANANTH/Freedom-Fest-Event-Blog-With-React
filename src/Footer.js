import React from 'react';
import { AppBar, Toolbar, IconButton, Container, Grid, Typography } from '@mui/material';
import { Instagram, Telegram, Phone } from '@mui/icons-material';

const Footer = () => {
  const phoneNumbers = [
    { number: "630-493-1347 ", label: "G.Yaswanth" },
    { number: "939-277-8527", label: "A.Rahul" },
    { number: "773-089-6829 ", label: "A.Methil Sai" }
  ];

  return (
    <AppBar position="static" color="primary" style={{ backgroundColor: "black" }}>
      <Container>
        <Toolbar>
          <Grid container justifyContent="center" alignItems="center" spacing={2}>
            <Grid item xs={12} sm={6}>
              <Grid container justifyContent="center" alignItems="center" spacing={2}>
                <Grid item>
                  <Typography variant="h6" style={{ color: 'white', marginRight: "1rem" }}>
                    Follow Us On:
                  </Typography>
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
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Grid container justifyContent="center" alignItems="center" spacing={2}>
                <Grid item>
                  <Typography variant="h6" style={{ color: 'white', marginRight: "1rem" }}>
                    Contact Us:
                  </Typography>
                </Grid>
                {phoneNumbers.map((item, index) => (
                  <Grid item xs={12} sm={4} key={index}>
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: "6rem" }}>
                      <IconButton
                        color="inherit"
                        aria-label={item.label}
                        href={`tel:${item.number}`}
                        style={{ fontSize: '32px' }}
                      >
                        <Phone />
                      </IconButton>
                      <Typography variant="body2" style={{ color: 'white'  }}>
                        {item.label}: {item.number}
                      </Typography>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
