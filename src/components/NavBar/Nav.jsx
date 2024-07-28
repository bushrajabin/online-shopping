import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate=useNavigate();
  const login = () => {
    navigate('/PhoneAuth')

};

  return (
    <div className=" xl:flex xl:flex-row  xl:justify-around xl:items-center  xl:bg-gray-50 xl:sticky xl:w-full xl:top-0 xl:border-b-2 ">
      <div className="xl:flex xl:flex-row xl:items-center xl:justify-between  xl:p-1 xl:m-2">
        <img
          src="./logo.png"
          alt=""
          className="xl:w-32 xl:h-16 xl:object-contain xl:pr-10 "
        />
        <SearchBar />
      </div>

      <div className=" xl:flex xl:flex-row xl:justify-between xl:w-32 xl:text-lg cursor-pointer">
        <h1
          className="xl:items-center xl:justify-center xl:flex xl:flex-col xl:p-2"
          onClick={login}
        >
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
