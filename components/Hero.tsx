"use client";
import React, { useEffect, useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { useTheme } from "next-themes";

const Hero = () => {
  const { theme, setTheme } = useTheme();
  const [fillColor, setFillColor] = useState("var(--spotlight-fill-light)");

  useEffect(() => {
    const newFillColor =
      theme === "dark"
        ? "var(--spotlight-fill-dark)"
        : "var(--spotlight-fill-light)";
    setFillColor(newFillColor);
  }, [theme]);
  // const fillColor =
  //   theme === "dark"
  //     ? "var(--spotlight-fill-dark)"
  //     : "var(--spotlight-fill-light";
  return (
    <div className=" pt-40">
      <div>
        <Spotlight
          // className="-top-40 right-40 md:-left-32 md:-top-20 h-screen"
          className="-top-32 -left-[40%] md:-left-16 md:-top-0 lg:-top-20 h-screen"
          //fill="white"
          fill={fillColor}
        />

        <Spotlight
          className="top-0 left-[40%] md:top-28 md:left-80 lg:left-[40%]  h-[80vh] w-[50vw]"
          fill="blue"
        />
        {/* left-full */}
        <Spotlight
          className="top-6  md:top-10 left-[80%]  h-[80vh] w-[50vw]"
          fill="purple"
        />
      </div>

      {/* ------ my-20- */}
      <div className="flex justify-center relative  z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          {/* max-w-80 */}
          <h2 className="mb-4 tracking-widest text-lg text-center dark:text-blue-100 ">
            JavaScript | React | Node.js Enthusiast
          </h2>
          {/* <p className="text-xl mb-2">
            JavaScript | React | Node.js Enthusiast
          </p> */}
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl text-blue-100 mb-4"
            words="Creating Dynamic Websites is My Passion"
          />
          {/* <p className="text-xl mb-2">
            JavaScript | React | Node.js Enthusiast
          </p> */}
          <p className="text-center mb-16 md:tracking-wider text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Ganna, an Aspiring Web Developer
          </p>
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
