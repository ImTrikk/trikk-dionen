"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Connect() {
 return (
  <section id="contact" className="mt-44 w-full">
   <div className="w-full flex flex-col gap-2">
    <motion.div
     initial={{ opacity: 0, x: 100 }}
     whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
     className="flex items-center justify-between gap-5"
    >
     <h1 className="text-4xl text-white font-bold font-integral shrink-0">
      LET <span style={{ fontFamily: "Poppins" }}>'</span>s{" "}
      <span className="text-green-500 font-integral drop-shadow-[0_0_10px_rgba(144,238,144,0.5)]">
       CONNECT{" "}
       <span className="text-green-500 font-integral drop-shadow-[0_0_10px_rgba(144,238,144,0.5)]">
        .
       </span>{" "}
      </span>
     </h1>
     <div className="w-full flex items-center gap-2">
      <hr className="shrink-0 w-full" /> <span className="text-xl">⚡</span>
     </div>
    </motion.div>
    <motion.p
     initial={{ y: 100, opacity: 0 }}
     whileInView={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
     className="text-xs text-white font-light w-[300px] mt-5"
    >
     Let's connect and collaborate on projects, ideas, and more. I'm always open
     to new opportunities and challenges.
    </motion.p>

    <div className="flex flex-col text-white gap-2 mt-5">
     <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
     >
      <h1 className="text-lg font-bold font-integral">Socials</h1>
      <p className="text-xs font-light">
       You can also reach me through these platforms
      </p>
     </motion.div>
     <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
      className="flex items-center gap-4"
     >
      <div className="flex items-center gap-2 hover:border border-white rounded-lg p-2">
       <FaGithub className="text-gray-400" /> <span>Github</span>
      </div>
      <div className="flex items-center gap-2 hover:border border-white rounded-lg p-2">
       <SiGmail className="text-orange-500" /> <span>Gmail</span>
      </div>
      <div className="flex items-center gap-2 hover:border border-white rounded-lg p-2">
       <FaLinkedin className="text-blue-300" /> <span>Linkedin</span>
      </div>
      <div className="flex items-center gap-2 hover:border border-white rounded-lg p-2">
       <FaFacebookSquare className="text-blue-600" /> <span>Facebook</span>
      </div>
     </motion.div>
    </div>
   </div>
   <div className="w-[700px]">
    {/* <form action="" className="border border-white rounded-xl p-4">
     <div className="flex flex-col gap-2 mt-2">
      <label htmlFor="">Email</label>
      <input
       type="text"
       className="h-10 px-4 border border-white bg-black rounded-lg"
      />
     </div>
     <div className="flex flex-col gap-2 mt-2">
      <label htmlFor="">Subject</label>
      <input
       type="text"
       className="h-10 px-4 border border-white bg-black rounded-lg"
      />
     </div>
     <div className="flex flex-col gap-2 mt-2">
      <label htmlFor="">Message</label>
      <textarea className="min-h-[150px] px-4 py-2 border border-white bg-black rounded-lg" />
     </div>
     <div className="mt- 5 w-full">
      <button className="w-full h-10 border border-white text-xs font-medium px-4 rounded-lg">
       send message
      </button>
     </div>
    </form> */}
   </div>
  </section>
 );
}
