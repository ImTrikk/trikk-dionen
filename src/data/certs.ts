interface Certificate {
  id: number;
  name: string;
  date: string;
  description: string;
  by: string;
  img: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    name: "Foundation of UX Design",
    date: "February 2023",
    description: "Completed the Foundation of UX Design course on the Coursera platform",
    by: "Coursera",
    img: "user_experience",
  },
  {
    id: 2,
    name: "Start the UX Design Process",
    date: "May 2023",
    description: "Completed the Start the UX Design Process course on the Coursera platform",
    by: "Coursera",
    img: "ux_design_process",
  },
  {
    id: 3,
    name: "Introduction to HTML",
    date: "August 2023",
    description: "Completed the Introduction to HTML course on the SOLOLEARN platform",
    by: "Sololearn",
    img: "html_cert",
  },
  {
    id: 4,
    name: "Introduction to CSS",
    date: "August 2023",
    description: "Completed the Introduction to CSS course on the SOLOLEARN platform",
    by: "Sololearn",
    img: "css_cert",
  },
  {
    id: 5,
    name: "Introduction to JavaScript",
    date: "October 2023",
    description: "Completed the Introduction to JavaScript course on the SOLOLEARN platform",
    by: "Sololearn",
    img: "javascipt",
  },
  {
    id: 6,
    name: "Build Wireframes and Low-Fidelity Prototype",
    date: "October 2023",
    description: "Completed the Build Wireframes and Low-Fidelity Prototype course on the Coursera platform",
    by: "Coursera",
    img: "build_wireframe",
  },
  {
    id: 7,
    name: "Conduct UX Research and Test Early Concepts",
    date: "October 2023",
    description: "Completed the Conduct UX Research and Test Early Concepts course on the Coursera platform",
    by: "Coursera",
    img: "ux_design_process",
  },
];
