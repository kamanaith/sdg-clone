import { useState } from 'react'
import Header from './Global/Header'
import Navbar from './Global/Navbar'
import Homepage from './Pages/HeroPage/Homepage'
import Intro from './Pages/HeroPage/Intro'
import BlogList from './Pages/HeroPage/Blogs'
import Culture from './Pages/HeroPage/Culture'
import Map from './Pages/HeroPage/Map'
import Footer from './Global/Footer'
import './App.css'

function App() {


  return (
    <>
    <Header/>
      <Navbar/>
      <Homepage/>
      <Intro/>
      <BlogList/>
      <Culture/>
      <Map/>
      <Footer/>
    </>
  )
}

export default App
