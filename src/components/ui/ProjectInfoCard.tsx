"use client";

import { Projects } from "@/data/projects";
import Image from "next/image";
import { useState } from "react";
import {
 IoIosArrowDroprightCircle,
 IoIosArrowDropleftCircle,
} from "react-icons/io";

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
 if (disableTransition) {
  setTimeout(() => setDisableTransition(false), 0);
 }

 return (
  <main className="bg-gray-400 w-full max-w-[800px] h-[500px] mx-auto bg-opacity-10 p-6 border border-gray-300 rounded-xl">
   <div>
    <div className="flex items-center gap-2">
     <div className="w-6 h-6 flex items-center justify-center rounded-full border">
      <p className="text-xs text-white font-medium">{project.id}</p>
     </div>
     <h1 className="text-white text-lg font-integral font-bold">
      {project.title}
     </h1>
    </div>
    <div className="mt-2">
     <hr className="border-gray-600" />
    </div>
    <div className="relative mt-3 border border-gray-600 p-2 rounded overflow-hidden max-w-full h-auto">
     {/* Carousel Container */}
     <div
      className={`flex ${
       disableTransition
        ? "no-transition"
        : "transition-transform duration-500 ease-in-out"
      }`}
      style={{
       transform: `translateX(-${currentImageIndex * 100}%)`,
       // width: `${images.length * 100}%`,
      }}
      onTransitionEnd={handleTransitionEnd}
     >
      {/* Images */}
      {images.map((img, index) => (
       <div key={index} className="w-full flex-shrink-0">
        <Image
         src={img}
         alt={`Project image ${index + 1}`}
         className="rounded"
        />
       </div>
      ))}
     </div>

     {/* Navigation Buttons */}
     <button
      onClick={handlePrevClick}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-800 p-2 rounded-full"
     >
      <IoIosArrowDropleftCircle />
     </button>
     <button
      onClick={handleNextClick}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-800 p-2 rounded-full"
     >
      <IoIosArrowDroprightCircle />
     </button>
    </div>
    <div className="mt-5">
     <p className="text-white text-xs font-light">Stack: </p>
     <div className="flex items-center gap-2">
      {project.stacks.map((data, index) => (
       <div key={index} className="flex items-center gap-2 mt-2">
        <p className="text-orange-400">
         <data.logo />
        </p>
        <h1 className="text-xs font-light text-white">{data.name}</h1>
       </div>
      ))}
     </div>
    </div>
   </div>
  </main>
 );
};
