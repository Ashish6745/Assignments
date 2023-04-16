import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className='bg-[#070A52]'>
            <ul className='list-type-none lg:flex    lg:items-center lg:justify-evenly text-white md:block lg:px-4 lg:py-4 '>
               <a href='/'>
                <li className=' lg:border-r-2 lg:bg-transparent lg:border-0 lg:text-[15px]   md:bg-[#00425A] md:border-b-2 md:border-white md:border-solid  border-dotted md:pr-1 md:pl-4 md:text-[25px] md:border-r-0 border-white lg:pr-3 hover:text-[#16FF00]'>HOME</li>
              </a>
              <a href='/'>
                <li className='lg:border-r-2 md:bg-[#00425A] lg:bg-transparent lg:border-0 lg:text-[15px]  md:border-b-2 md:border-white md:border-solid border-dotted md:border-r-0 md:text-[25px] md:pl-4 md:pr-1 border-white lg:pr-3 hover:text-[#16FF00]'>ABOUT US</li>
              </a>
              <a href='/'>
                <li className='lg:border-r-2 md:bg-[#00425A] lg:bg-transparent lg:border-0 lg:text-[15px]  md:border-b-2 md:border-white md:border-solid  md:text-[25px] md:pl-4 border-dotted md:border-r-0 md:pr-1 border-white lg:pr-3 hover:text-[#16FF00]'>FEATURES</li>
              </a>
              <a href='/'>
                <li className='lg:border-r-2 md:bg-[#00425A] lg:bg-transparent lg:border-0 lg:text-[15px]   md:border-b-2 md:border-white md:border-solid md:text-[25px] md:pl-4 border-dotted md:border-r-0 md:pr-1 border-white lg:pr-3 hover:text-[#16FF00]'>BASIC PARAMETERS</li>
              </a>
              <a href='/'>
                <li className='lg:border-r-2 md:bg-[#00425A] lg:bg-transparent lg:border-0 lg:text-[15px]  md:text-[25px] md:pl-4 border-dotted md:border-r-0 md:pr-1 border-white md:border-b-2 md:border-white md:border-solid lg:pr-3 hover:text-[#16FF00]'>BLOGS</li>
              </a>
              <a href='/'>
                <li className='md:bg-[#00425A] lg:bg-transparent lg:border-0 lg:text-[15px]  md:text-[25px] md:pl-4 lg:border-r-2 border-dotted md:border-r-0 md:pr-1 border-white lg:pr-3 hover:text-[#16FF00] md:border-b-2 md:border-white md:border-solid'>NOTIFICATIONS</li>
              </a>
              <a href='/'>
                <li className='md:bg-[#00425A] lg:bg-transparent lg:border-0 lg:text-[15px]  md:text-[25px] md:pl-4 lg:border-r-2 border-dotted sm:border-r-0   pr-3 hover:text-[#16FF00] md:border-b-2 md:border-white md:border-solid'>EVENTS</li>
              </a>
              <a href='/'>
                <li className='md:bg-[#00425A] lg:bg-transparent lg:border-0 lg:text-[15px]  md:text-[25px] md:pl-4 lg:border-r-2 border-dotted sm:border-r-0 md:border-b-2 md:border-white md:border-solid  pr-3 hover:text-[#16FF00]'>GALLERY</li>
              </a>
              <a href='/'>
                <li className='md:text-[25px] md:bg-[#00425A] lg:bg-transparent lg:border-0 lg:text-[15px]  md:pl-4  lg:border-r-2 border-dotted sm:border-r-0 md:border-b-2 md:border-white md:border-solid  pr-3 hover:text-[#16FF00]'>CONTACT US</li>
              </a>
              <a href='/'>
                <li className='md:text-[25px] md:bg-[#00425A] lg:bg-transparent lg:border-0 lg:text-[15px]  md:pl-4  lg:border-r-2 border-dotted sm:border-r-0 md:border-b-2 md:border-white md:border-solid  pr-3 hover:text-[#16FF00]'>MANDATORY CLOSURE</li>
              </a>
              <a href='/'>
                <li className='md:text-[25px] md:bg-[#00425A] lg:bg-transparent lg:border-0 lg:text-[15px]  md:pl-4  lg:border-r-2 border-dotted sm:border-r-0 md:border-b-2 md:border-white md:border-solid  pr-3 hover:text-[#16FF00]'>LOGIN</li>
              </a>
              <a href='/'>
                <li className=' hover:text-[#16FF00] lg:bg-transparent lg:border-0 lg:text-[15px]  md:bg-[#00425A] md:pl-4 md:text-[25px] '>SIGN UP</li>
              </a>
               
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
