import React from "react";

const Blog = () => {
  return (
    <section className="py-[100px] bg-[#F0F0F0]">
      <div className="max-w-container mx-auto flex justify-between">
        <div className="w-[339px] ">
          <div
            style={{ backgroundImage: "url(images/blog1.png)" }}
            className=" bg-no-repeat bg-center bg-cover "
          >
            <div className="bg-bl_opacity w-full h-full px-[45px] pt-[75px] pb-[55px]">
              <h4 className="font-pop font-bold text-2xl text-white w-[249px]">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h4>
              <a
                href="#"
                className="inline-block bg-wh_opacity py-3 px-10 text-white font-pop text-base font-semibold border-2 border-solid border-wh_opacity hover:bg-transparent hover:border-wh_opacity ease-out duration-300 mt-[50px]"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
        <div className="w-[339px] ">
          <div
            style={{ backgroundImage: "url(images/blog1.png)" }}
            className=" bg-no-repeat bg-center bg-cover "
          >
            <div className="bg-bl_opacity w-full h-full px-[45px] pt-[75px] pb-[55px]">
              <h4 className="font-pop font-bold text-2xl text-white w-[249px]">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h4>
              <a
                href="#"
                className="inline-block bg-wh_opacity py-3 px-10 text-white font-pop text-base font-semibold border-2 border-solid border-wh_opacity hover:bg-transparent hover:border-wh_opacity ease-out duration-300 mt-[50px]"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
        <div className="w-[339px] ">
          <div
            style={{ backgroundImage: "url(images/blog1.png)" }}
            className=" bg-no-repeat bg-center bg-cover "
          >
            <div className="bg-bl_opacity w-full h-full px-[45px] pt-[75px] pb-[55px]">
              <h4 className="font-pop font-bold text-2xl text-white w-[249px]">
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h4>
              <a
                href="#"
                className="inline-block bg-wh_opacity py-3 px-10 text-white font-pop text-base font-semibold border-2 border-solid border-wh_opacity hover:bg-transparent hover:border-wh_opacity ease-out duration-300 mt-[50px]"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
