import { createBrowserRouter } from "react-router";
import Home from "../Page/Home";
import MainLayout from "../Layout/MainLayout";
import About from "../Page/About";
import Login from "../Component/Authontication/Login";
import SignUp from "../Component/Authontication/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element:<About/>

      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/signup",
        element:<SignUp/>
      }
    ],
  },
]);

export default router;
