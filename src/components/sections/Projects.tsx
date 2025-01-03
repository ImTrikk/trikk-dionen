"use client";

import Link from "next/link";
import type { Projects } from "@/data/projects";
import { ProjectsData } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { ImEarth } from "react-icons/im";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { ProjectInfoCard } from "../ui/ProjectInfoCard";
import { once } from "events";

export default function Projects() {
 const [currentImages, setCurrentImages] = useState<number[]>(
  ProjectsData.map(() => 0) // Initialize with or first image for each project
 );

 const [selectedProject, setSelectedProject] = useState<Projects | null>(
  ProjectsData[0]
 );

 const projectInfoRef = useRef<HTMLDivElement>(null);

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

 const handleProjectClick = (data: Projects) => {
  setSelectedProject(data);
  // Smooth scroll to project info on mobile
  if (window.innerWidth < 1024) {
   // lg breakpoint
   setTimeout(() => {
    projectInfoRef.current?.scrollIntoView({
     behavior: "smooth",
     block: "start",
    });
   }, 100);
  }
 };

 return (
  <main
   id="projects"
   className="relative h-auto w-full my-16 sm:my-32 py-16 sm:py-32"
  >
   <div className="flex flex-col sm:flex-row items-center justify-between mb-5 gap-3">
    <motion.h1
     initial={{ opacity: 0, y: 100 }}
     whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
     className="text-2xl md:text-4xl sm:text-6xl text-white font-bold font-integral shrink-0 flex items-center justify-center m-0"
    >
     PROJECTS{" "}
     <span className="text-green-500 font-integral drop-shadow-[0_0_10px_rgba(144,238,144,0.5)]">
      .
     </span>
    </motion.h1>
    <p className="md:hidden text-xs text-gray-600">Featured Projects by trkk</p>
    <motion.div
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1, transition: { duration: 1.4 } }}
     className="hidden md:flex items-center gap-3 w-full"
    >
     <div className="w-full">
      <hr className="border-green-500/20" />
     </div>
     <div className="text-white font-bold shrink-0 text-base sm:text-xs px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20">
      Featured projects <span className="text-lg"> ⚡</span>
     </div>
    </motion.div>
   </div>
   <div className="hidden lg:grid grid-cols-[350px,1fr] gap-8 sm:gap-12 md:mt-14">
    <div className="relative space-y-4 max-h-[400px] lg:max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-green-500/50 px-2">
     {ProjectsData.map((data, index) => (
      <motion.div
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       transition={{ delay: index * 0.1 }}
       key={index}
       onClick={() => handleProjectClick(data)}
       className={`
        cursor-pointer group
        ${
         selectedProject === data
          ? "bg-green-500/10 border-green-500"
          : "bg-gray-800/50 border-gray-700 hover:border-green-500/50"
        }
        border rounded-xl p-4 transition-all duration-300
       `}
      >
       <div className="space-y-3">
        <div className="flex items-center justify-between">
         <h2 className="text-xl sm:text-2xl font-integral font-bold text-white group-hover:text-green-500 transition-colors">
          {data.title}
         </h2>
         <span className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">
          →
         </span>
        </div>
        <div className="bg-black/20 rounded-lg p-3">
         <p className="text-sm text-gray-300 line-clamp-3">
          {data.description}
         </p>
        </div>
        <div className="flex flex-wrap gap-2">
         {data.stacks.slice(0, 4).map((tech, i) => (
          <span
           key={i}
           className="text-xs px-2 py-1 rounded-full bg-black/30 text-gray-300"
          >
           {tech.name}
          </span>
         ))}
         {data.stacks.length > 4 && (
          <span className="text-xs px-2 py-1 rounded-full bg-black/30 text-gray-300">
           +{data.stacks.length - 4}
          </span>
         )}
        </div>
       </div>
      </motion.div>
     ))}
    </div>
    <div ref={projectInfoRef} className="w-full scroll-mt-4">
     <AnimatePresence mode="wait">
      {selectedProject && (
       <motion.div
        key={selectedProject.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
       >
        <ProjectInfoCard project={selectedProject} />
       </motion.div>
      )}
     </AnimatePresence>
    </div>
   </div>

   {/* Mobile Accordion Layout */}
   <div className="lg:hidden space-y-6">
    {ProjectsData.map((data, index) => (
     <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      key={index}
      className={`
        rounded-2xl backdrop-blur-sm
        ${
         selectedProject === data
          ? "bg-green-500/5 border-green-500/30"
          : "bg-gray-900/40 border-gray-800/50 hover:border-gray-700/50"
        }
        border shadow-lg overflow-hidden
      `}
     >
      {/* Accordion Header */}
      <div
       onClick={() =>
        setSelectedProject(selectedProject === data ? null : data)
       }
       className="cursor-pointer p-5 space-y-3"
      >
       <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
         <div className="w-2 h-2 rounded-full bg-green-500" />
         <h2 className="text-xl font-integral font-bold text-white">
          {data.title}
         </h2>
        </div>
        <motion.span
         animate={{ rotate: selectedProject === data ? 180 : 0 }}
         transition={{ duration: 0.3 }}
         className="text-green-500 text-xl"
        >
         ↓
        </motion.span>
       </div>

       {/* Tech Stack Pills */}
       <div className="flex flex-wrap gap-2">
        {data.stacks.slice(0, 3).map((tech, i) => (
         <span
          key={i}
          className="text-xs px-3 py-1 rounded-full 
            bg-black/20 text-gray-300 border border-gray-700/30
            flex items-center gap-1.5"
         >
          <p className="text-green-500">
           <tech.logo />
          </p>
          {tech.name}
         </span>
        ))}
        {data.stacks.length > 3 && (
         <span className="text-xs px-3 py-1 rounded-full bg-black/20 border border-gray-700/30 text-gray-400">
          +{data.stacks.length - 3}
         </span>
        )}
       </div>
      </div>

      {/* Accordion Content */}
      <AnimatePresence>
       {selectedProject === data && (
        <motion.div
         initial={{ height: 0, opacity: 0 }}
         animate={{ height: "auto", opacity: 1 }}
         exit={{ height: 0, opacity: 0 }}
         transition={{ duration: 0.3 }}
         className="border-t border-gray-800/50"
        >
         <div className="p-5 space-y-5">
          {/* Description */}
          <p className="text-sm leading-relaxed text-gray-300">
           {data.description}
          </p>

          {/* Project Preview */}
          <div className="rounded-xl overflow-hidden border border-gray-800/50">
           <ProjectInfoCard project={data} />
          </div>
         </div>
        </motion.div>
       )}
      </AnimatePresence>
     </motion.div>
    ))}
   </div>
  </main>
 );
}
