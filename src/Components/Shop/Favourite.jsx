import React from "react";
import "./Favourite.css";

const Favourite = () => {
  return (
    <div>
      <div className="favourite bg-fixed bg-no-repeat w-full bg-cover mt-5">
        <div className="flex relative flex-col text-white w-[800px] text-center m-auto h-screen justify-center items-center p-10">
          <h2 className="text-7xl font-extrabold">Apparel Manufacturer in Bangladesh </h2>
          <h2 className="text-2xl font-bold mt-10">40 Years of Manufacturing Experience</h2>
          <div className="flex gap-10 mt-10 justify-center">
            <button className="btn 
             btn-warning">Company Profile</button>
            <button className="btn 
             btn-accent">Product</button>
            <button className="btn 
             btn-info">Report of 2023</button>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Favourite;
