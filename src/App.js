import React from 'react';
import './App.css';
import MediaCard from './Mediacard';
import OurJourney from './OurJourney';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import { Element } from 'react-scroll';
import MediaCard2 from './Mediacard2';


function App() {
  return (
    <>
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="our-journey">
        <OurJourney />
      </Element>
      <Element name="workshops">
        <MediaCard />
      </Element>
      <Element name="non-tech">
        <MediaCard2 />
      </Element>

      <Footer />
    </>
  );
}

export default App;
