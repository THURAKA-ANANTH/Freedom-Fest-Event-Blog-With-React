import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography } from '@mui/material';
import LazyLoad from 'react-lazy-load';
import './InfiniteImageSlider.css'; // Import a custom CSS file for styling

const images = [
  'images/1A551B06-DD02-47F3-8F6A-7B2D6EDE5993 (1).webp',
  'images/2D7EB9F1-52BF-4D50-ACFC-35472F37EDCE.webp',
  'images/93EF14F1-053B-4B90-8CD8-381D203C4F2A.webp',
  'images/IMG_7370.webp',
  'images/IMG_7507.webp',
  'images/IMG_9094.webp',
];

const OurJourney = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <Box maxWidth={600} mx="auto" sx={{ marginBottom: "50px" }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 700, marginTop: 2 }} gutterBottom>
        Our Journey
      </Typography>
      <Slider {...settings}>
        {images.map((image, index) => (
          <LazyLoad height={320} key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              title={`Image ${index + 1}`}
              loading="lazy"
              style={{ width: '100%', height: '100%' }}
            />
          </LazyLoad>
        ))}
      </Slider>
    </Box>
  );
};

export default OurJourney;
