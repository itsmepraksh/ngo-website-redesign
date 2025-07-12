import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
import About from "../pages/About"
import Services from "../pages/Services"
import Certificate from "../pages/Certificates"
import Gallery from "../pages/Gallery"

 

const AppRoutes = () => {
    
  return (
    <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/certificates"  element={<Certificate/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<Contact/>}/>

    </Routes>
  )
}

export default AppRoutes