import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Components/Route/Route';
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AuthContext from './Page/AuthProvider/AuthContext';



ReactDOM.createRoot(document.getElementById('root')).render(
 <AuthContext>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
 </AuthContext>
);

