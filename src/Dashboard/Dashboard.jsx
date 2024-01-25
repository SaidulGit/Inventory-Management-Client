import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        <div className="bg-green-200 min-h-screen w-56 p-5"> 

        <h2 className="text-4xl font-semibold mt-5">Logo</h2>
        <ul className="mt-10">
            <Link to="/dashboard/mycart"><li>My Cart</li></Link>
            <Link to="/dashboard/addproduct"><li>Add Product</li></Link>
            <Link to="/dashboard/mycart"><li>All Product</li></Link>
            <Link to="/dashboard/mycart"><li>Total Sell</li></Link>
            <Link to="/dashboard/user"><li>All user</li></Link>
            <div className="divider"></div> 
            <Link to="/"><li>Home</li></Link>
            <Link to="/"><li>Home</li></Link>
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
