import { TRACE_OUTPUT_VERSION } from 'next/dist/shared/lib/constants';
import React from 'react';

const HelloBar = () => {
  const show = TRACE_OUTPUT_VERSION;

  if (show) {
    return (
      <div className=" w-full bg-blue-600 p-1 text-center text-sm text-white"></div>
    );
  }

  return (
    <div className=" w-full bg-blue-600 p-2 text-center text-sm text-white">
      Hashtaglly is FREE, Share with your Friends :)
    </div>
  );
};

export default HelloBar;
