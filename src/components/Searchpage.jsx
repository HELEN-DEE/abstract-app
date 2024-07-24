import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useMedia } from "react-use";

const Searchpage = () => {
  const isWide = useMedia("(min-width: 768px)");
  return (
    <section className="bg-[#dadbf1] py-24 w-screen">
      <h1 className="lg:text-7xl text-3xl font-medium text-center pb-8">
        How can we help?
      </h1>
      <div className="bg-white flex items-center justify-between px-2 lg:px-4 w-[85vw] md:w-[70vw] lg:w-[55vw] mx-auto border py-3.5 lg:py-4">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          className=" text-xl bg-transparent  focus:outline-none flex-1"
        />
        <span className="">
          <IoIosArrowRoundForward size={isWide ? 25:30} className="hover:text-[#4C5FD5]" />
        </span>
      </div>
    </section>
  );
};

export default Searchpage;

