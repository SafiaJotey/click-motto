import React from 'react';
import { AiOutlinePlus, AiTwotoneHeart } from 'react-icons/ai';
import { BiRightArrow } from 'react-icons/bi';
import { HiDownload } from 'react-icons/hi';
import { MdOutline360 } from 'react-icons/md';
import FeatureArtist from './FeatureArtist';

const GallaryItem2 = () => {
  const artists = [
    {
      image: 'https://i.ibb.co/LRpw166/a1.png',
      name: 'Alex',
      description: '5.03M Views',
    },
    {
      image: 'https://i.ibb.co/9vCbjYk/a2.png',
      name: 'Jack',
      description: '4.85M Views',
    },
    {
      image: 'https://i.ibb.co/qdh2zD4/a3.png',
      name: 'Roku Lava',
      description: '4.81M Views',
    },
    {
      image: 'https://i.ibb.co/6RK71Q0/a4.png',
      name: 'Gringo Lee',
      description: '4.14M Views',
    },
    {
      image: 'https://i.ibb.co/6n0ZjGy/a5.png',
      name: ' Jonh Doe',
      description: '3.83M Views',
    },
  ];

  return (
    <div className="flex-col justify-start  ">
      <div className="p-1 flex-col justify-start cursor-pointer ">
        {' '}
        <div className="relative ">
          {' '}
          <img
            src="https://i.ibb.co/LvXXJrs/21.png"
            alt=""
            className="w-full  border-2 border-transparent hover:border-blue-500"
          />
          <div className="absolute top-0  bg-overlay w-full h-full flex-col justify-center p-5 items-start ">
            <h6 className="text-white text-lg">Featured Artists</h6>
            {artists?.map((artist, index) => (
              <FeatureArtist key={index} artist={artist}></FeatureArtist>
            ))}
          </div>
        </div>
      </div>
      <div className="relative flex-col justify-start cursor-pointer">
        {' '}
        <img
          src="https://i.ibb.co/vB4fSDQ/22.png"
          alt=""
          className="w-full  border-2 border-transparent hover:border-blue-500"
        />
        <div className="absolute top-0  bg-overlay w-full h-full flex-col justify-between p-5 items-start ">
          <div className="flex justify-end">
            <div className="p-1 bg-recommandedHoverColor rounded-full mx-1">
              {' '}
              <AiTwotoneHeart className="text-md text-menuColor"></AiTwotoneHeart>
            </div>{' '}
            <div className="p-1 bg-recommandedHoverColor rounded-full">
              {' '}
              <AiOutlinePlus className="text-md  text-menuColor"></AiOutlinePlus>
            </div>
          </div>
          <div className="flex justify-between items-center my-[270px] md:my-[320px] ">
            <div className="flex justify-center items-center ">
              <img
                src="https://i.ibb.co/fFKRs65/photo-1507965613665-5fbb4cbb8399-1.png"
                className="rounded-full border-2 border-blue-600"
                alt=""
              ></img>
              <p className="text-white mx-2">Goku</p>
            </div>
            <div className="bg-bgDownload p-2 rounded-full flex justify-center items-center">
              <HiDownload className="text-md text-white"></HiDownload>
            </div>
          </div>
        </div>
      </div>
      <div className="p-1 relative flex-col justify-start cursor-pointer">
        {' '}
        <img
          src="https://i.ibb.co/brSHmHJ/23.png"
          alt=""
          className="w-full  border-2 border-transparent hover:border-blue-500"
        />
        <div className="absolute flex-col justify-center items-center top-[40%] right-[40%] text-white p-3 rounded-full">
          <span className="text-2xl ">360</span>
          <MdOutline360 className="text-3xl"></MdOutline360>
        </div>
      </div>
      <div className="p-1 relative flex-col justify-start cursor-pointer">
        {' '}
        <img
          src="https://i.ibb.co/r7C9QQB/24.png"
          alt=""
          className="w-full  border-2 border-transparent hover:border-blue-500"
        />
        <div className="absolute top-[40%] right-[40%]  bg-transparent border-2 border-white p-1 md:p-3 rounded-full">
          <BiRightArrow className="text-2xl text-white"></BiRightArrow>
        </div>
      </div>
      <div className="p-1 relative flex-col justify-start cursor-pointer">
        {' '}
        <img
          src="https://i.ibb.co/XFc5Vcc/25.png"
          alt=""
          className="w-full  border-2 border-transparent hover:border-blue-500"
        />
      </div>
    </div>
  );
};

export default GallaryItem2;
