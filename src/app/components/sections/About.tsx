"use client";

import { motion } from "framer-motion";
import React from "react";

export default function About() {
 return (
  <section className="h-screen w-full flex items-center justify-between gap-10">
   <div>
    <h1 className="text-5xl font-bold">ABOUT ME.</h1>
    <div className="w-full mt-5 border border-white p-10 rounded-xl">
     <h1 className="text-2xl font-semibold">MEET THE PROBLEM SOLVER</h1>
     <h1 className="text-4xl font-bold">PATRICK JAMES DIONEN</h1>
     <div className="mt-5">
      <p className="text-xs font-medium text-justify">
       I am a senior Bachelor of Science in Information Technology student at
       Caraga State University, with a passion for creating dynamic web
       applications and crafting visually stunning user interfaces. My focus is
       on blending functionality with design to deliver seamless and engaging
       user experiences.
      </p>
      <p className="text-xs font-medium text-justify mt-3">
       When I’m away from my desk, I like to keep my mind sharp and enjoy nature
       by engaging in physical activities, such as running early in the morning.
      </p>
     </div>
    </div>
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
