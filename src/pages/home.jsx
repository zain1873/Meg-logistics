import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Hero from "../components/Hero/Hero"
import WhatWeOffer from "../components/WhatWeOffer/WhatWeOffer"
import About from "../components/About/About"
import WeProvide from "../components/WeProvide/WeProvide"
import Industries from "../components/Industries/Industries"
import CoresOfMeg from "../components/CoresOfMeg/CoresOfMeg"
import Articles from "../components/Articles/Articles"
import FAQ from "../components/FAQ/FAQ"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"
import WhatsAppButton from "../components/WhatsApp/WhatsAppButton"

function home() {
  return (
    <div id="top">
      <Navbar/>
      <Hero/>
      <About/>
      <WhatWeOffer/>
      <WeProvide/>
      <Industries/>
      <CoresOfMeg/>
      <Articles/>
      <FAQ/>
      <Contact/>
      <Footer/>
      <WhatsAppButton/>
    </div>
  )
}

export default home
