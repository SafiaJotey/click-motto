import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import SingleCategory from './ui/SingleCategory';

const TopCategories = () => {
  const topCategories = [
    {
      name: 'Workspace',
      image: 'https://i.ibb.co/C8PTG3m/workspace.png',
    },
    {
      name: 'Summer',
      image: 'https://i.ibb.co/ZmhM2wc/summer.png',
    },
    {
      name: 'City',
      image: 'https://i.ibb.co/f4ZCCXr/city.png',
    },
    {
      name: 'Food',
      image: 'https://i.ibb.co/ZGbBRxF/food.png',
    },
    {
      name: 'Gravity',
      image: 'https://i.ibb.co/VHn1vDb/gravity.png',
    },
  ];

  return (
    <div className="">
      <h5 className="text-[26px] text-dropDownHover font-semibold">
        {' '}
        Top Categories
      </h5>
      <div className="md:relative">
        <div className="flex flex-col  md:flex-row md:justify-evenly md:items-center">
          {topCategories.map((category, index) => (
            <SingleCategory key={index} category={category}></SingleCategory>
          ))}
        </div>
        <div className="hidden md:flex absolute top-[50%] right-5 bg-white p-2 rounded-full">
          <BsArrowRight className="font-bold "></BsArrowRight>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
