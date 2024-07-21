import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";;

const Searchpage = () => {
    return (
        <section className='bg-[#dadbf1] py-24 '>
            <h1 className='lg:text-7xl text-3xl font-medium text-center pb-8'>How can we help?</h1>
            <div className='flex justify-between lg:w-[55%]  w-[70%] gap-2 mx-auto bg-white items-center border border-black focus:border-[#4C5FD5] rounded shadow-md py-4'>
            <input type="search" name="search" id="search" placeholder='Search' className=' px-3 text-xl  focus:outline-none flex-1' />
            <span className=''>
                <IoIosArrowRoundForward size={35} className='hover:text-[#4C5FD5]'/>
            </span>
            </div>
        </section>
    )
}

export default Searchpage
