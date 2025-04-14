"use client"
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './page';
import ContactSection from './components/Contact/contact';
import AboutPage from './components/About/about';
import DonationPage from './components/Donate/donate';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllEventsPage from './components/Events/allEventsPage';
import GalleryPage from './components/Gallery/galleryPage';
import ProgramSection from './components/Programs/program';
import ProgramsPage from './components/Programs/programsPage';
import BuddhistPublicationsPage from './components/Publication/publication';
import CardPage from './components/Buddhism/Buddhism';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <div className="pt-16 min-h-screen">
        <Routes>
          <Route path="/page" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/Events/allEventsPage" element={<AllEventsPage />} />
          <Route path="/Buddhism" element={<CardPage />} />
          <Route path="/Publication" element={<BuddhistPublicationsPage />} />
          <Route path="/Gallery/galleryPage" element ={<GalleryPage/>}/>
          <Route path="/Programs/programsPage" element={<ProgramsPage/>} />
          <Route path="/Donate" element={<DonationPage/>} />
          
        </Routes>
      </div>
    </Router>

    </>
  )
}

export default App