"use client";

import Link from "next/link";
import { ProjectsData } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ImEarth } from "react-icons/im";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function Projects() {
 const [currentImages, setCurrentImages] = useState<number[]>(
  ProjectsData.map(() => 0) // Initialize with the first image for each project
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
  <main id="recent-projects" className="relative h-full w-full my-32 py-32">
   <div className="flex items-center justify-between gap-4 mb-10">
    <motion.h1
     initial={{ opacity: 0, x: 300 }}
     whileInView={{ opacity: 0.7, x: 0, transition: { duration: 0.7 } }}
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
     <div className=" text-white shrink-0">Projects made with 💓</div>
    </div>
   </div>
   <div className="flex flex-col gap-8">
    {ProjectsData.map((data, index) => (
     <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
      key={index}
     >
      <div className="flex gap-4">
       <div className="w-full h-auto relative rounded-xl border border-white">
        <AnimatePresence>
         <motion.div
          key={currentImages[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
         >
          <Image
           src={data.img_url[currentImages[index]]}
           alt="project_picture"
           className="h-auto rounded-xl"
           // layout="fill"
           objectFit="cover"
          />
         </motion.div>
        </AnimatePresence>
       </div>
       <div className="w-full">
        <div className="flex items-end gap-2">
         <h1 className="text-2xl font-integral font-bold text-white">
          {data.title}
         </h1>
         <motion.div
          initial={{ opacity: 1, rotate: 0 }}
          whileHover={{ rotate: 45, transition: { duration: 0.5 } }}
          className="flex items-center gap-2 text-green-500"
         >
          <FaArrowAltCircleRight size={18} />
         </motion.div>
        </div>
        <div className="mt-3 w-full bg-gray-500 border border-white bg-opacity-25 rounded-lg p-2 text-justify">
         <p className="text-xs font-medium text-white">
          Description: {data.description}
         </p>
        </div>
        <div className="mt-5">
         <p className="text-white text-xs font-light">Stacks used: </p>
         {data.stacks.map((data, index) => (
          <div key={index}>
           <h1 className="text-white">
            {data.logo} {data.name}
           </h1>
          </div>
         ))}
        </div>
        <div className="mt-5 flex items-center gap-2">
         <div
          className={`${
           data.status === "Completed" ? "bg-green-500" : "bg-red-500"
          } w-2 h-2 rounded-full flex items-center justify-center`}
         ></div>
         <p className="text-xs text-white font-light">{data.status}</p>
        </div>
       </div>
      </div>
     </motion.div>
    ))}
   </div>
  </main>
 );
}
