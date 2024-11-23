"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projectData, type Project } from "@/assets/projectData";

export default function Projects() {
 return (
  <main className="h-full w-full">
   <h1 className="text-5xl font-bold mb-10">PROJECTS.</h1>
   <div className="grid grid-cols-4 gap-4 auto-rows-[250px]">
    {projectData.map((project) => (
     <motion.div
      key={project.id}
      className={`
              relative rounded-3xl overflow-hidden
              ${getSizeClasses(project.size)}
              group cursor-pointer
              bg-slate-800/50 backdrop-blur-sm
            `}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
     >
      {project.images[0]?.url ? (
       <>
        {/* Main Image (first image from array) */}
        <Image
         src={project.images[0].url}
         alt={project.images[0].alt}
         fill
         className="object-cover transition-transform group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
         <div className="absolute bottom-0 p-6 w-full">
          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-sm text-gray-200 line-clamp-2">
           {project.description}
          </p>

          {/* Image count indicator */}
          <div className="flex gap-1 mt-3">
           {project.images.map((_, index) => (
            <div key={index} className="w-1 h-1 rounded-full bg-white/60" />
           ))}
          </div>
         </div>
        </div>
       </>
      ) : (
       // Fallback when no images are available
       <div className="p-6 h-full">
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="text-sm text-gray-200 line-clamp-2">
         {project.description}
        </p>
       </div>
      )}
     </motion.div>
    ))}
   </div>
  </main>
 );
}

function getSizeClasses(size: Project["size"]) {
 switch (size) {
  case "large":
   return "col-span-2 row-span-2";
  case "wide":
   return "col-span-2";
  case "tall":
   return "row-span-2";
  case "medium":
   return "col-span-1 row-span-1";
  case "small":
   return "col-span-1 row-span-1";
  default:
   return "col-span-1 row-span-1";
 }
}
