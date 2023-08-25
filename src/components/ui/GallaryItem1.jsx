import React from 'react';
import { BiRightArrow } from 'react-icons/bi';

const GallaryItem1 = ({ item }) => {
  return (
    <div className="flex-col justify-start  ">
      <div className="p-1 relative flex-col justify-start cursor-pointer">
        {' '}
        <img
          src={item?.image}
          alt=""
          className="w-full  border-2 border-transparent hover:border-blue-500"
        />
        {item?.video && (
          <div className="absolute top-[40%] right-[40%]  bg-transparent border-2 border-white p-1 md:p-3 rounded-full">
            <BiRightArrow className="text-2xl text-white"></BiRightArrow>
          </div>
        )}
      </div>
    </div>
  );
};

export default GallaryItem1;
