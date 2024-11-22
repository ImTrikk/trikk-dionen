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
  <main className="h-screen w-full flex items-center justify-between gap-10">
   <div className="flex w-[700px] flex-col gap-2 items-end">
    <motion.div
     initial={{ opacity: 0, y: 100 }}
     animate={{
      opacity: 1,
      y: 0,
     }}
     transition={{ duration: 0.5 }}
     className="flex flex-col items-end justify-end"
    >
     <h1 className="text-6xl font-black">Hooked on Tech</h1>
     <h1 className="text-6xl font-black">Build with Trikk</h1>
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
       className="h-10 border border-white rounded-full px-3 py-1 flex items-center justify-center text-xs font-semibold"
      >
       {data}
      </motion.div>
     ))}
    </div>
    <div>
     <p className="text-xs font-light">Patrick James Dionen</p>
    </div>
   </div>
   <motion.div
    initial={{ opacity: 0, x: 100 }}
    animate={{
     opacity: 1,
     x: 0,
    }}
    transition={{ duration: 0.5 }}
    className=""
   >
    <Image
     src={HeroTrikk}
     alt="trikk image"
     width={400}
     height={400}
     className="border-1 border-white "
    />
   </motion.div>
  </main>
 );
}
