import { useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Types for our data
 */
type ContributionDay = {
 color: string;
 contributionCount: number;
 date: string;
 weekday: number;
};
type Week = {
 contributionDays: ContributionDay[];
 firstDay: string;
};
type Weeks = Week[];
type GraphQLRes = {
 user: {
  contributionsCollection: {
   contributionCalendar: {
    weeks: Weeks;
   };
  };
 };
};

/**
 * Fetch contributions from GitHub GraphQL API
 */
async function getContributions(
 token: string,
 username: string
): Promise<GraphQLRes | null> {
 const headers = {
  Authorization: `bearer ${token}`,
 };
 const body = {
  query: `query {
        user(login: "${username}") {
          contributionsCollection {
            contributionCalendar {
              weeks {
                contributionDays {
                  color
                  contributionCount
                  date
                  weekday
                }
                firstDay
              }
            }
          }
        }
      }`,
 };

 try {
  const response = await fetch("https://api.github.com/graphql", {
   method: "POST",
   body: JSON.stringify(body),
   headers: headers,
  });

  if (!response.ok) {
   console.error(`Error: ${response.status} ${response.statusText}`);
   return null;
  }

  const data = await response.json();
  return data.data; // Access the `data` property directly
 } catch (error) {
  console.error("Fetch failed:", error);
  return null;
 }
}

/**
 * Initialize GitHub contributions data
 */
async function initializeGithubGraph() {
 const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;
 const username = "ImTrikk";

 if (!token) {
  console.error("Missing GitHub token");
  return;
 }

 const data = await getContributions(token, username);

 // Handle error or missing data
 if (!data || !data.user) {
  const oops = document.getElementById("contribution-error");
  oops?.classList.remove("hidden");
  console.error("Error fetching data from GitHub");
  return;
 }

 /**
  * Drill down to data from fetch request
  */
 const {
  user: {
   contributionsCollection: {
    contributionCalendar: { weeks },
   },
  },
 } = data;

 /**
  * Loop through the weeks + add them to the parent div
  */
 weeks.forEach(({ contributionDays }, i) => {
  contributionDays.forEach(({ color, date, contributionCount }, j) => {
   // If no contributions, apply gray background
   const bgColor = color === "#ebedf0" ? "#232323" : color; // Gray for no commits

   // Select the corresponding div
   const dayDiv = document.getElementById(`week-${i}-day-${j}`);

   // Apply the background color (removed border-radius)
   dayDiv?.setAttribute("style", `background-color: ${bgColor}; margin: 1px;`);

   // Set the tooltip for the day
   dayDiv?.setAttribute(
    "title",
    `${date} - ${contributionCount} public commits`
   );
  });
 });
}

/**
 * React Component to Render GitHub Graph
 */
export const GithubGraph = () => {
 useEffect(() => {
  initializeGithubGraph(); // Fetch and render data on mount
 }, []);

 return (
  <section className="px-4 py-8">
   <div className="flex flex-col items-center justify-center">
    <div className="my-6 flex flex-col text-center">
     <motion.h1
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4 } }}
      className="text-4xl tracking-widest font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] font-integral"
     >
      One Feature A Day
     </motion.h1>
     <motion.p
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      className="mt-2 text-lg font-bold"
     >
      Commited to changes
     </motion.p>
    </div>

    {/* motion div */}
    <div
     id="contributions"
     className="flex flex-wrap gap-1 items-center justify-center"
    >
     {Array.from({ length: 40 }).map((_, i) => (
      <div
       key={i}
       id={`week-${i}`}
       className={`flex flex-col gap-1 ${i < 20 ? "hidden md:flex" : "flex"}`}
      >
       {Array.from({ length: 7 }).map((_, j) => (
        <motion.div
         key={j}
         id={`week-${i}-day-${j}`}
         className="h-[10px] w-[10px] rounded-[2px]"
         initial={{ opacity: 0 }}
         whileInView={{
          opacity: 1,
          transition: {
           delay: (i * 7 + j) * 0.02,
           duration: 0.5,
          },
         }}
        />
       ))}
      </div>
     ))}
    </div>

    <p className="my-2 text-red-500 hidden" id="contribution-error">
     Ooops, error fetching from GitHub.
    </p>
   </div>
  </section>
 );
};
