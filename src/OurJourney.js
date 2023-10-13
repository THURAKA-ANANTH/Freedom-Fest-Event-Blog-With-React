import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography, IconButton, CircularProgress } from '@mui/material';
import LazyLoad from 'react-lazy-load';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const images = [
  'images/WhatsApp Image 2023-10-13 at 2.01.59 PM.jpeg',
  'images/photo1697127465.jpeg',
  'images/photo1697127465 (1).jpeg',
  'images/WhatsApp Image 2023-10-13 at 8.30.57 AM.jpeg',
  'images/WhatsApp Image 2023-10-13 at 2.15.56 PM.jpeg',
  'images/WhatsApp Image 2023-10-13 at 2.16.16 PM.jpeg',
  'images/WhatsApp Image 2023-10-13 at 8.29.48 AM.jpeg',
];

const OurJourney = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const image = new Image();
    image.src = images[currentSlide];
    image.onload = () => {
      setIsLoading(false);
    };
  }, [currentSlide]);

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

  // Handle the case where navigator.connection is not available
  const isSlowNetwork =
    navigator.connection &&
    (navigator.connection.effectiveType === 'slow-2g' || navigator.connection.effectiveType === '2g');

  return (
    <Box maxWidth={600} mx="auto" sx={{ marginBottom: '50px' }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 700, marginTop: 2 }} gutterBottom>
        Our Journey
      </Typography>
      <Box style={imageContainerStyle}>
        <IconButton className="arrow-container" onClick={handlePrevSlide} style={{ ...arrowContainerStyle, left: '0' }}>
          <ArrowBackIcon />
        </IconButton>
        <LazyLoad height={320} key={currentSlide}>
          {isSlowNetwork ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '320px' }}>
              <CircularProgress sx={{ color: 'black' }} />
            </div>
          ) : isLoading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '320px' }}>
              <CircularProgress sx={{ color: 'black' }} />
            </div>
          ) : (
            <img
              src={images[currentSlide]}
              alt={`Image ${currentSlide + 1}`}
              title={`Image ${currentSlide + 1}`}
              loading="lazy"
              style={imageStyle}
            />
          )}
        </LazyLoad>
        <IconButton className="arrow-container" onClick={handleNextSlide} style={{ ...arrowContainerStyle, right: '0' }}>
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default OurJourney;
