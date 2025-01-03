import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../components/sections/About";
import Connect from "../components/sections/Connect";
import Hero from "../components/sections/Hero";
import OtherSkills from "../components/sections/OtherSkills";
import Projects from "../components/sections/Projects";
import Stack from "../components/sections/Stack";

export default function Home() {
 return (
  <main className="relative bg-eigengrau min-h-screen">
   <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-black via-black/40 to-transparent z-30" />
   <Navbar />
   <Hero />
   <div className="max-w-4xl w-full mx-auto sm:px-10 px-5">
    <About />
   </div>
   <div className="max-w-4xl w-full mx-auto sm:px-10 px-5">
    <Projects />
    <Stack />
    <Connect />
    <Footer />
   </div>
  </main>
 );
}
