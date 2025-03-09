
import Header from './Global/Header'
import Navbar from './Global/Navbar'
import Homepage from './Pages/HeroPage/Homepage'
import Intro from './Pages/HeroPage/Intro'
import BlogList from './Pages/HeroPage/Blogs'
import Culture from './Pages/HeroPage/Culture'
import Info from './Pages/HeroPage/Info'
import Map from './Pages/HeroPage/Map'
import Footer from './Global/Footer'
import './App.css'
import AboutUs from './Pages/AboutPage/AboutUs'
import Members from './Pages/AboutPage/Commitee'
import BlogsPage from './Pages/BlogPage/BlogsPage'
import Events from './Pages/Events'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'


function App() {


  return (
    <>
    <Header/>
    <Navbar/><div className='flex flex-col items-center'>
<div className='max-w-[1536px]'>
      <Homepage/>
      <Intro/> 
       <BlogList/>
      <Culture/>
      <Info/>
      <Map/>
      {/* <AboutUs/>
       <Members/>
      <Events/>
<BlogsPage/>
<Gallery/>
<Contact/> */}
</div>
</div>
      <Footer/>
    </>
  )
}

export default App
