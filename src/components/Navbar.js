import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-primary">
      <div className="flex max-w-container mx-auto">
        <div className="w-1/5 py-[30px]">
          <picture>
            <img src="images/logo.png" loading="lazy" />
          </picture>
        </div>
        <div className="w-4/5 flex items-center justify-end">
          <ul className="flex font-pop font-semiblod font text-base text-white capitalize">
            <li>
              <a href="#">home</a>
            </li>
            <li className="ml-[50px]">
              <a href="#">about</a>
            </li>
            <li className="ml-[50px]">
              <a href="#">service</a>
            </li>
            <li className="ml-[50px]">
              <a href="#">gallery</a>
            </li>
            <li className="ml-[50px]">
              <a href="#">blog</a>
            </li>
            <li className="ml-[50px]">
              <a href="#" className="border-2 border-solid border-white py-3 px-8">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
