"use client";

import Link from "next/link";
import { ProjectsData } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";

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
  <main
   id="recent-projects"
   className="relative h-full w-full px-8 my-32 py-32"
  >
   <div className="flex items-center justify-between gap-4 mb-10">
    <motion.h1
     initial={{ opacity: 0, x: 100 }}
     whileInView={{ opacity: 0.7, x: 0, transition: { duration: 0.5 } }}
     className="text-5xl font-bold font-integral shrink-0 flex items-center justify-center m-0"
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
     <div className="shrink-0">Recent Projects made with 💓</div>
    </div>
   </div>
   <div className="grid grid-cols-3 gap-4 w-full max-h-[2500px] overflow-hidden">
    {ProjectsData.map((data, index) => (
     <React.Fragment key={index}>
      {index % 2 === 0 ? (
       <>
        {/* Image Section */}
        <motion.div
         initial={{ opacity: 0, x: -100 }}
         whileInView={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
         className="col-span-2 p-4 border border-white flex items-center justify-center rounded-xl min-h-[340px]"
        >
         <AnimatePresence mode="wait">
          <Image
           src={data.img_url[currentImages[index]] as unknown as string}
           alt="project_picture"
           className="w-full h-auto rounded-lg"
          />
         </AnimatePresence>
        </motion.div>
        {/* Text Section */}
        <Link href={`/projects/${data.id}`}>
         <div className="col-span-1 p-4 border border-white flex flex-col justify-center rounded-xl min-h-[340px]">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
         </div>
        </Link>
       </>
      ) : (
       <>
        {/* Text Section */}
        <Link href={`/projects/${data.id}`}>
         <div className="col-span-1 p-4 border border-white flex flex-col justify-center rounded-xl min-h-[340px]">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
         </div>
        </Link>
        {/* Image Section */}
        <motion.div
         initial={{ opacity: 0, x: 100 }}
         whileInView={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
         className="col-span-2 p-4 border border-white flex items-center justify-center rounded-xl min-h-[340px]"
        >
         <AnimatePresence mode="wait">
          <Image
           src={data.img_url[currentImages[index]] as unknown as string}
           alt="project_picture"
           className="w-full h-auto rounded-lg"
          />
         </AnimatePresence>
        </motion.div>
       </>
      )}
     </React.Fragment>
    ))}
   </div>
   <div className="absolute bg-transparent left-0 bottom-5 mt-auto h-32 w-full bg-gradient-to-t from-gray-50 opacity-5 to-transparent pointer-events-none z-10" />
   <div className="flex items-center justify-between w-full">
    <motion.h1
     initial={{ opacity: 0, x: 100 }}
     whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
     className="text-5xl mt-10 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] font-integral"
    >
     And many more...
    </motion.h1>
    <motion.svg
     initial={{ opacity: 1, rotate: 0 }}
     whileHover={{ rotate: 45, transition: { duration: 0.5 } }}
     xmlns="http://www.w3.org/2000/svg"
     fill="none"
     viewBox="0 0 24 24"
     strokeWidth="1.5"
     stroke="currentColor"
     className="size-16"
    >
     <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
     />
    </motion.svg>
   </div>
  </main>
 );
}
