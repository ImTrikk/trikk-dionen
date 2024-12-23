"use client";

import { ProjectsData } from "@/data/projects";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Projects } from "@/data/projects";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { div } from "framer-motion/client";

const ProjectInfoPage = () => {
 const params = useParams();
 const id = params.id;
 const [project, setProject] = useState<Projects | null>(null);
 const [sampleImages, setSampleImages] = useState<number[]>([]);

 useEffect(() => {
  if (id) {
   const foundProject = ProjectsData.find(
    (project) => project.id === Number(id)
   );
   setSampleImages(foundProject?.img_url.map(() => 1) || []);
   setProject(foundProject || null);
  }
 }, [id]);

 if (!project) {
  return <div>Project not found lol</div>;
 }

 return (
  <main className="h-screen bg-black">
   <Navbar />
   <div className="max-w-4xl w-full mx-auto  mt-20">
    <button onClick={() => window.history.back()} className="text-white">
     return
    </button>
    <div className="relative w-full h-[400px]">
     <Image
      src={project.img_url[0]} // Assuming img_url is an array and you want to display the first image
      alt={project.title}
      layout="fill" // Use layout fill
      objectFit="cover" // Ensure the image covers the container
      className="rounded-xl"
     />
    </div>
    <div className="grid grid-cols-4">
     {sampleImages.map((data, index) => (
      <div>{/* <Image src={data.imageUrl} alt="sample images"/> */}</div>
     ))}
    </div>
    <h1>{project.title}</h1>
    <p>{project.description}</p>
    {/* Add more project details here */}
   </div>
  </main>
 );
};

export default ProjectInfoPage;
