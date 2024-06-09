"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { useTheme } from "next-themes";

const Hero = () => {
  const { theme, setTheme } = useTheme();
  console.log("theme", typeof theme);

  const fillColor =
    theme === "dark"
      ? "var(--spotlight-fill-dark)"
      : "var(--spotlight-fill-light";
  return (
    <div className=" pt-40">
      <div>
        <Spotlight
          className="-top-40 right-40 md:-left-32 md:-top-20 h-screen"
          //fill="white"
          fill={fillColor}
        />

        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
        {/* left-full */}
        <Spotlight
          className="top-10 left-[80%] h-[80vh] w-[50vw]"
          fill="purple"
        />
      </div>

      {/* ------ my-20- */}
      <div className="flex justify-center relative  z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center dark:text-blue-100 max-w-80 ">
            Dynamic Web Magic with Next.js
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl text-blue-100 mb-4"
            words="Transforming Concepts into Seamless User Experiences"
          />
          <p className="text-center mb-16 md:tracking-wider text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Ganna, a Full-Stack Developer
          </p>
          <a href="#about">
            {" "}
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
