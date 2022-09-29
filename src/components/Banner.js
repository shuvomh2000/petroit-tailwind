import React from 'react'

const Banner = () => {
  return (
    <div style={{background:'url(images/banner.png)'}}>
        <div className="h-full w-full bg-bl_opacity">
            <div className='max-w-container mx-auto py-[270px]'>
                <h1 className='text-white text-[64px] font-bold font-pop w-[842px] mb-7'>We exist since 1975 on the oil and gas industry.</h1>
                <a href="#" className="bg-primary py-3 px-10 uppercase text-white font-pop text-base font-semibold border-2 border-solid border-primary hover:bg-transparent hover:border-white ease-out duration-300">learn more</a>
            </div>
        </div>
    </div>
  )
}

export default Banner