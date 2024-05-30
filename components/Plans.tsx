import { HoverEffect } from "./ui/CardHoverEffect";
import { myPlans } from "@/data";

const Plans = () => {
  return (
    <div className="pt-40 pb-40 relative " id="plans">
      <h1 className=" heading  text-blue-100 mb-16">
        Skills I aim &nbsp;
        <span className="text-purple">to acquire next</span>
      </h1>
      {/* px-8 */}
      <div className="max-w-5xl mx-auto ">
        <HoverEffect items={myPlans} />
      </div>
    </div>
  );
};

export default Plans;
