import build_wireframe from "../assets/achievements/build_wireframe.png";
import conduct_ux from "../assets/achievements/conduct_ux.png";
import csc_passed from "../assets/achievements/csc_passed.png";
import css_cert from "../assets/achievements/css_cert.jpg";
import html_cert from "../assets/achievements/html_cert.jpg";
import ict_diagnostic from "../assets/achievements/ict_diagnostic.png";
import javascipt from "../assets/achievements/javascript.jpg";
import parago from "../assets/achievements/parago.png";
import user_experience from "../assets/achievements/user_experience.png";
import ux_design_process from "../assets/achievements/ux_design_process.png";



export interface achievements {
 id: number;
 name: string;
 date: string;
 description: string;
 by: string;
 img: object;
}

export const achievementData: achievements[] = [
 {
  id: 1,
  name: "1st runnerup PSC7",
  date: "November 2022",
  by: "DICT Caraga",
  description: "1st runner-up in the Philippine Startup Challenge 7",
  img: parago,
 },
 {
  id: 2,
  name: "Foundation of UX Design",
  date: "February 2023",
  description:
   "Completed the Foundation of UX Design course on the Coursera platform",
  by: "Coursera",
  img: user_experience,
 },
 {
  id: 3,
  name: "Start the UX Design Process",
  date: "May 2023",
  description:
   "Completed the Start the UX Design Process course on the Coursera platform",
  by: "Coursera",
  img: ux_design_process,
 },
 {
  id: 4,
  name: "Introduction to HTML",
  date: "August 2023",
  description:
   "Completed the Introduction to HTML course on the SOLOLEARN platform",
  by: "Sololearn",
  img: html_cert,
 },
 {
  id: 5,
  name: "Introduction to CSS",
  date: "August 2023",
  description:
   "Completed the Introduction to CSS course on the SOLOLEARN platform",
  by: "Sololearn",
  img: css_cert,
 },
 {
  id: 6,
  name: "Introduction to JavaScript",
  date: "October 2023",
  description:
   "Completed the Introduction to JavaScript course on the SOLOLEARN platform",
  by: "Sololearn",
  img: javascipt,
 },
 {
  id: 7,
  name: "Build Wireframes and Low-Fidelity Prototype",
  date: "October 2023",
  description:
   "Completed the Build Wireframes and Low-Fidelity Prototype course on the Coursera platform",
  by: "Coursera",
  img: build_wireframe,
 },
 {
  id: 8,
  name: "Conduct UX Research and Test Early Concepts",
  date: "October 2023",
  description:
   "Completed the Conduct UX Research and Test Early Concepts course on the Coursera platform",
  by: "Coursera",
  img: ux_design_process,
 },
 {
  id: 9,
  name: "Civil Exam Service Passer",
  date: "August 2024",
  description:
   "Passed the civil service exam with a passing rate of at least 145 out of 14,000 examinees",
  by: "Civil Service Commission",
  img: csc_passed,
 },
 {
  id: 10,
  name: "ICT Diagnostic Exam Passer",
  date: "October 2024",
  description:
   "Passed the ICT diagnostic exam and is eligible to take the certification exam",
  by: "DICT",
  img: ict_diagnostic,
 },
];
