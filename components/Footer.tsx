"use client";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data";
import { FaLinkedin } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { FaSquareGithub } from "react-icons/fa6";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
/* eslint-disable @next/next/no-img-element */
const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = "zlatta2000@gmail.com";
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
      {/* absolute left-0 -bottom-72 min-h-96*/}
      {/* <div className=" relative  w-full ">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div> */}
      <div className=" relative flex flex-col items-center">
        {/* lg:max-w-[45vw] */}
        <h1 className="heading ">
          Open to <span className="text-purple">New Opportunities</span>{" "}
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Feel free to reach out to me on LinkedIn or email. You can also find
          my GitHub link below to explore my projects.
        </p>
        <a href="mailto:zlatta2000@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        <p className="text-white mt-8 text-center">or</p>
        <MagicButton
          title={copied ? "Email is Copied!" : "Copy my email address"}
          icon={<IoCopyOutline />}
          handleClick={handleCopy}
          position="right"
        />
      </div>
      {/* md:flex-row-reverse */}
      <div className="flex mt-8  flex-col justify-between items-center">
        {/* md:mb-0 */}
        <div className="flex items-center mb-8 gap-8">
          {/* "text-black bg-white " */}

          <a
            className="flex justify-center items-center pointer rounded-full w-[35px] h-[35px] text-black-100 bg-white  hover:text-white hover:bg-black border border-white"
            href="https://www.linkedin.com/in/ganna-kovchyk/"
            target="_blank"
            rel="noreferrer"
          >
            <LuLinkedin
              className="w-[22px] h-[22px] "
              //  hover:fill-current  style={{ width: 25, height: 25 }}
            />
          </a>

          <a
            className="flex justify-center items-center pointer rounded-full w-[35px] h-[35px] text-black-100 bg-white  hover:text-white hover:bg-black border border-white"
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
