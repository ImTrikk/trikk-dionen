"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ProjectsData } from "@/data/projects";
import Image from "next/image";

export default function Projects() {
 const getAnimateValues = (index: number) => {
  return {
   initial: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
   whileInView: { opacity: 1, x: 0, transition: { duration: 1.2 } },
  };
 };

 const spanPattern = [2, 1, 1, 2, 2, 1, 1, 2]; // Define the pattern
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
  <main id="projects" className="h-full w-full px-8 my-32 py-32">
   <h1 className="text-5xl font-bold mb-10">
    PROJECTS
    <span className="text-green-500 drop-shadow-[0_0_10px_rgba(144,238,144,0.5)]">
     .
    </span>
    <div className="grid grid-cols-3 gap-4 mt-5">
     {ProjectsData.map((data, index) => {
      const spanValue = spanPattern[index % spanPattern.length];
      const isProject = spanValue === 2; // col-span-2 for projects
      return (
       <motion.div
        key={data.id} // Use a unique key based on the project's ID
        {...getAnimateValues(index)}
        className={`col-span-${spanValue} p-4 border border-white flex ${
         isProject
          ? "items-center justify-center" // Center project content
          : "flex-col items-start justify-center" // Align description content
        } rounded-xl min-h-[340px]`}
       >
        {isProject ? (
         // Project content (col-span-2)
         <div>
          <Image
           src={data.img_url[currentImages[index]] as unknown as string} // Display current image for this project
           alt={data.title}
           className="w-full h-auto rounded-xl"
          />
          <h1 className="mt-4 text-2xl font-bold">{data.title}</h1>
         </div>
        ) : (
         // Description content (col-span-1)
         <div>
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-sm text-gray-300">{data.description}</p>
          <h3 className="mt-4 text-lg font-semibold">Stacks</h3>
          <ul className="mt-2">
           {data.stacks.map((stack, idx) => (
            <li key={idx} className="text-sm text-gray-300">
             {stack.name}
            </li>
           ))}
          </ul>
         </div>
        )}
       </motion.div>
      );
     })}
    </div>
   </h1>
  </main>
 );
}

{
 /* <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
      className="col-span-2 p-4 border border-white flex items-center justify-center rounded-xl min-h-[340px]"
     ></motion.div>
     <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
      className="col-span-1 p-4 border border-white flex items-center justify-center rounded-xl min-h-[340px] text-xs"
     >
      <div>
       <span className="text-xs text-green-400">ProjectInfo = </span> [
       <span className="text-orange-500">description:</span>
       <span className="text-white px-4 text-justify">
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex cupiditate
        sunt ratione quaerat reprehenderit nostrum expedita, assumenda totam
        voluptas quas iure quis odio dolorum neque laboriosam ea ab, eos
        distinctio."
       </span>
       <span className="text-orange-500">stack:</span>
       <span className="text-white">[ ]</span>
      </div>
      ]
     </motion.div>
     <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
      className="col-span-1 p-4 border border-white flex items-center justify-center rounded-xl min-h-[340px]"
     ></motion.div>
     <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
      className="col-span-2 p-4 border border-white flex items-center justify-center rounded-xl min-h-[340px]"
     ></motion.div>
     <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
      className="col-span-2 p-4 border border-white flex items-center justify-center rounded-xl min-h-[340px]"
     ></motion.div>
     <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
      className="col-span-1 p-4 border border-white flex items-center justify-center rounded-xl min-h-[340px]"
     ></motion.div>
     <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
      className="col-span-1 p-4 border border-white flex items-center justify-center rounded-xl min-h-[340px]"
     ></motion.div>
     <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
      className="col-span-2 p-4 border border-white flex items-center justify-center rounded-xl min-h-[340px]"
     ></motion.div> */
}
