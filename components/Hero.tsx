"use client";
import React from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';

const hero = () => {
  const handleScroll = () => {
    
  }
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>Locate, book, and drive – anytime, anywhere.</h1>
        <p className='hero__subtitle'>Revolutionize your travel plans with our simple booking solution.</p>

        <CustomButton
           title = "Book Now"
           containerStyles = "bg-primary-blue text-white rounded-full mt-8"
           handleClick = {handleScroll}
        />
      </div>

      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src="/hero.png" alt="hero image" fill className="object-contain"/>

          <div className='hero__image-overlay'/>
        </div>
      </div>
    </div>
  )
}

export default hero