import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const login = () => {
    navigate("/PhoneAuth");
  };

  return (
    <div className=" bg-white border-b-2  flex flex-row justify-between items-center fixed w-full  sm:flex sm:flex-row sm:items-center   xl:flex xl:flex-row  xl:justify-around xl:items-center xl:bg-gray-50 xl:sticky xl:w-full xl:top-0 xl:border-b-2 ">
      <div className="flex flex-row justify-center items-center xl:flex xl:flex-row sm:flex sm:flex-row sm:items-center md:flex md:flex-row lg:flex lg:flex-row lg:items-center xl:items-center xl:justify-between xl:p-1">
        <img
          src="./logo.png"
          alt=""
          className=" w-28 h-16 object-contain j sm:w-32 sm:h-28 sm:object-contain lg:w-36 lg:h-24 lg:object-contain xl:w-32 xl:h-24 xl:object-contain "
        />
          <SearchBar />
      </div>
      <div className=" flex flex-col gap-2 p-2 m-2 sm:flex sm:flex-row  xl:flex xl:flex-row xl:justify-between xl:w-36 xl:text-lg cursor-pointer">
        <h1
          className=" items-center flex flex-row  lg:font-bold xl:flex xl:flex-col xl:items-center xl:justify-center xl:p-2 xl:text-xl xl:font-bold"
          onClick={login}
        >
          {" "}
          <CiUser className=" size-5 xl:size-6" />
          Profile
        </h1>
        <h1 className=" flex flex-row items-center lg:font-bold   xl:flex xl:flex-col xl:items-center xl:justify-center xl:p-2 xl:text-xl xl:font-bold">
          <CiShoppingCart className=" size-5 xl:size-6" /> Cart
        </h1>{" "}
      </div>
    </div>
  );
}

export default Nav;
