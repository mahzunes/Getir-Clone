import React from 'react'
import Campaigns from './components/Campaigns'
import Categories from './components/Categories'
import Favorites from './components/Favorites'
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import Card from "./components/Cards"
import Footer from "./components/Footer"
function App() {
  return (
    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      <Categories></Categories>
      <Campaigns></Campaigns>
      <Favorites></Favorites>
      <Card></Card>
      <Footer></Footer>

    </div>
  )
}

export default App

