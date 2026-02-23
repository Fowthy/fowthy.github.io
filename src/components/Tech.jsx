import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, techStack } from "../constants";

const Tech = () => {
  return (
    <div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>

      <div className='mt-16 space-y-6'>
        {Object.entries(techStack).map(([category, techs]) => (
          <div key={category}>
            <h3 className='text-secondary text-[14px] uppercase tracking-wider mb-3'>
              {category}
            </h3>
            <div className='flex flex-wrap gap-2'>
              {techs.map((tech) => (
                <span
                  key={tech}
                  className='text-[13px] px-3 py-1.5 rounded-lg bg-tertiary text-white-100 border border-[#915EFF]/20'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
