"use client";

import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { ProjectsData, Projects } from "@/data/projects";
import { IconType } from "react-icons";
import { useRouter } from "next/navigation";

const ProjectSection: React.FC = () => {
 const router = useRouter();
 const handleProjectClick = (projectId: number) => {
  router.push(`/pages?id=${projectId}`);
 };

 return (
  <main
   id="projects"
   className="relative h-auto w-full my-16 sm:my-32 py-16 sm:py-32"
  >
   {/* Header */}
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
    <p className="md:hidden text-xs text-gray-400">Featured Projects by trkk</p>
    <motion.div
     initial={{ opacity: 0 }}
     whileInView={{ opacity: 1, transition: { duration: 1.4 } }}
     className="hidden md:flex items-center gap-3 w-full"
    >
     <div className="w-full">
      <hr className="border-green-500/20" />
     </div>
     <div className="text-white font-bold shrink-0 text-base sm:text-xs px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20">
      Featured projects <span className="text-lg">⚡</span>
     </div>
    </motion.div>
   </div>

   {/* Projects */}
   <div className="grid grid-cols-1 gap-10">
    {ProjectsData.map((project: Projects, index: number) => (
     <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
       opacity: 1,
       y: 0,
       transition: { duration: 0.7, delay: index * 0.1 },
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center hover:bg-green-800/10 hover:border border-green-500/30 transition-all duration-300 p-6 rounded-xl cursor-pointer"
      onClick={() => handleProjectClick(project.id)}
     >
      {/* Image */}
      <div className="relative h-full group overflow-hidden rounded-xl border border-white/20">
       <Image
        src={project.img_url[0]}
        alt={project.title}
        className="object-cover h-full transition-transform duration-500 group-hover:scale-105"
        width={800}
        height={500}
        priority
       />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-2">
       <h2 className="text-white text-2xl font-bold">{project.title}</h2>
       <p className="text-gray-400 text-sm text-justify">
        {project.description}
       </p>
       <p className="text-green-400 text-xs font-semibold">
        Role: {project.role}
       </p>

       {/* Stacks */}
       <div className="flex gap-2 items-center flex-wrap">
        {project.stacks.map((stack, idx) => {
         const Icon = stack.logo;
         return (
          <div
           key={idx}
           className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full border border-white/20"
          >
           <span className="text-green-400 w-4 h-4">
            <Icon />
           </span>
           <span className="text-xs text-white">{stack.name}</span>
          </div>
         );
        })}
       </div>

       {/* Buttons */}
       <div className="flex gap-3 mt-4">
        <a
         href={project.github_url}
         target="_blank"
         rel="noopener noreferrer"
         onClick={(e) => e.stopPropagation()}
         className="flex items-center gap-2 text-sm text-white border border-white/20 px-4 py-2 rounded-md hover:bg-white/10 transition"
        >
         <FaGithub /> GitHub
        </a>
        {project.demo_url && (
         <a
          href={project.demo_url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-2 text-sm text-white border border-green-500/30 px-4 py-2 rounded-md hover:bg-green-500/20 transition"
         >
          <FaExternalLinkAlt /> Live Demo
         </a>
        )}
       </div>
      </div>
     </motion.div>
    ))}
   </div>
  </main>
 );
};

export default ProjectSection;
