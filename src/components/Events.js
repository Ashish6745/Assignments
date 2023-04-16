import React from 'react'

function Events() {
  return (
    <div>
      <div className='flex items-center justify-evenly pt-6 pb-6 '>
        <div className='text-[#379237] text-2xl'><i class="fa-solid fa-phone"></i></div>
        <div className='text-[#153462] text-2xl'><i class="fa-sharp fa-regular fa-envelope"></i></div>
        <div className="text-[#379237] text-2xl"><i class="fa-solid fa-paper-plane"></i></div>
        <div className='bg-[#153462] text-white px-2 py-2 rounded-full font-semibold'><button>Admission</button></div>
        <div className='bg-[#153462] text-white px-2 py-2 rounded-full font-semibold'><button>Prospectus</button></div>
      </div>

      {/*NOTIFICATION AND EVENTS SECTION */}
       
       <div className='flex justify-around pt-6'>
        <div>
        <h1 className='text-3xl font-bold md:text-xl'>NOTIFICATIONS</h1>
        {/* NOTIFICATION 1*/}
        <div className="mt-4  border-[1px] border-gray-400 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
  <img
    className="h-72  w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
    src="https://schotest.com/assets/uploads/school_notifications/5f58dd3698c59.jpg"
    alt="" />
  <div className="flex flex-col justify-start p-6">
    <h5
      className="mb-2 text-lg font-medium text-neutral-800 dark:text-neutral-50 md:text-sm">
      Board Exams to be Made Easy with 2 attempts in a Year
    </h5>
    <span className="mb-4 text-sm text-neutral-600 dark:text-neutral-200 md:text-xs">
     HRD Ministry has Said  that NCERT Will be Developing guidelines for transforming school assesments to...
    </span>
    <p className="text-xs text-neutral-500 dark:text-neutral-300 ">
    <i className=" text-red-600 fa-solid fa-calendar pr-2"></i> 12 Aug 2020 20:38 PM
    </p>
  </div>
</div>

{/* notification 1 ends here */}

 {/* NOTIFICATION 2*/}
 <div className="mt-4 border-[1px] border-gray-400 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
  <img
    className="h-72 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
    src="https://schotest.com/assets/uploads/school_notifications/5f58dea60f979.jpg"
    alt="" />
  <div className="flex flex-col justify-start p-6">
    <h5
      className="mb-2 text-lg font-medium text-neutral-800 dark:text-neutral-50 md:text-sm">
     Delhi Government Launched EY STEM Tribe App to Uplift Girls in STEM Careers
    </h5>
    <span className="mb-4 text-sm text-neutral-600 dark:text-neutral-200 md:text-xs">
    TO boost the girl's involvements in the STEM (Science,Technology,Engineering and Mathematics) ca...
    </span>
    <p className="text-xs text-neutral-500 dark:text-neutral-300 ">
    <i className=" text-red-600 fa-solid fa-calendar pr-2"></i> 12 Aug 2020 21:49 PM
    </p>
  </div>
</div>

{/* notification 2 ends here */}


   {/* NOTIFICATION 3*/}
 <div className="mt-4 border-[1px] border-gray-400 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
  <img
    className="h-72 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
    src="https://schotest.com/assets/uploads/school_notifications/63280b914b825.jpg"
    alt="" />
  <div className="flex flex-col justify-start p-6">
    <h5
      className="mb-2 text-lg font-medium text-neutral-800 dark:text-neutral-50 md:text-xs">
     Education
    </h5>
    <span className="mb-4 text-sm text-neutral-600 dark:text-neutral-200 md:text-sm">
   It helps people become better citizens get a better paid-job  shows the differnce between good and bad.
    </span>
    <p className="text-xs text-neutral-500 dark:text-neutral-300 ">
    <i className=" text-red-600 fa-solid fa-calendar pr-2"></i> 19 Sept 2020 10:29 AM
    </p>
  </div>
</div>

{/* notification 4 ends here */}

   {/* NOTIFICATION 3*/}
 <div className="mt-4 border-[1px] border-gray-400 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
  <img
    className="h-72 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
    src="https://schotest.com/assets/uploads/school_notifications/63280c3004b42.jpg"
    alt="" />
  <div className="flex flex-col justify-start p-6">
    <h5
      className="mb-2 text-lg font-medium text-neutral-800 dark:text-neutral-50 md:text-sm">
     Personality Development
    </h5>
    <span className="mb-4 text-sm text-neutral-600 dark:text-neutral-200 md:text-xs">
   It helps gains confidence, self-esteem ,positive impact on one's communication skills and the way one
    </span>
    <p className="text-xs text-neutral-500 dark:text-neutral-300 ">
    <i className=" text-red-600 fa-solid fa-calendar pr-2"></i> 19 Sept 2020 11:45 AM
    </p>
  </div>
</div>

{/* notification 4 ends here */}

   <div className='flex justify-end pt-3'>
      <button className='bg-[#FFD93D] text-white font-bold rounded-full px-3 py-2 text w-[100px] md:font-semibold'>More</button>
   </div>

        </div>

        {/* EVENTS*/}
        <div>
            <h1 className='text-3xl font-bold'>Events</h1>
            {/*first event */}
            <div className='flex  justify-between  md:text-sm md:ml-3'>
                <div className="flex items-center justify-between ">
                    <div><img className="rounded-full h-16 md:h-10" src="https://schotest.com/assets/uploads/school_events/5f59bd5d09293.jpg" alt="/" /></div>
                    <div className='md:text-sm text-xl font-bold border-r-[#FFD93D] border-r-[1px] pl-2 pt-2 pr-2 '><span className='md:text-2xl text-6xl text-[#FFD93D]'>05</span>AUG
                    <p className='text-sm md:text-[8px]  font-semibold'>12:00PM-1:00PM</p>
                    </div>
                </div>
                <div className='pt-3 pl-3'>
                    <span className='text-md font-bold'>Secondary Anniversary of Scho Test</span>
                    <p className='text-xs font-thin'>Congratulation to you on this very big occassion of <br/> successful completing two years of remarkable..</p>
                </div>
            </div>
            {/*second event */}
            <div className='flex  justify-between md:text-sm md:ml-3 '>
                <div className="flex items-center justify-between">
                    <div><img className="rounded-full h-16 md:h-10" src="https://schotest.com/assets/uploads/school_events/5f59bde711d62.jpg" alt="/" /></div>
                    <div className='text-xl md:text-sm font-bold border-r-[#FFD93D] border-r-[1px] pl-2 pt-2 pr-2 '><span className='text-6xl md:text-2xl text-[#FFD93D]'>25</span>SEPT
                    <p className='text-sm md:text-[8px] font-semibold'>12:00PM-1:00PM</p>
                    </div>
                </div>
                <div className='pt-3 pl-3'>
                    <span className='text-md font-bold'>Scho Test At the National water<br/> Mission Award ceremony </span>
                    <p className='text-xs font-thin'>We cannot explain it taste,but if we need it very now <br/>and then. We cannot describe its colour, alto ..</p>
                </div>
            </div>
            <div className='flex justify-end pt-3'>
                <button className='bg-[#FFD93D] text-white font-bold rounded-full px-3 py-2 text w-[100px]'>More</button>
            </div>

        </div>
        
       </div>
      


    </div>
  )
}

export default Events
