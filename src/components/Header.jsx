import logo from "../assets/abstract-logo.svg";

const Header = () => {
    return (
        <header className='lg:px-24  px-12 py-6 bg-black text-white flex justify-between '>
            <div className='flex gap-3 items-center'>
                <img src={logo} alt="logo" className="w-32"/>
                <span className='border border-white h-10'></span>
                <p className='capitalize text-2xl '>Help center</p>
            </div>
            <div className='flex flex-row gap-4'> 
                <button className='border border-white px-4 py-2 text-2xl rounded-md'>
                    Submit a request
                    <span className='md:hidden'>icon</span>
                </button>
                <button className='px-6 py-2 bg-[#4C5FD5] text-2xl  rounded-md hover:bg-white hover:text-black transition ease-in duration-75'>
                    Sign in
                    <span className='md:hidden'>icon</span>
                </button>
            </div>
            
        </header>
    )
}

export default Header