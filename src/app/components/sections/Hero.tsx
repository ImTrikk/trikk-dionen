"use client";

import React from "react";
import HeroTrikk from "@/assets/HeroTrikk_2.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { Vortex } from "../ui/vortex";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const tags = [
 "Software Engineer",
 "UI/UX Designer",
 "Freelancer",
 "Full Stack Developer",
 "Minimalist",
 "Tech Enthusiast",
];

export default function Hero() {
 return (
  <main
   id="home"
   className="relative h-screen w-full flex items-center justify-center gap-8"
  >
   {/* <Vortex
    backgroundColor="black"
    rangeY={200}
    particleCount={20}
    baseHue={900}
    className="h-screen w-full flex items-center justify-center gap-8"
   > */}{" "}
   <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{
     opacity: 1,
     x: 0,
     transition: { duration: 0.5 },
    }}
    className="flex flex-shrink-0"
   >
    <Image
     src={HeroTrikk}
     alt="trikk image"
     width={320}
     height={320}
     className=""
    />
   </motion.div>
   <div className="flex w-[600px] flex-col gap-2 items-start flex-shrink-0">
    <motion.div className="flex flex-col justify-start">
     <motion.h1
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
      className="text-4xl tracking-widest font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] font-integral"
     >
      PATRICK JAMES DIONEN
     </motion.h1>
     <div className="flex items-center gap-2 mt-3">
      <svg
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       strokeWidth="1.5"
       stroke="orange"
       className="size-5"
      >
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
       />
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
       />
      </svg>
      <p className="text-sm font-medium text-green-500 drop-shadow-[0_0_10px_rgba(144,238,144,0.5)]">
       Butuan City, Philippines
      </p>
     </div>
     <div className="flex flex-wrap gap-2 justify-start mt-3">
      {tags.map((data, id) => (
       <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
        key={id}
        className="h-8 border border-white rounded-full px-5 py-1 flex items-start justify-center text-sm font-semibold hover:shadow-md hover:shadow-[#39FF14] transition-all duration-500"
       >
        {data}
       </motion.div>
      ))}
     </div>
     <div className="mt-5">
      <p className="text-md font-semibold text-justify">
       A 22-year-old Software Engineer specializing in full-stack development,
       proficient in MERN, PERN, Laravel, and Next.js, focused on building
       robust and scalable web applications.
      </p>
     </div>
    </motion.div>
    <div className="mt-3">
     <button className="bg-gray-500 bg-opacity-25 text-xs px-2 rounded-md h-10 border border-gray-400 border-opacity-40 flex items-center gap-3">
      <svg
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       strokeWidth="1.5"
       stroke="currentColor"
       className="size-4"
      >
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
       />
      </svg>
      <span> resume</span>
     </button>
    </div>
   </div>
   {/* </Vortex> */}
  </main>
 );
}
