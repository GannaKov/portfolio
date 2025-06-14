import React from "react";
import { projects } from "@/data";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Projects: React.FC = () => {
  return (
    <section
      className="pt-40 relative sm:px-10 px-5 max-w-[1940px] w-full"
      id="projects"
    >
      <h1 className=" heading text-black dark:text-blue-100 mb-16 ">
        A small selection of&nbsp;
        <span className="text-purple-200 dark:text-purple-100">
          recent projects
        </span>
      </h1>
      {/* gap-x-16 lg:gap-x-16 */}
      <div className="w-full flex flex-wrap items-center justify-around  gap-y-20  md:gap-y-40 ">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            className="flex bg-black-100 rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] p-4  md:p-8 items-center justify-center w-full sm:w-[534px] overflow-hidden "
            key={id}
          >
            {/* title={link} href={link} */}

            <div className="grid grid-cols-[1fr] grid-rows-[3fr,2fr,1fr]">
              <div className=" relative flex items-center justify-center overflow-hidden  mb-10">
                <div
                  className="relative w-full h-full overflow-hidden rounded-3xl  "
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image src="/bg.png" alt="bgimg" width={500} height={500} />
                </div>
                <Image
                  src={img}
                  alt={title}
                  //   width={500}
                  //   height={500}
                  fill={true}
                  className="z-10 absolute rotate-3 scale-[0.9] p-2"
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
                    >
                      <Image
                        src={icon}
                        alt="icon5"
                        width={40}
                        height={40}
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>
                <Link
                  href={link}
                  target={"_blank"}
                  className="flex justify-center items-center h-full text-white hover:text-purple-100  transition duration-300"
                >
                  <p className="flex lg:text-xl md:text-xs text-sm ">Site</p>
                  <FaLocationArrow
                    className="ms-3    text-[#cbacf9] "
                    // color="#CBACF9"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
