import React from 'react'

function Message() {
  return (
     <div  className="flex items-center ">
        <div className='w-1/2 mt-6 ml-12 bg-red-500'>
            <h1 className='text-3xl font-bold text-[#2F0F5D] pl-8'>Principal Message</h1>
            <div className='flex items-center '>
                <div className='w-full px-4 py-2 md:max-w-[600px]'>
                    <img className='h-32 w-full' src='https://schotest.com/assets/uploads/schools/5f87d8b0ae560.png' alt='/'  />
                </div>
                <div className='text-xs px-2 py-2 font-semibold'>
                    <p>"It is easier to build strong children than to repair broken men". A wise quote referring to the role that children could play in laying the foundation of a strong nation. I believe that the foundation of a strong nation depends on the way its children are cared for and nurtured. In order to build a strong nation, we must instill good values in our children providing them love and care, guiding them through thick and thin till they become confident and strong enough. This all can be done through “Quality education”.</p>
                </div>
                
            </div>
               <div className='flex justify-end'>
                    <p className='text-[#FF6D60] font-bold'>-Kamal Dixit</p>
                </div>
        </div>
        <div className='w-1/2 ml-2 mr-2  '>
        <div class="flex justify-center  gap-4 p-4 ">

<div class="flex justify-center items-center  h-32 w-48  text-5xl  md:text-4xl">
<i class="text-[#3E54AC] fa-brands fa-facebook"></i>
</div>

<div class="flex justify-center items-center  h-32 w-48  text-5xl md:text-4xl">
<i class=" text-[#E21818] fa-brands fa-pinterest"></i>
</div>

<div class="flex justify-center items-center  h-32 w-48  text-5xl md:text-4xl">
<i class="text-[#009FBD] fa-brands fa-linkedin"></i>
</div>

<div class="flex justify-center items-center  h-32 w-48  text-5xl md:text-4xl">
<i class="text-[#E90064] fa-brands fa-instagram"></i>
</div>

<div class="flex justify-center items-center  h-32 w-48  text-5xl md:text-4xl">
<i class="text-[#D21312] fa-brands fa-youtube"></i>
</div>

<div class="flex justify-center items-center  h-32 w-48  text-5xl md:text-4xl">
<i class="text-[#19A7CE] fa-brands fa-twitter"></i>
</div>

</div>
        </div>
     </div>

  )
}

export default Message
