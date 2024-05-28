import React from "react";
import img1 from "../../assets/photo/cycle.PNG";

const Banner = () => {
  return (
    <div
      className="w-full h-[90vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${img1})` }}
    ></div>
  );
};

export default Banner;
