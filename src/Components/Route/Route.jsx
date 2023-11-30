import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../../Page/Home/Home";
import Error from "../../Page/Error";
import Login from "../../Page/Login/Login";
import Register from "../../Page/Register/Register";




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
      }
    ]
    },
  ]);

export default router;