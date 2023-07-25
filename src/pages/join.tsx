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
import Logo from '~/image/Logo.png';
import Curve8 from '~/image/Curve8.png';
import Apple1 from '~/image/Apple1.png';
import Google1 from '~/image/Google1.png';
import Discord from '~/image/Discord.png';
import Youtube from '~/image/Youtube.png';
import Twitter from '~/image/Twitter.png';
import Arrow from '~/image/Arrow.svg';
import Curve6 from '~/image/Curve6.png';
import Curve7 from '~/image/Curve7.png';

const Join : NextPage = () => {  
  return(
    <>
      <Head>
        <title>Fishcak-Join Us</title>
        <link rel="shortcut icon" type="image/x-icon" href="./image/Fishcake.ico" />
      </Head>      
      <div className="relative flex flex-col justify-center items-center w-full bg-white">
        <div className='flex flex-row px-[120px] sm:max-xl:px-[60px] max-sm:px-[30px] max-sm:py-[50px] py-[100px]'>
          <div className='flex flex-row max-md:flex-col gap-[120px] max-xl:gap-[20px] justify-between'>
            <div className='flex flex-col w-[30%] xl:w-[40%] md:max-lg:w-[45%] max-md:w-full'>
              <div className='flex flex-row items-center'>
                <Image src={Logo} alt="Logo" />
              </div>
              <span className='mt-4 font-normal text-[16px] leading-[24px] text-secondary font-Sc'>Fishcake is committed to advancing the web3 protocols that enable users to engage in marketing and incentivization on the blockchain frictionlessly and transparently! We’re building  Groupon and Meetup of the web3 era.</span>
              <div className='flex flex-col mt-8 gap-2 w-fit'>
                <Link href="https://discord.com/fishcake" target="_blank">
                  <div className='flex flex-row bg-[#F9F9FB] p-2 gap-2 rounded-full items-center'>
                    <Image src={Discord} alt="Discord" />
                    <div className='flex flex-col'>
                      <span className='text-[16px] leading-[24px] font-Sc text-secondary font-normal'>Discord</span>
                      <span className='text-[12px] leading-[18px] font-Sc text-secondary font-normal'>Join The Community - Contribute & Earn</span>
                    </div>
                  </div>
                </Link>
                <Link href="https://twitter.com/fishcake" target="_blank">
                  <div className='flex flex-row bg-[#F9F9FB] p-2 gap-2 rounded-full items-center'>
                    <Image src={Twitter} alt="Twitter" />
                    <div className='flex flex-col'>
                      <span className='text-[16px] leading-[24px] font-Sc text-secondary font-normal'>Twitter</span>
                      <span className='text-[12px] leading-[18px] font-Sc text-secondary font-normal'>keep Posted On Fishcake News</span>
                    </div>
                  </div>
                </Link>
                <Link href="https://www.youtube.com/watch?v=jw87JoNp5T8" target="_blank">
                  <div className='flex flex-row bg-[#F9F9FB] p-2 gap-2 rounded-full items-center'>
                    <Image src={Youtube} alt="Youtube" />
                    <div className='flex flex-col'>
                      <span className='text-[16px] leading-[24px] font-Sc text-secondary font-normal'>Youtube</span>
                      <span className='text-[12px] leading-[18px] font-Sc text-secondary font-normal'>Learn More Of Fishcake Ecosystem</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className='flex flex-col py-8 px-12 max-sm:p-4 rounded-[2rem] bg-[#F9F9FB] z-[10] w-[53%] max-md:w-full'>
              <span className='font-semibold text-[48px] xl:text-[40px] md:max-lg:text-[32px] max-sm:text-[22px] leading-[56px] max-lg:leading-[40px] text-transparent bg-clip-text bg-gradient-to-r from-start to-end font-Sc'>Fishcake DAPP</span>
              <span className='font-light text-[48px] xl:text-[40px] md:max-lg:text-[32px] max-sm:text-[22px] leading-[56px] max-lg:leading-[40px] text-secondary font-Sc'>Download & Earn Early Stage User Rewards!</span>
              <span className='mt-4 font-medium text-[18px] leading-[28px] text-secondary font-Sc'>Our beta version APP is coming!</span>
              <span className='font-medium text-[18px] leading-[28px] text-secondary font-Sc'>Download Fishcake APP for Android and Apple.</span>
              <div className='mt-8 flex flex-row  items-center gap-4'>
                <Link href="https://play.google.com/store/games?hl=en_US&gl=US" target="_blank">
                  <Image className='animate-jump animate-infinite animate-duration-[5000ms] animate-ease-in-out hover:cursor-pointer' src={Google1} alt="Google1" />
                </Link>
                <Link href="https://play.google.com/store/apps?hl=en_US&gl=US&pli=1" target="_blank">
                  <Image className='animate-jump animate-infinite animate-duration-[5000ms] animate-ease-in-out hover:cursor-pointer' src={Apple1} alt="Apple1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute right-0 bottom-0 max-sm:hidden'>
          <Image src={Curve8} alt="Curve8" />
        </div>
      </div>
      <div className='flex flex-col w-full px-[120px] sm:max-xl:px-[60px] max-sm:px-[30px] pb-[100px]'>
        <div className='relative flex flex-col w-full justify-center items-center py-[80px] px-[300px] max-2xl:px-[150px] max-md:px-[20px] max-md:py-[20px] z-[100] bg-gradient-to-t from-start to-end rounded-3xl'>
          <span className='font-medium text-[48px] md:max-xl:text-[40px] max-sm:text-[18px] leading-[56px] max-sm:leading-[32px] text-white text-center font-Sc]'>Join Community and keep posted on earing!</span>
          <Link href="/#">
            <div className='animate-shake animate-infinite animate-duration-[5000ms] animate-ease-in-out flex flex-row justify-center items-center revert bg-white mt-12 md:max-lg:mt-8 max-sm:mt-4 gap-4 py-2 pl-8 pr-6 rounded-full hover:cursor-pointer '>
              <span className='font-semibold text-[16px] leading-[22.4px] text-secondary font-SC'>Join Now</span>
              <div className='p-2 bg-primary rounded-full'>
                <Image src={Arrow} alt="Arrow" />
              </div>
            </div>
          </Link>
          <div className='absolute left-0 bottom-0 max-sm:hidden'>
            <Image src={Curve6} alt="Curve6" />
          </div>
          <div className='absolute right-0 top-0 -z-[10] max-sm:hidden'>
            <Image src={Curve7} alt="Curve7" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Join;
