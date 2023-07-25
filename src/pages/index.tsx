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
import Link from 'next/link';
import Banner1 from '~/image/Banner1.png';
import Curve1 from '~/image/Curve1.png';
import Curve2 from '~/image/Curve2.png';
import Apple from '~/image/Apple.png';
import Google from '~/image/Google.png';
import Phone from '~/image/Phone.png';
import Phone1 from '~/image/Phone2.png';
import Playstore from '~/image/PlayStore.svg';
import Appstore from '~/image/AppStore.svg';
import Download from '~/image/Download.svg';
import Start from '~/image/Start.svg';

const Home : NextPage = () => { 
  return (
    <>
      <Head>
        <title>Fishcake</title>
        <link rel="shortcut icon" type="image/x-icon" href="./image/Fishcake.ico" />
      </Head>
      <div className="flex w-full ">
        <div className='flex flex-row px-[120px] sm:max-xl:px-[60px] max-sm:px-[30px] mt-[70px] max-md:mt-[40px]'>
          <div className='flex flex-col items-start'>
            <div className='flex flex-col mt-[64px] animate-fade-up animate-once animate-duration-[800ms] animate-ease-in'>
              <div className='flex flex-row items-center'>
                <span className='font-semibold text-[80px] leading-[90px] max-md:text-[40px] max-md:leading-[50px] text-transparent bg-clip-text bg-gradient-to-r from-start to-end font-Sc'>Fishcake</span>
                <span className='font-normal text-[80px] leading-[90px] max-md:text-[40px] max-md:leading-[50px] text-secondary font-Scr'>-make</span>
              </div>
              <span className='font-normal text-[80px] leading-[90px] max-md:text-[40px] max-md:leading-[50px] text-secondary font-Scr'>Token Values Real</span>
            </div>
            <div className='animate-fade-up animate-once animate-duration-[800ms] animate-ease-in flex flex-col mt-1 w-[56%] sm:max-lg:w-[70%] max-sm:w-[90%]'>
              <span className='font-light text-[24px] max-sm:text-[20px] xl:leading-[32px] text-secondary font-Scr'>
                Fishcake is commited to advancing the web3 protocols that enable users to engage in marketing and incentivization on the blokchain frictionlessly and transparently! We&apos;re building Groupon and Meetup of the web3 era.
              </span>
            </div>
            <div className='flex flex-row justify-between mt-12 w-[50%] lg:w-[65%] md:max-lg:w-[70%] max-sm:flex-col max-sm:items-center max-sm:w-full max-sm:justify-center max-sm:gap-4'>
              <div className='flex flex-row justify-between gap-4'>
                <div className='flex items-center justify-center -space-x-6'>
                  <div className='p-2 bg-[#E4E7EB] border border-[#E4E7EB] rounded-full bg-gradient-to-b from-end to-start'>
                    <Image src={Download} alt="Download" />
                  </div>
                  <div className='p-2 bg-white border border-[#E4E7EB] rounded-full'>
                    <Image src={Playstore} alt="Playtore" />
                  </div>
                  <div className='p-2 bg-white border border-[#E4E7EB] rounded-full'>
                    <Image src={Appstore} alt="Appstore" />
                  </div>
                </div>
                <div className='flex flex-col'>
                  <span className='animate-jump animate-infinite animate-duration-[5000ms] animate-ease-in-out font-semibold text-[28px] text-primary leading-[26px] max-sm:text-[18px] font-Sc'>20,000+</span>
                  <span className='font-semibold text-[18px] leading-[24px] max-sm:text-[18px] text-secondary font-Sc'>Downloads</span>
                </div>
              </div>
              <Link href="https://www.youtube.com/watch?v=jw87JoNp5T8" target="_blank">
                <button type="button" className='hover:animate-bounce hover:animate-infinite hover:animate-duration-1000 hover:animate-ease-out w-max flex flex-row justify-center items-center bg-white gap-[10px] py-3 pl-3 pr-6 border border-[#E4E7EB] rounded-full hover:cursor-pointer '>
                  <Image src={Start} alt="Start" />
                  <span className='font-semibold text-[16px] leading-[22.4px] text-secondary font-SC'>How it works</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className='animate-jump-in animate-once animate-duration-1000 animate-ease-in-out animate-normal animate-fill-forwards right-0 absolute z-[-1] mt-[70px] max-md:mt-[40px]'>
          <Image src={Banner1} alt="Banner1" loading="lazy" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full bg-primary mt-[180px] max-md:mt-[40px]">
        <div className="flex flex-row justify-center w-full pt-[90px] max-md:pt-[30px]">
          <div className='flex flex-row justify-between w-full px-[120px] sm:max-xl:px-[60px] max-sm:px-[30px] gap-4'>
            <div className='flex flex-row -space-x-48 ml-[5rem] max-2xl:ml-0 z-[100] -mt-[50px] xl:w-[60%] flex-1 max-sm:hidden'>
              <Image className='sm:max-lg:w-[85%]' src={Phone} alt="Phone" />
              <Image className='sm:max-lg:hidden' src={Phone1} alt="Phone1" />
            </div>
            <div className='flex flex-col flex-1 max-sm:items-center'>
              <div className='flex flex-col justify-center max-sm:items-center'>
                <span className='font-semibold text-[48px] max-xl:text-[30px] leading-[56px] max-xl:leading-[40px] font-Sc text-white'>Fishcake DAPP</span>
                <span className='font-light text-[48px] max-xl:text-[29px] leading-[56px] max-xl:leading-[40px] font-Sc text-white'>Download, Earn Early</span>
                <span className='font-light text-[48px] max-xl:text-[30px] leading-[56px] max-xl:leading-[40px] font-Sc text-white'>Stage User Rewards!</span>
                <span className='font-medium text-[18px] leading-[28px] font-Sc text-white mt-4'>Our beta version APP is coming!</span>
                <span className='font-medium text-[18px] leading-[28px] font-Sc text-white'>Download Fishcake APP for Android and Apple.</span>
              </div>
              <div className='flex flex-row  items-center mt-12 gap-[1rem] max-md:pb-[20px]'>
                <Link href="https://play.google.com/store/games?hl=en_US&gl=US" target="_blank">
                  <Image className='animate-jump animate-infinite animate-duration-[5000ms] animate-ease-in-out hover:cursor-pointer hover:scale-110"' src={Google} alt="Google" />
                </Link>
                <Link href="https://play.google.com/store/apps?hl=en_US&gl=US&pli=1" target="_blank">
                  <Image className='animate-jump animate-infinite animate-duration-[5000ms] animate-ease-in-out hover:cursor-pointer hover:scale-110"' src={Apple} alt="Apple" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute left-0 max-sm:hidden'><Image src={Curve1} alt="Curve1" /></div>
        <div className='absolute right-0 -mt-[35px] max-sm:hidden'><Image src={Curve2} alt="Curve2" /></div>
      </div>
    </>
  );
};

export default Home;
