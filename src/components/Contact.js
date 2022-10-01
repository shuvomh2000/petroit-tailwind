import React from "react";

const Contact = () => {
  return (
    <section>
      <picture>
        <img src="images/Maps.png" className="h-[450px] w-full" />
      </picture>
      <div className="bg-primary border-b-[5px] border-solid border-yBorder">
        <div className="py-[45px] max-w-container mx-auto flex justify-between">
          <div className="w-3/4">
            <h2 className="font-pop font-bold  text-2xl text-white">
              Want to join as member branch in your area?
            </h2>
          </div>
          <div className="w-1/4"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
