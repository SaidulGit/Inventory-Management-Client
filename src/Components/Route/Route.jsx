import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../../Page/Home/Home";
import Error from "../../Page/Error";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<Error></Error>,
      children:[{
        path:"/",
        element: <Home></Home>
      }
    ]
    },
  ]);

export default router;