import React from "react";

function Nav() {
  return (
    <div className=" xl:flex xl:flex-row  xl:justify-around xl:items-center xl:shadow-xl xl:bg-slate-300 xl:m-2 xl:rounded-xl">
      <img src="./logo.png" alt="" className="xl:w-36" />
      <input
        type="search"
        placeholder="Enter Your Product Name"
        className="xl:w-52 xl:h-10 xl:border-none xl:outline-none xl:p-2 xl:border-4   xl:rounded-sm xl:font-serif "
      />
      <h1>0</h1>
    </div>
  );
}

export default Nav;
