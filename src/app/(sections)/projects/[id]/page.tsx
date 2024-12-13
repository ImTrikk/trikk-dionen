"use client";

import { ProjectsData } from "@/data/projects";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Projects } from "@/data/projects";
import Image from "next/image";

const ProjectInfoPage = () => {
 const params = useParams();
 const id = params.id;
 const [project, setProject] = useState<Projects | null>(null);

 useEffect(() => {
  if (id) {
   const foundProject = ProjectsData.find(
    (project) => project.id === Number(id)
   );
   setProject(foundProject || null);
  }
 }, [id]);

 if (!project) {
  return <div>Project not found lol</div>;
 }

 return (
  <main className="h-screen bg-black">
   <div className="mx-32 max-w-7xl">
    <h1>{project.title}</h1>
    <Image
     src={project.img_url[0]} // Assuming img_url is an array and you want to display the first image
     alt={project.title}
     width={400}
     height={400}
    />
    <p>{project.description}</p>
    {/* Add more project details here */}
   </div>
  </main>
 );
};

export default ProjectInfoPage;
