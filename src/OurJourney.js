import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Card, CardMedia, Box, Typography } from '@mui/material';
import LazyLoad from 'react-lazy-load';
import './InfiniteImageSlider.css'; // Import a custom CSS file for styling

const images = [
  
  'images/1A551B06-DD02-47F3-8F6A-7B2D6EDE5993 (1).webp',
  'images/2D7EB9F1-52BF-4D50-ACFC-35472F37EDCE.webp',
  'images/93EF14F1-053B-4B90-8CD8-381D203C4F2A.webp',
  'images/1.avif',
  'images/99DEDC5E-7754-44F3-A5AA-26CEB129BDD3.webp',
  'images/B1F8610F-0A7A-4BDF-A0C6-0B87574D490F.webp',
  'images/IMG_7370.webp',
  'images/IMG_7507.webp',
  'images/IMG_9094.webp'
];

const OurJourney = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds (e.g., 3 seconds)
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <Box maxWidth={600} mx="auto" sx={{marginBottom:"50px"}}>
      {/* Add the main heading */}
      <Typography variant="h4" align="center" sx={{ fontWeight: 700, marginTop: 2 }} gutterBottom>
        Our Journey
      </Typography>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <LazyLoad height={300}>
              <Card>
                <CardMedia
                  component="img"
                  alt={`Image ${index + 1}`}
                  height="100%"
                  width="100%"
                  image ={image}
                  title={`Image ${index + 1}`}
                  loading="lazy"
                />
              </Card>
            </LazyLoad>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default OurJourney;
