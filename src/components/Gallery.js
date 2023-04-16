import React from 'react'

function Gallery() {
  return (
    <div className='bg-yellow-500 flex'>
        <div class="w-1/3  flex items-center justify-center">
            <h1 className='text-6xl pt-3 pb-3 font-bold text-white'>Gallery</h1>
        </div>
        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
  <div class="-m-1 flex flex-wrap md:-m-2">
    <div class="flex w-1/2 flex-wrap">
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://schotest.com/assets/images/website/gallery/12.jpg" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://schotest.com/assets/images/website/gallery/3.jpg" />
      </div>
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://schotest.com/assets/images/website/gallery/4.jpg" />
      </div>
    </div>
    <div class="flex w-1/2 flex-wrap">
      <div class="w-full p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://schotest.com/assets/images/website/gallery/7.jpg" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://schotest.com/assets/images/website/gallery/2.jpg" />
      </div>
      <div class="w-1/2 p-1 md:p-2">
        <img
          alt="gallery"
          class="block h-full w-full rounded-lg object-cover object-center"
          src="https://schotest.com/assets/images/website/gallery/11.jpg" />
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Gallery
