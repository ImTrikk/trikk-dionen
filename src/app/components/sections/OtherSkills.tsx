"use client";

import React from "react";

export default function OtherSkills() {
 return (
  <section className="h-screen">
   <h1 className="text-4xl font-bold">OTHER SKILLS</h1>
   <div className="mt-3">
    <p className="text-sm font-light">
     Skills I developed during my University Days...
    </p>
   </div>
   <div className="mt-5 grid grid-cols-3 gap-2">
    <div className="col-span-2 border border-white rounded-xl p-24"></div>
    <div className="border border-white rounded-xl p-24"></div>
    <div className="border border-white rounded-xl p-24"></div>
    <div className="col-span-2 border border-white rounded-xl p-24"></div>
    <div className="col-span-2 border border-white rounded-xl p-24"></div>
    <div className="border border-white rounded-xl p-24"></div>
   </div>
  </section>
 );
}
