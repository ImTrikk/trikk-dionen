"use client";

import Link from "next/link";
import type { Projects } from "@/data/projects";
import { ProjectsData } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ImEarth } from "react-icons/im";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { ProjectInfoCard } from "../ui/ProjectInfoCard";
import { once } from "events";

export default function Projects() {
 const [currentImages, setCurrentImages] = useState<number[]>(
  ProjectsData.map(() => 0) // Initialize with or first image for each project
 );

 const [selectedProject, setSelectedProject] = useState<Projects | undefined>(
  undefined
 );

 useEffect(() => {
  const interval = setInterval(() => {
   setCurrentImages((prevImages) =>
    prevImages.map((currentIndex, projectIndex) => {
     const project = ProjectsData[projectIndex];
     const totalImages = project.img_url.length;
     return (currentIndex + 1) % totalImages; // Cycle through images
    })
   );
  }, 5000); // Change image every 5 seconds

  return () => clearInterval(interval); // Clean up interval on component unmount
 }, []);

 return (
  <main id="projects" className="relative h-auto w-full my-32 py-32">
   <div className="flex items-center justify-between gap-4 mb-10">
    <motion.h1
     initial={{ opacity: 0, x: 300 }}
     whileInView={{ opacity: 1, x: 0, transition: { duration: 0.7 } }}
     className="text-5xl text-white font-bold font-integral shrink-0 flex items-center justify-center m-0"
    >
     PROJECTS{" "}
     <span className="text-green-500 font-integral drop-shadow-[0_0_10px_rgba(144,238,144,0.5)]">
      .
     </span>
    </motion.h1>
    <div className="flex items-center gap-2 w-full">
     <div className="w-full">
      <hr />
     </div>
     <div className=" text-white font-bold shrink-0">
      Featured projects <span className="text-lg"> ⚡</span>
     </div>
    </div>
   </div>
   <div className="flex items-start justify-between mt-14 gap-6 mx-2">
    <div className="relative flex flex-col gap-8 max-h-[500px] overflow-scroll w-[350px]  shrink-0 px-2">
     <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t to-transparent pointer-events-none"></div>

     {/* Project Content */}
     {ProjectsData.map((data, index) => (
      <div
       // initial={{ opacity: 0, y: 200 }}
       // whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
       key={index}
       className={`cursor-pointer transition-all duration-300 ${
        selectedProject === data ? "border border-green-500 p-2 rounded-xl" : ""
       }`}
       onClick={() => setSelectedProject(data)}
      >
       <div className="flex gap-4">
        <div className="w-full">
         <div className="flex items-end gap-2">
          <h1 className="text-2xl font-integral font-bold text-white">
           {data.title}
          </h1>
          {/* <motion.div
           initial={{ opacity: 1, rotate: 0 }}
           whileHover={{ rotate: 45, transition: { duration: 0.5 } }}
           className="flex items-center gap-2 text-green-500"
          >
           <FaArrowAltCircleRight size={18} />
          </motion.div> */}
         </div>
         <div className="mt-3 w-full bg-gray-500 border border-white bg-opacity-25 rounded-lg p-2 text-justify">
          <p className="text-xs font-medium text-white">{data.description}</p>
         </div>
        </div>
       </div>
      </div>
     ))}
    </div>
    {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/40 to-transparent z-40" /> */}
    {selectedProject && <ProjectInfoCard project={selectedProject} />}
   </div>

   {/* <div className="h-10 bg-gray-400 bg-opacity-15 border border-gray-400 flex items-center justify-center rounded-full">
    <button className="text-white">View More Projects</button>
   </div> */}
  </main>
 );
}
