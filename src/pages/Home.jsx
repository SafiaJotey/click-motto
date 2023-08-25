import React from 'react';
import Gallery from '../components/GallerySection';
import Banner from '../components/ui/Banner';
import Navbar from '../components/ui/Navbar';

const Home = () => {
  return (
    <div className="container">
      <Navbar></Navbar>
      <Banner></Banner>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
