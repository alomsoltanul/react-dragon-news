import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Pages/Root";
import Home from "../components/Pages/Home";
import Login from "../components/Pages/LoginPage/Login";
import Register from "../components/Pages/RegisterPage/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {
          path:"/login",
          element:<Login></Login>,
        }
        ,
        {
          path:"/register",
          element:<Register></Register>,
        }
      ]
    },
  ]);

export default router;