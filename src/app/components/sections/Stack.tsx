"use client";

import React from "react";
import stacks from "@/assets/stacks.svg";
import Image from "next/image";

export default function Stack() {
 return (
  <section className="h-screen w-full flex flex-col mt-10">
   <div>
    <h1 className="text-4xl font-bold">TECH STACK</h1>
    <div className="flex items-start justify-between mt-10">
     <div className="w-[550px]">
      <h1 className="text-3xl font-semibold">Equipped </h1>
      <h1 className="text-3xl font-semibold">With Powerful</h1>
      <h1 className="text-3xl font-semibold">Latest Technologies</h1>
      <p className="text-sm font-light mt-10">
       To Keep up with latest technology, learning everyday is crucial for a
       developer
      </p>
     </div>
     <div>
      {/* <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-black via-black/40 to-transparent z-40" /> */}
      <Image src={stacks} alt="stacks" width={400} height={400} />
     </div>
    </div>
   </div>
  </section>
 );
}
