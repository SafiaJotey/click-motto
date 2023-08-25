import React from 'react';

const SingleCategory = ({ category }) => {
  return (
    <div className="p-3 md:h-[116px]  cursor-pointer">
      <div className=" relative h-[120px] ">
        {' '}
        <img
          src={category?.image}
          alt=""
          className="  hover:border-main hover:border-2 hover:-z-10 h-[116px] w-full"
        />
        <div className="absolute top-0 bg-main  bg-overlay w-full h-full flex justify-center items-center">
          {' '}
          <p className="text-white text-[24px] z-40">{category?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCategory;
