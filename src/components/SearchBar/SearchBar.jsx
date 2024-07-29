import React from "react";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
function SearchBar() {

  return (
    <div className=" flex flex-row items-center border-2 p-1 m-1 rounded-lg outline-none sm:border-2 sm:rounded-sm sm:p-2   md:flex md:flex-row md:p-2 lg:bg-transparent lg:rounded-sm lg:p-2 xl:flex xl:flex-row xl:items-center xl:border-blue-100  xl:border-2 xl:rounded-lg xl:p-1">
      <CiSearch />
      <input
        type="search"
        placeholder="Enter Your Product Name"
        className=" p-1 text-sm outline-none w-32 bg-transparent sm:bg-transparent sm:outline-none sm:w-64 md:w-96 md:outline-none md:bg-transparent lg:w-96  xl:w-96 xl:outline-none xl:p-1  xl:font-serif  xl:bg-transparent "
      />
    </div>
  );
}

export default SearchBar;
