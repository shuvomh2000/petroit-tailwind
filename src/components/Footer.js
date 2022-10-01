import React from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1f1f1f] py-[150px]">
        <div className="max-w-container mx-auto flex justify-between">
          <div className="w-2/5">
            <picture>
              <img
                src="images/2ndLogo.png"
                className="block mb-[30px]"
                loading="lazy"
              />
            </picture>
            <div>
              <ul>
                <li className="relative pl-[20px] text-white mb-[15px]">
                  <FiMail className="text-base absolute left-0 top-[5px] text-white" />
                  mail@yourcompany.com
                </li>
                <li className="relative pl-[20px] text-white mb-[15px]">
                  <FiPhone className="text-base absolute left-0 top-[5px] text-white" />
                  +896 120 5889 (Toll free)
                </li>
                <li className="relative pl-[20px] text-white mb-[15px]">
                  <FiMail className="text-base absolute left-0 top-[5px] text-white" />
                  101 Baker Street, New York, USA, 12345
                </li>
              </ul>
              <div className="flex mt-[30px]">
                <div className=" group w-8 h-8 rounded-full bg-primary flex justify-center items-center hover:bg-white ease-out duration-300 cursor-pointer">
                  <FaFacebookF className=" text-white text-base cursor-pointer ease-out duration-300 group-hover:text-primary" />
                </div>
                <div className="ml-5 group w-8 h-8 rounded-full bg-primary flex justify-center items-center hover:bg-white ease-out duration-300 cursor-pointer">
                  <AiOutlineTwitter className=" text-white text-base cursor-pointer ease-out duration-300 group-hover:text-primary" />
                </div>
                <div className="ml-5 group w-8 h-8 rounded-full bg-primary flex justify-center items-center hover:bg-white ease-out duration-300 cursor-pointer">
                  <FaLinkedinIn className=" text-white text-base cursor-pointer ease-out duration-300 group-hover:text-primary" />
                </div>
                <div className="ml-5 group w-8 h-8 rounded-full bg-primary flex justify-center items-center hover:bg-white ease-out duration-300 cursor-pointer">
                  <AiOutlineInstagram className=" text-white text-base cursor-pointer ease-out duration-300 group-hover:text-primary" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/5 flex justify-between">
            <div className="w-1/5">
              <h5 className="font-pop font-bold text-base text-white mb-5 capitalize">
                company
              </h5>
              <ul>
                <li className="font-pop font-normal text-sm text-white mb-4 capitalize">
                  home
                </li>
                <li className="font-pop font-normal text-sm text-white mb-4 capitalize">
                  about
                </li>
                <li className="font-pop font-normal text-sm text-white mb-4 capitalize">
                  gallery
                </li>
                <li className="font-pop font-normal text-sm text-white capitalize">
                  service
                </li>
              </ul>
            </div>
            <div className="w-1/5">
              <h5 className="font-pop font-bold text-base text-white mb-5 capitalize">
                Others
              </h5>
              <ul>
                <li className="font-pop font-normal text-sm text-white mb-4 capitalize">
                  blog
                </li>
                <li className="font-pop font-normal text-sm text-white mb-4 capitalize">
                  contact
                </li>
                <li className="font-pop font-normal text-sm text-white mb-4 capitalize">
                  Terms & Conditions
                </li>
                <li className="font-pop font-normal text-sm text-white capitalize">
                  Privacy Policy
                </li>
              </ul>
            </div>
            <div className="w-2/5">
              <h5 className="font-pop font-bold text-base text-white mb-5 capitalize">
                Others
              </h5>
              <div className="flex ">
                <picture>
                  <img src="images/Cert1.png" loading="lazy" />
                </picture>
                <picture>
                  <img
                    src="images/Cert2.png"
                    loading="lazy"
                    className="ml-[5px]"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="bg-[#282828]">
        <div className="max-w-container mx-auto">
            <h4 className="font-pop font-medium text-base text-para py-[40px]">
            © Copyright 2022 by shuvomh2000 - All right reserved.
            </h4>
        </div>
      </section>
    </>
  );
};

export default Footer;
