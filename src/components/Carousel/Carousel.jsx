import React, { useState } from "react";
import { CarousalData } from "./carouselData";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // previous
  const previous = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? CarousalData.length - 1 : prevIndex - 1
    );
  };

  // This is for next

  const next = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === CarousalData.length - 1 ? 0 : prevIndex + 1
    );
  };

  //   Arrow size
  const arrowSize = 60;

  return (
    <>
      <div className="  flex flex-row pt-20 justify-center text-center items-center  sm:pt-28  md:pt-28  lg:pt-24 lg:flex lg:flex-row xl:pt-2">
        <MdKeyboardArrowLeft
          onClick={previous}
          size={arrowSize}
          className="cursor-pointer text-gray-500 hover:text-red-200"
        />

        <div className=" w-full h-full m-2 sm:w-full sm:h-full sm:m-1 md:w-full md:h-full  ">
          {CarousalData.map((carousal, index) => (
            <div
              key={carousal.id}
              className={`flex flex-col gap-2 ${
                index === currentImageIndex ? "block" : "hidden"
              }`}
            >
              <img
                src={carousal.imageURL}
                alt={carousal.id}
                className="w-full h-full object-contain rounded-md sm:w-full sm:h-full sm:object-contain md:h-full md:w-full  "
              />
            </div>
          ))}
        </div>

        <MdKeyboardArrowRight
          onClick={next}
          size={arrowSize}
          className="cursor-pointer text-gray-500 hover:text-red-200"
        />
      </div>
    </>
  );
}

export default Carousel;
