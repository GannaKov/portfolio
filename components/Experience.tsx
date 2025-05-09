/* eslint-disable @next/next/no-img-element */
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorder";

const Experience: React.FC = () => {
  return (
    <section
      className="pt-40 sm:px-10 px-5 relative max-w-[1940px] w-full"
      id="experience"
    >
      <h1 className=" heading  text-black dark:text-blue-100 mb-16">
        My work&nbsp;
        <span className="text-purple-200 dark:text-purple-100">experience</span>
      </h1>
      <div className="w-full grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map(
          ({ id, title, desc1, desc2, className, thumbnail }) => (
            <Button
              key={id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                //   add these two
                //   can generate the color from here https://cssgradient.io/
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                //  this border radius to make it more rounded so that the moving border is more realistic
                borderRadius: `calc(1.75rem* 0.96)`,
              }}
              // remove bg-white dark:bg-slate-900
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <img
                  src={thumbnail}
                  alt={thumbnail}
                  className="lg:w-32 md:w-20 w-16"
                />
                <div className="lg:ms-5">
                  <h1 className="text-start text-white text-xl md:text-2xl font-bold">
                    {title}
                  </h1>
                  <p className="text-start text-white-100 mt-3 font-semibold underline underline-offset-4">
                    {desc1}
                  </p>
                  <p className="text-start text-white-100 mt-3 font-semibold">
                    {desc2}
                  </p>
                </div>
              </div>
            </Button>
          )
        )}
      </div>
    </section>
  );
};

export default Experience;
