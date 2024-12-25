"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = ["HOME", "ABOUT", "RECENT PROJECTS", "STACKS"];
// const links = ["HOME", "ABOUT", "RECENT PROJECTS", "STACKS", "SKILLS"];

export default function Navbar() {
 const [isActive, setIsActive] = useState<string>("HOME"); // Default to first link

 const handleNav = (data: string) => {
  setIsActive(data); // Update active state

  // Scroll to the target section
  const target = document.getElementById(data.toLowerCase().replace(" ", "-"));
  if (target) {
   target.scrollIntoView({ behavior: "smooth" });
  }

  // Update hash
  window.location.hash = data.toLowerCase().replace(" ", "-");
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
      rect.top <= window.innerHeight / 2 &&
      rect.bottom >= window.innerHeight / 2;
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

 return (
  <motion.nav
   initial={{ opacity: 0, y: 600 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.7 }}
   className="sticky top-5 z-50 sm:px-10"
  >
   <div className="max-w-xl mx-auto h-14 border border-white rounded-3xl flex items-center justify-between px-4 bg-black/10 backdrop-blur-md ">
    <h1 className="glitch" data-text="⚡ TRKKU.">
     <motion.span
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity }}
     >
      ⚡
     </motion.span>{" "}
     TRKKU.
    </h1>

    <div className="flex items-center gap-2">
     {links.map((data, id) => (
      <li
       onClick={() => handleNav(data)}
       key={id}
       className={`text-[10px] list-none cursor-pointer px-4 py-2 ${
        isActive === data
         ? "text-green-500 font-bold drop-shadow-[0_0_20px_rgba(144,238,144,1)]"
         : "text-white"
       }`}
      >
       {data}
      </li>
     ))}

     <button
      onClick={() => handleNav("CONTACT")}
      className={`${
       isActive === "CONTACT"
        ? "bg-green-500 text-white"
        : "bg-white text-black"
      } px-4 py-2 rounded-full text-xs font-semibold`}
     >
      BLOGS
     </button>
    </div>
   </div>
  </motion.nav>
 );
}
