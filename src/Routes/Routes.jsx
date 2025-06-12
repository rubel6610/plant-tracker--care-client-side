import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayouts/Root";
import Home from "../Components/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoutes from "./PrivateRoutes";

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