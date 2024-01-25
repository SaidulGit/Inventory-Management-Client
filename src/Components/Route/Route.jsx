import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../../Page/Home/Home";
import Error from "../../Page/Error";
import Login from "../../Page/Login/Login";
import Register from "../../Page/Register/Register";
import CreateShop from "../Shop/CreateShop";
import Privateroute from "../../Page/PrivateRoute/Privateroute";
import Dashboard from "../../Dashboard/Dashboard";
import Mycart from "../../Dashboard/Mycart";
import AddProduct from "../../Dashboard/Addproduct/AddProduct";
import UserList from "../../Dashboard/UserList";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[{
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/login",
        element: <Login></Login>
      },
      {
        path:"/signUP",
        element: <Register></Register>
      },
      {
        path: "/createshop",
        element: <Privateroute> <CreateShop></CreateShop></Privateroute>
      }
    ]
    },
    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      children: [{
         path : "mycart",
         element: <Mycart></Mycart>
      },
      {
     path: "/dashboard/addproduct",
     element: <AddProduct></AddProduct>
      },
      {
        path: "/dashboard/user",
        element : <UserList></UserList>
      }
    ]
    }
  ]);

export default router;