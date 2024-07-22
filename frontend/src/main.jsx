import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/registerAndLogin/Register.jsx";
import MainDashboard from "./components/mainDashboard/MainDashboard.jsx";
import Login from "./components/registerAndLogin/Login.jsx";
import Folders from "./components/foldersPage/Folders.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainDashboard />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "folder",
        element: <Folders />,
      },
      {
        path: "folder/:folderName",
        element: <Folders />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
