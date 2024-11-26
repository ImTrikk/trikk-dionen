"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projectData, type Project } from "@/assets/projectData";

export default function Projects() {
 return (
  <main className="h-full w-full">
   <h1 className="text-5xl font-bold mb-10">
    PROJECTS
    <span className="text-green-500 drop-shadow-[0_0_10px_rgba(144,238,144,0.5)]">
     .
    </span>
    <div className="grid grid-cols-3 gap-2 mt-5">
     <div className="col-span-2 p-4 border border-white rounded-xl min-h-[200px]"></div>
     <div className="col-span-1 p-4 border border-white rounded-xl min-h-[200px]"></div>
     <div className="col-span-1 p-4 border border-white rounded-xl min-h-[200px]"></div>
     <div className="col-span-2 p-4 border border-white rounded-xl min-h-[200px]"></div>
     <div className="col-span-2 p-4 border border-white rounded-xl min-h-[200px]"></div>
     <div className="col-span-1 p-4 border border-white rounded-xl min-h-[200px]"></div>
     <div className="col-span-1 p-4 border border-white rounded-xl min-h-[200px]"></div>
     <div className="col-span-2 p-4 border border-white rounded-xl min-h-[200px]"></div>
    </div>
   </h1>
  </main>
 );
}
