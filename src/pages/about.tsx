/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Jason from '~/image/Jason.jpg';
import James from '~/image/James.jpg';
import Tim from '~/image/Tim.jpg';
import Michola from '~/image/Michola.jpg';
import Joachim from '~/image/Joachim.jpg';
import Zhen from '~/image/Zhen.jpg';
import Jia from '~/image/Jia.jpg';

const Home : NextPage = () => { 
  return (
    <>
      <Head>
        <title>Fishcake-Team</title>
        <link rel="shortcut icon" type="image/x-icon" href="./image/Fishcake.ico" />
      </Head>
      <div className="flex flex-col w-full justify-center">
        <div className='flex flex-col justify-center items-center px-[120px] sm:max-xl:px-[60px] max-sm:px-[30px] mt-[70px] max-md:mt-[40px]'>
          <span className='font-semibold text-[48px] leading-[64px] text-Sc text-[#323F4B] animate-pulse animate-once animate-duration-[2000ms] animate-ease-in-out'>Meet the Team</span>
          <span className='font-medium text-[24px] leading-[36px] text-Sc text-transparent bg-clip-text bg-gradient-to-r from-start to-end'>Blockchain Lovers and Web3 Enthusiasts</span>
          <span className='font-medium text-[16px] leading-[24px] text-Sc mt-4 text-[#323F4B]'>Get to know talented individuals behind our innovative fishcake app.</span>
          <span className='font-medium text-[16px] leading-[24px] text-Sc w-[65%] text-center text-[#323F4B]'>Our team is comprised of blockchain lovers and Web3 enthusiasts who share a common passion for breaking barriers in blockchain technology.</span>
        </div>
        <div className='flex flex-col px-[120px] sm:max-xl:px-[60px] mt-16 pb-[70px]'>
          <div className='flex flex-row justify-center'>
            <div className='flex flex-col items-center justify-center hover:animate-bounce hover:animate-infinite hover:animate-duration-[2000ms] hover:animate-ease-in-out hover:cursor-pointer'>
              <Image src={Jason} alt='Jason' className="w-32 rounded-full drop-shadow-[0_15px_15px_rgba(0,0,0,0.35)] border-[#323F4B] border-[1px]"/>
              <span className='mt-4 font-medium text-[16px] leading-[24px] text-Sc text-center text-[#323F4B]'>Jason An</span>
              <span className='font-medium text-[14px] leading-[20px] text-Sc text-center text-transparent bg-clip-text bg-gradient-to-r from-start to-end'>Founder & CEO</span>
            </div>
          </div>
          <div className='flex flex-row justify-between mt-16'>
            <div className='flex flex-col items-center justify-center flex-1 hover:animate-bounce hover:animate-infinite hover:animate-duration-[2000ms] hover:animate-ease-in-out hover:cursor-pointer'>
              <Image src={Tim} alt='Tim' className="w-32 rounded-full drop-shadow-[0_15px_15px_rgba(0,0,0,0.35)] border-[#323F4B] border-[1px] "/>
              <span className='mt-4 font-medium text-[16px] leading-[24px] text-Sc text-center text-[#323F4B]'>Tim</span>
              <span className='font-medium text-[14px] leading-[20px] text-Sc text-center text-transparent bg-clip-text bg-gradient-to-r from-start to-end'>Mobile Enginner</span>
            </div>
            <div className='flex flex-col items-center justify-center flex-1 hover:animate-bounce hover:animate-infinite hover:animate-duration-[2000ms] hover:animate-ease-in-out hover:cursor-pointer'>
              <Image src={Joachim} alt='Joachim' className="w-32 rounded-full drop-shadow-[0_15px_15px_rgba(0,0,0,0.35)] border-[#323F4B] border-[1px]"/>
              <span className='mt-4 font-medium text-[16px] leading-[24px] text-Sc text-center text-[#323F4B]'>Joachim Zhao</span>
              <span className='font-medium text-[14px] leading-[20px] text-Sc text-center text-transparent bg-clip-text bg-gradient-to-r from-start to-end'>Backend Engineer</span>
            </div>
            <div className='flex flex-col items-center justify-center flex-1 hover:animate-bounce hover:animate-infinite hover:animate-duration-[2000ms] hover:animate-ease-in-out hover:cursor-pointer'>
              <Image src={Michola} alt='Michola' className="w-32 rounded-full drop-shadow-[0_15px_15px_rgba(0,0,0,0.35)] border-[#323F4B] border-[1px]"/>
              <span className='mt-4 font-medium text-[16px] leading-[24px] text-Sc text-center text-[#323F4B]'>Andrew Michols</span>
              <span className='font-medium text-[14px] leading-[20px] text-Sc text-center text-transparent bg-clip-text bg-gradient-to-r from-start to-end'>Web3 Enginner</span>
            </div>
          </div>
          <div className='flex flex-row justify-between mt-16'>
            <div className='flex flex-col items-center justify-center flex-1 hover:animate-bounce hover:animate-infinite hover:animate-duration-[2000ms] hover:animate-ease-in-out hover:cursor-pointer'>
              <Image src={James} alt='James' className="w-32 rounded-full drop-shadow-[0_15px_15px_rgba(0,0,0,0.35)] border-[#323F4B] border-[1px]"/>
              <span className='mt-4 font-medium text-[16px] leading-[24px] text-Sc text-center text-[#323F4B]'>James Jam</span>
              <span className='font-medium text-[14px] leading-[20px] text-Sc text-center text-transparent bg-clip-text bg-gradient-to-r from-start to-end'>Web3 Enginner</span>
            </div>
            <div className='flex flex-col items-center justify-center flex-1 hover:animate-bounce hover:animate-infinite hover:animate-duration-[2000ms] hover:animate-ease-in-out hover:cursor-pointer'>
              <Image src={Zhen} alt='Zhen' className="w-32 rounded-full drop-shadow-[0_15px_15px_rgba(0,0,0,0.35)] border-[#323F4B] border-[1px]"/>
              <span className='mt-4 font-medium text-[16px] leading-[24px] text-Sc text-center text-[#323F4B]'>周建伟</span>
              <span className='font-medium text-[14px] leading-[20px] text-Sc text-center text-transparent bg-clip-text bg-gradient-to-r from-start to-end'>Web3 Engineer</span>
            </div>
            <div className='flex flex-col items-center justify-center flex-1 hover:animate-bounce hover:animate-infinite hover:animate-duration-[2000ms] hover:animate-ease-in-out hover:cursor-pointer'>
              <Image src={Jia} alt='Jia' className="w-32 rounded-full drop-shadow-[0_15px_15px_rgba(0,0,0,0.35)] border-[#323F4B] border-[1px]"/>
              <span className='mt-4 font-medium text-[16px] leading-[24px] text-Sc text-center text-[#323F4B]'>Jia Wang</span>
              <span className='font-medium text-[14px] leading-[20px] text-Sc text-center text-transparent bg-clip-text bg-gradient-to-r from-start to-end'>Frontend Engineer</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
