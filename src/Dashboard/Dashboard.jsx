import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import { FaRegUser } from "react-icons/fa";
import { SiSellfy } from "react-icons/si";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaCartArrowDown } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        <div className="bg-green-200 min-h-screen w-56 p-5"> 

        <h2 className="text-4xl font-semibold mt-5">Logo</h2>
        <ul className="mt-10">
            <Link to="/dashboard/mycart"><li><FaCartArrowDown className="text-xl inline-block mr-2"  />My Cart</li></Link>
            <Link to="/dashboard/addproduct"><li><FaAddressBook  className="text-xl inline-block mr-2" />Add Product</li></Link>
            <Link to="/dashboard/mycart"><li><MdOutlineProductionQuantityLimits className="text-xl inline-block mr-2"  />All Product</li></Link>
            <Link to="/dashboard/mycart"><li><SiSellfy className="text-xl inline-block mr-2"  />Total Sell</li></Link>
            <Link to="/dashboard/user"><li><FaRegUser className="text-xl inline-block mr-2" />All user</li></Link>
            <div className="divider"></div> 
            <Link to="/"><li> <FaHome className="text-xl inline-block mr-2"/>Home</li></Link>
        </ul>
        
        
        </div>
        <div>
          {" "}
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
