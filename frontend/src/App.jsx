import React from 'react'
import Navbar from './components/NavBar'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Upload from './components/Upload'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';




const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  
  return (
    <div className=' w-full flex flex-col '>
      <Navbar></Navbar>

      <Home></Home>
      <AboutUs></AboutUs>
    
      <Upload></Upload>

      <FAQ></FAQ>
      <Footer></Footer>
 

    </div>
  )
}

export default App