import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 relative group' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <div className='absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none'>
            <span className='bg-tertiary text-white text-[12px] px-2 py-1 rounded whitespace-nowrap'>
              {technology.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
