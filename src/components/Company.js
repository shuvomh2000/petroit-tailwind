import React from "react";

const Company = () => {
  return (
    <section>
      <div className="max-w-container mx-auto flex">
        <div className="w-2/5 bg-primary py-[100px] px[75px]">
          <h3 className="font-pop font-bold leading-54px text-4xl w-[262px]">
            Learn more about our company
          </h3>
        </div>
        <div style={{ backgroundImage: "url(images/companyBG.png)" }}
          className="w-3/5 bg-no-repeat bg-center bg-cover">
            <a
              href="#"
              className="inline-block bg-white mt-[20px] py-3 px-10 uppercase text-primary font-pop text-base font-semibold border-2 border-solid border-white hover:bg-transparent hover:border-ptimary hover:text-white ease-out duration-300"
            >
              learn more
            </a>
        </div>
      </div>
    </section>
  );
};

export default Company;
