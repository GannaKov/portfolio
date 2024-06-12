// import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Plans from "@/components/Plans";
import { ModeToggle } from "@/components/ui/ModeToggle";

export default function Home() {
  return (
    // sm:px-10 px-5
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto overflow-clip">
      {/* max-w-7xl */}
      <div className=" w-full">
        {/* mask bg-grid-purple-200/[0.1]*/}
        <div className="h-full w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-purple-200/[0.1]  absolute top-0 left-0 flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] " />
        </div>
        {/* end mask */}
        <FloatingNav navItems={navItems} />
        <ModeToggle />
        <Hero />
        <About />
        <RecentProjects />
        <Experience />
        {/* <Approach /> */}
        <Plans />
        <Footer />
      </div>
    </main>
  );
}
