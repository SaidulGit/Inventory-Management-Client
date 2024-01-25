import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./Components/Route/Route";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthContext from "./Page/AuthProvider/AuthContext";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContext>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </QueryClientProvider>
  </AuthContext>
);
