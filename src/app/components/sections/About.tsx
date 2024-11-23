"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import trikk_1 from "@/assets/about/trikk_1.jpg";
import trikk_2 from "@/assets/about/trikk_2.jpg";
import trikk_3 from "@/assets/about/trikk_3.jpg";
import trikk_4 from "@/assets/about/trikk_4.jpg";

export default function About() {
 const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

 return (
  <section className="h-screen w-full flex items-center justify-between gap-10">
   <div>
    <motion.h1
     initial={{ opacity: 0, y: 200 }}
     whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
     className="text-5xl font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
    >
     ABOUT ME
     <span className="text-green-500 drop-shadow-[0_0_10px_rgba(144,238,144,0.5)]">
      .
     </span>
    </motion.h1>
    <motion.div
     initial={{ opacity: 0, y: 200 }}
     whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
     className="about-wrapper w-full mt-5 border border-gray-300 rounded-2xl"
    >
     <div className="about p-10 rounded-2xl">
      <div className="grid grid-cols-4 gap-3">
       {[trikk_1, trikk_2, trikk_3, trikk_4].map((image, index) => (
        <motion.div
         key={index}
         initial={{ rotate: 0 }}
         whileHover={{ rotateY: 180, scale: 1.1 }}
         transition={{ duration: 0.3 }}
         className="h-[200px] bg-none w-full border border-white rounded-xl overflow-hidden"
         onHoverStart={() => setHoveredIndex(index)}
         onHoverEnd={() => setHoveredIndex(null)}
        >
         {hoveredIndex === index ? (
          <div className="h-full w-full bg-white flex items-center justify-center">
           <span className="text-black text-lg font-bold">
            Photo Taken 10/10/2019
           </span>
          </div>
         ) : (
          <Image
           src={image}
           alt={`trikku${index + 1}`}
           width={300}
           height={300}
           className="w-full"
          />
         )}
        </motion.div>
       ))}
      </div>
      <div className="mt-5">
       <motion.h1
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 1.5 } }}
        className="text-2xl font-semibold"
       >
        MEET THE PROBLEM SOLVER
       </motion.h1>
       <motion.h1
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 1.9 } }}
        className="text-4xl font-bold"
       >
        PATRICK JAMES DIONEN
       </motion.h1>
       <div className="mt-5">
        <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1, transition: { duration: 1 } }}
        >
         <span className="text-xs font-bold text-violet-700">trkku</span> ={" "}
         <span className="text-xs text-yellow-500">[</span>
         <div className="px-4">
          <motion.p
           initial={{ opacity: 0, x: 100 }}
           whileInView={{ opacity: 1, x: 0, transition: { duration: 2 } }}
           className="text-xs font-medium text-justify"
          >
           I am a senior Bachelor of Science in Information Technology student
           at Caraga State University, with a passion for creating dynamic web
           applications and crafting visually stunning user interfaces. My focus
           is on blending functionality with design to deliver seamless and
           engaging user experiences.
          </motion.p>
          <motion.p
           initial={{ opacity: 0, x: 100 }}
           whileInView={{ opacity: 1, x: 0, transition: { duration: 2.4 } }}
           className="text-xs font-medium text-justify mt-3"
          >
           When I’m away from my desk, I like to keep my mind sharp and enjoy
           nature by engaging in physical activities, such as running early in
           the morning.
          </motion.p>
         </div>
         <span className="text-xs text-yellow-500">]</span>
        </motion.div>
       </div>
      </div>
     </div>
    </motion.div>
    <div className="mt-5 flex items-end justify-end">
     <motion.button
      className="h-10 text-xs rounded-xl border border-white px-4 flex items-center justify-center gap-2"
      whileHover={{ scale: 1.05 }}
     >
      see more
      <motion.svg
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       strokeWidth="1.5"
       stroke="currentColor"
       className="size-4 pointer-events-auto"
       initial={{ rotate: 0 }}
       whileHover={{ rotate: 45 }}
       transition={{ duration: 0.3 }}
      >
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
       />
      </motion.svg>
     </motion.button>
    </div>
   </div>
  </section>
 );
}
