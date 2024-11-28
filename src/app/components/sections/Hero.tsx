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
   > */}
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
      className="text-6xl tracking-widest font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] font-integral"
     >
      SIMPLIFY
     </motion.h1>
     <motion.h1
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
      className="text-6xl tracking-widest font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] font-integral"
     >
      DESIGNING
     </motion.h1>
     <motion.h1
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.9 } }}
      className="text-6xl tracking-widest font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] font-integral"
     >
      DEVELOPING
     </motion.h1>
    </motion.div>
    <div className="flex flex-wrap gap-2 items-end justify-end">
     {tags.map((data, id) => (
      <motion.div
       initial={{ opacity: 0, y: 100 }}
       whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
       key={id}
       className="h-8 border border-white rounded-full px-5 py-1 flex items-center justify-center text-sm font-semibold hover:shadow-md hover:shadow-[#39FF14] transition-all duration-500"
      >
       {data}
      </motion.div>
     ))}
    </div>
    <motion.div
     initial={{ opacity: 0, y: 100 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 2 }}
    >
     <p className="text-xs font-light text-green-500 drop-shadow-[0_0_10px_rgba(144,238,144,0.5)]">
      Patrick James Dionen
     </p>
    </motion.div>
   </div>
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
     width={400}
     height={400}
     className="img-hero"
    />
   </motion.div>
   {/* </Vortex> */}
  </main>
 );
}
