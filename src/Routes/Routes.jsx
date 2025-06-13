import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayouts/Root";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../Pages/Home";
import AddPlant from "../Pages/AddPlant";

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
        path:"add-plant",
        element:<PrivateRoutes>
            <AddPlant/>
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