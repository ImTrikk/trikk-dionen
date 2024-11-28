"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = ["HOME", "ABOUT", "RECENT PROJECTS", "STACKS", "SKILLS"];

export default function Navbar() {
 const [isActive, setIsActive] = useState<string>("HOME"); // Default to first link

 const handleNav = (data: string) => {
  setIsActive(data); // Update active state

  // Scroll and update hash
  switch (data) {
   case "HOME":
    window.scroll(0, 0);
    window.location.hash = "home";
    break;
   case "ABOUT":
    window.scroll(0, 0);
    window.location.hash = "about";
    break;
   case "SKILLS":
    window.scroll(0, 0);
    window.location.hash = "skills";
    break;
   case "RECENT PROJECTS":
    window.scroll(0, 0);
    window.location.hash = "projects";
    break;
   case "STACKS":
    window.scroll(0, 0);
    window.location.hash = "stack";
    break;
   default:
    window.scroll(0, 0);
    break;
  }
 };

 const handleContact = () => {
  setIsActive("CONTACT"); // Optional if CONTACT is treated as a separate state
  window.location.hash = "contact";
 };

  useEffect(() => {

  })

 return (
  <motion.nav
   initial={{ opacity: 0, y: 600 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.7 }}
   className="sticky top-5 z-50 sm:px-10"
  >
   <div className="max-w-4xl mx-auto h-14 border border-white rounded-3xl flex items-center justify-between px-4 bg-black/10 backdrop-blur-md ">
    <h1 className="glitch" data-text="⚡ TRKKU.">
     ⚡ TRKKU.
    </h1>
    <div className="flex items-center gap-2">
     {links.map((data, id) => (
      <li
       onClick={() => handleNav(data)}
       key={id}
       className={`text-xs list-none cursor-pointer px-4 py-2 ${
        isActive === data
         ? "text-green-500 font-bold drop-shadow-[0_0_20px_rgba(144,238,144,1)]"
         : "text-white"
       }`}
      >
       {data}
      </li>
     ))}

     <button
      onClick={handleContact}
      className={`${
       isActive === "CONTACT"
        ? "bg-green-500 text-white"
        : "bg-white text-black"
      } px-4 py-2 rounded-full text-sm font-semibold`}
     >
      CONTACT
     </button>
    </div>
   </div>
  </motion.nav>
 );
}
