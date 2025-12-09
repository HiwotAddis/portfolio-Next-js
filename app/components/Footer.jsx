"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-[#33353F] bg-[#0d0d0f]">
      <motion.div
        className="max-w-7xl mx-auto py-3 px-4 sm:px-4 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-center">
          {/* Brand Section */}
          <motion.div
            className="flex flex-col items-center md:items-start gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/" aria-label="Go to homepage" className="inline-flex">
              <Image
                src="/images/logo.png"
                alt="Hiwot Addis Logo"
                width={120}
                height={120}
                className="w-[80px] md:w-[110px] h-auto object-contain hover:opacity-90 transition-opacity"
                priority
              />
            </Link>
            <Link href="/">
              <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent text-center md:text-left">
                Hiwot Addis
              </h3>
            </Link>
          </motion.div>

          {/* Centered Copyright */}
          <motion.div
            className="flex items-center justify-center text-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="text-slate-400 text-sm leading-relaxed">
              <p>Copyright ©2025 All rights reserved | made with 💖 by Hiwot</p>
            </div>
          </motion.div>

          {/* Social Icons Right */}
          <motion.div
            className="flex items-center justify-center md:justify-end gap-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <Link
              href="https://github.com/HiwotAddis"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1E293B] p-3 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
            >
              <Image
                src="/github.svg"
                width={20}
                height={20}
                alt="GitHub"
                className="invert"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/hiwot-addis-453139286/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1E293B] p-3 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
            >
              <Image
                src="/linkedin.svg"
                width={20}
                height={20}
                alt="LinkedIn"
                className="invert"
              />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
