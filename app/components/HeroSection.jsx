"use client";
import React, { useRef } from "react";
import Image from "next/image";
import GithubIcon from "../../public/github.svg";
import LinkedinIcon from "../../public/linkedin.svg";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-19">
      <div className="grid grid-cols-1 sm:grid-cols-12 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-none font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello,I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["Hiwot", 1000, "Software Engineer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I build full-stack web and mobile applications and explore AI/ML
            solutions to solve real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mt-6">
            <a
              href="/HiwotAddisCV.pdf"
              download
              className="inline-block px-1 py-1 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
            <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 mt-4 sm:mt-0">
              <Link
                href="https://github.com/HiwotAddis"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#181818] border border-transparent hover:border-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.35)] transition-all duration-200"
              >
                <Image
                  src={GithubIcon}
                  alt="Github Icon"
                  width={28}
                  height={28}
                  className="invert"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/hiwot-addis-453139286/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#181818] border border-transparent hover:border-blue-400 hover:shadow-[0_0_20px_rgba(96,165,250,0.35)] transition-all duration-200"
              >
                <Image
                  src={LinkedinIcon}
                  alt="Linkedin Icon"
                  width={28}
                  height={28}
                  className="invert"
                />
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
            <Image
              src="/images/hero-img.png"
              alt="hero image"
              fill
              className="object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
