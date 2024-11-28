"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectsData } from "@/data/projects";
import Image from "next/image";

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
  <main id="projects" className="h-full w-full px-8 my-32 py-32">
   <h1 className="text-5xl font-bold mb-10">
    PROJECTS
    <span className="text-green-500 drop-shadow-[0_0_10px_rgba(144,238,144,0.5)]">
     .
    </span>
   </h1>
   <div className="grid grid-cols-3 gap-4">
    {ProjectsData.map((data, index) => (
     <React.Fragment key={index}>
      {/* Alternating Layout: Image first if even, Text first if odd */}
      {index % 2 === 0 ? (
       <>
        {/* Image Section */}
        <motion.div
         initial={{ opacity: 0, x: -100 }}
         whileInView={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
         className="col-span-2 p-4 border border-white flex items-center justify-center rounded-xl min-h-[340px]"
        >
         <Image
          src={data.img_url[currentImages[index]] as unknown as string}
          alt="project_picture"
          className="w-full h-auto rounded-lg"
         />
        </motion.div>

        {/* Text Section */}
        <motion.div
         initial={{ opacity: 0, x: 100 }}
         whileInView={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
         className="col-span-1 p-4 border border-white flex items-center justify-center rounded-xl min-h-[340px] text-xs"
        >
         <div>
          <span className="text-xs text-green-400">ProjectInfo = </span> [
          <br />
          <span className="text-orange-500">Project Title:</span>
          <span className="text-white px-4 text-justify">{data.title}</span>
          <br />
          <span className="text-orange-500">description:</span>
          <span className="text-white px-4 text-justify">
           {data.description}
          </span>
          <br />
          <span className="text-orange-500">stack:</span>
          <span className="text-white">
           {data.stacks.map((tech, key) => (
            <span key={key}>{tech.name}, </span>
           ))}
          </span>
          ]
         </div>
        </motion.div>
       </>
      ) : (
       <>
        {/* Text Section */}
        <motion.div
         initial={{ opacity: 0, x: -100 }}
         whileInView={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
         className="col-span-1 p-4 border border-white flex items-center justify-center rounded-xl min-h-[340px] text-xs"
        >
         <div>
          <span className="text-xs text-green-400">ProjectInfo = </span> [
          <br />
          <span className="text-orange-500">Project Title:</span>
          <span className="text-white px-4 text-justify">{data.title}</span>
          <br />
          <span className="text-orange-500">description:</span>
          <span className="text-white px-4 text-justify">
           {data.description}
          </span>
          <br />
          <span className="text-orange-500">stack:</span>
          <span className="text-white">
           {data.stacks.map((tech, key) => (
            <span key={key}>{tech.name}, </span>
           ))}
          </span>
          ]
         </div>
        </motion.div>
        {/* Image Section */}
        <motion.div
         initial={{ opacity: 0, x: 100 }}
         whileInView={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
         className="col-span-2 p-4 border border-white justify-center rounded-xl flex flex-col items-start"
        >
         <AnimatePresence mode="wait">
          {" "}
          {/* Ensures smooth transitions */}
          <motion.div
           key={currentImages[index]} // Unique key for each image to trigger re-render
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.8 }}
           className="w-full h-auto rounded-lg"
          >
           <Image
            src={data.img_url[currentImages[index]] as unknown as string}
            alt="project_picture"
            className="w-full h-auto rounded-lg"
           />
          </motion.div>
         </AnimatePresence>
        </motion.div>
       </>
      )}
     </React.Fragment>
    ))}

    <div className="mt-10">
     <h1 className="text-5xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] font-integral">
      Any many more...
     </h1>
    </div>
   </div>
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
