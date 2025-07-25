"use client";

import { Projects } from "@/data/projects";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
 IoIosArrowDroprightCircle,
 IoIosArrowDropleftCircle,
} from "react-icons/io";
import { toast, Toaster } from "sonner"; // Import Sonner's toast function

export const ProjectInfoCard = ({ project }: { project: Projects }) => {
 const [currentImageIndex, setCurrentImageIndex] = useState(1); // Start at the first real image
 const [isTransitioning, setIsTransitioning] = useState(false);
 const [disableTransition, setDisableTransition] = useState(false); // Disable transition for seamless jump

 // Create a wrapped array with duplicated edges for infinite scrolling
 const images = [
  project.img_url[project.img_url.length - 1], // Last image at the start
  ...project.img_url,
  project.img_url[0], // First image at the end
 ];

 const handlePrevClick = () => {
  if (isTransitioning) return;
  setIsTransitioning(true);

  setCurrentImageIndex((prevIndex) => prevIndex - 1);
 };

 const handleNextClick = () => {
  if (isTransitioning) return;
  setIsTransitioning(true);

  setCurrentImageIndex((prevIndex) => prevIndex + 1);
 };

 const handleTransitionEnd = () => {
  setIsTransitioning(false);

  // Seamlessly jump to the real image without animation
  if (currentImageIndex === 0) {
   setDisableTransition(true); // Disable transition for instant jump
   setCurrentImageIndex(images.length - 2); // Jump to the last real image
  } else if (currentImageIndex === images.length - 1) {
   setDisableTransition(true); // Disable transition for instant jump
   setCurrentImageIndex(1); // Jump to the first real image
  }
 };

 // Reset the `disableTransition` flag after the instant jump
 useEffect(() => {
  if (disableTransition) {
   const timer = setTimeout(() => setDisableTransition(false), 0);
   return () => clearTimeout(timer);
  }
 }, [disableTransition]);

 // Handle URL clicks
 const handleDemoClick = (e: React.MouseEvent) => {
  if (!project.demo_url) {
   e.preventDefault();
   toast.info("Demo URL is not found.");
  }
 };

 const handleGithubClick = (e: React.MouseEvent) => {
  if (!project.github_url) {
   e.preventDefault();
   toast.info("GitHub URL is not available.");
  }
 };

 return (
  <>
   <Toaster richColors />
   <main className="w-full max-w-[800px] h-auto mx-auto bg-gray-800/50 border-gray-700 backdrop-blur-xl p-4 sm:p-6 border border-gray-700/30 rounded-2xl shadow-xl">
    <div className="space-y-6">
     {/* Header Section */}
     <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
       <div className="h-8 w-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center">
        <p className="text-sm text-green-500 font-medium">{project.id}</p>
       </div>
       <h1 className="text-xl sm:text-2xl text-white font-integral font-bold">
        {project.title}
       </h1>
      </div>
     </div>

     {/* Image Carousel */}
     <div className="relative mt-3 rounded-xl overflow-hidden border border-gray-700/30 shadow-lg group">
      <div
       className={`flex ${
        disableTransition
         ? "no-transition"
         : "transition-transform duration-500 ease-in-out"
       }`}
       style={{
        transform: `translateX(-${currentImageIndex * 100}%)`,
       }}
       onTransitionEnd={handleTransitionEnd}
      >
       {images.map((img, index) => (
        <div key={index} className="w-full flex-shrink-0 relative aspect-video">
         <Image
          src={img}
          alt={`Project image ${index + 1}`}
          className="rounded-lg object-cover"
          fill
          priority
         />
        </div>
       ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover:opacity-100 transition-opacity">
       <button
        onClick={handlePrevClick}
        className="p-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white hover:bg-black/70 transition-colors"
       >
        <IoIosArrowDropleftCircle className="text-2xl" />
       </button>
       <button
        onClick={handleNextClick}
        className="p-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white hover:bg-black/70 transition-colors"
       >
        <IoIosArrowDroprightCircle className="text-2xl" />
       </button>
      </div>

      {/* Image Counter */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white text-xs">
       {currentImageIndex}/{project.img_url.length}
      </div>
     </div>

     {/* Tech Stack */}
     <div className="space-y-3">
      <p className="text-sm text-green-500 font-medium">Technologies</p>
      <div className="flex flex-wrap items-center gap-2">
       {project.stacks.map((tech, index) => (
        <div
         key={index}
         className="flex items-center gap-2 px-3 py-1.5 rounded-full 
          bg-gray-900/50 border border-gray-700/30 
          hover:border-green-500/30 transition-colors"
        >
         <p className="text-green-500">
          <tech.logo />
         </p>
         <p className="text-sm text-gray-300">{tech.name}</p>
        </div>
       ))}
      </div>
     </div>

     {/* Links Section */}
     <div className="flex gap-4">
      <a
       href={project.demo_url}
       target="_blank"
       rel="noopener noreferrer"
       className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20
        border border-green-500/20 text-white text-sm font-medium
        transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-500/10
        flex items-center justify-center gap-2"
       onClick={handleDemoClick}
      >
       <span>Live Demo</span>
       <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
       >
        <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={2}
         d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
       </svg>
      </a>
      <a
       href={project.github_url}
       target="_blank"
       rel="noopener noreferrer"
       className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50
        border border-gray-700/50 text-white text-sm font-medium
        transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-gray-600/50
        flex items-center justify-center gap-2"
       onClick={handleGithubClick}
      >
       <span>Source Code</span>
       <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
       >
        <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={2}
         d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
       </svg>
      </a>
     </div>
    </div>
   </main>
  </>
 );
};
