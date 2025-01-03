"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import trik1 from "@/assets/trkk/trik1.jpg";
import trik2 from "@/assets/trkk/trik2.jpg";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { achievementData } from "@/data/achievements";
import Marquee from "react-fast-marquee";
import { certificates } from "@/data/certs";
import { BiMedal } from "react-icons/bi";
import AudioVisualizer from "../ui/AudioVisualizer";
import { IoPlay, IoPause } from "react-icons/io5";

export default function About() {
 const [achievements, setAchievements] = useState(false);
 const [colors, setColors] = useState<string[]>([]);
 const [isPlaying, setIsPlaying] = useState(false);

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
   date: "December 2024 - Present",
   title: "Freelance Full Stack Developer | Exon",
   tags: ["Freelance", "Full Stack Developer", "UI/UX Designer"],
   description:
    "Designed web applications to meet client-specific needs and expectations, ensuring user satisfaction and functionality. Developed dynamic and responsive applications using React.js, Laravel, and PostgreSQL for efficient backend and frontend integration. Created scalable and robust system architectures to support application performance and maintainability.",
  },
  {
   date: "January 2023 - June 2024",
   title: "Co-Founder and CTO | ParaGO",
   tags: ["Startup", "Full Stack Developer", "UI/UX Designer"],
   description:
    "Co-founded ParaGO, a web-based application that enables users to book events organized by municipal tourism offices, promoting unique local adventures. Designed and developed the platform using ReactJS for dynamic and responsive interfaces, NodeJS with ExpressJS for efficient server-side communication, and MongoDB for scalable data storage. Spearheaded the UI/UX design, crafting user-centric interfaces to ensure an intuitive and seamless experience across all devices. Ensured the application was fully responsive and optimized for performance to enhance accessibility for diverse user bases.",
  },
 ];

 const exp_projs = {
  no_exp: 10,
  projs: 11,
 };

 const togglePlayPause = () => {
  setIsPlaying(!isPlaying);
 };

 return (
  <section id="about" className="h-auto w-full flex flex-col gap-1">
   <CardContainer className="inter-var ">
    <CardBody className=" relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-gray-500 bg-opacity-10 dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-3xl p-8 border">
     <CardItem translateZ="50">
      <h1 className="text-xl md:text-4xl text-white font-bold font-integral drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
       ABOUT ME{" "}
       <span className="text-green-500 font-integral drop-shadow-[0_0_10px_rgba(144,238,144,0.5)]">
        .
       </span>
      </h1>
     </CardItem>

     <div className="grid grid-cols-3 gap-3 w-full mt-5">
      <CardItem
       translateZ="120"
       className="col-span-3 sm:col-span-2 w-full h-[200px] relative border border-white rounded-xl overflow-hidden"
      >
       <Image
        src={trik1}
        alt="trik1"
        fill
        className="object-cover group-hover/card:shadow-xl"
       />
      </CardItem>

      <CardItem translateZ="90">
       <div className="hidden sm:block w-full h-[200px] relative border border-white rounded-xl overflow-hidden">
        <Image
         src={trik2}
         alt="trik2"
         className="object-fit group-hover/card:shadow-xl"
        />
       </div>
      </CardItem>
     </div>

     <div className="mt-5">
      <CardBody className="flex items-center gap-2 md:gap-14">
       <CardBody>
        <CardItem translateZ="100" as="div">
         <h1 className="text-md md:text-2xl text-white font-semibold">
          MEET THE PROBLEM SOLVER
         </h1>
        </CardItem>
        <CardItem translateZ="160" as="div" className="mb-2">
         <h1 className="text-xl md:text-4xl font-black text-green-600 font-integral drop-shadow-[0_0_10px_rgba(144,238,144,0.3)]">
          PATRICK JAMES DIONEN
         </h1>
        </CardItem>
       </CardBody>
       <CardBody>
        <CardItem translateZ={120} className="w-full">
         <AudioVisualizer isPlaying={isPlaying} />
         <button
          onClick={togglePlayPause}
          className="h-10 w-10 rounded-full bg-green-500 font-integral drop-shadow-[0_0_10px_rgba(144,238,144,0.5)] flex items-center justify-center cursor-pointer"
          style={{
           position: "absolute",
           top: "20px",
           left: "50%",
           transform: "translateX(-50%)",
           zIndex: 100,
          }}
         >
          {isPlaying ? (
           <IoPause className="text-white" />
          ) : (
           <IoPlay className="text-white" />
          )}
         </button>
        </CardItem>
       </CardBody>
      </CardBody>
      <CardBody className="flex flex-col md:flex-row items-start justify-between gap-12 mt-5">
       <CardItem translateZ="50" className="w-full md:w-[500px] md:shrink-0">
        <CardItem
         translateZ="80"
         className="text-sm text-gray-400 font-regular text-justify leading-6"
        >
         Hi, I'm Patrick (or Trikk for short)! I'm a software engineer
         specializing in web development and desktop development. I'm passionate
         about creating digital solutions that are both functional and visually
         appealing. Always eager to learn new technologies, I strive to
         continually improve my skills to deliver the best results for my
         clients.
        </CardItem>
        <CardItem
         translateZ="100"
         className="text-sm text-gray-400 font-regular text-justify leading-6 mt-3"
        >
         Currently a graduating Bachelor of Science in Information Technology
         student at Caraga State University, with hands-on experience in
         developing dynamic web applications and crafting user interfaces.
         Focused on integrating functionality and design to create efficient and
         user-friendly digital solutions.
        </CardItem>

        <CardItem
         translateZ="120"
         className="text-sm text-gray-400 font-medium text-justify mt-3 leading-6"
        >
         When I'm not at my desk, I enjoy keeping my mind sharp and connecting
         with nature through physical activities like early morning runs.
        </CardItem>
       </CardItem>
       <CardBody className="w-full">
        <div className="flex flex-col sm:flex-row md:flex-col items-start gap-4">
         <CardItem
          translateZ={90}
          className="w-full sm:w-[220px] h-[120px] bg-gray-500 bg-opacity-10 flex px-4 p-4 flex-col items-start justify-center border border-gray-500 rounded-xl "
         >
          <p className="text-white text-3xl font-integral ">
           {exp_projs.no_exp}{" "}
           <span className="text-xl text-gray-500 font-black">+ Months</span>
          </p>
          <p className="text-xs mt-2 text-gray-500">
           relevant design and development experience
          </p>
         </CardItem>
         <CardItem
          translateZ={120}
          className="w-full sm:w-[220px] h-[120px] bg-gray-500 bg-opacity-10 flex px-4 p-4 flex-col items-start justify-center border border-gray-500 rounded-xl "
         >
          <p className="text-white text-3xl font-integral ">
           {exp_projs.projs}{" "}
           <span className="text-xl text-gray-500 font-black">+ Projects</span>
          </p>
          <p className="text-xs mt-2 text-gray-500">
           completed final projects, personal projects, and commissions.
          </p>
         </CardItem>
        </div>
       </CardBody>
      </CardBody>
     </div>
    </CardBody>
   </CardContainer>
   <div className="mt-20">
    <div className="flex items-center justify-between gap-2">
     <div className="md:shrink-0 flex flex-col">
      <h1 className="text-xl md:text-4xl font-integral text-white">
       EXPERIENCE{" "}
       <span className="text-sm font-light text-green-500 font-integral drop-shadow-[0_0_10px_rgba(144,238,144,0.5)]">
        and
       </span>{" "}
      </h1>{" "}
      <span className="text-md md:text-2xl font-medium text-white">
       Achievements
      </span>
     </div>
    </div>
   </div>
   <div className="flex flex-col md:flex-row items-center md:items-start justify-between mt-5">
    <div className="relative">
     {/* Vertical Line for the Timeline */}
     <div className="absolute left-[22px] top-0 h-full w-[2px] bg-gray-700"></div>
     {experiences.map((exp, index) => (
      <motion.div
       initial={{ opacity: 0, y: 100 }}
       whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
       key={index}
       className="relative flex items-start mt-8"
      >
       <div className="relative z-10 flex items-center justify-center w-12">
        {/* Timeline Marker */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 w-3 h-3 bg-green-500 rounded-full hover:bg-orange-500"></div>
       </div>
       <div className="ml-1 flex flex-col gap-2 text-white bg-gray-500 bg-opacity-10 p-3 rounded-xl w-full md:w-[400px]">
        <p className="text-sm text-gray-400">{exp.date}</p>
        <p className="font-bold text-lg">{exp.title}</p>
        <div className="flex items-center gap-1">
         {exp.tags.map((tag, index) => (
          <p key={index} className="text-xs text-gray-600">
           {tag} |{" "}
          </p>
         ))}
        </div>
        <p className="text-sm text-gray-300 text-justify">{exp.description}</p>
       </div>
      </motion.div>
     ))}
    </div>
    <div className="mt-6 md:mt-0 md:w-[300px] bg-opacity-10 rounded-xl flex flex-col gap-4">
     {achievementData.map((data, index) => (
      <motion.div
       initial={{ opacity: 0, y: 100 }}
       whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
       key={index}
       className="text-white"
      >
       <div className="flex items-center justify-between">
        <p className="text-lg font-medium">{data.name}</p>
        <p className=" shrink-0 text-[12px] text-gray-500">{data.date}</p>
       </div>
       <div className="w-full text-justify">
        <p className="text-[11px] text-gray-400 font-medium">
         {data.description}
        </p>
       </div>
       <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}>
        <Image
         src={data.img}
         alt={data.name}
         className="w-full md:w-[350px] max-h-[130px] rounded-lg object-cover mt-1"
        />
       </motion.div>
      </motion.div>
     ))}
    </div>
   </div>
   <div className="mt-16">
    <div className="flex items-center justify-between gap-2">
     <div className="shrink-0 flex flex-col">
      <h1 className="text-xl md:text-4xl font-integral text-white">
       CERTIFICATES{" "}
       <span className="text-sm font-light text-green-500 font-integral drop-shadow-[0_0_10px_rgba(144,238,144,0.5)]">
        and
       </span>{" "}
      </h1>{" "}
      <span className="text-md md:text-2xl font-medium text-white">
       Participations
      </span>
     </div>
    </div>
    <div className="w-full flex flex-wrap items-center justify-center gap-2 mt-10">
     {certificates.map((cert, index) => (
      <motion.div
       initial={{ opacity: 0, y: 100 }}
       whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
       whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
       key={index}
       className="h-[80px] flex flex-col gap-1  bg-gray-500 bg-opacity-10 p-3 border border-gray-500 rounded-lg"
      >
       <div className="flex items-start gap-1">
        <BiMedal size={16} className="text-orange-400 shrink-0 mt-1" />
        <div className="flex flex-col">
         <div className="w-[220px] flex items-start justify-between gap-2">
          <p className="text-xs font-medium text-white">{cert.name}</p>
          <p className="shrink-0 text-xs font-light text-gray-400">
           {cert.date}
          </p>
         </div>
        </div>
       </div>
       <div className="mt-auto ml-[16px]">
        <p className="text-xs text-gray-400 font-medium">{cert.by}</p>
       </div>
      </motion.div>
     ))}
    </div>
   </div>
  </section>
 );
}
