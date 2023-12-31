import React, { useState, useEffect } from 'react';
import './App.css'; // Your main app styles
import MediaCard from './Mediacard';
import OurJourney from './OurJourney';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import { Element } from 'react-scroll';
import MediaCard2 from './Mediacard2';
import MediaCard3 from './Mediacard3';
import ButtonSection from './Buttonsection';
import ScheduleTable from './ScheduleTable';

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowPreloader(false);
    }, 2000); // Adjust the delay as needed
  }, []);

  return (
    <>
      {showPreloader ? (
        <div className="preloader-container">
          <div className="preloader"></div>
        </div>
      ) : (
        <>
          <Navbar />
          <Element name="home">
            <Home />
          </Element>
          <Element name="our-journey">
            <OurJourney />
          </Element>
          <ButtonSection/>
          <Element name="schedule">
          <ScheduleTable/>
          </Element>
          <Element name="workshops">
            <MediaCard />
          </Element>
          <Element name="tech">
            <MediaCard2 />
          </Element>
          <Element name="non-tech">
            <MediaCard3 />
          </Element>
          
          
          <Element name="contact">
            <Footer />
          </Element>
          
        </>
      )}
    </>
  );
}

export default App;
