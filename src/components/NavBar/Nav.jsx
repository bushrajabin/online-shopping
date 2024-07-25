import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

function Nav() {

  const login=()=>{
    alert("hiii")
  }

  return (
    <div className=" xl:flex xl:flex-row  xl:justify-around xl:items-center  xl:bg-gray-50 xl:sticky xl:w-full xl:top-0 xl:border-b-2 ">
      <div className="xl:flex xl:flex-row xl:items-center xl:justify-between  xl:p-1 xl:m-2">
        <img
          src="./logo.png"
          alt=""
          className="xl:w-32 xl:h-16 xl:object-contain xl:pr-10 "
        />
        <div className="xl:flex xl:flex-row xl:items-center xl:border-blue-100  xl:border-2 xl:rounded-lg xl:p-1">
          <CiSearch />
          <input
            type="search"
            placeholder="Enter Your Product Name"
            className="xl:w-96 xl:outline-none xl:p-1  xl:font-serif  xl:bg-transparent "
          />
        </div>
      </div>

      <div className=" xl:flex xl:flex-row xl:justify-between xl:w-32 xl:text-lg cursor-pointer">
        <h1 className="xl:items-center xl:justify-center xl:flex xl:flex-col xl:p-2" onClick={login}>
          {" "}
          <CiUser className="xl:size-6" />
          Profile
        </h1>
        <h1 className="xl:items-center xl:justify-center xl:flex xl:flex-col xl:p-2">
          <CiShoppingCart className="xl:size-6" /> Cart
        </h1>{" "}
      </div>
    </div>
  );
}

export default Nav;
