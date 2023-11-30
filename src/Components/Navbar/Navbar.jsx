import { NavLink } from "react-router-dom";
import logo1 from "../../assets/Chittagong.png"
import logo2 from "../../assets/micro_png.png"

const Navbar = () => {
  const Navitems = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active text-base font-medium text-green-400" : ""
        }
      >
        Home
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-slate-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Navitems}
            </ul>
        </div>
        <img className="w-3/12 h-2/6" src={logo2} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {Navitems}
        </ul>
      </div>
      <div className="navbar-end">
     <button className="btn btn-success text-white"> <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active text-base font-medium" : ""
        }
      >
Home
      </NavLink></button>
      </div>
    </div>
  );
};

export default Navbar;
