import React from 'react'

const Logo = () => {
  return (
    <section className='py-[140px]'>
        <div className='max-w-container mx-auto flex justify-between'>
            <div className='w-1/4'>
                <picture>
                    <img src='images/Logo1.png' loading='lazy'/>
                </picture>
            </div>
            <div className='w-1/4'>
                <picture>
                    <img src='images/Logo2.png' loading='lazy'/>
                </picture>
            </div>
            <div className='w-1/4'>
                <picture>
                    <img src='images/Logo3.png' loading='lazy'/>
                </picture>
            </div>
            <div className='w-1/4'>
                <picture>
                    <img src='images/Logo4.png' loading='lazy'/>
                </picture>
            </div>
        </div>
    </section>
  )
}

export default Logo