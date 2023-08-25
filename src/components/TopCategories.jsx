import React from 'react';
import SingleCategory from './ui/SingleCategory';

const TopCategories = () => {
  return (
    <div className="">
      <h5 className="text-[26px text-dropDownHover font-semibold">
        {' '}
        Top Categories
      </h5>
      <div className="flex flex-col md:flex-row md:justify-evenly md:items-center">
        <SingleCategory></SingleCategory>
        <SingleCategory></SingleCategory>
        <SingleCategory></SingleCategory>
        <SingleCategory></SingleCategory>
        <SingleCategory></SingleCategory>
      </div>
    </div>
  );
};

export default TopCategories;
