
import { NextPage } from 'next';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Logo from '~/image/Logo.png';

const Header: NextPage = () => {
  const router = useRouter();
  const [show, onShowMenu] = useState(false);
  const onMenuShow = () => {
    onShowMenu(!show);
  };
  return (
    <div className="flex flex-col justify-center items-center border border-b-[1px] px-[120px] sm:max-xl:px-[60px] max-sm:px-[30px] py-8 w-full gap-[2rem]">
      <div className='flex flex-row max-md:flex-col justify-between items-center gap-[3rem] max-xl:gap-[1rem] z-[100] w-full'>
        <div className='flex justify-between items-center w-full'>
          <Link href='/'><Image src={Logo} alt="Logo" /></Link>
          <button type="button" onClick={onMenuShow} className="lg:hidden inline-flex items-center justify-center p-2 border border-[#323f4b] rounded-md hover:cursor-pointer focus:bg-gray-200 transition duration-150 ease-in-out">
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" stroke='#323f4b' strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className='flex flex-row'>
          <ul className="max-lg:hidden flex justify-between flex-row gap-y-2">
            <li>
              <Link href="/">
                <button type="button" className="group text-center xl:px-8 md:max-xl:px-3 py-2 text-secondary hover:cursor-pointer">
                  <span className={`font-medium text-[16px] leading-[20px] font-Inter group-hover:text-primary ${router.pathname === '/' ? 'text-primary' : ''}`}>Home</span>
                </button>
              </Link>
            </li>
            <li>
              <Link href="/vision">
                <button type="button" className="group text-center xl:px-8 md:max-xl:px-3 py-2 text-secondary hover:cursor-pointer">
                  <span className={`font-medium text-[16px] leading-[20px] font-Inter group-hover:text-primary ${router.pathname === '/vision' ? 'text-primary' : ''}`}>Vision</span>
                </button>
              </Link>
            </li>
            <li>
              <Link href="/token">
                <button type="button" className="group text-center xl:px-8 md:max-xl:px-3 py-2 text-secondary hover:cursor-pointer">
                  <span className={`font-medium text-[16px] leading-[20px] font-Inter group-hover:text-primary ${router.pathname === '/token' ? 'text-primary' : ''}`}>Tokenomics</span>
                </button>
              </Link>
            </li>
            <li>
              <Link href="/roadmap">
                <button type="button" className="group text-center xl:px-8 md:max-xl:px-3 py-2 text-secondary hover:cursor-pointer">
                  <span className={`font-medium text-[16px] leading-[20px] font-Inter group-hover:text-primary ${router.pathname === '/roadmap' ? 'text-primary' : ''}`}>Roadmap</span>
                </button>
              </Link>
            </li>
            <li>
              <Link href="/join">
                <button type="button" className="w-max group text-center xl:px-8 md:max-xl:px-3 py-2 text-secondary hover:cursor-pointer">
                  <span className={`font-medium text-[16px] leading-[20px] font-Inter group-hover:text-primary ${router.pathname === '/join' ? 'text-primary' : ''}`}>Join Us</span>
                </button>
              </Link>
            </li>
            <li>
              <Link href="/guide">
                <button type="button" className="group text-center xl:px-8 md:max-xl:px-3 py-2 text-secondary hover:cursor-pointer">
                  <span className={`font-medium text-[16px] leading-[20px] font-Inter group-hover:text-primary ${router.pathname === '/guide' ? 'text-primary' : ''}`}>Guide</span>
                </button>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <button type="button" className="w-max group text-center xl:px-8 md:max-xl:px-3 py-2 text-secondary hover:cursor-pointer">
                  <span className={`font-medium text-[16px] leading-[20px] font-Inter group-hover:text-primary ${router.pathname === '/guide' ? 'text-primary' : ''}`}>About US</span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
        {show && <div className='md:hidden flex flex-col justify-center items-center w-full'>
          <ul className="flex justify-center items-center flex-col gap-y-2 w-full">
            <li className='w-full'>
              <Link href="/">
                <div className="group text-center xl:px-8 md:px-2 md:max-xl:px-4 py-2 text-secondary hover:cursor-pointer border border-[#323F4B] rounded-lg">
                  <span className={`font-medium text-[16px] leading-[20px] font-Inter group-hover:text-primary ${router.pathname === '/' ? 'text-primary' : ''}`}>Home</span>
                </div>
              </Link>
            </li>
            <li className='w-full'>
              <Link href="/vision">
                <div className="group text-center xl:px-8 md:px-2 md:max-xl:px-4 py-2 text-secondary hover:cursor-pointer border border-[#323F4B] rounded-lg">
                  <span className={`font-medium text-[16px] leading-[20px] font-Inter group-hover:text-primary ${router.pathname === '/vision' ? 'text-primary' : ''}`}>Vision</span>
                </div>
              </Link>
            </li>
            <li className='w-full'>
              <Link href="/token">
                <div className="group text-center xl:px-8 md:px-2 md:max-xl:px-4 py-2 text-secondary hover:cursor-pointer border border-[#323F4B] rounded-lg">
                  <span className={`font-medium text-[16px] leading-[20px] font-Inter group-hover:text-primary ${router.pathname === '/token' ? 'text-primary' : ''}`}>Tokenomics</span>
                </div>
              </Link>
            </li>
            <li className='w-full'>
              <Link href="/roadmap">
                <div className="group text-center xl:px-8 md:px-2 md:max-xl:px-4 py-2 text-secondary hover:cursor-pointer border border-[#323F4B] rounded-lg">
                  <span className={`font-medium text-[16px] leading-[20px] font-Inter group-hover:text-primary ${router.pathname === '/roadmap' ? 'text-primary' : ''}`}>Roadmap</span>
                </div>
              </Link>
            </li>
            <li className='w-full'>
              <Link href="/join">
                <div className="group text-center xl:px-8 md:px-2 md:max-xl:px-4 py-2 text-secondary hover:cursor-pointer border border-[#323F4B] rounded-lg">
                  <span className={`font-medium text-[16px] leading-[20px] font-Inter group-hover:text-primary ${router.pathname === '/join' ? 'text-primary' : ''}`}>Join Us</span>
                </div>
              </Link>
            </li>
            <li className='w-full'>
              <Link href="/guide">
                <div className="group text-center xl:px-8 md:px-2 md:max-xl:px-4 py-2 text-secondary hover:cursor-pointer border border-[#323F4B] rounded-lg">
                  <span className={`font-medium text-[16px] leading-[20px] font-Inter group-hover:text-primary ${router.pathname === '/guide' ? 'text-primary' : ''}`}>Guide</span>
                </div>
              </Link>
            </li>
            <li className='w-full'>
              <Link href="/about">
                <div className="group text-center xl:px-8 md:px-2 md:max-xl:px-4 py-2 text-secondary hover:cursor-pointer border border-[#323F4B] rounded-lg">
                  <span className={`font-medium text-[16px] leading-[20px] font-Inter group-hover:text-primary ${router.pathname === '/guide' ? 'text-primary' : ''}`}>About us</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>}
      </div>
      
    </div>
  );
};

export default Header;
