// import { useEffect, useState } from 'react';
import './App.css';
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Footer from "./Footer";
import Loading from "./Loading";

function App() {


  return (
    <div>
      <div className="no-overflow-y"></div>
      {/* <Loading/> */}
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
