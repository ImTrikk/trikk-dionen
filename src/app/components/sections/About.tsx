"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import trikk_1 from "@/assets/about/trikk_1.jpg";
import trikk_2 from "@/assets/about/trikk_2.jpg";
import trik1 from "@/assets/trkk/trik1.jpg";
import trik2 from "@/assets/trkk/trik2.jpg";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export default function About() {
 return (
  <section id="about" className="h-auto w-full flex flex-col gap-1">
   <CardContainer className="inter-var">
    <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
     <CardItem translateZ="50">
      <h1 className="text-4xl font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
       ABOUT ME
       <span className="text-green-500 drop-shadow-[0_0_10px_rgba(144,238,144,0.5)]">
        .
       </span>
      </h1>
     </CardItem>

     <CardItem
      translateZ="70"
      className="about-wrapper w-full mt-5 border border-gray-300 rounded-2xl"
     >
      <CardItem translateZ="200" className="about p-10 rounded-2xl">
       <div className="grid grid-cols-3 gap-3 w-full">
        <CardItem
         translateZ="90"
         className="col-span-2 w-full h-[200px] relative border border-white rounded-xl overflow-hidden"
        >
         <Image
          src={trik1}
          alt="trik1"
          fill
          className="object-cover group-hover/card:shadow-xl"
         />
        </CardItem>

        <CardItem translateZ="200">
         <div className="w-full h-[200px] relative border border-white rounded-xl overflow-hidden">
          <Image
           src={trik2}
           alt="trik2"
           className="object-cover group-hover/card:shadow-xl"
          />
         </div>
        </CardItem>
       </div>

       <div className="mt-5">
        <CardItem translateZ="210">
         <h1 className="text-2xl font-semibold">MEET THE PROBLEM SOLVER</h1>
        </CardItem>
        <CardItem translateZ="50">
         <h1 className="text-4xl font-bold">PATRICK JAMES DIONEN</h1>
        </CardItem>

        <div className="mt-5">
         <CardItem translateZ="50">
          <div className="text-xs font-bold text-violet-700">trkku</div>
         </CardItem>
         <CardItem translateZ="300">
          <span className="text-xs text-yellow-500">[</span>
         </CardItem>

         <div className="px-4">
          <CardItem translateZ="50">
           <div className="text-xs font-medium text-justify">
            I am a senior Bachelor of Science in Information Technology student
            at Caraga State University, with a passion for creating dynamic web
            applications and crafting visually stunning user interfaces. My
            focus is on blending functionality with design to deliver seamless
            and engaging user experiences.
           </div>
          </CardItem>

          <CardItem translateZ="50">
           <div className="text-xs font-medium text-justify mt-3">
            When I'm away from my desk, I like to keep my mind sharp and enjoy
            nature by engaging in physical activities, such as running early in
            the morning.
           </div>
          </CardItem>
         </div>

         <CardItem translateZ="50">
          <span className="text-xs text-yellow-500">]</span>
         </CardItem>
        </div>
       </div>
      </CardItem>
     </CardItem>

     <CardItem translateZ="40">
      <div className="mt-5 flex items-end justify-end">
       <button className="h-10 text-xs rounded-xl border border-white px-4 flex items-center justify-center gap-2">
        see more
        <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth="1.5"
         stroke="currentColor"
         className="size-4 pointer-events-auto"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
         />
        </svg>
       </button>
      </div>
     </CardItem>
    </CardBody>
   </CardContainer>
  </section>
 );
}
