import React from 'react';
import MainGallary from './MainGallary';
import TopCategories from './TopCategories';

const GallerySection = () => {
  return (
    <div className=" w-full ">
      <div className="bg-white md:mt-[-80px] p-5 w-[80%] mx-auto">
        {' '}
        <TopCategories></TopCategories>
        <MainGallary></MainGallary>
      </div>
    </div>
  );
};

export default GallerySection;
