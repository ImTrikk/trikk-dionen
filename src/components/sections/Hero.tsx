"use client";

import React from "react";
import HeroTrikk from "@/assets/HeroTrikk_2.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { Vortex } from "../ui/vortex";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { FaMapPin } from "react-icons/fa";
import { IoPin } from "react-icons/io5";

const tags = ["Software Engineer", "Full Stack Developer", "UI/UX Designer"];

export default function Hero() {
 return (
  <main
   id="home"
   className="relative h-screen w-full flex items-center justify-center gap-8"
  >
   {/* <Vortex
    backgroundColor="black"
    rangeY={200}
    particleCount={20}
    baseHue={900}
    className="h-screen w-full flex items-center justify-center gap-8"
   > */}{" "}
   <motion.div
    initial={{ opacity: 0, x: 100 }}
    whileInView={{
     opacity: 1,
     x: 0,
     transition: { duration: 0.5 },
    }}
    className="flex flex-shrink-0"
   >
    <Image
     src={HeroTrikk}
     alt="trikk image"
     width={320}
     height={320}
     className=""
    />
   </motion.div>
   <div className="flex w-[600px] flex-col gap-2 items-start flex-shrink-0">
    <div className="flex flex-col justify-start">
     <motion.h1
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
      className="text-4xl tracking-widest font-black text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] font-integral"
     >
      PATRICK JAMES DIONEN
     </motion.h1>
     <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      className="flex items-center gap-2 mt-3"
     >
      {/* <svg
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       strokeWidth="1.5"
       stroke="orange"
       className="size-5 text-orange-700"
      >
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
       />
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
       />
      </svg>*/}

      <FaMapPin className="text-orange-700" />

      <p className="text-sm font-medium text-green-500 drop-shadow-[0_0_10px_rgba(144,238,144,0.5)]">
       Butuan City, Philippines
      </p>
     </motion.div>
     <div className="flex items-center gap-2 mt-3">
      {tags.map((data, id) => (
       <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
        key={id}
        className="h-8 border border-white rounded-md px-5 py-1 flex items-center justify-center text-xs font-regular hover:shadow-md hover:shadow-[#39FF14] transition-all duration-500 text-white flex-shrink-0"
       >
        {data}
       </motion.div>
      ))}
     </div>
     <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
      className="mt-5 border border-white rounded-xl  p-3"
     >
      <p className="text-xs text-white font-regular text-justify">
       A 22-year-old Software Engineer specializing in full-stack development
       with a touch of UI/UX Design, proficient in MERN, PERN, Laravel, and
       Next.js, focused on building robust and scalable web applications.
      </p>
     </motion.div>
    </div>
    <motion.div
     initial={{ opacity: 0, y: 100 }}
     whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
     className="mt-3 flex items-center gap-2 w-full"
    >
     <button
      className="bg-gray-500 hover:bg-gray-700 bg-opacity-25 text-xs px-2 rounded-md h-10 border border-gray-400 border-opacity-40 flex items-center gap-3"
      onClick={() => window.open("/path/to/your/resume.pdf", "_blank")}
     >
      <svg
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       strokeWidth="1.5"
       stroke="white"
       className="size-5"
      >
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
       />
      </svg>
      <span className="text-white"> resume</span>
     </button>
     <button
      className="bg-gray-500 hover:bg-gray-700 bg-opacity-25 text-xs px-2 rounded-md h-10 border border-gray-400 border-opacity-40 flex items-center gap-3"
      onClick={() => window.open("https://github.com/ImTrikk", "_blank")}
     >
      <svg
       xmlns="http://www.w3.org/2000/svg"
       width="16"
       height="16"
       fill="white"
       className="bi bi-github"
       viewBox="0 0 16 16"
      >
       <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
      </svg>
      <span className="text-white"> github</span>
     </button>
     <button className="w-full bg-gray-500 hover:bg-gray-700 bg-opacity-25 text-xs px-2 rounded-md h-10 border border-gray-400 border-opacity-40 flex items-center gap-3">
      <svg
       xmlns="http://www.w3.org/2000/svg"
       fill="none"
       viewBox="0 0 24 24"
       strokeWidth="1.5"
       stroke="white"
       className="size-5"
      >
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
       />
      </svg>
      <span className="text-white"> Email at: trikk.dionen@gmail.com</span>
     </button>
    </motion.div>
   </div>
   {/* </Vortex> */}
  </main>
 );
}
