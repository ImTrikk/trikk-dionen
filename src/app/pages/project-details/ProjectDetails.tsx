"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { Projects, ProjectsData } from "@/data/projects";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";

export default function ProjectDetails() {
 const router = useRouter();
 const searchParams = useSearchParams();
 const projectId = searchParams.get("id");
 const [project, setProject] = useState<Projects | null>(null);
 const [activeImg, setActiveImg] = useState<number>(0);

 // Pre-resolve project once id changes
 const foundProject = useMemo(() => {
  if (!projectId) return null;
  const idNum = Number(projectId);
  if (Number.isNaN(idNum)) return null;
  return ProjectsData.find((p) => p.id === idNum) ?? null;
 }, [projectId]);

 useEffect(() => {
  setProject(foundProject);
  setActiveImg(0);
 }, [foundProject]);

 if (!project) {
  return (
   <main className="min-h-screen flex items-center justify-center bg-black px-6">
    <div className="text-white/80 text-sm">Project not found</div>
   </main>
  );
 }

 return (
  <main className="min-h-screen bg-black text-white">
   <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
    {/* Top bar */}
    <div className="flex items-center justify-between mb-6">
     <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition px-3 py-2 rounded-md hover:bg-white/10"
     >
      <FaArrowLeft /> Back
     </button>

     <div className="flex gap-3">
      <a
       href={project.github_url}
       target="_blank"
       rel="noopener noreferrer"
       className="inline-flex items-center gap-2 text-sm border border-white/20 px-4 py-2 rounded-md hover:bg-white/10 transition"
      >
       <FaGithub /> GitHub
      </a>
      {project.demo_url && (
       <a
        href={project.demo_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm border border-green-500/30 px-4 py-2 rounded-md hover:bg-green-500/20 transition"
       >
        <FaExternalLinkAlt /> Live Demo
       </a>
      )}
     </div>
    </div>

    {/* Header */}
    <div className="mb-8">
     <h1 className="text-3xl sm:text-4xl font-bold">{project.title}</h1>
     <p className="text-green-400 text-xs sm:text-sm font-semibold mt-2">
      Role: {project.role}
     </p>
    </div>

    {/* Content grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
     {/* Gallery */}
     <section>
      <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/15 bg-white/5">
       <Image
        src={project.img_url[activeImg]}
        alt={`${project.title} screenshot ${activeImg + 1}`}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
       />
      </div>

      {/* Thumbnails */}
      {project.img_url.length > 1 && (
       <div className="mt-4 grid grid-cols-4 sm:grid-cols-6 gap-3">
        {project.img_url.map((img, idx) => (
         <button
          key={idx}
          onClick={() => setActiveImg(idx)}
          className={`relative w-full aspect-video rounded-md overflow-hidden border transition ${
           idx === activeImg
            ? "border-green-500/60 ring-2 ring-green-500/30"
            : "border-white/15 hover:border-white/30"
          }`}
          aria-label={`Show image ${idx + 1}`}
         >
          <Image
           src={img}
           alt={`${project.title} thumbnail ${idx + 1}`}
           fill
           className="object-cover"
           sizes="200px"
          />
         </button>
        ))}
       </div>
      )}
     </section>

     {/* Details */}
     <section className="flex flex-col gap-6">
      <div>
       <h2 className="text-xl font-semibold mb-2">Overview</h2>
       <p className="text-gray-300 text-sm leading-relaxed text-justify">
        {project.description}
       </p>
      </div>

      <div>
       <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
       <div className="flex flex-wrap gap-2">
        {project.stacks.map((stack, idx) => {
         const Icon = stack.logo;
         return (
          <div
           key={idx}
           className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full border border-white/20"
          >
           <span className="text-green-400">
            <Icon />
           </span>
           <span className="text-xs">{stack.name}</span>
          </div>
         );
        })}
       </div>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
       <a
        href={project.github_url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 text-sm border border-white/20 px-4 py-2 rounded-md hover:bg-white/10 transition"
       >
        <FaGithub /> View Repository
       </a>
       {project.demo_url && (
        <a
         href={project.demo_url}
         target="_blank"
         rel="noopener noreferrer"
         className="flex items-center justify-center gap-2 text-sm border border-green-500/30 px-4 py-2 rounded-md hover:bg-green-500/20 transition"
        >
         <FaExternalLinkAlt /> Open Live Demo
        </a>
       )}
      </div> */}
     </section>
    </div>
    {/* <section>
     <h1 className="mt-5 text-xl font-bold ">Details</h1>
     <hr className="mt-1 border-t-[0.5px] border-white/20" />
     <h1 className="mt-5 text-xl font-bold ">Problem</h1>
     <hr className="mt-1 border-t-[0.5px] border-white/20" />
     <h1 className="mt-5 text-xl font-bold ">Solution</h1>
     <hr className="mt-1 border-t-[0.5px] border-white/20" />
    </section> */}
   </div>
  </main>
 );
}
