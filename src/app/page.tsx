import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";

export default function Home() {
 return (
  <main className="relative bg-black flex justify-center items-center flex-col  overflow-hidden mx-auto sm:px-10 px-5">
   <div className="max-w-4xl w-full mt-5">
    <Navbar />
    <Hero />
   </div>
  </main>
 );
}
