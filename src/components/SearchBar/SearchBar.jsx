import React from "react";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
function SearchBar() {

  return (
    <div className="xl:flex xl:flex-row xl:items-center xl:border-blue-100  xl:border-2 xl:rounded-lg xl:p-1">
      <CiSearch />
      <input
        type="search"
        placeholder="Enter Your Product Name"
        className="xl:w-96 xl:outline-none xl:p-1  xl:font-serif  xl:bg-transparent "
      />
    </div>
  );
}

export default SearchBar;
