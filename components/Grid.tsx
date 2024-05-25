import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item) => (
          <BentoGridItem
            key={item?.id} // Add a conditional check to ensure 'item' is not undefined
            id={item?.id}
            title={item?.title}
            description={item?.description}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
