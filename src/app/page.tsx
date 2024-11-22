import Navbar from "./components/Navbar";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";

export default function Home() {
 return (
  <main className="relative bg-black min-h-screen">
    <div className="fixed top-0 left-0 w-full h-32 bg-gradient-to-b from-black via-black/30 to-transparent z-40" />
    <Navbar />
    <div className="max-w-4xl w-full mx-auto sm:px-10 px-5">
      <Hero />
      <About />
    </div>
  </main>
 );
}
