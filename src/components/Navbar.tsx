"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["HOME", "ABOUT", "PROJECTS", "STACKS"];

export default function Navbar() {
 const [isActive, setIsActive] = useState<string>("HOME"); // Default to first link
 const [showContent, setShowContent] = useState<boolean>(false);
 const [isMobile, setIsMobile] = useState<boolean>(false);

 // Scroll to section without changing hash in URL
 const scrollToSection = (data: string) => {
  setIsActive(data); // Update active state

  const target = document.getElementById(data.toLowerCase().replace(" ", "-"));
  if (target) {
   target.scrollIntoView({ behavior: "smooth" });
  }
  // Do NOT update window.location.hash
 };

 useEffect(() => {
  const handleScroll = () => {
   // Detect which section is currently in view
   links.forEach((section) => {
    const element = document.getElementById(
     section.toLowerCase().replace(" ", "-")
    );
    if (element) {
     const rect = element.getBoundingClientRect();
     const isInView =
      rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2;
     if (isInView) {
      setIsActive(section);
     }
    }
   });
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
   window.removeEventListener("scroll", handleScroll);
  };
 }, []);

 useEffect(() => {
  const timer = setTimeout(() => {
   setShowContent(true);
  }, 3000); // Show content after 3 seconds

  return () => clearTimeout(timer);
 }, []);

 const showMobile = () => {
  setIsMobile((prev) => !prev); // Toggle isMobile state
 };

 return (
  <>
   <motion.nav
    initial={{ opacity: 0, y: 600 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="sticky top-5 z-50 sm:px-10 overflow-hidden"
   >
    <motion.div
     initial={{ width: 56, height: 56 }}
     animate={{
      width: showContent ? "max-content" : 56,
      height: 56,
      borderRadius: showContent ? "1.5rem" : "50%",
     }}
     transition={{ duration: 0.7 }}
     className={`${
      !showContent ? "border-2 border-white" : "border border-white"
     } mx-auto px-4 bg-black/10 backdrop-blur-md flex items-center justify-between overflow-hidden gap-5 z-50`}
    >
     <h1
      onClick={() => {
       if (window.innerWidth < 768) {
        showMobile(); // Show mobile content for screens smaller than md
       } else {
        scrollToSection("HOME"); // Scroll to the hero section for md and larger screens
       }
      }}
      className="glitch font-integral text-[5px] shrink-0 cursor-pointer"
      data-text="⚡"
     >
      <motion.span
       initial={{ rotate: 0 }}
       animate={{ rotate: 360 }}
       transition={{ duration: 2, repeat: Infinity }}
      >
       ⚡
      </motion.span>
      {showContent && "TRKKU."}
     </h1>

     {showContent && (
      <motion.div
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ duration: 1 }}
       className="hidden md:flex items-center "
      >
       {links.map((data, id) => (
        <li
         onClick={() => scrollToSection(data)}
         key={id}
         className={`text-[8px] sm:text-[10px] list-none cursor-pointer px-2 md:px-4 py-2 ${
          isActive === data
           ? "text-green-500 font-bold drop-shadow-[0_0_20px_rgba(144,238,144,1)]"
           : "text-white"
         }`}
        >
         {data}
        </li>
       ))}

       <button
        onClick={() => scrollToSection("CONTACT")}
        className={`${
         isActive === "CONTACT"
          ? "bg-green-500 text-white"
          : "bg-white text-black"
        } px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs font-semibold w-auto`} // Added w-auto to prevent full width
       >
        CONNECT
       </button>
      </motion.div>
     )}
    </motion.div>
   </motion.nav>
   <AnimatePresence>
    {isMobile && (
     <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8 }}
      className="fixed z-40 w-full flex items-center justify-center"
     >
      <div className="mx-5 w-full flex flex-col justify-center gap-2 bg-black/10 backdrop-blur-md p-4 rounded-2xl border border-gray-700 text-center">
       {links.map((data, id) => (
        <li
         onClick={() => {
          scrollToSection(data);
          setIsMobile(false);
         }}
         key={id}
         className={`text-sm list-none cursor-pointer px-2 md:px-4 py-2 ${
          isActive === data
           ? "text-green-500 font-bold drop-shadow-[0_0_20px_rgba(144,238,144,1)]"
           : "text-white"
         }`}
        >
         {data}
        </li>
       ))}
       <div className="flex items-center justify-center">
        <button
         onClick={() => {
          scrollToSection("CONTACT");
          setIsMobile(false);
         }}
         className={`${
          isActive === "CONTACT"
           ? "bg-green-500 text-white"
           : "bg-white text-black"
         } px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-semibold w-[100px]`} // Adjusted padding to make the button smaller
        >
         CONNECT
        </button>
       </div>
      </div>
     </motion.div>
    )}
   </AnimatePresence>
  </>
 );
}
