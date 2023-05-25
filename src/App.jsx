import { useEffect, useState } from 'react';
import './App.css';
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Footer from "./Footer";
import Loading from "./Loading";

function App() {


  return (
    <>
      {/* <Loading/> */}
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
