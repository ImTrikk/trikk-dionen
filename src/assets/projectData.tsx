export interface ProjectImage {
 url: string;
 alt: string;
 size: "small" | "medium" | "large" | "wide" | "tall";
}

export interface Project {
 id: number;
 title: string;
 description: string;
 images: ProjectImage[];
 size: "small" | "medium" | "large" | "wide" | "tall";
}

export const projectData: Project[] = [
 {
  id: 1,
  title: "ReviewUP",
  images: [
   {
    url: "/projects/reviewup/main.png",
    alt: "ReviewUP Dashboard",
    size: "large",
   },
   {
    url: "/projects/reviewup/mobile.png",
    alt: "ReviewUP Mobile View",
    size: "tall",
   },
   {
    url: "/projects/reviewup/features.png",
    alt: "ReviewUP Features",
    size: "wide",
   },
   {
    url: "/projects/reviewup/detail.png",
    alt: "ReviewUP Detail View",
    size: "small",
   },
   {
    url: "/projects/reviewup/sharing.png",
    alt: "ReviewUP Sharing Interface",
    size: "medium",
   },
  ],
  description:
   "ReviewUP is a platform for stundents to collect reviewers and share their reviewers.",
  size: "wide",
 },
 {
  id: 2,
  title: "ParaGO",
  images: [
   {
    url: "/projects/reviewup/main.png",
    alt: "ReviewUP Dashboard",
    size: "large",
   },
   {
    url: "/projects/reviewup/mobile.png",
    alt: "ReviewUP Mobile View",
    size: "tall",
   },
   {
    url: "/projects/reviewup/features.png",
    alt: "ReviewUP Features",
    size: "wide",
   },
   {
    url: "/projects/reviewup/detail.png",
    alt: "ReviewUP Detail View",
    size: "small",
   },
   {
    url: "/projects/reviewup/sharing.png",
    alt: "ReviewUP Sharing Interface",
    size: "medium",
   },
  ],
  description:
   "A Travel Platform that help travellers locate new hidden gems on the with exclusive Iteneraries",
  size: "wide",
 },
 {
  id: 3,
  title: "FoodieGO",
  images: [
   {
    url: "/projects/reviewup/main.png",
    alt: "ReviewUP Dashboard",
    size: "large",
   },
   {
    url: "/projects/reviewup/mobile.png",
    alt: "ReviewUP Mobile View",
    size: "tall",
   },
   {
    url: "/projects/reviewup/features.png",
    alt: "ReviewUP Features",
    size: "wide",
   },
   {
    url: "/projects/reviewup/detail.png",
    alt: "ReviewUP Detail View",
    size: "small",
   },
   {
    url: "/projects/reviewup/sharing.png",
    alt: "ReviewUP Sharing Interface",
    size: "medium",
   },
  ],
  description:
   "Food sharing platform that allows users to share their favorite recipes with others and get inspired by others",
  size: "wide",
 },
 {
  id: 4,
  title: "SimpliChat",
  images: [
   {
    url: "/projects/reviewup/main.png",
    alt: "ReviewUP Dashboard",
    size: "large",
   },
   {
    url: "/projects/reviewup/mobile.png",
    alt: "ReviewUP Mobile View",
    size: "tall",
   },
   {
    url: "/projects/reviewup/features.png",
    alt: "ReviewUP Features",
    size: "wide",
   },
   {
    url: "/projects/reviewup/detail.png",
    alt: "ReviewUP Detail View",
    size: "small",
   },
   {
    url: "/projects/reviewup/sharing.png",
    alt: "ReviewUP Sharing Interface",
    size: "medium",
   },
  ],
  description:
   "A simple chat application that uses socket.io to create a realtime chat room for users to communicate with each other",
  size: "wide",
 },
 {
  id: 5,
  title: "Archived",
  images: [
   {
    url: "/projects/reviewup/main.png",
    alt: "ReviewUP Dashboard",
    size: "large",
   },
   {
    url: "/projects/reviewup/mobile.png",
    alt: "ReviewUP Mobile View",
    size: "tall",
   },
   {
    url: "/projects/reviewup/features.png",
    alt: "ReviewUP Features",
    size: "wide",
   },
   {
    url: "/projects/reviewup/detail.png",
    alt: "ReviewUP Detail View",
    size: "small",
   },
   {
    url: "/projects/reviewup/sharing.png",
    alt: "ReviewUP Sharing Interface",
    size: "medium",
   },
  ],
  description:
   "An anonymous digital sanctuary where users can freely share their unspoken thoughts, stories, and confessions in a safe, judgment-free environment",
  size: "wide",
 },
];
