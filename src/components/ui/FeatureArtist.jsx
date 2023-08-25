import React from 'react';

const FeatureArtist = ({ artist }) => {
  return (
    <div className="flex justify-start m-3 items-center">
      <div className="w-8 h-8 md:w-16 md:h-16 border-2 border-white hover:border-blue-600 rounded-full">
        {' '}
        <img src={artist?.image} alt="" />
      </div>
      <div className="text-white mx-2">
        <h5 className="font-semibold text-[18px]">{artist?.name}</h5>
        <p className="text-[12px]">{artist?.description}</p>
      </div>
    </div>
  );
};

export default FeatureArtist;
