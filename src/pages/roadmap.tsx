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
import Banner6 from '~/image/Banner6.png';
import Curve5 from '~/image/Curve5.png';
import RoStart from '~/image/Ro-Start.png';
import RoEnd from '~/image/Ro-End.png';
import Check from '~/image/Check.png';
import Logo from '~/image/Logo brand.svg';

const Roadmap : NextPage = () => {  
  return (
    <>
      <Head>
        <title>Fishcake-Roadmap</title>
        <link rel="shortcut icon" type="image/x-icon" href="./image/Fishcake.ico" />
      </Head>
      <div className="flex flex-col justify-center items-center w-full bg-white px-[120px] sm:max-xl:px-[60px] max-sm:px-[30px]">
        <div className='flex flex-col w-full z-[100]'>
          <div className='flex flex-col items-center pt-[100px]'>
            <span className='font-medium text-[80px] md:max-lg:text-[64px] leading-[90px] md:max-lg:leading-[72px] font-Sc'>Fishcake coin 2023</span>
            <div className='flex flex-row gap-4 items-end'>
              <span className='font-bold text-[80px] md:max-lg:text-[64px] leading-[90px] md:max-lg:leading-[72px] text-transparent bg-clip-text bg-gradient-to-t from-start to-end font-Sc'>Roadmap</span>
              <Image src={Logo} alt="Logo"/>
            </div>
          </div>
        </div>
        <div className='relative flex flex-col pb-[300px] z-[100]'>
          <div className='flex flex-row'>
            <div className='flex flex-col items-center z-[100]'>
              <div className='flex flex-row'>
                <div className="flex items-center mt-[100px]">
                  <div className='flex flex-col items-center -mt-[70px]'>
                    <div className='flex flex-row items-center'>
                      <Image src={RoStart} alt="RoStart" className='w-[32px] h-[32px]'/>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-row items-center'>
                      <div className="h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]" />
                      <Image src={Check} alt="Check" className='w-[32px] h-[32px]' />
                      <div className="h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]" />
                    </div>
                    <div className='flex flex-col mt-[12px] items-center'>
                      <span className='font-medium text-[24px] leading-[28px] text-primary font-Sc'>January</span>
                      <span className='mt-3 font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>Idea</span>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-row items-center'>
                      <div className="h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]" />
                      <Image src={Check} alt="Check" className='w-[32px] h-[32px]' />
                      <div className="h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]" />
                    </div>
                    <div className='flex flex-col mt-[12px] items-center'>
                      <span className='font-medium text-[24px] leading-[28px] text-primary font-Sc'>Feburary</span>
                      <span className='mt-3 font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>Brainstorm</span>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-row items-center'>
                      <div className="h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]" />
                      <Image src={Check} alt="Check" className='w-[32px] h-[32px]' />
                      <div className="h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]" />
                    </div>
                    <div className='flex flex-col mt-[12px] items-center'>
                      <span className='font-medium text-[24px] leading-[28px] text-primary font-Sc'>March</span>
                      <span className='mt-3 font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>Dev Team Build-Up</span>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-row items-center'>
                      <div className="h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]" />
                      <Image src={Check} alt="Check" className='w-[32px] h-[32px]' />
                      <div className="h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]" />
                    </div>
                    <div className='flex flex-col mt-[12px] items-center'>
                      <span className='font-medium text-[24px] leading-[28px] text-primary font-Sc'>April</span>
                      <span className='mt-3 font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>Prototype</span>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-row items-center'>
                      <div className="h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]" />
                      <Image src={Check} alt="Check" className='w-[32px] h-[32px]' />
                      <div className="h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]" />
                    </div>
                    <div className='flex flex-col mt-[12px] items-center'>
                      <span className='font-medium text-[24px] leading-[28px] text-primary font-Sc'>May</span>
                      <span className='mt-3 font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>MVP Beta</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className="flex items-center mt-[100px]">
                  <div className='flex flex-col items-center -mt-[70px]'>
                    <div className='flex flex-row items-center'>
                      <Image src={RoEnd} alt="RoStart" className='w-[32px] h-[32px]'/>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-row items-center'>
                      <div className="h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]" />
                      <Image src={Check} alt="Check" className='w-[32px] h-[32px]' />
                      <div className="h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]" />
                    </div>
                    <div className='flex flex-col mt-[12px] items-center'>
                      <span className='font-medium text-[24px] leading-[28px] text-primary font-Sc'>October</span>
                      <span className='mt-3 font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>Seed Round</span>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-row items-center'>
                      <div className="h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]" />
                      <Image src={Check} alt="Check" className='w-[32px] h-[32px]' />
                      <div className="h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]" />
                    </div>
                    <div className='flex flex-col mt-[12px] items-center'>
                      <span className='font-medium text-[24px] leading-[28px] text-primary font-Sc'>September</span>
                      <span className='mt-3 font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>Campaign</span>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-row items-center'>
                      <div className="h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]" />
                      <Image src={Check} alt="Check" className='w-[32px] h-[32px]' />
                      <div className="h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]" />
                    </div>
                    <div className='flex flex-col mt-[12px] items-center'>
                      <span className='font-medium text-[24px] leading-[28px] text-primary font-Sc'>August</span>
                      <span className='mt-3 font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>Release & Coin</span>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-row items-center'>
                      <div className="h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]" />
                      <Image src={Check} alt="Check" className='w-[32px] h-[32px]' />
                      <div className="h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]" />
                    </div>
                    <div className='flex flex-col mt-[12px] items-center'>
                      <span className='font-medium text-[24px] leading-[28px] text-primary font-Sc'>July</span>
                      <span className='mt-3 font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>Tokenomic Audit</span>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center items-center'>
                    <div className='flex flex-row items-center'>
                      <div className="h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]" />
                      <Image src={Check} alt="Check" className='w-[32px] h-[32px]' />
                      <div className="h-0 w-[90px] max-xl:w-[80px] rounded-bl-lg border-l-2 border-b-2 border-[#FF285A]" />
                    </div>
                    <div className='flex flex-col mt-[12px] items-center'>
                      <span className='font-medium text-[24px] leading-[28px] text-primary font-Sc'>June</span>
                      <span className='mt-3 font-semibold text-[16px] leading-[18px] text-[#323F4B] font-Sc'>Brainstorm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[204px] w-4 rounded-tr-[16px] rounded-br-[16px] border-r-2 border-t-2 border-b-2 border-[#FF285A] mt-[115px]" />
          </div>
          <div className='flex justify-end absolute right-0 bottom-0 opacity-30'>
            <Image src={Banner6} alt="Banner6" />
          </div>
        </div>
        <div className='absolute right-0 top-0'>
          <Image src={Curve5} alt="Curve5" />
        </div>
      </div>
    </>
  );
};

export default Roadmap;
