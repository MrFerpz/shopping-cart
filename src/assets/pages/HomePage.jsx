import { Link } from 'react-router-dom';
import HeroBanner from "../components/HeroBanner/HeroBanner";
import FeaturedItems from "../components/FeaturedItems/FeaturedItems";
import CustomerReviews from "../components/CustomerReviews/CustomerReviews";

function HomePage() {
    return (
        <div>
            <HeroBanner/>
            <FeaturedItems/>
            <CustomerReviews/>
        </div>
    )
}

export default HomePage