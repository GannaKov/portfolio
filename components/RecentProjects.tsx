/* eslint-disable @next/next/no-img-element */
import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/Pin";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  // <RecentProjects />;
  return (
    <section className="pt-40 relative sm:px-10 px-5" id="projects">
      {/* heading */}
      <h1 className=" heading text-black dark:text-blue-100 mb-16">
        A small selection of&nbsp;
        <span className="text-purple-200 dark:text-purple-100">
          recent projects
        </span>
      </h1>
      {/* gap-y-8 mt-10*/}
      <div
        className="flex flex-wrap items-center justify-center px-4 py-36 gap-[360px] gap-x-24 "
        // style={{ rowGap: "300px" }}
      >
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            // sm:h-[41rem] h-[32rem]  lg:min-h-[32.5rem] p-8
            className="flex items-center justify-center sm:w-[470px] w-[80vw]  "
            // className="grid grid-cols-1 grid-rows-3 items-center justify-center sm:w-[470px] w-[80vw]  "
            key={id}
          >
            <PinContainer title={link} href={link}>
              <div className="grid grid-cols-[1fr] grid-rows-[3fr,1.5fr,1fr]">
                {/* sm:h-[40vh] h-[30vh] */}
                <div className="relative flex items-center justify-center sm:w-[470px] w-[80vw] overflow-hidden  mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-0"
                  />
                </div>
                <div>
                  <h1 className="font-bold text-white lg:text-2xl md:text-xl text-base line-clamp-1">
                    {title}
                  </h1>
                  {/* line-clamp-2 */}
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
                {/* mt-7 mb-3 */}
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
