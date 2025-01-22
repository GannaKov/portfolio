"use client";
import React, { useEffect, useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { useTheme } from "next-themes";

const Hero: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [fillColor, setFillColor] = useState("var(--spotlight-fill-light)");

  useEffect(() => {
    const newFillColor =
      theme === "dark"
        ? "var(--spotlight-fill-dark)"
        : "var(--spotlight-fill-light)";
    setFillColor(newFillColor);
  }, [theme]);

  return (
    <section className=" pt-40 max-w-[1940px]">
      <div>
        <Spotlight
          className="-top-32 -left-[40%] md:-left-16 md:-top-0 lg:-top-20 h-screen"
          fill={fillColor}
        />

        <Spotlight
          className="-top-5 left-[20%] md:top-16 md:left-80 lg:left-[40%]  h-[80vh] w-[80vw]"
          fill="blue"
        />

        <Spotlight
          className="top-6  md:top-10 left-[80%]  h-[80vh] w-[80vw]"
          fill="purple"
        />
      </div>

      <div className="flex justify-center relative  z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="mb-4 tracking-widest text-lg text-center dark:text-blue-100 ">
            JavaScript | React | Node.js Enthusiast
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl text-blue-100 mb-4"
            words="Creating Dynamic Websites is My Passion"
          />

          <p className="text-center mb-16 md:tracking-wider text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Ganna, an Aspiring Web Developer
          </p>
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
              colorBtn="regular"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
