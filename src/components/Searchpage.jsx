import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";;

const Searchpage = () => {
    return (
        <section className='bg-[#dadbf1] py-24 '>
            <h1 className='lg:text-7xl text-3xl font-medium text-center pb-8'>How can we help?</h1>
            <div className='flex justify-center'>
            <input type="search" name="search" id="search" placeholder='Search' className='py-4 px-3 text-xl lg:w-[55%]  w-[70%] border border-black focus:border-[#4C5FD5] rounded focus:outline-none shadow-md' />
            <span className='relative right-10 py-4'>
                <IoIosArrowRoundForward size={35} className='hover:text-[#4C5FD5]'/>
            </span>
            </div>
        </section>
    )
}

export default Searchpage
