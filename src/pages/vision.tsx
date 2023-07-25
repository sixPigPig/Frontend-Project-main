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
import Banner2 from '~/image/Banner2.png';
import Banner3 from '~/image/Banner3.png';
import Banner4 from '~/image/Banner4.png';
import Curve3 from '~/image/Curve3.png';
import Logo from '~/image/Logo brand1.svg';

const Vision : NextPage = () => { 
  return (
    <>
      <Head>
        <title>Fishcake-Vision</title>
        <link rel="shortcut icon" type="image/x-icon" href="./image/Fishcake.ico" />
      </Head>
      <div className="flex flex-col relative justify-center items-center w-full bg-slate-100">
        <div className="flex flex-col justify-center items-center py-[150px] max-sm:py-[50px] px-[120px] sm:max-xl:px-[60px] max-sm:px-[30px]">
          <div className='flex flex-row z-[100] justify-center'>
            <div className='animate-bounce animate-infinite animate-duration-[5000ms] animate-ease-in-out flex flex-row justify-between items-center h-full md:max-xl:w-[25%] max-md:w-[18%] max-sm:hidden'>
              <Image src={Logo} alt="Logo" />
            </div>
            <div className='flex flex-col justify-center'>
              <span className='font-semibold text-[130px] md:max-xl:text-[100px] md:max-lg:text-[80px] max-sm:text-[48px] leading-[128px] md:max-lg:leading-[90px] max-sm:leading-[64px] text-primary font-Lo'>Fishcake</span>
              <span className='font-semibold text-[130px] md:max-xl:text-[100px] md:max-lg:text-[80px] max-sm:text-[48px] leading-[128px] md:max-lg:leading-[90px] max-sm:leading-[64px] text-secondary font-Lo'>Scopes</span>
            </div>
          </div>
          <div className=' flex flex-col mt-[5rem] z-[10]'>
            <div className='flex flex-row gap-[40px] max-md:flex-col'>
              <div className='flex flex-col p-12 max-lg:p-4 flex-1 rounded-[2rem] bg-white animate-fade-right animate-once animate-duration-2000 animate-ease-in-out'>
                <div className='flex flex-row justify-center items-center border border-[#F1F3F5] rounded-full py-1 pr-4 pl-1 gap-[10px] w-fit'>
                  <div className='flex justify-center items-center bg-[#FFCB27] rounded-full py-1 px-4'>
                    <span className='font-semibold text-[14px] leading-[22px] max-sm:text-[12px] text-secondary font-Sc'>EXCLUSIVE</span>
                  </div>
                  <span className='font-semibold text-[20px] leading-[28px] max-sm:text-[12px] text-secondary font-Sc'>Rewarding</span>
                </div>
                <div className='flex flex-col mt-4'>
                  <span className='font-semibold text-[60px] md:max-lg:text-[40px] max-sm:text-[25px] leading-[70px] md:max-lg:leading-[50px] max-sm:leading-[40px] text-transparent bg-clip-text bg-gradient-to-r from-start to-end font-Sc'>Fishcake</span>
                  <span className='font-light text-[60px] md:max-lg:text-[40px] max-sm:text-[25px] leading-[70px] md:max-lg:leading-[50px] max-sm:leading-[40px] text-secondary font-Sc'>Rewarding Management</span>
                  <span className='mt-4 pb-6 font-light text-[20px] max-sm:text-[16px] leading-[28px] text-secondary font-Sc'>Fishcake coin as the consensus rewards token in this ecosystem allows instantaneous and secure creation, redemption of tokenized loyalty rewards across programs, vendors, and industries.</span>
                </div>
                <div className='animate-bounce animate-infinite animate-duration-[5000ms] animate-ease-in-out group flex justify-center mt-[40px] max-sm:hidden'>
                  <Image src={Banner2} alt="Banner2" loading='lazy' />
                </div>
              </div>
              <div className='flex flex-col p-12 max-lg:p-4 flex-1 rounded-[2rem] bg-white animate-fade-left animate-once animate-duration-2000 animate-ease-in-out'>
                <div className='flex flex-row justify-center items-center border border-[#FF285A] rounded-full py-1 px-4 gap-[10px] w-fit'>
                  <span className='font-semibold text-[20px] leading-[28px] max-sm:text-[12px] text-primary font-Sc'>Solving Problems</span>
                </div>
                <div className='flex flex-col mt-4'>
                  <span className='font-semibold text-[60px] md:max-lg:text-[40px] max-sm:text-[25px] leading-[70px] md:max-lg:leading-[50px] max-sm:leading-[40px] text-transparent bg-clip-text bg-gradient-to-r from-start to-end font-Sc'>Problems</span>
                  <span className='font-light text-[60px] md:max-lg:text-[40px] max-sm:text-[25px] leading-[70px] md:max-lg:leading-[50px] max-sm:leading-[40px] text-secondary font-Sc'>We&apos;re solving</span>
                  <span className='mt-4 pb-6 font-light text-[20px] max-sm:text-[16px] leading-[28px] text-secondary font-Sc'>We dedicated to leveraging the blockchain web3 technology to help both businesses and consumers benefit from the token incentive economic ecosystem on fishcake.</span>
                </div>
                <div className='animate-bounce animate-infinite animate-duration-[5000ms] animate-ease-in-out flex justify-center mt-[40px] max-sm:hidden'>
                  <Image src={Banner3} alt="Banner3" />
                </div>
              </div>
            </div>
            <div className='flex flex-col mt-[40px] p-12 max-lg:p-4 rounded-[2rem] bg-white animate-fade-up animate-once animate-duration-[5000ms] animate-ease-in-out'>
              <div className='flex flex-row max-lg:flex-col justify-between gap-[60px]'>
                <div className='flex flex-col flex-1 '>
                  <div className='flex flex-row justify-center items-center border border-[#FF285A] rounded-full py-1 px-4 gap-[10px] w-fit'>
                    <span className='font-semibold text-[20px] max-sm:text-[12px] leading-[28px]  text-primary font-Sc'>Bright Ideas</span>
                  </div>
                  <div className='flex flex-col mt-4'>
                    <div className='flex flex-row gap-4'>
                      <span className='font-semibold text-[60px] md:max-lg:text-[40px] max-sm:text-[25px] leading-[70px] md:max-lg:leading-[50px] max-sm:leading-[40px] text-secondary font-Sc'>Our</span>
                      <span className='font-semibold text-[60px] md:max-lg:text-[40px] max-sm:text-[25px] leading-[70px] md:max-lg:leading-[50px] max-sm:leading-[40px] text-transparent bg-clip-text bg-gradient-to-r from-start to-end font-Sc'>Solutions</span>
                    </div>
                    <div className='flex flex-row items-baseline'>
                      <span className='font-normal text-[32px] max-sm:text-[27px] text-primary leading-[56px] max-sm:leading-[48px] font-Sc'>Fishcake geofencing marketing</span>
                    </div>
                    <span className='font-normal text-[20px] max-sm:text-[16px] leading-[28px] text-secondary -Sc'>Fishcake provides all merchants with a free web3 interface to broadcast their token rewarding events to local users on our DAPP,  such direct token incentive marketing could be the most effective way to attract more store foot traffic and foster strong customer bonding!</span>
                  </div>
                </div>
                <div className='animate-bounce animate-infinite animate-duration-[5000ms] animate-ease-in-out flex justify-center items-center flex-1 max-sm:hidden'>
                  <Image src={Banner4} alt="Banner4" />
                </div>
              </div>
            </div>
          </div>
          <div className='absolute left-0 top-0 max-sm:hidden'>
            <Image src={Curve3} alt="Curve3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
