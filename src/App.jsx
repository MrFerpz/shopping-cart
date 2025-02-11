import { useState } from 'react'
import HomePage from "./assets/pages/HomePage"
import Header from "./assets/components/Header/Header"
import Footer from "./assets/components/Footer/Footer"
import './App.css'

// Components list
// Header, HeroBanner, FeaturedItems, CustomerReviews, Footer
// Main should have router

function App() {

  return (
    <div>
      <Header/>
      <HomePage/>
      <Footer/>
    </div>
  )
}

export default App
