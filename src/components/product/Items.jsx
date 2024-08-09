import React, { useState, useEffect } from "react";
import Data from "../../Data.json";

function Items() {
  const [items, setItems] = useState([]);
  // const [loading, setLoading] = useState(true); ///This is for loader
  const [noOfElement, setNoOfElement] = useState(4); ///THis is for products

  try {
    useEffect(() => {
      setTimeout(() => {
        setItems(Data);
        setLoading(false);
      });
    }, [setItems]);
  } catch (error) {
    console.log(error);
  }

  const slice = items.slice(0, noOfElement);

  // This function will shows more items when we will click on viewmore button
  const viewMore = () => {
    setNoOfElement(noOfElement + 4);
  };

  // This is for loader
  // if (loading) {
  //   return (
  //     <div className="w-full h-screen justify-center m-auto flex flex-col">
  //       <img
  //         src="./loading.gif"
  //         alt=""
  //         className=" w-96 h-96 object-cover xl:w-full"
  //       />
  //     </div>
  //   );
  // }

  return (
    <>
      <div className=" flex flex-col items-center sm:flex sm:flex-col md:flex md:flex-col lg:flex lg:flex-col xl:flex xl:justify-center  ">
        <div className="   flex flex-row flex-wrap justify-center text-center mt-6 sm:flex sm:flex-row sm:flex-wrap sm:mt-5 xl:flex xl:flex-row  xl:mt-10 ">
          {slice.map((data, index) => {
            const { title, image, price, category, name } = data;
            return (
              <div
                key={index}
                className=" bg-white m-2 flex flex-col items-center w-40 p-2 rounded-sm shadow-md sm:w-40 md:w-44 lg:w-64 xl:bg-red-900 xl:w-80   "
              >
                <img
                  src={image}
                  alt=""
                  className=" w-20 h-20 object-contain m-2 sm:w-20 sm:h-20 sm:object-contain  md:w-20 md:h-20 md:object-contain lg:w-52 lg:h-32 lg:object-contain xl:w-72 xl:h-60 "
                />
                <h1 className="font-bold text-sm p-1  md:text-sm lg:text-xl xl:font-bold xl:underline xl:text-lg xl:font-serif xl:p-3 ">
                  {category}
                  {name}
                </h1>
                <h2 className="font-sans text-sm lg:text-lg xl:font-sans xl:pl-3">
                  {title}
                </h2>
                <div className="flex flex-row items-center w-full justify-between p-2 xl:flex xl:flex-row xl:items-center xl:justify-between xl:p-3 ">
                  <h3 className="font-bold text-xs xl:font-bold md:text-xs md:font-bold lg:text-xl">
                    Price: {price}
                  </h3>
                  <button className="w-12 text-xs rounded-md p-1 font-semibold border-blue-900 border-2 md:p-2 md:font-bold md:w-10 md:text-xs lg:text-lg lg:w-20 xl:border-2 xl:p-2 xl:border-blue-400  xl:rounded-lg xl:font-semibold  ">
                    Add
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="bg-slate-900 w-44 m-3 p-2 text-white font-bold rounded-lg xl:bg-slate-900 xl:p-2 xl:m-2 xl:text-white xl:text-xl xl:font-serif xl:rounded-sm xl:w-44"
          onClick={viewMore}
        >
          View More
        </button>
      </div>
    </>
  );
}

export default Items;
