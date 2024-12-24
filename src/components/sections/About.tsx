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
import {
 TextRevealCard,
 TextRevealCardDescription,
 TextRevealCardTitle,
} from "../ui/text-reveal-card";
import { h1 } from "framer-motion/client";

export default function About() {
 return (
  <section id="about" className="h-auto w-full flex flex-col gap-1">
   <CardContainer className="inter-var ">
    <CardBody className=" relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-gray-500 bg-opacity-25 dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-3xl p-8 border">
     <CardItem translateZ="50">
      <h1 className="text-4xl text-white font-bold font-integral drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
       ABOUT ME{" "}
       <span className="text-green-500 font-integral drop-shadow-[0_0_10px_rgba(144,238,144,0.5)]">
        .
       </span>
      </h1>
     </CardItem>

     {/* <CardItem
      translateZ="70"
      className="about-wrapper w-full mt-5 border border-gray-300 rounded-2xl"
     > */}
     {/* <CardItem translateZ="200" className="about p-10 rounded-2xl"> */}
     <div className="grid grid-cols-3 gap-3 w-full mt-5">
      <CardItem
       translateZ="120"
       className="col-span-2 w-full h-[200px] relative border border-white rounded-xl overflow-hidden"
      >
       <Image
        src={trik1}
        alt="trik1"
        fill
        className="object-cover group-hover/card:shadow-xl"
       />
      </CardItem>

      <CardItem translateZ="90">
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
      <CardItem translateZ="80" as="div">
       <h1 className="text-2xl text-white font-semibold">MEET THE PROBLEM SOLVER</h1>
      </CardItem>
      <CardItem translateZ="100" as="div" className="mb-2">
       <h1 className="text-4xl font-black font-integral text-green-600">
        PATRICK JAMES DIONEN
       </h1>
      </CardItem>
      {/* <CardItem translateZ={60} className="w-full">
       <TextRevealCard
        text="Tech Enthusiast, Curios Explorer, Adapter"
        revealText="Software Engineer, UI/UX Designer, Developer"
       ></TextRevealCard>
      </CardItem> */}

      <CardItem translateZ="80" className="">
       <CardItem translateZ="50" className="mt-10">
        <div className="text-md font-bold text-violet-700">
         trkku <span className="text-orange-600">=</span>{" "}
         <span className="text-md text-yellow-500">[</span>
        </div>
       </CardItem>

       <CardItem
        translateZ="50"
        className="text-md text-white font-medium text-justify px-4 leading-6"
       >
        I am a senior Bachelor of Science in Information Technology student at
        Caraga State University, with experience in creating dynamic web
        applications and developing user interfaces. My focus is on combining
        functionality with design to deliver effective and user-friendly
        experiences.
       </CardItem>

       <CardItem
        translateZ="60"
        className="text-md text-white font-medium text-justify mt-3 px-4 leading-6"
       >
        When I'm away from my desk, I like to keep my mind sharp and enjoy
        nature by engaging in physical activities, such as running early in the
        morning.
       </CardItem>
       <CardItem translateZ="50">
        <span className="text-md text-yellow-500">]</span>
       </CardItem>
      </CardItem>
     </div>

     {/* </CardItem> */}
     {/* </CardItem> */}

     <CardItem translateZ="40">
      <div className="mt-5 flex items-end justify-end">
       <button className="h-10 text-white text-xs rounded-xl border border-white px-4 flex items-center justify-center gap-2">
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
