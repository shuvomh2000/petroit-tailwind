import React from 'react'
import { FiMail,FiPhone } from 'react-icons/fi';
import { FaFacebookF,FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter,AiOutlineInstagram } from 'react-icons/ai';

const Header = () => {
  return (
    <header className='bg-black py-[15px] border-b-[5px] border-solid border-yBorder'>
        <div className="max-w-container mx-auto">
        <div className="flex">
            <div className="w-2/4 flex">
                <p className='font-pop font-normal text-xs text-white relative pl-[20px] mr-14 after:absolute after:right-[-29px] after:top-0 after:w-0.5 after:h-full after:bg-[#5C6A92]'>
                    <FiMail className='absolute left-0  text-base'/>
                    mail@yourcompany.com
                </p>
                <p className='font-pop font-normal text-xs text-white relative pl-[20px]'>
                    <FiPhone className='absolute left-0  text-base'/>
                    +896 120 5889 (Toll free)
                </p>
                
            </div>
            <div className="w-2/4 flex justify-end text-white">
                <FaFacebookF/>
                <AiOutlineTwitter className='ml-5'/>
                <FaLinkedinIn className='ml-5'/>
                <AiOutlineInstagram className='ml-5'/>
            </div>
        </div>
        </div>
    </header>
  )
}

export default Header