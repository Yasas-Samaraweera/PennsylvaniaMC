"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  name: string;
  href: string;
}

interface NavbarProps {
  logoSrc?: string;
}

const Navbar: React.FC<NavbarProps> = ({ logoSrc = '/assets/logo/logo.png' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Navigation items array with custom paths
  const navigationItems: NavItem[] = [
    { name: 'Home', href: '/page' },
    { name: 'Events', href: '/Events/allEventsPage' },
    { name: 'Programs', href: '/Programs/programsPage' },
    { name: 'Gallery', href: '/gallery/galleryPage' },
    { name: 'Buddhism', href: '/Buddhism' },
    { name: 'Publication', href: '/Publication'},
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/Contact' },
    { name: 'Donate', href: '/donate' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking a link (mobile)
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gradient-to-r from-green-50 to-teal-50 shadow-sm py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 xl:px-16">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/page" legacyBehavior>
            <a className="flex items-center">
              <div className="relative">
                <div className={`absolute inset-0 rounded-full bg-green-100 transform scale-75 transition-all duration-300 ${
                  scrolled ? 'opacity-100' : 'opacity-0'
                }`}></div>
                <img 
                  src={logoSrc} 
                  alt="Logo" 
                  className="h-12 md:h-14 relative z-10 transition-all" 
                />
              </div>
              <div className="ml-3">
                <h1 className={`font-serif text-lg md:text-xl text-teal-800 font-medium transition-all duration-300`}>
                  Pennsylvania Meditation Center
                </h1>
                <div className={`h-0.5 w-0 bg-gradient-to-r from-green-400 to-teal-400 transition-all duration-500 ${
                  scrolled ? 'w-36' : ''
                }`}></div>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className={`flex items-center bg-green-50 rounded-full transition-all duration-300 px-2 ${
              scrolled ? 'shadow-sm' : ''
            }`}>
              {navigationItems.filter(item => item.name !== 'Donate').map((item, index) => (
                <Link href={item.href} key={item.name} legacyBehavior>
                  <a className="px-4 py-2 text-teal-700 hover:text-teal-900 rounded-full mx-1 transition-all duration-300 text-sm font-medium whitespace-nowrap">
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
            <Link href="/donate" legacyBehavior>
              <a className="ml-4 px-5 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full hover:shadow-md transition-all duration-300 text-sm font-medium">
                Donate
              </a>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
              {isOpen ? (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-teal-700" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-teal-700" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white/90 backdrop-blur-sm shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="bg-gradient-to-b from-green-50 to-transparent rounded-xl p-4">
                <nav className="grid grid-cols-2 gap-2">
                  {navigationItems.filter(item => item.name !== 'Donate').map((item) => (
                    <Link href={item.href} key={item.name} legacyBehavior>
                      <a 
                        className="px-3 py-2 text-teal-700 bg-white/80 hover:bg-white rounded-lg transition-all duration-300 text-center shadow-sm hover:shadow"
                        onClick={closeMenu}
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </nav>
                <div className="mt-4">
                  <Link href="/donate" legacyBehavior>
                    <a 
                      className="block text-center px-4 py-3 bg-gradient-to-r from-green-900 to-teal-500 text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 font-medium"
                      onClick={closeMenu}
                    >
                      Donate Now
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;