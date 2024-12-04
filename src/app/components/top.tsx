import React from 'react';
import { ImMobile } from "react-icons/im";

function Top() {
  return (
    <div className='w-[90%] h-[15px] flex justify-between items-center border-b border-gray-700 px-0 py-8 mx-auto  '>
      {/* Left Section */}
      <div className='flex items-center'>
        <ImMobile className='text-red-800 text-3xl' />
        <p className='text-2xl text-white ml-2'>Download App via SMS</p>
      </div>

      {/* Right Section */}
      <div className='flex items-center'>
        <ul className='flex divide-x-2 divide-gray-300'>
          <li className='text-red-800 font-semibold text-2xl px-2'>اردو</li>
          <li className='text-white text-2xl px-2'>Sign Up</li>
          <li className='text-white text-2xl px-2'>Sign In</li>
        </ul>
      </div>
    </div>
  );
}

export default Top;
