import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <div className="h-full w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        <FloatingNav
          navItems={[
            {
              name: "About",
              link: "/",
              icon: <FaHome />,
            },
            {
              name: "Projects",
              link: "/",
              icon: <FaHome />,
            },
            {
              name: "Testimonials",
              link: "/",
              icon: <FaHome />,
            },
            {
              name: "Contact",
              link: "/",
              icon: <FaHome />,
            },
          ]}
        />
        <Hero />
        <Grid />

        <RecentProjects />
      </div>
    </main>
  );
}
