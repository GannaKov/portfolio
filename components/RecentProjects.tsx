/* eslint-disable @next/next/no-img-element */

import React from "react";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";

const RecentProjects: React.FC = () => {
  return (
    <section
      className="pt-40 relative sm:px-10 px-5 max-w-[1940px] w-full"
      id="projects"
    >
      <h1 className=" heading text-black dark:text-blue-100 ">
        A small selection of&nbsp;
        <span className="text-purple-200 dark:text-purple-100">
          recent projects
        </span>
      </h1>

      <div className=" flex flex-wrap items-center justify-center py-36 md:py-36 gap-y-[260px]  md:gap-y-[360px] gap-x-16 lg:gap-x-36 ">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            className="flex items-center justify-center w-[330px]  sm:w-[470px]   "
            key={id}
          >
            <PinContainer title={link} href={link}>
              <div className="grid grid-cols-[1fr] grid-rows-[3fr,2fr,1fr]">
                <div className="relative flex items-center justify-center sm:w-[470px] w-[330px] overflow-hidden  mb-10">
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
                  <Link
                    href={link}
                    target={"_blank"}
                    className="flex justify-center items-center h-full text-white hover:text-purple-100  transition duration-300"
                  >
                    <p className="flex lg:text-xl md:text-xs text-sm ">
                      Check Live Site
                    </p>
                    <FaLocationArrow
                      className="ms-3    text-[#cbacf9] "
                      // color="#CBACF9"
                    />
                  </Link>
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
