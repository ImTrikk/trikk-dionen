import React from "react";

export default function Footer() {
 return (
  <footer className="mt-44">
   <div className="py-5">
    <hr />
    <div className="mt-5 flex items-center justify-between">
     <ul className="flex items-center gap-2 text-xs">
      <li className="text-xs text-green-500">2024</li>
      <li className="text-xs text-white">Patrick James Dionen</li>
      <li className="text-xs text-white">All Rights Reserved</li>
     </ul>
     <p className="text-xs text-white">Made with Next.js</p>
    </div>
   </div>
  </footer>
 );
}
