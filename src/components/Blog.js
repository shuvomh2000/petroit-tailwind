import React from "react";

const Blog = () => {
  return (
    <section>
      <div className="max-w-container mx-auto">
        <div className="w-1/3 ">
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
                className="inline-block bg-primary py-3 px-10 uppercase text-white font-pop text-base font-semibold border-2 border-solid border-primary hover:bg-transparent hover:border-white ease-out duration-300"
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
