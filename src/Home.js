import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#00df9a', color: 'white', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
      <Container maxWidth="md">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <img
            src="https://www.itsecurityguru.org/wp-content/uploads/2015/10/hosting-dens-free-website_development.png"
            alt="Freedom Fest Image"
            style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }}
          />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h1" style={{ fontSize: '4rem', fontWeight: 'bold' }}>
              Freedom Fest
            </Typography>
            <Grid container alignItems="center">
              <Typography variant="h3" style={{ fontSize: '1.6rem', fontWeight: 700,color:"#000" }}>
              Open source is a development methodology; free software is a social movement.
              </Typography>
              
            </Grid>
            
            <Button variant="contained" style={{ backgroundColor: '#fff', color: 'black', borderRadius: '8px', fontWeight: 'bold', padding: '10px 30px', marginTop: '20px' }}>
              Get Started
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
