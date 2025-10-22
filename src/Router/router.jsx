import { createBrowserRouter } from "react-router";
import Home from "../Page/Home";
import MainLayout from "../Layout/MainLayout";
import About from "../Page/About";

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
    ],
  },
]);

export default router;
