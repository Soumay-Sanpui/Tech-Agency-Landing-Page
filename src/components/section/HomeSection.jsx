import React from 'react';

const HomeSection = () => {
  return (
    <div className='p-10 w-screen space-y-[3vw] flex flex-col gap-[4vw] items-center'>
      {/* top */}
      <div className='flex items-center w-full px-10'>
        {/* left */}
          <h2 className='text-[3vw] w-[70vw]'>we are the best technology<br />company agency</h2>
        {/* right */}
          <p className='w-[40vw] text-justify text-txt'>We are a full-service digital agency, specializing in modern technology,With the best service and professional people</p>
      </div>
      {/* middle */}
      <div>
        <img src='/hmimg.png'/>
      </div>
    </div>
  );
}

export default HomeSection;
