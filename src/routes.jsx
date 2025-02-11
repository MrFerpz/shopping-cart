import App from "./App";
import HomePage from "./assets/pages/HomePage"
import ShopPage from "./assets/pages/ShopPage"

const routes = [
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "shop",
        element: <ShopPage/>
    }
];

export default routes;