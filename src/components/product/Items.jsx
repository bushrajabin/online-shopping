import React, { useState, useEffect } from "react";
import Data from "../../Data.json";

function Items() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); ///This is for loader
  const [noOfElement, setNoOfElement] = useState(4); ///THis is for products

  try {
    useEffect(() => {
      setTimeout(() => {
        setItems(Data);
        setLoading(false);
      }, 3000);
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
  if (loading) {
    return (
      <div className="w-full h-screen justify-center m-auto flex flex-col">
        <img
          src="./loading.gif"
          alt=""
          className=" w-96 h-96 object-cover xl:w-full"
        />
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center xl:flex xl:flex-col xl:justify-center xl:items-center xl:mt-16 ">
        <div className="bg-violet-100 w-full flex flex-col justify-center items-center xl:bg-slate-50 xl:flex xl:flex-row xl:flex-wrap xl:w-full xl:justify-center xl:items-center">
          {slice.map((data, index) => {
            const { title, image, price, category, name } = data;
            return (
              <div
                key={index}
                className="shadow-xl rounded-lg w-80 m-2 flex flex-col items-center bg-white sm:p-3 sm:m-3 xl:bg-white xl:p-4 xl:m-2 xl:flex xl:flex-col "
              >
                <img
                  src={image}
                  alt=""
                  className="w-56 h-56 p-2 object-contain xl:w-64 xl:h-64 xl:object-contain"
                />
                <h1 className="font-bold text-lg p-1 xl:font-bold xl:underline xl:text-lg xl:font-serif xl:p-3">
                  {category}
                  {name}
                </h1>
                <h2 className="font-sans text-sm xl:font-sans xl:pl-3">
                  {title}
                </h2>
                <div className="flex flex-row items-center justify-evenly w-full p-2 xl:flex xl:flex-row xl:items-center xl:justify-between xl:p-3">
                  <h3 className="font-bold xl:font-bold">Price: {price}</h3>
                  <button className="w-20 rounded-md p-1 font-semibold border-blue-900 border-2 xl:border-2 xl:p-2 xl:border-blue-400 xl:w-20 xl:rounded-lg xl:font-semibold">
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
