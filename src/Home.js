import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LazyLoad from 'react-lazy-load';
import { Link as ScrollLink } from 'react-scroll';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import './HeroSection.css';

const Home = () => {
  const [scrollingNoteVisible, setScrollingNoteVisible] = useState(true);
  const [registrationClosed, setRegistrationClosed] = useState(false);

  useEffect(() => {
    const now = new Date();
    const registrationEndDate = new Date('2023-10-16T23:59:00'); // Set the end date to 16th midnight

    const timeout = setTimeout(() => {
      setScrollingNoteVisible(false);

      if (now > registrationEndDate) {
        // Set registrationClosed to true if the registration is closed
        setRegistrationClosed(true);
      }
    }, 2000000); // Hide the note after 20 seconds

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
    const registrationEndDate = new Date('2023-10-16T23:59:00'); // Set the end date to 16th midnight

    if (new Date() > registrationEndDate) {
      // Show a popup message
      setRegistrationClosed(true);
      return;
    }

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
                height: '330px',
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
            <Typography variant="h1" style={{ fontSize: '3.5rem', fontWeight: 'bold', marginTop: 25 }}>
              Freedom Fest
            </Typography>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="h3" style={{ fontSize: '1.5rem', fontWeight: 600, color: "yellow" }}>
                Held On: 18th Oct & 19th Oct
              </Typography>
              <Typography variant="h3" style={{ fontSize: '1.5rem', fontWeight: 600, color: "yellow" }}>
                Venue: NEC GUDUR
              </Typography>
            </div>
            <Button variant="contained" style={buttonStyle} onClick={redirectToRazorpay}>
              Register Here
            </Button>

            <ScrollLink to="our-journey" smooth={true} duration={500} offset={-70}>
              <Typography variant="h4" style={{ fontSize: '1.4rem', color: 'silver', marginTop: '15px', cursor: 'pointer' }}>
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
            color: '#00FF00',
          }}
        >
          Fee: 200/- only for all events
        </div>
      )}

      <Snackbar open={registrationClosed} autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} style={{ marginTop: '50px' }}>
        <MuiAlert
          elevation={2}
          variant="filled"
          severity="warning"
          onClose={() => setRegistrationClosed(false)}
        >
          Registration is closed.
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default Home;
