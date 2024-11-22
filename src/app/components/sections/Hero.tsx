"use client";

import React from "react";
import HeroTrikk from "@/assets/HeroTrikk.svg";
import Image from "next/image";
import { motion } from "framer-motion";

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
  <main className="h-screen w-full flex items-center justify-center gap-10">
   <div className="flex w-[600px] flex-col gap-2 items-end flex-shrink-0">
    <motion.div
     initial={{ opacity: 0, y: 100 }}
     animate={{
      opacity: 1,
      y: 0,
     }}
     transition={{ duration: 0.5 }}
     className="flex flex-col items-end justify-end"
    >
     <h1 className="text-6xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">Hooked on Tech</h1>
     <h1 className="text-6xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">Build with Trikk</h1>
    </motion.div>
    <div className="flex flex-wrap gap-2 items-end justify-end">
     {tags.map((data, id) => (
      <motion.div
       initial={{ opacity: 0, y: 100 }}
       animate={{
        opacity: 1,
        y: 0,
       }}
       transition={{ duration: 0.5 }}
       key={id}
       className="h-8 border border-white rounded-full px-5 py-1 flex items-center justify-center text-sm font-semibold"
      >
       {data}
      </motion.div>
     ))}
    </div>
    <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     transition={{ duration: 0.8 }}
    >
     <p className="text-xs font-light">Patrick James Dionen</p>
    </motion.div>
   </div>
   <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{
     opacity: 1,
     x: 0,
    }}
    transition={{ duration: 0.5 }}
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
  </main>
 );
}
