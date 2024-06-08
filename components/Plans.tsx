import { HoverEffect } from "./ui/CardHoverEffect";
import { myPlans } from "@/data";

const Plans = () => {
  return (
    <section className="pt-40 pb-40 sm:px-10 px-5 relative " id="plans">
      <h1 className=" heading  text-blue-100 mb-16">
        Skills I aim &nbsp;
        <span className="text-purple">to acquire next</span>
      </h1>
      {/* px-8 */}
      <div className="max-w-5xl mx-auto ">
        <HoverEffect items={myPlans} />
      </div>
    </section>
  );
};

export default Plans;
