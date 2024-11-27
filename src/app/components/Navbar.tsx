"use client";

import React from "react";
import { motion } from "framer-motion";

const links = ["HOME", "ABOUT", "RECENT PROJECTS", "STACKS", "SKILLS"];

export default function Navbar() {
 const handleNav = (data: string) => {
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
  window.location.hash = "contact";
 };

 return (
  <motion.nav
   initial={{ opacity: 0, y: 600 }}
   animate={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.7 }}
   className="sticky top-5 z-50 sm:px-10"
  >
   <div className="max-w-4xl mx-auto h-14 border border-white rounded-3xl flex items-center justify-between px-4 bg-black/10 backdrop-blur-md ">
    <h1 className="text-sm font-semibold">TRKKU.</h1>
    <div className="flex items-center gap-3 ">
     {links.map((data, id) => (
      <ul
       onClick={() => handleNav(data)}
       key={id}
       className="text-xs cursor-pointer"
      >
       <li>{data}</li>
      </ul>
     ))}
     <button
      onClick={handleContact}
      className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold"
     >
      CONTACT
     </button>
    </div>
   </div>
  </motion.nav>
 );
}
