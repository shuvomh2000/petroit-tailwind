import React from "react";

const Supplier = () => {
  return (
    <section>
      <div className="max-w-container mx-auto mt-20">
        <div className="flex justify-between">
          <div className=" max-w-[290px]">
            <h2 className="font-pop text-5xl text-black font-bold leading-[72px]">
              The biggest supplier on the country
            </h2>
          </div>
          <div className=" max-w-[650px] flex items-center ">
            <h2 className="font-pop text-base text-para font-semibold leading-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution.
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
          <div>
            <picture>
              <img src="images/supplier1.png"className="max-w-[320px]"/>
            </picture>
          </div>
          <div>
            <picture>
              <img src="images/supplier2.png" className="max-w-[320px]"/>
            </picture>
          </div>
          <div>
            <picture>
              <img src="images/supplier3.png" className="max-w-[320px]"/>
            </picture>
          </div>
          <div>
            <picture>
              <img src="images/supplier4.png" className="max-w-[320px]"/>
            </picture>
          </div>
        </div>
    </section>
  );
};

export default Supplier;
