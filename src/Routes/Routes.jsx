import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayouts/Root";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../Pages/Home";
import AddPlant from "../Pages/AddPlant";
import AllPlants from "../Pages/AllPlants";
import ViewDetails from "../Pages/ViewDetails";
import MyPlants from "../Pages/MyPlants";
import NotFound from "../Pages/NotFound";
import Updateplant from "../Pages/Updateplant";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
            }
        ]
    },
    {
        path: "add-plant",
        element: <PrivateRoutes>
            <AddPlant />
        </PrivateRoutes>
    },
    {
        path:"/update-plant/:id",
        loader:()=>fetch(`https://plant-care-tracker-server-alpha.vercel.app/plants`),
        Component:Updateplant,
    },
    {
        path: "all-plants",
        element: <AllPlants />,
        loader: () => fetch('https://plant-care-tracker-server-alpha.vercel.app/plants'),

    },
    {
        path: "all-plants/:id",
        loader: ({ params }) => fetch(`https://plant-care-tracker-server-alpha.vercel.app/singleplants/${params.id}`),
        element: <PrivateRoutes>
            <ViewDetails />
        </PrivateRoutes>,
    },
    {
        path: "my-plants",
        element: <PrivateRoutes>
            <MyPlants />
        </PrivateRoutes>,
    },
    {
        path: "login",
        Component: Login,
    },
    {
        path: "register",
        Component: Register,
    },
    {
        path: "*",
        Component: NotFound,
    }
])