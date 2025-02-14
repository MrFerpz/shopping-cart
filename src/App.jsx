import { Route, Routes } from "react-router-dom";
import HomePage from "./assets/pages/HomePage"
import ShopPage from "./assets/pages/ShopPage/ShopPage"
import Header from "./assets/components/Header/Header"
import Footer from "./assets/components/Footer/Footer"
import BasketPage from "./assets/pages/BasketPage/BasketPage";
import './App.css'

// Components list
// Header, HeroBanner, FeaturedItems, CustomerReviews, Footer
// Main should have router

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="shop" element={<ShopPage/>}/>
        <Route path="basket" element={<BasketPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
