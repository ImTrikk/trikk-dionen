"use client"

import React from "react";
import { motion } from "framer-motion";

const links = ["HOME", "ABOUT", "SKILLS", "RECENT PROJECTS", "STACKS"];

export default function Navbar() {
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
      <ul key={id} className="text-xs">
       <li>{data}</li>
      </ul>
     ))}
     <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold">
      CONTACT
     </button>
    </div>
   </div>
  </motion.nav>
 );
}
