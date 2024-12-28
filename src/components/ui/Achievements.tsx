"use client";

import { useEffect } from "react";

interface AchievementsProps {
 setAchievements: (value: boolean) => void;
}

export const Achievements: React.FC<AchievementsProps> = ({
 setAchievements,
}) => {
 useEffect(() => {
  document.body.classList.add("overflow-hidden");
  return () => {
   document.body.classList.remove("overflow-hidden");
  };
 }, []);

 return (
  <main className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex justify-center items-center z-50 p-10">
   <div className="w-full h-full bg-black/10 backdrop-blur-md flex items-center justify-between overflow-hidden border border-gray-400 rounded-xl">
    <h1>Achievements</h1>
    <p>Certifications</p>
    <p>Participations</p>
    <button onClick={() => setAchievements(false)}>Close</button>
   </div>
  </main>
 );
};
