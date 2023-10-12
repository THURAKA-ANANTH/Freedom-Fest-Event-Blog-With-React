import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import { Link as ScrollLink } from 'react-scroll';

const Home = () => {
  return (
    <div style={{ background: "#000000", background: "-webkit-linear-gradient(to right, #000000, #434343)", background: "linear-gradient(to right, #000000, #434343)", color: 'white', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <Container maxWidth="md">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <img
            src="images/OpenSourceTree.png"
            alt="Freedom Fest Image"
            
            style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }}
          />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h1" style={{ fontSize: '4rem', fontWeight: 'bold' }}>
              Freedom Fest
            </Typography>

            {/* Center the "Held On" Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h3" style={{ fontSize: '1.6rem', fontWeight: 700, color: "yellow" }}>
                Held On: 18th Oct - 19th Oct
              </Typography>
              <Typography variant="h3" style={{ fontSize: '1.6rem', fontWeight: 700, color: "yellow" }}>
                Venue: NEC GUDUR
              </Typography>
            </div>

            <ScrollLink to="our-journey" spy={true} smooth={true} offset={-70} duration={500}>
              <Button variant="contained" style={{ backgroundColor: '#fff', color: 'black', borderRadius: '8px', fontWeight: 'bold', padding: '10px 30px', marginTop: '20px' }}>
                Get Started
              </Button>
            </ScrollLink>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
