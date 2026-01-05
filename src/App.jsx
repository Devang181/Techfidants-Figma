import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Pages/Header'
import './App.css'
import MainSec from './Pages/MainSec'
import About from './Pages/About'
import Services from './Pages/Services.Jsx'


const App = () => {
  return (
    <>
    <div className='bg-[#0A0D1F]  min-h-screen max-w-360 mx-auto'>
      <Header/>
      <MainSec/>
      <About/>
      <Services/>
    </div>
    </>
  )
}

export default App