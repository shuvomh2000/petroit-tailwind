import React from "react";

const Service = () => {
  return (
    <section>
      <div className="flex flex-wrap mt-[30px]">
        <div className="w-2/4 flex flex-col justify-center items-end">
          <h2 className="font-pop text-[64px] font-bold capitalize mr-[150px]">
            our services
          </h2>
          <p className="font-pop text-base font-medium w-[405px] mr-[150px] leading-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div
          style={{ backgroundImage: "url(images/service1.png)" }}
          className="w-2/4 bg-no-repeat bg-center bg-cover"
        >
          <div className="bg-bl_opacity w-full h-full py-[140px] px-[110px]">
            <h2 className="font-pop text-[23px] font-bold text-white">
              Modern natural oil and gas refineries.
            </h2>
            <a
              href="#"
              className="inline-block bg-primary mt-[20px] py-3 px-10 uppercase text-white font-pop text-base font-semibold border-2 border-solid border-primary hover:bg-transparent hover:border-white ease-out duration-300"
            >
              learn more
            </a>
          </div>
        </div>
        <div
          style={{ backgroundImage: "url(images/service2.png)" }}
          className="w-2/4 bg-no-repeat bg-center bg-cover"
        >
          <div className="bg-bl_opacity w-full h-full py-[140px] px-[110px]">
            <h2 className="font-pop text-[23px] font-bold text-white">
            Supply of national industries.
            </h2>
            <a
              href="#"
              className="inline-block bg-primary mt-[20px] py-3 px-10 uppercase text-white font-pop text-base font-semibold border-2 border-solid border-primary hover:bg-transparent hover:border-white ease-out duration-300"
            >
              learn more
            </a>
          </div>
        </div>
        <div
          style={{ backgroundImage: "url(images/service3.png)" }}
          className="w-2/4 bg-no-repeat bg-center bg-cover"
        >
          <div className="bg-bl_opacity w-full h-full py-[140px] px-[110px]">
            <h2 className="font-pop text-[23px] font-bold text-white">
            National fuel distribution and supply.
            </h2>
            <a
              href="#"
              className="inline-block bg-primary mt-[20px] py-3 px-10 uppercase text-white font-pop text-base font-semibold border-2 border-solid border-primary hover:bg-transparent hover:border-white ease-out duration-300"
            >
              learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
