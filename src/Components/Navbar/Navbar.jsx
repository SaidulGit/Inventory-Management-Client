import { Link, NavLink } from "react-router-dom";
import logo1 from "../../assets/Chittagong.png"
import logo2 from "../../assets/micro_png.png"
import Swal from "sweetalert2";
import { useContext } from "react";
import { Context } from "../../Page/AuthProvider/AuthContext";

const Navbar = () => {
  const {user,logOut} = useContext(Context);
  const handleLogOut = ()=> {
    logOut()
    .then(()=>{})
    .catch(error => {
      console.log(error)
    })
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Logout",
      showConfirmButton: false,
      timer: 1500
    })

  }

  const Navitems = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active text-base font-semibold text-orange-400 mr-3" : "  text-base font-medium mr-3"
        }
      >
        Home
      </NavLink>
      { user?.email ? 
       <>
       <li> <Link onClick={handleLogOut} to='/'>log out </Link> </li>
       </> :
       <li> <Link to='/login'>login </Link> </li>
     }
      <NavLink
        to="/signUP"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active text-base font-semibold text-orange-400 mr-3" : " text-base font-medium mr-3"
        }
      >
        Register
      </NavLink>
      <NavLink
        to="/createShop"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active text-base font-semibold text-orange-400 mr-3" : " text-base font-medium mr-3"
        }
      >
        Create Shop
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
          <h2 className="mr-2">{user && <p>{user.email} </p>}</h2>
          {user ? (
            <>
              {" "}
              <a onClick={handleLogOut} className="btn btn-success btn-outline">
                Log out
              </a>{" "}
            </>
          ) : (
            <>
              {" "}
              <Link to="/login">
                <button className="btn btn-warning btn-outline">Login</button>
              </Link>{" "}
            </>
          )}
        </div>
    </div>
  );
};

export default Navbar;
