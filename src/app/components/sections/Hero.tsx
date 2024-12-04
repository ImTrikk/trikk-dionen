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
 "Full Stack Developer",
 "Freelancer",
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
    className="img-hero-wrapper flex flex-shrink-0"
   >
    <Image
     src={HeroTrikk}
     alt="trikk image"
     width={320}
     height={320}
     className="img-hero"
    />
   </motion.div>
   <div className="flex w-[600px] flex-col gap-2 items-end flex-shrink-0">
    <motion.div
     // initial={{ opacity: 0, y: 100 }}
     // animate={{
     //  opacity: 1,
     //  y: 0,
     // }}
     // transition={{ duration: 0.5 }}
     className="flex flex-col items-end justify-end"
    >
     <motion.h1
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
      className="text-5xl tracking-widest font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] font-integral flex flex-col items-end"
     >
      PATRICK JAMES DIONEN
     </motion.h1>
     <div>
      <button className="bg-gray-500 bg-opacity-25 text-xs px-2 rounded-md h-10 border border-gray-400 border-opacity-40">
       resume
      </button>
     </div>
     <div className="flex items-center gap-2">
      <svg
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       strokeWidth="1.5"
       stroke="currentColor"
       className="size-5 text-green-500"
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
      <p className="text-xs font-light text-green-500 drop-shadow-[0_0_10px_rgba(144,238,144,0.5)]">
       Butuan City, Philippines
      </p>
     </div>
    </motion.div>
    <div className="flex flex-wrap gap-2 justify-start">
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
   </div>
   {/* </Vortex> */}
  </main>
 );
}
