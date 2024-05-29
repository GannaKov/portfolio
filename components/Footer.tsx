import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data";
import { FaLinkedin } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { FaSquareGithub } from "react-icons/fa6";
/* eslint-disable @next/next/no-img-element */
const Footer = () => {
  return (
    <footer className=" relative w-full pt-20 pb-4" id="contact">
      {/* absolute left-0 -bottom-72 min-h-96*/}
      {/* <div className=" relative  w-full ">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div> */}
      <div className=" relative flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      {/* md:flex-row-reverse */}
      <div className="flex mt-16  flex-col justify-between items-center">
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
