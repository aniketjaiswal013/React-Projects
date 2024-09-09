import React from 'react'
import Header from './assets/components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './assets/components/Footer/Footer'

export default function Layout() {
  return (
    <>
    <Header/>
    
    <Outlet/>  {/*reat router dom prvide a Outlet the work of this is changable
             matlab hum home kai ander change karwana cha rahe  hai ti ye outle t ki madad se changr krwa saktai hai */}
    <Footer/>
    </>
  )
}
