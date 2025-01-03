"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaMapPin } from "react-icons/fa";
import trkmain from "@/assets/trkk/trkmain.svg";

const tags = ["Software Engineer", "Full Stack Developer", "UI/UX Designer"];

export default function Hero() {
 return (
  <main
   id="home"
   className="relative h-auto mb-52 w-full lg:py-0 px-4 sm:px-6 lg:px-8 flex items-center justify-center"
  >
   <div className="max-w-4xl w-full mx-auto sm:px-10 px-5 lg:flex items-center justify-between gap-12 h-screen">
    {/* Left Content */}
    <div className="flex flex-col justify-center space-y-5">
     <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="md:hidden lg:w-1/3 md:mt-12 lg:mt-0"
     >
      <div className="relative w-full aspect-square max-w-md mx-auto">
       <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
       <div className="relative bg-gray-900 rounded-2xl border border-gray-800 p-2 backdrop-blur-sm">
        <Image
         src={trkmain}
         alt="Patrick Dionen"
         className="w-full h-full object-cover rounded-xl"
         priority
        />
       </div>
      </div>
     </motion.div>
     <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-2xl shrink-0 md:text-4xl lg:text-5xl font-integral font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
     >
      PATRICK DIONEN
     </motion.h1>

     <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="hidden sm:block md:flex flex-wrap gap-1 md:gap-3"
     >
      {tags.map((tag, id) => (
       <span
        key={id}
        className="px-2 md:px-4 py-2 text-[12px] md:text-sm bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 hover:border-emerald-500 transition-colors duration-300"
       >
        {tag}
       </span>
      ))}
     </motion.div>
     <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-1"
     >
      <FaMapPin size={13} className="text-orange-400 animate-pulse" />
      <p className="text-sm font-medium text-emerald-400">
       Butuan City, Philippines
      </p>
     </motion.div>
     <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="text-gray-400 text-sm max-w-[460px] leading-relaxed text-justify"
     >
      A 22-year-old Software Engineer with a focus on full-stack
      development, experienced in modern web technologies and frameworks.
      Skilled in designing and building scalable, user-friendly web applications
      that deliver seamless user experiences.
     </motion.p>

     <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="flex flex-wrap gap-4"
     >
      <button
       onClick={() => window.open("/path/to/your/resume.pdf", "_blank")}
       className="group flex items-center gap-2 px-4 py-2 text-xs bg-green-600 hover:bg-emerald-700 font-integral drop-shadow-[0_0_10px_rgba(144,238,144,0.3)] rounded-lg text-white transition-all duration-300"
      >
       <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
       >
        <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={2}
         d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
       </svg>
       <span>Download Resume</span>
      </button>

      <button
       onClick={() => window.open("https://github.com/ImTrikk", "_blank")}
       className="group flex items-center gap-2 px-4 py-2 text-xs border border-gray-700 hover:border-white rounded-lg text-gray-300 hover:text-white transition-all duration-300"
      >
       <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
       >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
       </svg>
       <span>GitHub Profile</span>
      </button>

      {/* <button
       onClick={() => (window.location.href = "mailto:trikk.dionen@gmail.com")}
       className="group flex items-center gap-2 px-4 py-2 text-xs border border-gray-700 hover:border-white rounded-lg text-gray-300 hover:text-white transition-all duration-300"
      >
       <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
       >
        <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={2}
         d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
       </svg>
       <span>Contact Me</span>
      </button> */}
     </motion.div>
    </div>

    {/* Right Content - Image */}
    <motion.div
     initial={{ opacity: 0, scale: 0.5 }}
     animate={{ opacity: 1, scale: 1 }}
     transition={{ duration: 0.5 }}
     className="lg:w-1/3 mt-12 lg:mt-0 hidden lg:block"
    >
     <div className="relative w-full aspect-square max-w-md mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="relative bg-gray-900 rounded-2xl border border-gray-800 p-2 backdrop-blur-sm">
       <Image
        src={trkmain}
        alt="Patrick Dionen"
        className="w-full h-full object-cover rounded-xl"
        priority
       />
      </div>
     </div>
    </motion.div>
   </div>
  </main>
 );
}
