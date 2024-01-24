import React from "react";
import img1 from "../../assets/image/pic1.jpg";
import img2 from "../../assets/image/pic2.jpg";
import img3 from "../../assets/image/pic3.jpg";
import img4 from "../../assets/image/pic1.jpg";

const SellOff = () => {
  return (
    <div className="flex flex-col justify-center mx-auto items-center bg-orange-100">
      <div className="flex gap-10">
        <img className="w-72" src={img1} alt="" />
        <img className="w-72" src={img2} alt="" />
        <img className="w-72" src={img3} alt="" />
        <img className="w-72" src={img4} alt="" />
      </div>
      <div className="text-7xl font-extrabold text-orange-400">
        <span className="text-green-600">50%</span> OFF
      </div>
    </div>
  );
};

export default SellOff;
