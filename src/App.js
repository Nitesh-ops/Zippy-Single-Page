import React from "react"
import NavCarousel from "./Components/Nav_Carousel "
import Projects from "./Components/Projects"
import Welcome from "./Components/Welcome"
import PricingTable from "./Components/Pricing_table"
import VideoProjects from "./Components/Video_Projects"
import ZippyTeam from "./Components/Zippy_Team"
import "./App.css"
import LifeZippy from "./Components/LifeZippy/LifeZippy"
import NewsLetter from "./Components/Newsletter"
import Blog from "./Components/Blog"
import ContactUs from "./Components/ContactUs"
import Footer from "./Components/Footer"

const App = () => {
  return (
    <div className="App">
      <NavCarousel />
      <Welcome />
      <Projects />
      <PricingTable />
      <VideoProjects />
      <ZippyTeam />
      <LifeZippy />
      <NewsLetter />
      <Blog />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App