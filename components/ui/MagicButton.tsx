import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      // md:mt-10 md:w-60
      className={`mt-4  relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px]  focus:outline-none sm:w-60 `}
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        // hover:bg-black  dark:hover:bg-black
        className={`relative z-10  inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-lg px-7 bg-white dark:bg-slate-950 text-sm font-medium text-black  dark:text-white backdrop-blur-3xl ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
