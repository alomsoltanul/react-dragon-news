import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Pages/Root";
import Home from "../components/Pages/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        },
      ]
    },
  ]);

export default router;