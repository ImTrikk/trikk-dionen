"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { projectData, type Project } from "@/assets/projectData";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function Projects() {
 const testimonials = [
  {
   quote:
    "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
   name: "Charles Dickens",
   title: "A Tale of Two Cities",
  },
  {
   quote:
    "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
   name: "William Shakespeare",
   title: "Hamlet",
  },
  {
   quote: "All that we see or seem is but a dream within a dream.",
   name: "Edgar Allan Poe",
   title: "A Dream Within a Dream",
  },
  {
   quote:
    "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
   name: "Jane Austen",
   title: "Pride and Prejudice",
  },
  {
   quote:
    "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
   name: "Herman Melville",
   title: "Moby-Dick",
  },
 ];

 return (
  <main className="h-full w-full px-8 my-32">
   {/* <InfiniteMovingCards items={testimonials} direction="right" speed="slow" /> */}
   <h1 className="text-5xl font-bold mb-10">
    PROJECTS
    <span className="text-green-500 drop-shadow-[0_0_10px_rgba(144,238,144,0.5)]">
     .
    </span>
    <div className="grid grid-cols-3 gap-4 mt-5">
     <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
      className="col-span-2 p-4 border border-white flex items-center justify-center rounded-xl min-h-[340px]"
     ></motion.div>
     <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
      className="col-span-1 p-4 border border-white flex items-center justify-center rounded-xl min-h-[340px] text-xs"
     >
      <div>
       <span className="text-xs text-green-400">ProjectInfo = </span> [
       <span className="text-orange-500">description:</span>
       <span className="text-white px-4 text-justify">
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex cupiditate
        sunt ratione quaerat reprehenderit nostrum expedita, assumenda totam
        voluptas quas iure quis odio dolorum neque laboriosam ea ab, eos
        distinctio."
       </span>
       <span className="text-orange-500">stack:</span>
       <span className="text-white">[ ]</span>
      </div>
      ]
     </motion.div>
     <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
      className="col-span-1 p-4 border border-white flex items-center justify-center rounded-xl min-h-[340px]"
     ></motion.div>
     <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
      className="col-span-2 p-4 border border-white flex items-center justify-center rounded-xl min-h-[340px]"
     ></motion.div>
     <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
      className="col-span-2 p-4 border border-white flex items-center justify-center rounded-xl min-h-[340px]"
     ></motion.div>
     <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
      className="col-span-1 p-4 border border-white flex items-center justify-center rounded-xl min-h-[340px]"
     ></motion.div>
     <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
      className="col-span-1 p-4 border border-white flex items-center justify-center rounded-xl min-h-[340px]"
     ></motion.div>
     <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 1.2 } }}
      className="col-span-2 p-4 border border-white flex items-center justify-center rounded-xl min-h-[340px]"
     ></motion.div>
    </div>
   </h1>
  </main>
 );
}
