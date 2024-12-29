/* eslint-disable @next/next/no-img-element */
import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/Pin";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects: React.FC = () => {
  return (
    <section className="pt-40 relative sm:px-10 px-5" id="projects">
   
      <h1 className=" heading text-black dark:text-blue-100 mb-16">
        A small selection of&nbsp;
        <span className="text-purple-200 dark:text-purple-100">
          recent projects
        </span>
      </h1>

      <div className="flex flex-wrap items-center justify-center px-4 py-0 md:py-36 gap-y-[160px]  md:gap-y-[360px] gap-x-36 ">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            className="flex items-center justify-center sm:w-[470px] w-[80vw]  "
            key={id}
          >
            <PinContainer title={link} href={link}>
              <div className="grid grid-cols-[1fr] grid-rows-[3fr,1.5fr,1fr]">
                <div className="relative flex items-center justify-center sm:w-[470px] w-[80vw] overflow-hidden  mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl "
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute rotate-3 scale-[0.9]"
                  />
                </div>
                <div>
                  <h1 className="font-bold text-white lg:text-2xl md:text-xl text-base line-clamp-1">
                    {title}
                  </h1>

                  <p
                    className="lg:text-xl lg:font-normal font-light text-sm "
                    style={{
                      color: "#BEC1DD",
                      margin: "1vh 0",
                    }}
                  >
                    {des}
                  </p>
                </div>

                <div className="flex items-center justify-between ">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-white">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
