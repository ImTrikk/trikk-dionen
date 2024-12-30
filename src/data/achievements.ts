import { StaticImageData } from "next/image";
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

export interface Achievement {
 id: number;
 name: string;
 date: string;
 description: string;
 by: string;
 img: string | StaticImageData;
}

export const achievementData: Achievement[] = [
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
 name: "Civil Exam Service Passer",
 date: "August 2024",
 description:
  "Passed the civil service exam with a passing rate of at least 145 out of 14,000 examinees",
 by: "Civil Service Commission",
 img: csc_passed,
 },
 {
 id: 3,
 name: "ICT Diagnostic Exam Passer",
 date: "October 2024",
 description:
  "Passed the ICT diagnostic exam and is eligible to take the certification exam",
 by: "DICT",
 img: ict_diagnostic,
 },
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
