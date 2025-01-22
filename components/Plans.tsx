import { HoverEffect } from "./ui/CardHoverEffect";
import { myPlans } from "@/data";

const Plans: React.FC = () => {
  return (
    <section
      className="pt-40 pb-40 sm:px-10 px-5 relative max-w-[1940px] w-full "
      id="plans"
    >
      <h1 className=" heading  text-black dark:text-blue-100 mb-16">
        Skills I aim &nbsp;
        <span className="text-purple-200 dark:text-purple-100">
          to acquire next
        </span>
      </h1>

      <div className="mx-auto w-full ">
        <HoverEffect items={myPlans} />
      </div>
    </section>
  );
};

export default Plans;
