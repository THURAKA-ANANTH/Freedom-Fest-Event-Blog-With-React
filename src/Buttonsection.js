import React from 'react';
import { Box, Button } from '@mui/material';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
const ButtonSection = () => {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          '@media (min-width: 600px)': {
            flexDirection: 'row',
            marginTop: '100px',
            gap: '100px', // Add gap between components for screens wider than 600px
          },
          '@media (max-width: 600px)': {
            gap: '10px', // Add gap between components for screens narrower than 600px (mobile)
          },
        }}
      >
        <Link to="workshops" spy={true} smooth={true} offset={-50} duration={500}>
          <Button
            variant="contained"
            sx={{
              width: ['150px', '250px'],
              height: '50px',
              fontWeight: 'bold',
              bgcolor: 'silver',
              color: 'black',
              fontFamily: '"Gill Sans", sans-serif',
            }}
          >
            Workshops
          </Button>
        </Link>
        <Link to="tech" spy={true} smooth={true} offset={-70} duration={500}>
          <Button
            variant="contained"
            sx={{
              width: ['150px', '250px'],
              height: '50px',
              fontWeight: 'bold',
              bgcolor: 'silver',
              color: 'black',
              fontFamily: '"Gill Sans", sans-serif',
            }}
          >
            Technical Events
          </Button>
        </Link>
        <Link to="non-tech" spy={true} smooth={true} offset={-70} duration={500}>
          <Button
            variant="contained"
            sx={{
              width: ['150px', '250px'],
              height: '50px',
              fontWeight: 'bold',
              bgcolor: 'silver',
              color: 'black',
              fontFamily: '"Gill Sans", sans-serif',
            }}
          >
            Literary Events
          </Button>
        </Link>
      </Box>
    );
  };
  
  export default ButtonSection;
  