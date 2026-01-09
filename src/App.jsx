import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Pages/Header'
import './App.css'
import MainSec from './Pages/MainSec'
import About from './Pages/About'
import Services from './Pages/Services.Jsx'
import RecentProject from './Pages/Recent-project'
import IntegrationsSection from './Pages/IntegrationsSection'
import ClientSuccess from './Pages/ClientSuccess'
import ContactUs from './Pages/ContactUs'
import Footer from './Pages/Footer'
import "swiper/css";
import "swiper/css/pagination";
import Strategy from './Pages/Strategy'


const App = () => {
  return (
    <>
    <div className='bg-[#00020F]  min-h-screen max-w-360 mx-auto'>
      <Header/>
      <MainSec/>
      <About/>
      <Services/>
      <RecentProject/>
      <IntegrationsSection/>
      <ClientSuccess/>
      <Strategy/>
      <ContactUs/>
      <Footer/>

    </div>
    </>
  )
}

export default App