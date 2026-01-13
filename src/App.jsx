import React,{useRef} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Pages/Header'
import './App.css'
import MainSec from './Pages/MainSec'
import About from './Pages/About'
import Services from './Pages/Services'
import RecentProject from './Pages/Recent-project'
import IntegrationsSection from './Pages/IntegrationsSection'
import ClientSuccess from './Pages/ClientSuccess'
import ContactUs from './Pages/ContactUs'
import Footer from './Pages/Footer'
import "swiper/css";
import "swiper/css/pagination";
import Strategy from './Pages/Strategy'


const App = () => {
  const refs = {
    about: useRef(),
    services: useRef(),
    techstacks: useRef(),
    projects: useRef(),
    testimonials: useRef(),
    strategy: useRef(),
    contact: useRef(),
  }
  return (
    <>
    <div className='bg-[#00020F]  mx-auto'>
      <Header refs={refs}/>
      <MainSec />
      <About ref={refs.about}/>
      <Services ref={refs.services}/>
      <RecentProject ref={refs.projects}/>
      <IntegrationsSection ref={refs.testimonials}/>
      <ClientSuccess/>
      <Strategy ref={refs.strategy}/>
      <ContactUs ref={refs.contact}/>
      <Footer/>

    </div>
    </>
  )
}

export default App