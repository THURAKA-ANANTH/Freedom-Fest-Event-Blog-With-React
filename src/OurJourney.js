import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography, IconButton } from '@mui/material';
import LazyLoad from 'react-lazy-load';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const images = [
  'images/photo1697127465 (1).webp',
  'images/photo1697127465.webp',
  'images/photo1697127655.webp',
  'images/photo1697127786.webp',
  'images/photo1697127884.webp',
  'images/photo1697127955.webp',
  'images/photo1697127980.webp',
  'images/1A551B06-DD02-47F3-8F6A-7B2D6EDE5993 (1).webp',
  'images/2D7EB9F1-52BF-4D50-ACFC-35472F37EDCE.webp',
  'images/93EF14F1-053B-4B90-8CD8-381D203C4F2A.webp',
  'images/IMG_7370.webp',
  'images/IMG_7507.webp',
  'images/IMG_9094.webp',
];

const OurJourney = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  const imageContainerStyle = {
    position: 'relative',
  };

  const imageStyle = {
    width: '100%', // Adjust the image size as needed
    height: 'auto',
  };

  const arrowContainerStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    
  };


  return (
    <Box maxWidth={600} mx="auto" sx={{ marginBottom: "50px" }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 700, marginTop: 2 }} gutterBottom>
        Our Journey
      </Typography>
      <Box style={imageContainerStyle}>
        <IconButton  className="arrow-container" onClick={handlePrevSlide} style={{ ...arrowContainerStyle, left: '0' }}>
          <ArrowBackIcon />
        </IconButton>
        <LazyLoad height={320} key={currentSlide}>
          <img
            src={images[currentSlide]}
            alt={`Image ${currentSlide + 1}`}
            title={`Image ${currentSlide + 1}`}
            loading="lazy"
            style={imageStyle}
          />
        </LazyLoad>
        <IconButton className="arrow-container"onClick={handleNextSlide} style={{ ...arrowContainerStyle, right: '0' }}>
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default OurJourney;