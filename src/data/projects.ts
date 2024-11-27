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

interface Stacks {
 name: string;
 logo: string;
}

interface Projects {
 id: number;
 title: string;
 description: string;
 img_url: object[];
 stacks: Stacks[];
}

export const ProjectsData: Projects[] = [
 {
  id: 1,
  title: "FoodieGO",
  description: "lorem",
  img_url: [foodiego_1, foodiego_2, foodiego_3, foodiego_4, foodiego_5],
  stacks: [{ name: "ReactJS", logo: "" }],
 },
 {
  id: 2,
  title: "Visualify",
  description: "lorem",
  img_url: [visualify_1, visualify_2, visualify_3, visualify_4, visualify_5],
  stacks: [{ name: "ReactJS", logo: "" }],
 },
 {
  id: 3,
  title: "ReviewUP",
  description: "lorem",
  img_url: [foodiego_1, foodiego_2, foodiego_3, foodiego_4, foodiego_5],
  stacks: [{ name: "ReactJS", logo: "" }],
 },
 {
  id: 4,
  title: "SynthStyle",
  description: "lorem",
  img_url: [foodiego_1, foodiego_2, foodiego_3, foodiego_4, foodiego_5],
  stacks: [{ name: "ReactJS", logo: "" }],
 },
 {
  id: 5,
  title: "ParaGO",
  description: "lorem",
  img_url: [foodiego_1, foodiego_2, foodiego_3, foodiego_4, foodiego_5],
  stacks: [{ name: "ReactJS", logo: "" }],
 },
 {
  id: 6,
  title: "DoTrack",
  description: "lorem",
  img_url: [foodiego_1, foodiego_2, foodiego_3, foodiego_4, foodiego_5],
  stacks: [{ name: "ReactJS", logo: "" }],
 },
 {
  id: 7,
  title: "WeatherApp",
  description: "lorem",
  img_url: [foodiego_1, foodiego_2, foodiego_3, foodiego_4, foodiego_5],
  stacks: [{ name: "ReactJS", logo: "" }],
 },
 {
  id: 8,
  title: "Speciefy",
  description: "lorem",
  img_url: [foodiego_1, foodiego_2, foodiego_3, foodiego_4, foodiego_5],
  stacks: [{ name: "ReactJS", logo: "" }],
 },
 {
  id: 9,
  title: "Archived",
  description: "lorem",
  img_url: [foodiego_1, foodiego_2, foodiego_3, foodiego_4, foodiego_5],
  stacks: [{ name: "ReactJS", logo: "" }],
 },
 {
  id: 10,
  title: "ReviewUP Admin",
  description: "lorem",
  img_url: [foodiego_1, foodiego_2, foodiego_3, foodiego_4, foodiego_5],
  stacks: [{ name: "ReactJS", logo: "" }],
 },
 {
  id: 11,
  title: "Counsefi",
  description: "lorem",
  img_url: [foodiego_1, foodiego_2, foodiego_3, foodiego_4, foodiego_5],
  stacks: [{ name: "ReactJS", logo: "" }],
 },
];
