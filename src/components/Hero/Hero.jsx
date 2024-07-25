import React from "react";
import { HeroData } from "../../common/HeroData";

function Hero() {
  return (
    <div className="xl:flex xl:flex-row xl:justify-evenly  xl:border-b-2 xl:cursor-pointer xl:fixed xl:w-full xl:bg-white xl:z-0 xl:top-26  ">
      {HeroData.map((data, index, arr) => {
        return (
          <div key={index}  className=" xl:m-2 "  >
            <h1 className=" font-serif xl:text-sm xl:p-2 xl:hover:underline">{data}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Hero;
