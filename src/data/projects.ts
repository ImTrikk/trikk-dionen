import { StaticImageData } from "next/image";

// foodiego project
import foodiego_1 from "@/assets/projects/foodiego_1.png";
import foodiego_2 from "@/assets/projects/foodiego_2.png";
import foodiego_3 from "@/assets/projects/foodiego_3.png";
import foodiego_4 from "@/assets/projects/foodiego_4.png";
import foodiego_5 from "@/assets/projects/foodiego_5.png";

import visualify_1 from "@/assets/projects/visualify_1.png";
import visualify_2 from "@/assets/projects/visualify_2.png";
import visualify_3 from "@/assets/projects/visualify_3.png";
import visualify_4 from "@/assets/projects/visualify_4.png";
import visualify_5 from "@/assets/projects/visualify_5.png";

import simplichat_1 from "@/assets/projects/simplichat_1.png";
import simplichat_2 from "@/assets/projects/simplichat_2.png";
import simplichat_3 from "@/assets/projects/simplichat_3.png";
import simplichat_4 from "@/assets/projects/simplichat_4.png";
import simplichat_5 from "@/assets/projects/simplichat_5.png";

import archived_1 from "@/assets/projects/archived_1.png";
import archived_2 from "@/assets/projects/archived_2.png";
import archived_3 from "@/assets/projects/archived_3.png";
import archived_4 from "@/assets/projects/archived_4.png";

import synthstyle_1 from "@/assets/projects/synthstyle_1.png";
import synthstyle_2 from "@/assets/projects/synthstyle_2.png";
import synthstyle_3 from "@/assets/projects/synthstyle_3.png";
import synthstyle_4 from "@/assets/projects/synthstyle_4.png";
import synthstyle_5 from "@/assets/projects/synthstyle_5.png";

import weather_1 from "@/assets/projects/weather_1.png";
import weather_2 from "@/assets/projects/weather_2.png";
import weather_3 from "@/assets/projects/weather_3.png";
import weather_4 from "@/assets/projects/weather_4.png";
import weather_5 from "@/assets/projects/weather_5.png";

import review_1 from "@/assets/projects/review_1.png";
import review_2 from "@/assets/projects/review_2.png";
import review_3 from "@/assets/projects/review_3.png";
import review_4 from "@/assets/projects/review_4.png";
import review_5 from "@/assets/projects/review_5.png";

import parago_1 from "@/assets/projects/parago_1.png";
import parago_2 from "@/assets/projects/parago_2.png";
import parago_3 from "@/assets/projects/parago_3.png";
import parago_4 from "@/assets/projects/parago_4.png";
import parago_5 from "@/assets/projects/parago_5.png";

import track from "@/assets/projects/track.png";

// Import icons from react-icons
import { FaReact as reactIcon } from "react-icons/fa";
import { FaNodeJs as nodeIcon } from "react-icons/fa";
import { SiPostgresql as postgresIcon } from "react-icons/si";
import { SiSupabase as supabaseIcon } from "react-icons/si";
import { SiFirebase as firebaseIcon } from "react-icons/si";
import { FaLaravel as laravelIcon } from "react-icons/fa";
import { FaPython as pythonIcon } from "react-icons/fa";
import { SiElectron as electronIcon } from "react-icons/si";
import { SiFlask as flaskIcon } from "react-icons/si";
import { SiPytorch as pytorchIcon } from "react-icons/si";
import { SiTensorflow as tensorflowIcon } from "react-icons/si";
import { SiMongodb as mongodbIcon } from "react-icons/si";
import { SiVercel as vercelIcon } from "react-icons/si"; // Added Vercel icon import
import { SiSteam as steamIcon } from "react-icons/si"; // Added Stream icon import
import React from "react";

export interface Stacks {
 name: string;
 logo: React.ComponentType;
}

export interface Projects {
 id: number;
 title: string;
 description: string;
 img_url: (string | StaticImageData)[]; // Allow both string and StaticImageData
 github_url: string;
 demo_url: string;
 stacks: Stacks[];
}

export const ProjectsData: Projects[] = [
 {
  id: 1,
  title: "FoodieGO",
  description:
   "FoodieGO is a food recipe sharing application that lets users create, share, and review recipes while having the ability to download and generate AI nutrition information.",
  img_url: [foodiego_1, foodiego_2, foodiego_3, foodiego_4, foodiego_5],
  github_url: "https://github.com/ImTrikk/FoodieGO.git",
  demo_url: "https://myfoodiego.vercel.app/",
  stacks: [{ name: "ReactJS", logo: reactIcon }],
 },
 {
  id: 2,
  title: "Visualify",
  description:
   "Visualify is an advanced Business Intelligence platform designed to deliver actionable insights on retail performance, including sales trends, customer churn analysis, and more, empowering businesses to make data-driven decisions with ease.",
  img_url: [visualify_1, visualify_2, visualify_3, visualify_4, visualify_5],
  github_url: "https://github.com/ImTrikk/retail-store-visualization.git",
  demo_url: "https://retail-visualify.streamlit.app/",
  stacks: [{ name: "Python", logo: pythonIcon }],
 },
 {
  id: 3,
  title: "ReviewUP",
  description:
   "ReviewUP is a student-driven platform for creating, sharing, and downloading reviewers, as well as crafting and practicing with custom quizzes, fostering collaborative learning and academic success.",
  img_url: [review_1, review_2, review_3, review_4, review_5],
  github_url: "https://github.com/ImTrikk/review-up.git",
  demo_url: "https://review-up.vercel.app/",
  stacks: [
   { name: "ReactJS", logo: reactIcon },
   { name: "NodeJS", logo: nodeIcon },
   { name: "PostgreSQL", logo: postgresIcon },
   { name: "Firebase", logo: firebaseIcon },
  ],
 },
 {
  id: 4,
  title: "SynthStyle",
  description:
   "SynthStyle is an AI-powered platform that transforms images by blending them with desired artistic styles using advanced neural network algorithms, unlocking endless creative possibilities.",
  img_url: [
   synthstyle_1,
   synthstyle_2,
   synthstyle_3,
   synthstyle_4,
   synthstyle_5,
  ],
  github_url: "https://github.com/ImTrikk/SynthN-Style.git",
  demo_url: "",
  stacks: [
   { name: "ElectronJS", logo: electronIcon },
   { name: "Flask", logo: flaskIcon },
   { name: "Python", logo: pythonIcon },
   { name: "PyTorch", logo: pytorchIcon },
  ],
 },
 {
  id: 5,
  title: "ParaGO",
  description:
   "ParaGO is your all-in-one travel companion, offering personalized itineraries, uncovering hidden gems, seamless booking features, and opportunities to join exciting travel events for unforgettable adventures.",
  img_url: [parago_1, parago_2, parago_3, parago_4, parago_5],
  github_url: "https://github.com/ImTrikk/parago.git",
  demo_url: "https://parago.vercel.app/",
  stacks: [{ name: "ReactJS", logo: reactIcon }],
 },
 {
  id: 6,
  title: "DoTrack",
  description:
   "DoTrack is a web and mobile application designed to track student attendance during DoDay events, ensuring fair and equal participation time for all attendees.",
  img_url: [track],
  github_url: "https://github.com/ImTrikk/do-track-backend.git",
  demo_url: "",
  stacks: [{ name: "ReactJS", logo: reactIcon }],
 },
 {
  id: 7,
  title: "WeatherApp",
  description:
   "WeatherApp is a simple yet powerful application built with React.js and Laravel, leveraging the OpenWeather API to provide real-time weather updates and accurate forecasts for cities worldwide.",
  img_url: [weather_1, weather_2, weather_3, weather_4, weather_5],
  github_url: "https://github.com/ImTrikk/weather-web-app.git",
  demo_url: "",
  stacks: [
   { name: "ReactJS", logo: reactIcon },
   { name: "Laravel", logo: laravelIcon },
  ],
 },
 {
  id: 8,
  title: "Speciefy",
  description:
   "Speciefy is a web application that uses TensorFlow to identify species from images. Simply drag and drop a picture to instantly recognize the species and access detailed information about it.",
  img_url: [foodiego_1, foodiego_2, foodiego_3, foodiego_4, foodiego_5],
  github_url: "https://github.com/ImTrikk/Specie-Identifier.git",
  demo_url: "",
  stacks: [
   { name: "ReactJS", logo: reactIcon },
   { name: "TensorFlow", logo: tensorflowIcon },
  ],
 },
 {
  id: 9,
  title: "Archived",
  description:
   "Archived is an open platform where users can anonymously read short sentences or paragraphs shared by others, and also post their own anonymous messages, fostering a space for free expression and connection.",
  img_url: [archived_1, archived_2, archived_3, archived_4],
  github_url: "https://github.com/ImTrikk/Archived.git",
  demo_url: "https://archived-lemon.vercel.app/",
  stacks: [
   { name: "ReactJS", logo: reactIcon },
   { name: "NodeJS", logo: nodeIcon },
   { name: "MongoDB", logo: mongodbIcon },
  ],
 },
 {
  id: 10,
  title: "SimpliChat",
  description:
   "SimpliChat is a simple, real-time chat application built with React, allowing users to communicate seamlessly through Socket.IO for instant messaging and interactions.",
  img_url: [
   simplichat_1,
   simplichat_2,
   simplichat_3,
   simplichat_4,
   simplichat_5,
  ],
  github_url: "https://github.com/ImTrikk/Simpli-Chat.git",
  demo_url: "https://simpli-chat.vercel.app/",
  stacks: [{ name: "ReactJS", logo: reactIcon }],
 },
];
