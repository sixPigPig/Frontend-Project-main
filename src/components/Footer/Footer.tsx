
import { NextPage } from 'next';
import React from 'react';

const Footer: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full bg-slate-100 absolute">
      <div className='flex px-[120px] sm:max-xl:px-[60px] max-sm:px-[30px] py-[20px] w-full'>
        <div className='flex flex-row justify-between w-full'>
          <div className='flex flex-row gap-8'>
            <span className='font-normal text-[16px] leading-[32px] text-secondary font-Inter hover:cursor-pointer'>Terms & Conditions</span>
            <span className='font-normal text-[16px] leading-[32px] text-secondary font-Inter hover:cursor-pointer'>Privacy Policy</span>
          </div>
          <span className='font-normal text-[16px] leading-[32px] text-secondary font-Inter'>© 2023 Fishcake Inc.</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
