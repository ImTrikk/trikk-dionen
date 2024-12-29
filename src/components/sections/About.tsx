"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import trik1 from "@/assets/trkk/trik1.jpg";
import trik2 from "@/assets/trkk/trik2.jpg";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { achievementData } from "@/data/achievements";

export default function About() {
 const [achievements, setAchievements] = useState(false);
const [colors, setColors] = useState<string[]>([]);

 useEffect(() => {
  // Generate random pastel colors only on the client side
  const generateRandomPastels = () => {
   return Array.from({ length: achievementData.length }, () => {
    const r = Math.floor(Math.random() * 100 + 80); // Range: 80–179
    const g = Math.floor(Math.random() * 100 + 80); // Range: 80–179
    const b = Math.floor(Math.random() * 100 + 80); // Range: 80–179
    return `#${r.toString(16).padStart(2, "0")}${g
     .toString(16)
     .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
   });
  };
  setColors(generateRandomPastels());
 }, []);

 const experiences = [
  {
   date: "January 2023 - June 2024",
   title: "Full Stack Developer | UI/UX Designer | ParaGO",
   description:
    "Worked on creating dynamic web applications using React and Node.js, improving application performance and scalability.",
  },
  {
   date: "December 2024 - Present",
   title: "Full Stack Developer | Exon",
   description:
    "Developing advanced APIs and enhancing user interfaces to drive better user experiences and functionality.",
  },
 ];

 return (
  <section id="about" className="h-auto w-full flex flex-col gap-1">
   <CardContainer className="inter-var ">
    <CardBody className=" relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-gray-500 bg-opacity-10 dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-3xl p-8 border">
     <CardItem translateZ="50">
      <h1 className="text-4xl text-white font-bold font-integral drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
       ABOUT ME{" "}
       <span className="text-green-500 font-integral drop-shadow-[0_0_10px_rgba(144,238,144,0.5)]">
        .
       </span>
      </h1>
     </CardItem>

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
       <h1 className="text-2xl text-white font-semibold">
        MEET THE PROBLEM SOLVER
       </h1>
      </CardItem>
      <CardItem translateZ="100" as="div" className="mb-2">
       <h1 className="text-4xl font-black font-integral text-green-600">
        PATRICK JAMES DIONEN
       </h1>
      </CardItem>

      <CardItem translateZ="80" className="">
       <CardItem translateZ="50" className="mt-10">
        <div className="text-md font-bold text-violet-700">
         trkku <span className="text-orange-600">=</span>{" "}
         <span className="text-md text-yellow-500">[</span>
        </div>
       </CardItem>

       <CardItem
        translateZ="100"
        className="text-md text-white font-regular text-justify px-4 leading-6"
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
       <CardItem translateZ="100">
        <span className="text-md text-yellow-500">]</span>
       </CardItem>
      </CardItem>
     </div>
    </CardBody>
   </CardContainer>
   <div className="mt-20">
    <h1 className="text-3xl font-integral text-white">Experience</h1>{" "}
    <span className="text-2xl text-white">Achievements</span>
   </div>
   <div className="flex  gap-5 mt-5 w-[500px]">
    <div className="relative">
     {/* Vertical Line for the Timeline */}
     <div className="absolute left-[21px] top-0 h-full w-[2px] bg-gray-700"></div>
     {experiences.map((exp, index) => (
      <div key={index} className="relative flex items-start mt-8">
       <div className="relative z-10 flex items-center justify-center w-12">
        {/* Timeline Marker */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-3 h-3 bg-green-500 rounded-full hover:bg-orange-500"></div>
       </div>
       <div className="ml-1 flex flex-col gap-2 text-white bg-gray-500 bg-opacity-10 p-3 rounded-xl w-[450px]">
        <p className="text-sm text-gray-400">{exp.date}</p>
        <p className="font-bold text-lg">{exp.title}</p>
        <p className="text-sm text-gray-300 w-[400px] text-justify">
         {exp.description}
        </p>
       </div>
      </div>
     ))}
    </div>
    <div className="flex flex-col gap-2 max-h-[300px] bg-gray-500 bg-opacity-10 overflow-scroll p-3 rounded-xl w-[400px]">
     {achievementData.map((data, index) => {
      return (
       <div
        key={index}
        className="p-3 rounded-xl w-[300px] h-[70px] text-white"
        style={{ backgroundColor: colors[index] }} // Use the colors state here
       >
        <div className="flex items-center justify-between">
         <p className="text-xs">{data.name}</p>
         <p className="text-xs font-medium">{data.date}</p>
        </div>
       </div>
      );
     })}
    </div>
   </div>
  </section>
 );
}
