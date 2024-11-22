"use client";

import { main } from "framer-motion/client";
import React from "react";

export default function About() {
 return (
  <main className="h-screen w-full flex items-center justify-between gap-10">
   <div>
    <h1 className="text-5xl font-bold">About Me.</h1>
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
     <button className="h-10 rounded-xl border border-white px-4">
      see more
     </button>
    </div>
   </div>
  </main>
 );
}
