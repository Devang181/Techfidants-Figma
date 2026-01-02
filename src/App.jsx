import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Pages/Header'
import './App.css'
import MainSec from './Pages/MainSec'

const App = () => {
  return (
    <>
    <div className='bg-[#0A0D1F] min-h-screen max-w-[1440px] mx-auto'>
      <Header/>
      <MainSec/>
    </div>
    </>
  )
}

export default App