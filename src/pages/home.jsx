import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import Articles from "../components/Articles/Articles"
import FAQ from "../components/FAQ/FAQ"
import Footer from "../components/Footer/Footer"
import WhatsAppButton from "../components/WhatsApp/WhatsAppButton"

function home() {
  return (
    <div>
      <Navbar/>

      <Articles/>

      <FAQ/>

      <Footer/>

      <WhatsAppButton/>
    </div>
  )
}

export default home
