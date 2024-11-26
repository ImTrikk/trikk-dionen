"use client";

import React from "react";
import stacks from "@/assets/stacks.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export default function Stack() {
 return (
  <section className="h-screen w-full flex flex-col justify-between mt-32">
   <div>
    <h1 className="text-4xl font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
     TECH STACK
     <span className="text-green-500 drop-shadow-[0_0_10px_rgba(144,238,144,0.5)]">
      .
     </span>
    </h1>
    <div className="flex items-center justify-between mt-5">
     <div className="w-[400px]">
      <motion.h1
       initial={{ opacity: 0, y: 100 }}
       whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
       className="text-3xl font-semibold"
      >
       Equipped{" "}
      </motion.h1>
      <motion.h1
       initial={{ opacity: 0, y: 100 }}
       whileInView={{ opacity: 1, y: 0, transition: { duration: 1.2 } }}
       className="text-3xl font-semibold"
      >
       With Powerful
      </motion.h1>
      <motion.h1
       initial={{ opacity: 0, y: 100 }}
       whileInView={{ opacity: 1, y: 0, transition: { duration: 1.6 } }}
       className="text-3xl font-semibold"
      >
       Latest Technologies
      </motion.h1>
      <motion.p
       initial={{ opacity: 0, x: 100 }}
       whileInView={{ opacity: 1, x: 0, transition: { duration: 1.8 } }}
       className="text-sm font-light mt-10"
      >
       To Keep up with latest technology, learning everyday is crucial for a
       developer
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
   </div>
  </section>
 );
}
