"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

export default function Connect() {
 return (
  <section id="contact" className="mt-44 w-full">
   <div className="w-full flex flex-col gap-2">
    <div className="flex items-center justify-between gap-3">
     <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
      className="flex items-center justify-between gap-5"
     >
      <h1 className="text-xl md:text-4xl text-white font-bold font-integral">
       LET <span style={{ fontFamily: "Poppins" }}>'</span>s{" "}
       <span className="text-green-500 font-integral drop-shadow-[0_0_10px_rgba(144,238,144,0.1)]">
        CONNECT{" "}
        <span className="text-green-500 font-integral drop-shadow-[0_0_10px_rgba(144,238,144,0.5)]">
         .
        </span>
       </span>
      </h1>
     </motion.div>
     {/* <div className="flex w-full items-center gap-2">
      <hr className="w-full" /> <span className="text-xl">⚡</span>
     </div> */}
    </div>
    <div className="md:flex items-center justify-between gap-5 mt-20">
     <motion.p
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
      className="text-sm md:text-xl text-white font-integral md:w-[500px] mt-5 text-center"
     >
      Let <span>'</span>s connect and collaborate on projects, ideas, and more.
      I am always open to new opportunities and challenges.
     </motion.p>
     <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      className="flex flex-col gap-5"
     >
      <CardContainer className="inter-var">
       <CardBody className="mt-10 md:mt-0 w-auto group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-gray-500 bg-opacity-10 p-4 border border-gray-600 rounded-xl">
        <CardItem>
         <div className="text-white">
          <h1 className="text-lg font-bold font-integral">Socials</h1>
          <p className="text-xs font-light">
           You can also reach me through these platforms.
          </p>
         </div>
        </CardItem>
        <div className="flex items-start justify-between">
         <CardItem translateZ={90}>
          <a
           href="https://github.com/ImTrikk"
           target="_blank"
           rel="noopener noreferrer"
           className="text-white flex items-center gap-2 hover:border border-white rounded-lg p-2"
          >
           <FaGithub className="text-gray-400" />{" "}
           <span className="text-xs">Github</span>
          </a>
         </CardItem>
         <CardItem translateZ={90}>
          <a
           href="https://linkedin.com/in/patrick-james-dionen-1b22aa2b1"
           target="_blank"
           rel="noopener noreferrer"
           className="text-white flex items-center gap-2 hover:border border-white rounded-lg p-2"
          >
           <FaLinkedin className="text-blue-300" />{" "}
           <span className="text-xs">Linkedin</span>
          </a>
         </CardItem>
         <CardItem translateZ={90}>
          <a
           href="https://www.facebook.com/patrickjames.dionen/"
           target="_blank"
           rel="noopener noreferrer"
           className="text-white flex items-center gap-2 hover:border border-white rounded-lg p-2"
          >
           <FaFacebookSquare className="text-blue-600" />{" "}
           <span className="text-xs">Facebook</span>
          </a>
         </CardItem>
        </div>
       </CardBody>
      </CardContainer>
     </motion.div>
    </div>
   </div>
  </section>
 );
}
