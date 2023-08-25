import React from 'react';
import { BsSearch } from 'react-icons/bs';

const Banner = () => {
  return (
    <div className="bg-hero pt-2 ">
      {' '}
      <div className="bg-overlay  w-full py-[212px] flex justify-center items-center">
        <div className="flex-col w-[75%] justify-center items-center">
          {' '}
          <h3 className="text-[22px] md:text-[44px] text-white text-center font-semibold">
            Your local source of high quality images and videos directly from
            their creators
          </h3>
          <div className="flex items-center bg-white  border rounded-full my-3 p-4">
            <input
              type="text"
              placeholder="Search photos and videos"
              className="border-none focus:ring-0 outline-none w-full"
            />
            <button className="text-gray-600">
              <BsSearch />
            </button>
          </div>
          <p className="text-[14px] md:text-[18px] mx-5 my-3 text-white">
            Recommended:Summer, food, covid-19, real estate, love
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
