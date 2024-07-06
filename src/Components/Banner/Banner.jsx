import React from "react";

const Banner = () => {
  return (
    <div className="bg-base-200 rounded-3xl h-[560px] lg:flex justify-center my-8">
      <div className="w-[60%]  my-auto">
        <h1 className="text-6xl font-bold">
          Books to freshen up your bookshelf
        </h1>
        <button className="btn btn-success mt-6 text-white">
          View To List
        </button>
      </div>
      <div className=" my-auto  ">
        <img
          className="h-[394px]  "
          src="https://i.ibb.co/rFCqJ1S/The-Great-Gatsby-Cover-1925-Retouched.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
