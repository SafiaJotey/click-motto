import React from 'react';
import TopCategories from './TopCategories';


const Gallery = () => {
  return (
    <div className=" w-full ">
      <div className="bg-white md:mt-[-80px] p-5 w-[80%] mx-auto">
        {' '}
        <TopCategories></TopCategories>
      </div>
    </div>
  );
};

export default Gallery;
