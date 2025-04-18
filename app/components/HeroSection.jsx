"use client";
import React,{ useRef } from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className='lg:py-19'>
        <div className='grid grid-cols-1 sm:grid-cols-12 px-4'>
            <motion.div initial={{opacity: 0,scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.5 }} className='col-span-7 place-self-center text-center sm:text-left justify-self-start'>
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-none font-extrabold">
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello,I'm{" "}</span>
                    <br />
                    <TypeAnimation
                        sequence={[
                            'Hiwot',
                            1000,
                            'Web Developer',
                            1000,
                            'Mobile Developer',
                            1000,
                            
                            
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>A passionate Full Stack Developer specializing in building exceptional web and mobile applications. With expertise in both front-end and back-end development, I create seamless digital experiences that combine elegant design with powerful functionality.</p>
                <div>
  <button
    className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'
    onClick={() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    Hire Me
  </button>
  <a
    href="/HiwotAddisCV.pdf"
    download
    className='inline-block px-1 py-1 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'
    target="_blank"
    rel="noopener noreferrer"
  >
    <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
  </a>
  {/* NOTE: Place your CV as public/HiwotAddisCV.pdf for this to work! */}
</div>
            </motion.div>
            <motion.div initial={{opacity: 0,scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.5 }} className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative'>
                <Image src='/images/hero-img.png' alt="hero image" className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2' width={300} height={300}  />
                </div>
                
            </motion.div>
        </div>
        

    </section>
  );
};

export default HeroSection;
