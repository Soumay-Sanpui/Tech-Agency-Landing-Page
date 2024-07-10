import React from 'react';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-around p-6'>
      <div>
        <img src="/logo.png"/>
      </div>
      <div className='flex items-center justify-center gap-4'>
        {
          ["Home", "Service", "Client", "Contact", "About Us"].map((link,index)=>(
            <a key={index} className='hover:text-primary cursor-pointer'>{link}</a>
          ))
        }
      </div>
      <div>
        <button className='text-white bg-primary p-4 px-6'>Get Started</button>
      </div>
    </nav>
  );
}

export default Navbar;
