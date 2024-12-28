"use client";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
//import { socialMedia } from "@/data";

import { LuLinkedin } from "react-icons/lu";
import { FaSquareGithub } from "react-icons/fa6";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
/* eslint-disable @next/next/no-img-element */
const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "gannakovchyk@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 4000);
  };
  return (
    <footer
      className=" relative w-full pt-20 md:pb-12 pb-[100px]  border-t border-slate-600 bg-black-100"
      id="contact"
    >
      <div className=" relative flex flex-col items-center">
        <h1 className="heading text-blue-100 ">
          Open to <span className="text-purple">New Opportunities</span>{" "}
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Feel free to reach out to me on LinkedIn or email. You can also find
          my GitHub link below to explore my projects.
        </p>

        <a href="mailto:gannakovchyk@gmail.com" className="pb-8 pt-4 w-[239px]">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses=" !text-white !bg-slate-950 "
          />
        </a>
        <p className="text-white text-center ">or</p>
        <div className="w-[239px]">
          <MagicButton
            title={copied ? "Email is Copied!" : "Copy my email address"}
            icon={<IoCopyOutline />}
            handleClick={handleCopy}
            position="right"
            otherClasses=" !text-white !bg-slate-950  !hover:bg-black  !dark:hover:bg-black"
          />
        </div>
      </div>

      <div className="flex mt-8  flex-col justify-between items-center">
        <div className="flex items-center mb-8 gap-8">
          <a
            className="flex justify-center items-center pointer rounded-full w-[35px] h-[35px] text-black-100 bg-white  hover:text-white hover:bg-black border border-white transition-colors duration-200"
            href="https://www.linkedin.com/in/ganna-kovchyk/"
            target="_blank"
            rel="noreferrer"
          >
            <LuLinkedin className="w-[22px] h-[22px] " />
          </a>

          <a
            className="flex justify-center items-center pointer rounded-full w-[35px] h-[35px] text-black-100 bg-white  hover:text-white hover:bg-black border border-white transition-colors duration-200"
            href="https://github.com/GannaKov"
            target="_blank"
            rel="noreferrer"
          >
            <FaSquareGithub className="w-[22px] h-[22px]  " />
          </a>
        </div>
        <p className="md:text-base text-xs md:font-normal text-white-200 font-light">
          Copyright © 2024 Ganna Kovchyk
        </p>
      </div>
    </footer>
  );
};

export default Footer;
