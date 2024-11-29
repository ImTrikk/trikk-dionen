"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Connect() {
 return (
  <section
   id="contact"
   className="h-screen mt-44 w-full flex items-start justify-between gap-10"
  >
   <div className="flex flex-col gap-2">
    <motion.h1
     initial={{ opacity: 0, x: 100 }}
     whileInView={{ opacity: 0.7, x: 0, transition: { duration: 0.8 } }}
     className="text-4xl font-bold font-integral"
    >
     LET'S CONNECT
    </motion.h1>
    <p className="text-xs font-light">
     You can contact me through this form, feel free to message me anytime and I
     will get back to you promply.
    </p>

    <div className="flex flex-col gap-2 mt-5">
     <h1 className="text-lg font-bold font-integral">Socials</h1>
     <p className="text-xs font-light">
      You can also reach me through these platforms i used
     </p>
    </div>
   </div>
   <div className="w-[700px]">
    <form action="" className="border border-white rounded-xl p-4">
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
    </form>
   </div>
  </section>
 );
}
