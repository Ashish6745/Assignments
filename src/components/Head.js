import React from 'react'

function Head() {
  return (
    <div>
      <div className=" relative  h-[350px] w-[100%] bg-cover bg-no-repeat bg-center  bg-[url('https://schotest.com/assets/uploads/schools/5f87d94f517c2.jpg')]">
        <div className='sm:w-[400px] sm:text-[10px] md:w-[650px] lg:w-[1000px] lg:pt-4 lg:pb-4 md:text-3xl md:pt-2 md:pb-2 absolute bottom-[100px] left-[50px]   z-[10px] opacity-[0.9] text-6xl bg-[rgba(0,0,0,50%)] w-[1200px] rounded-full pt-5 pl-10 pb-5'>
            <span className='text-white'>schotest Public School</span>
            
        </div>
        <br/>
        <p className='left-[90px] bottom-[60px] absolute lg:text-3xl text-yellow-500 md:text-2xl'>North West Delhi (Delhi)</p>
        
      </div>
    </div>
  )
}

export default Head
