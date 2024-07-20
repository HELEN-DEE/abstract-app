import { useState } from "react";
import logo from "../assets/abstract-logo.svg";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="lg:px-24  px-6 py-6 bg-black text-white flex justify-between ">
      <div className="flex gap-3 items-center">
        <img src={logo} alt="logo" className="lg:w-32 w-20" />
        <span className="border border-white h-10"></span>
        <p className="capitalize lg:text-2xl text-sm">Help center</p>
      </div>
      <div className="flex flex-row gap-4">
        {/* submit a request button */}
        <button className="border border-white px-4 py-2 text-2xl rounded-md hidden md:block">
          Submit a request
        </button>
            
        {/* search button */}
        <button className="md:hidden flex items-center justify-end ">
          {" "}
          <IoSearch size={30} />
        </button>
        
        {/* menu button */}
        <button
          className="md:hidden rounded-full focus:outline-none flex flex-col justify-center items-center w-8 h-8 pt-2"
          onClick={toggleMenu}
        >
          <span
            className={`block w-6 rounded-full h-[2px] mb-1 transform transition-transform duration-300 ease-in-out bg-white ${
              isMenuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          ></span>
          <span
            className={`block w-6 rounded-full h-[2px] mb-1 transform transition-opacity duration-300 ease-in-out bg-white ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-[2px] transform transition-transform duration-300 ease-in-out bg-white ${
              isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          ></span>
        </button>

        {/* sign-in button */}
        <button className="px-6 py-2 bg-[#4C5FD5] text-2xl  rounded-md hover:bg-white hover:text-black transition ease-in duration-75 hidden md:block">
          Sign in
        </button>

        

        </div>
        {/* conditional rendering for menu toggle */}
            {isMenuOpen && (
                <div className="absolute right-0 top-[5.5rem] w-full ">
                <hr />
                <div className="bg-black flex flex-col justify-center h-[11.5rem] items-center">
                    <button className=" px-4 py-2 text-2xl hover:text-slate-300 transition ease-in duration-75">
                        Submit a request
                    </button>
                    <span className="border-[0.5px] border-white w-[50%] "></span>
                    <button className="px-6 py-2 text-2xl  transition ease-in duration-75 hover:text-slate-300">
                        Sign in
                    </button>
                </div>
            </div>
            )}
    </header>
  );
};

export default Header;
