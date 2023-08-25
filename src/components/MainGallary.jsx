/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { BiSolidDownArrow } from 'react-icons/bi';
import GallaryItem1 from './ui/GallaryItem1';
import GallaryItem2 from './ui/GallaryItem2';

const MainGallary = () => {
  const [isDown, setDown] = useState(false);
  const handleDropDown = () => {
    setDown(!isDown);
  };

  const gallaryItem1 = [
    {
      image: 'https://i.ibb.co/9qkR7tD/1.png',
      video: false,
    },
    {
      image: 'https://i.ibb.co/s9WvdD3/2.png',
      video: false,
    },
    {
      image: 'https://i.ibb.co/8bgFjpk/3.png',
      video: false,
    },
    {
      image: 'https://i.ibb.co/6YzVftR/4.png',
      video: false,
    },
    {
      image: 'https://i.ibb.co/R3Fxkmf/5.png',
      video: false,
    },
  ];
  const gallaryItem2 = [
    {
      image: 'https://i.ibb.co/gSPyZN0/Rectangle-686-1.png',
      video: false,
    },
    {
      image: 'https://i.ibb.co/jRm1GPV/12.png',
      video: false,
    },
    {
      image: 'https://i.ibb.co/zNkV2ds/13.png',
      video: true,
    },
    {
      image: 'https://i.ibb.co/JQGZPHL/14.png',
      video: false,
    },
    {
      image: ' https://i.ibb.co/7JXLHRg/15.png',
      video: false,
    },
  ];
  return (
    <div className="mt-10">
      <div className="flex flex-wrap justify-center md:justify-between md:items-center  text-menuColor font-semibold">
        <ul className="flex  items-center ">
          <li className=" mx-[10px] cursor-pointer ">
            <a href='#' className="  text-[15px]  hover:text-dropDownHover  ">All</a>
          </li>
          <li className="mx-[10px] cursor-pointer">
            <a  href='#' className="  text-[15px]  hover:text-dropDownHover ">Photos</a>
          </li>
          <li className="mx-[10px] cursor-pointer">
            <a className="  text-[15px]  hover:text-dropDownHover ">Videos</a>
          </li>
          <li className="mx-[10px] cursor-pointer">
            <a className="  text-[15px]  hover:text-dropDownHover ">Freebies</a>
          </li>
          <li className="mx-[10px] cursor-pointer">
            <a className="  text-[15px]  hover:text-dropDownHover ">360</a>
          </li>
        </ul>
        <div>
          {' '}
          <div
            className="hover:text-dropDownHover flex justify-center items-center  cursor-pointer relative "
            onClick={handleDropDown}
          >
            <span>Recomanded</span>
            <BiSolidDownArrow></BiSolidDownArrow>{' '}
            {isDown && (
              <div className="absolute w-[150px] top-[10px] left-[-30%]  text-black bg-white my-2 z-10">
                <ul className=" text-dropDownText text-right">
                  <li className="hover:bg-recommandedHoverColor p-2">
                    <a
                      href="#"
                      className="text-[15px]  hover:text-dropDownHover"
                    >
                      Most Recent
                    </a>
                  </li>
                  <li className="hover:bg-recommandedHoverColor p-2">
                    <a
                      href="#"
                      className=" text-[15px]  hover:text-dropDownHover "
                    >
                      Most Viewed
                    </a>
                  </li>
                  <li className="hover:bg-recommandedHoverColor  p-2">
                    <a
                      href="#"
                      className=" text-[15px]  hover:text-dropDownHover "
                    >
                      Most Downloaded
                    </a>
                  </li>
                  <li className="hover:bg-recommandedHoverColor  p-2">
                    <a
                      href="#"
                      className=" text-[15px]  hover:text-dropDownHover "
                    >
                      Most Appreciated
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-start">
        <div>
          {gallaryItem1.map((item, index) => (
            <GallaryItem1 key={index} item={item}></GallaryItem1>
          ))}
        </div>
        <div>
          {gallaryItem2.map((item, index) => (
            <GallaryItem1 key={index} item={item}></GallaryItem1>
          ))}
        </div>
        <div>
          <GallaryItem2></GallaryItem2>
        </div>
      </div>
    </div>
  );
};

export default MainGallary;
