import React from "react";
import { Tooltip } from "@material-tailwind/react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <Tooltip key={technology.name} content={technology.name} placement="bottom">
          <div className='w-28 h-28 cursor-pointer'>
            <BallCanvas icon={technology.icon} />
          </div>
        </Tooltip>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
