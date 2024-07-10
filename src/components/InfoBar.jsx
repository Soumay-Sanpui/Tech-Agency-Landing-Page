import React from 'react';

const InfoBar = () => {
  return (
      <div className='text-white bg-bkg flex items-center justify-center gap-[7vw] w-screen p-5'>
        <div className='text-center'>
          <h3 className='text-[3vw] font-semibold'>12+</h3>
          <p className='uppercase'>years experience</p>
        </div>
        <div className='text-center'>
          <h3 className='text-[3vw] font-semibold'>1.5K</h3>
          <p className='uppercase'>world wide clients</p>
        </div>
        <div className='text-center'>
          <h3 className='text-[3vw] font-semibold'>18+</h3>
          <p className='uppercase'>partner companies</p>
        </div>
      </div>
  );
}

export default InfoBar;
