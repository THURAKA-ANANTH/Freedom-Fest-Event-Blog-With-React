import Button from '@mui/material/Button';
import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LazyLoad from 'react-lazy-load';
import { Link as ScrollLink } from 'react-scroll';
import  { useState, useEffect } from 'react';

const Home = () => {
  const [scrollingNoteVisible, setScrollingNoteVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setScrollingNoteVisible(false);
    }, 15000); // Hide the note after 10 seconds

    return () => clearTimeout(timeout);
  }, []);
  const buttonStyle = {
    backgroundColor: '#fff',
    color: 'black',
    borderRadius: '8px',
    fontWeight: 'bold',
    padding: '10px 30px',
    marginTop: '20px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
  };
  
  const redirectToRazorpay = () => {
    // Redirect to the Razorpay URL when the button is clicked
    window.location.href = 'https://pages.razorpay.com/freedomfestnecg#view-1';
  };

  return (
    <div
      style={{
        background: "#000000",
        background: "-webkit-linear-gradient(to right, #000000, #434343)",
        background: "linear-gradient(to right, #000000, #434343)",
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Container maxWidth="md">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <LazyLoad height={250}>
            <img
              src="images/OpenSourceTree.png"
              alt="Freedom Fest Image"
              style={{
                maxWidth: '100%',
                height: '350px',
                marginBottom: '20px',
              }}
              loading="lazy"
            />
          </LazyLoad>
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
            }}
          >
            <Typography variant="h1" style={{ fontSize: '4rem', fontWeight: 'bold', marginTop: 30 }}>
              Freedom Fest
            </Typography>

            {/* Center the "Held On" Grid */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h3" style={{ fontSize: '1.6rem', fontWeight: 700, color: "yellow" }}>
                Held On: 18th Oct - 19th Oct
              </Typography>
              <Typography variant="h3" style={{ fontSize: '1.6rem', fontWeight: 700, color: "yellow" }}>
                Venue: NEC GUDUR
              </Typography>
            </div>
            <Button variant="contained" style={buttonStyle} onClick={redirectToRazorpay}>
              Register Here
            </Button>

            <ScrollLink to="our-journey" smooth={true} duration={500} offset={-70}>
              <Typography variant="h4" style={{ fontSize: '1.4rem', color: 'silver', marginTop: '20px', cursor: 'pointer' }}>
                Click To Know More
              </Typography>
            </ScrollLink>
          </div>
        </div>
      </Container>

      {scrollingNoteVisible && (
        <div
          id="fee-note"
          className="scrolling-note"
          style={{
            color: 'red', 
          }}
        >
          Note : 200/-  only for all events 
        </div>
      )}
    </div>
  );
};

export default Home;
