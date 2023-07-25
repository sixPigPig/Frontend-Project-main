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
import Token1 from '~/image/Token1.png';
import Token2 from '~/image/Token2.png';
import Token3 from '~/image/Token3.png';
import Token4 from '~/image/Token4.png';
import Token5 from '~/image/Token5.png';
import Token6 from '~/image/Token6.png';
import Token7 from '~/image/Token7.png';
import Curve4 from '~/image/Curve4.png';
import Avatar1 from '~/image/Avatar1.png';
import Avatar2 from '~/image/Avatar2.png';
import Avatar3 from '~/image/Avatar3.png';
import Avatar4 from '~/image/Avatar4.png';

const Token : NextPage = () => {  
  return (
    <>
      <Head>
        <title>Fishcake-Tokenomics</title>
        <link rel="shortcut icon" type="image/x-icon" href="./image/Fishcake.ico" />
      </Head>
      <div className="relative flex flex-col justify-center items-center w-full bg-secondary">
        <div className="flex flex-col justify-center w-full max-lg:py-[50px] px-[120px] py-[150px] sm:max-xl:px-[60px] max-sm:px-[30px] z-10">
          <div className='flex flex-row justify-between max-md:flex-col max-md:items-center max-md:gap-8'>
            <div className='flex flex-col'>
              <div className='flex flex-row gap-4'>
                <span className='font-semibold text-[80px] max-:text-[65px] md:max-lg:text-[45px] sm:max-md:text-[40px] max-sm:text-[25px] text-[#FFCB27] leading-[103px] md:max-lg:leading-[80px] max-md:leading-[64px] font-Sc'>FCC Token</span>
                <span className='font-medium text-[80px] max-xl:text-[65px] md:max-lg:text-[45px] sm:max-md:text-[40px] max-sm:text-[25px] leading-[103px] md:max-lg:leading-[80px] max-md:leading-[64px] text-white font-Sc'>Vesting</span>
              </div>
              <span className='font-medium text-[80px] max-xl:text-[65px] md:max-lg:text-[43px] sm:max-md:text-[40px] max-sm:text-[25px] leading-[103px] md:max-lg:leading-[80px] max-md:leading-[64px] text-white font-Sc'>With Total Supply Up</span>
              <div className='flex flex-row justify-center items-center gap-8 md:max-lg:gap-4 w-fit'>
                <span className='font-medium text-[80px] max-xl:text-[65px] md:max-lg:text-[45px] sm:max-md:text-[40px] max-sm:text-[25px] leading-[103px] md:max-lg:leading-[80px] max-md:leading-[64px] text-white font-Sc'>To</span>
                <div className='md:max-lg:px-4 max-md:px-2 px-8 md:max-lg:py-2 py-4 max-md:py-2 bg-primary rounded-full'>
                  <span className='font-semibold text-[56px] sm:max-lg:text-[38px] max-sm:text-[29px] leading-[64px] text-white max-md:leading-[40px] font-Sc'>1,000,000,000</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col w-min animate-jump animate-infinite animate-duration-[5000ms] animate-ease-in-out max-sm:w-full'>
              <div className='flex items-center justify-center -space-x-3'>
                <Image src={Avatar1} alt="Avatar1" />
                <Image src={Avatar2} alt="Avatar2" />
                <Image src={Avatar3} alt="Avatar3" />
                <Image src={Avatar4} alt="Avatar4" />
              </div>
              <span className='font-semibold text-[48px] text-primary max-sm:text-[24px] leading-[64px] max-sm:leading-[32px] mt-8 font-Sc'>350,000+</span>
              <span className='font-medium text-[18px] text-white leading-[32px]  font-Sc'>FCC Token Supply are claimed by the users</span>
            </div>
          </div>
          <div className='flex flex-col mt-[100px] '>
            <div className='flex flex-row max-md:flex-col justify-between gap-8'>
              <div className='hover:animate-jump hover:animate-once hover:animate-duration-[2000ms] hover:animate-ease-in-out flex flex-col max-md:flex-row max-md:justify-center p-8 max-md:p-4 md:max-lg:p-2 bg-[#FCBA06] rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-[4rem] rounded-bl-[8rem] max-md:rounded-bl-[4rem] flex-1 hover:cursor-pointer'>
                <div className='flex flex-col'>
                  <div className='flex flex-row justify-between w-full items-center'>
                    <span className='font-semibold text-[80px] max-xl:text-[47px] text-white leading-[90px] font-Sc'>5%</span>
                    <div className='group p-2 hover:cursor-pointer rounded-full bg-[#444444] hover:bg-white h-fit'>
                      <svg className='stroke-white group-hover:stroke-[#444] w-[69px] h-[68px] max-lg:w-[32px] max-lg:h-[32px]'  viewBox="0 0 69 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.6552 21.213H47.4542M47.4542 21.213V41.012M47.4542 21.213L21.9983 46.6688" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <span className='font-light text-[40px] md:max-lg:text-[32px] max-sm:text-[24px] text-white leading-[56px] max-md:leading-[40px] mt-2 font-Sc'>50,000,000</span>
                  <span className='font-light text-[24px] text-white leading-[32px] max-sm:text-[18px] mt-2 font-Sc'>Teams & Advisors</span>
                </div>
                <div className='mt-2 max-md:hidden'>
                  <Image src={Token1} alt="Token1" />
                </div>
              </div>
              <div className='hover:animate-jump hover:animate-once hover:animate-duration-[2000ms] hover:animate-ease-in-out flex flex-col max-md:flex-row max-md:justify-center p-8 max-md:p-4 md:max-lg:p-2 bg-[#FF285A] rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-[4rem] rounded-bl-[8rem] max-md:rounded-bl-[4rem] flex-1 hover:cursor-pointer'>
                <div className='flex flex-col'>
                  <div className='flex flex-row justify-between w-full items-center'>
                    <span className='font-semibold text-[80px] max-xl:text-[47px] text-white leading-[90px] font-Sc'>5%</span>
                    <div className='group p-2 hover:cursor-pointer rounded-full bg-[#444444] hover:bg-white h-fit'>
                      <svg className='stroke-white group-hover:stroke-[#444] w-[69px] h-[68px] max-lg:w-[32px] max-lg:h-[32px]'  viewBox="0 0 69 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.6552 21.213H47.4542M47.4542 21.213V41.012M47.4542 21.213L21.9983 46.6688" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <span className='font-light text-[40px] md:max-lg:text-[32px] max-sm:text-[24px] text-white leading-[56px] max-md:leading-[40px] mt-2 font-Sc'>50,000,000</span>
                  <span className='font-light text-[24px] text-white leading-[32px] max-sm:text-[18px] mt-2 font-Sc'>Early Stages User Air Drop.</span>
                </div>
                <div className='mt-2 max-md:hidden'>
                  <Image src={Token2} alt="Token2" />
                </div>
              </div>
              <div className='hover:animate-jump hover:animate-once hover:animate-duration-[2000ms] hover:animate-ease-in-out flex flex-col max-md:flex-row max-md:justify-center p-8 max-md:p-4 md:max-lg:p-2 bg-[#5CE72B] rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-[4rem] rounded-bl-[8rem] max-md:rounded-bl-[4rem] flex-1 hover:cursor-pointer'>
                <div className='flex flex-col'>
                  <div className='flex flex-row justify-between w-full items-center'>
                    <span className='font-semibold text-[80px] max-xl:text-[47px] text-white leading-[90px] font-Sc'>10%</span>
                    <div className='group p-2 hover:cursor-pointer rounded-full bg-[#444444] hover:bg-white h-fit'>
                      <svg className='stroke-white group-hover:stroke-[#444] w-[69px] h-[68px] max-lg:w-[32px] max-lg:h-[32px]'  viewBox="0 0 69 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.6552 21.213H47.4542M47.4542 21.213V41.012M47.4542 21.213L21.9983 46.6688" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <span className='font-light text-[40px] md:max-lg:text-[32px] max-sm:text-[24px] text-white leading-[56px] max-md:leading-[40px] mt-2 font-Sc'>100,000,000</span>
                  <span className='font-light text-[24px] text-white leading-[32px] max-sm:text-[18px] mt-2 font-Sc'>Community, Ecosystem, Early Events Support</span>
                </div>
                <div className='mt-2 max-md:hidden'>
                  <Image src={Token3} alt="Token3" />
                </div>
              </div>
            </div>
            <div className='flex flex-row max-md:flex-col justify-between gap-8 mt-8'>
              <div className='hover:animate-jump hover:animate-once hover:animate-duration-[2000ms] hover:animate-ease-in-out flex flex-col max-md:flex-row max-md:justify-center p-8 max-md:p-4 md:max-lg:p-2 bg-[#3013E4] rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-[4rem] rounded-bl-[8rem] max-md:rounded-bl-[4rem] flex-1 hover:cursor-pointer'>
                <div className='flex flex-col'>
                  <div className='flex flex-row justify-between w-full items-center'>
                    <span className='font-semibold text-[80px] max-xl:text-[47px] text-white leading-[90px] font-Sc'>15%</span>
                    <div className='group p-2 hover:cursor-pointer rounded-full bg-[#444444] hover:bg-white h-fit'>
                      <svg className='stroke-white group-hover:stroke-[#444] w-[69px] h-[68px] max-lg:w-[32px] max-lg:h-[32px]'  viewBox="0 0 69 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.6552 21.213H47.4542M47.4542 21.213V41.012M47.4542 21.213L21.9983 46.6688" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <span className='font-light text-[40px] md:max-lg:text-[32px] max-sm:text-[24px] text-white leading-[56px] max-md:leading-[40px] mt-2 font-Sc'>150,000,000</span>
                  <span className='font-light text-[24px] text-white leading-[32px] max-sm:text-[18px] mt-2 font-Sc'>Seed and Private Investors</span>
                </div>
                <div className='mt-2 max-md:hidden'>
                  <Image src={Token4} alt="Token4" />
                </div>
              </div>
              <div className='hover:animate-jump hover:animate-once hover:animate-duration-[2000ms] hover:animate-ease-in-out flex flex-col max-md:flex-row max-md:justify-center p-8 max-md:p-4 md:max-lg:p-2 bg-[#23E9DD] rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-[4rem] rounded-bl-[8rem] max-md:rounded-bl-[4rem] flex-1 hover:cursor-pointer'>
                <div className='flex flex-col'>
                  <div className='flex flex-row justify-between w-full items-center'>
                    <span className='font-semibold text-[80px] max-xl:text-[47px] text-white leading-[90px] font-Sc'>30%</span>
                    <div className='group p-2 hover:cursor-pointer rounded-full bg-[#444444] hover:bg-white h-fit'>
                      <svg className='stroke-white group-hover:stroke-[#444] w-[69px] h-[68px] max-lg:w-[32px] max-lg:h-[32px]'  viewBox="0 0 69 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.6552 21.213H47.4542M47.4542 21.213V41.012M47.4542 21.213L21.9983 46.6688" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <span className='font-light text-[40px] md:max-lg:text-[32px] max-sm:text-[24px] text-white leading-[56px] max-md:leading-[40px] mt-2 font-Sc'>300,000,000</span>
                  <span className='font-light text-[24px] text-white leading-[32px] max-sm:text-[18px] mt-2 font-Sc'>Public Sale</span>
                </div>
                <div className='mt-2 max-md:hidden'>
                  <Image src={Token5} alt="Token5" />
                </div>
              </div>
              <div className='hover:animate-jump hover:animate-once hover:animate-duration-[2000ms] hover:animate-ease-in-out flex flex-col max-md:flex-row max-md:justify-center p-8 max-md:p-4 md:max-lg:p-2 bg-[#E14919] rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-[4rem] rounded-bl-[8rem] max-md:rounded-bl-[4rem] flex-1 hover:cursor-pointer z-[10]'>
                <div className='flex flex-col'>
                  <div className='flex flex-row justify-between w-full items-center'>
                    <span className='font-semibold text-[80px] max-xl:text-[47px] text-white leading-[90px] font-Sc'>35%</span>
                    <div className='group p-2 hover:cursor-pointer rounded-full bg-[#444444] hover:bg-white h-fit'>
                      <svg className='stroke-white group-hover:stroke-[#444] w-[69px] h-[68px] max-lg:w-[32px] max-lg:h-[32px]'  viewBox="0 0 69 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.6552 21.213H47.4542M47.4542 21.213V41.012M47.4542 21.213L21.9983 46.6688" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <span className='font-light text-[40px] md:max-lg:text-[32px] max-sm:text-[24px] text-white leading-[56px] max-md:leading-[40px] mt-2 font-Sc'>350,000,000</span>
                  <span className='font-light text-[24px] text-white leading-[32px] max-sm:text-[18px] mt-2 font-Sc'>Treasury For Future Development</span>
                </div>
                <div className='mt-2 max-md:hidden'>
                  <Image src={Token6} alt="Token6" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 max-md:grid-cols-1 gap-8 mt-8">
              <div className='flex flex-row max-md:flex-col'>
                <div className='hover:animate-jump hover:animate-once hover:animate-duration-[2000ms] hover:animate-ease-in-out flex flex-col max-md:flex-row max-md:justify-center p-8 max-md:p-4 md:max-lg:p-2 bg-[#2E2E2E] rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-[4rem] rounded-bl-[8rem] max-md:rounded-bl-[4rem] w-full'>
                  <div className='flex justify-center items-center'>
                    <div className='group p-2 hover:cursor-pointer rounded-full bg-[#444444] hover:bg-white w-fit'>
                      <svg className='stroke-white group-hover:stroke-[#444] w-[69px] h-[68px] max-lg:w-[32px] max-lg:h-[32px]'  viewBox="0 0 69 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.6552 21.213H47.4542M47.4542 21.213V41.012M47.4542 21.213L21.9983 46.6688" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                  <div className='mt-2 max-md:hidden'>
                    <Image src={Token7} alt="Token7" />
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div className='right-0 bottom-0 absolute max-sm:hidden'>
          <Image src={Curve4} alt="Curve4" />
        </div>
      </div>
    </>
  );
};

export default Token;
