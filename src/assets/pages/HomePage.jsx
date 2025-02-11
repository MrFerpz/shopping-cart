import { Link } from 'react-router-dom';
import Header from "../components/Header/Header";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import FeaturedItems from "../components/FeaturedItems/FeaturedItems";
import CustomerReviews from "../components/CustomerReviews/CustomerReviews";
import Footer from "../components/Footer/Footer";

function HomePage() {
    return (
        <div>
            <Header/>
            <HeroBanner/>
            <FeaturedItems/>
            <CustomerReviews/>
            <Footer/>
            <>Home Page</><br></br>
            <Link to="shop">Shop</Link>
        </div>
    )
}

export default HomePage