import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayouts/Root";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
    {
        path:"/",
        Component:Root,
        children:[
            {
                index:true,
                Component:Home,
            }
        ]
    },
    {
        path:"addplant",
        element:<PrivateRoutes>

        </PrivateRoutes>
    },
    {
        path:"login",
        Component:Login,
    },
    {
        path:"register",
        Component:Register,
    }
])