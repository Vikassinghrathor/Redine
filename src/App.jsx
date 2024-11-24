import React from 'react'
import NavBar from './components/Navbar';
import HeroSection from "./components/HeroSection";
import About from './components/About';
import Features from './components/Features';
import Story from './components/Story';
import Contact from './components/Contact';
import Update from './components/Update';
import Footer from './components/Footer';

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <About />
      <Features />
      <Story />
      <Contact />
      <Update/>
      <Footer/>
    </main>
  );
}

export default App