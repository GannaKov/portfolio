import clsx from "clsx";
import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  colorBtn,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  colorBtn?: "dark" | "regular" | "violet";
}) => {
  return (
    <button
      // md:mt-10 md:w-60
      className={`mt-4  relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px]  focus:outline-none sm:w-60 `}
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        // hover:bg-black  dark:hover:bg-black hover:dark:text-slate-400
        className={clsx(
          `${otherClasses} transition-colors duration-300 relative z-10  inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-lg px-7  text-sm font-medium backdrop-blur-3xl  `,
          colorBtn === "dark" &&
            "text-white bg-slate-950  hover:bg-[rgba(12,14,35,1)]   dark:hover:bg-[rgba(12,14,35,1)] k",
          colorBtn === "violet" &&
            "bg-violet-950 text-white hover:bg-[#161A31] dark:bg-[#161A31] ] dark:hover:bg-violet-950",
          colorBtn === "regular" &&
            " bg-purple-200 hover:bg-violet-950  dark:bg-slate-950 text-white dark:text-white dark:hover:bg-[rgba(12,14,35,1)] "
        )}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
