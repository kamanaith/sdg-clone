import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Global/Header";
import Navbar from "./Global/Navbar";
import Homepage from "./Pages/HeroPage/Homepage";

import Footer from "./Global/Footer";
import "./App.css";
import AboutUs from "./Pages/AboutPage/AboutUs";
import Members from "./Pages/AboutPage/Commitee";
import BlogsPage from "./Pages/BlogPage/BlogsPage";
import Events from "./Pages/Events";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/BlogsPage" element={<BlogsPage/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    
    </>
  );
}

export default App;
