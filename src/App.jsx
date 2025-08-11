import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import HeroContent from './Components/HeroContent/HeroContent'
import Aboutme from './Components/Aboutme/Aboutme'
import Services from './Components/Services/Services'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {

  const HomePage = () => {
    return(
      <>
      <HeroContent/>
      <Aboutme/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
      </>
    )
  }
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/aboutme" element={<Aboutme/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route/>
        <Route/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App