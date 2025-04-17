"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="border-t border-[#33353F]">
      <motion.div 
        className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Brand Section */}
          <motion.div 
            className='flex flex-col items-center md:items-start'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/">
              <h3 className='text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent'>
                Hiwot Addis
              </h3>
            </Link>
            <div className="flex justify-center md:justify-start w-full mt-4">
              <Image
                src="/images/logo.png"
                alt="Hiwot Addis Logo"
                width={180}
                height={180}
                className="w-full max-w-[220px] h-auto object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className='flex flex-col items-center space-y-4'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className='text-white font-semibold mb-2'>Quick Links</h4>
            <Link href="#about" className='text-slate-400 hover:text-white transition-colors'>About</Link>
            <Link href="#projects" className='text-slate-400 hover:text-white transition-colors'>Projects</Link>
            <Link href="#contact" className='text-slate-400 hover:text-white transition-colors'>Contact</Link>
          </motion.div>

          {/* Social & Copyright */}
          <motion.div 
            className='flex flex-col items-center md:items-end space-y-4'
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className='flex space-x-4'>
              <Link 
                href="https://github.com/HiwotAddis" 
                target="_blank" 
                rel="noopener noreferrer"
                className='bg-[#1E293B] p-3 rounded-full hover:bg-purple-500 transition-all duration-300'
              >
                <Image src="/github.svg" width={20} height={20} alt="GitHub" className="invert" />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/hiwot-addis-453139286/" 
                target="_blank" 
                rel="noopener noreferrer"
                className='bg-[#1E293B] p-3 rounded-full hover:bg-purple-500 transition-all duration-300'
              >
                <Image src="/linkedin.svg" width={20} height={20} alt="LinkedIn" className="invert" />
              </Link>
            </div>
            <div className='text-slate-400 text-sm text-center md:text-right'>
              <p> {new Date().getFullYear()} Hiwot Addis</p>
              <p className='mt-1'>All rights reserved</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
