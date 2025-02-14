import App from "./App";
import HomePage from "./assets/pages/HomePage"
import ShopPage from "./assets/pages/ShopPage/ShopPage"

const routes = [
    {
        path: "/",
        element: <App/>
    },
    {
        path: "shop",
        element: <ShopPage/>
    }
];

export default routes;