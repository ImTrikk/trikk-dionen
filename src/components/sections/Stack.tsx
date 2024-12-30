"use client";

import React from "react";
import stacks from "@/assets/stacks.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { GithubGraph } from "@/app/(sections)/github/Contributions";

export default function Stack() {
 return (
  <section
   id="stacks"
   className="h-auto w-full flex flex-col justify-between mt-32 py-32 "
  >
   <div>
    <div className="flex items-center justify-between gap-4">
     <motion.h1
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
      className="shrink-0 text-4xl text-white font-bold font-integral drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
     >
      TECH STACK {""}
      <span className="text-green-500 font-integral drop-shadow-[0_0_10px_rgba(144,238,144,0.5)]">
       .
      </span>
     </motion.h1>
     <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1.4 } }}
      className="w-full flex items-center gap-2"
     >
      <hr className="w-full text-gray-400" /> <span>⚡</span>
     </motion.div>
    </div>
    <div className="flex items-center justify-between mt-5">
     <div className="w-[500px]">
      {[
       { text: "Equipped", delay: 0.6 },
       { text: "With Powerful", delay: 1.2 },
       { text: "Latest Technologies", delay: 1.6 },
      ].map((item, index) => (
       <motion.h1
        key={index}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0, transition: { duration: item.delay } }}
        className="text-3xl text-white font-black font-integral"
       >
        {item.text}
       </motion.h1>
      ))}
      <motion.p
       initial={{ opacity: 0, x: 100 }}
       whileInView={{ opacity: 1, x: 0, transition: { duration: 1.8 } }}
       className="text-md text-gray-400 font-bold mt-10"
      >
       To keep up with the latest technology, learning every day is crucial for
       a developer.
      </motion.p>
     </div>

     <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
     >
      <CardContainer className="inter-var">
       <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] p-6 border w-[300px] h-[300px] rounded-full flex items-center justify-center">
        <CardItem translateZ="140">
         <Image src={stacks} alt="stacks" width={300} height={300} />
        </CardItem>
       </CardBody>
      </CardContainer>
     </motion.div>
    </div>
    {/* <div className="grid grid-cols-3 gap-3">
     <div className="col-span-1 h-[60px] text-white flex items-center justify-center border border-gray-300 rounded-xl bg-darkgray-500">
      Framer Motion
     </div>
     <div className="col-span-1 h-[60px] text-white flex items-center justify-center border border-gray-300 rounded-xl bg-darkgray-500">
      Accernity UI
     </div>
     <div className="col-span-1 h-[60px] text-white flex items-center justify-center border border-gray-300 rounded-xl bg-darkgray-500">
      Material UI
     </div>
    </div> */}
   </div>
   <div className="mt-32">
    <GithubGraph />
   </div>
  </section>
 );
}
