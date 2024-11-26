"use client";

import React from "react";
import { motion } from "framer-motion";

export default function OtherSkills() {
 return (
  <section className="h-screen">
   <motion.h1
    initial={{ opacity: 0, x: 100 }}
    whileInView={{
     opacity: 1,
     x: 0,
     transition: {
      duration: 1,
     },
    }}
    className="text-4xl font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] text-white"
   >
    OTHER SKILLS
    <span className="text-green-500 drop-shadow-[0_0_10px_rgba(144,238,144,0.5)]">
     .
    </span>
   </motion.h1>
   <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
    className="mt-3"
   >
    <p className="text-sm font-light">
     Skills I developed during my University Days...
    </p>
   </motion.div>
   <div className="mt-5 grid grid-cols-3 gap-2">
    <motion.div
     initial={{ opacity: 0, y: 100 }}
     whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
     className="col-span-2 border border-white rounded-xl p-16 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
    >
     <h1 className="text-lg font-semibold">Programming</h1>
    </motion.div>
    <motion.div
     initial={{ opacity: 0, y: 100 }}
     whileInView={{ opacity: 1, y: 0, transition: { duration: 1.25 } }}
     className="border border-white rounded-xl p-16 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
    >
     <h1 className="text-lg font-semibold">Graphic Design</h1>
    </motion.div>
    <motion.div
     initial={{ opacity: 0, y: 100 }}
     whileInView={{ opacity: 1, y: 0, transition: { duration: 1.7 } }}
     className="border border-white rounded-xl p-16 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
    >
     <h1 className="text-lg font-semibold">Prototyping /Wireframing</h1>
    </motion.div>
    <motion.div
     initial={{ opacity: 0, y: 100 }}
     whileInView={{ opacity: 1, y: 0, transition: { duration: 2.4 } }}
     className="col-span-2 border border-white rounded-xl p-16 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
    >
     <h1 className="text-lg font-semibold"> Video Editing</h1>
    </motion.div>
    <motion.div
     initial={{ opacity: 0, y: 100 }}
     whileInView={{ opacity: 1, y: 0, transition: { duration: 3.2 } }}
     className="col-span-2 border border-white rounded-xl p-16 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
    >
     <h1 className="text-lg font-semibold"> UI/UX Design</h1>
    </motion.div>
    <motion.div
     initial={{ opacity: 0, y: 100 }}
     whileInView={{ opacity: 1, y: 0, transition: { duration: 4 } }}
     className="border border-white rounded-xl p-16 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
    >
     <h1 className="text-lg font-semibold">Full Stack Developer</h1>
    </motion.div>
   </div>
  </section>
 );
}
