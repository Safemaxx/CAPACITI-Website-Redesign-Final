import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    'About',
    'Programmes',
    'Impact',
    'Blog',
    'News',
    'Opportunities',
    'Contact',
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMobileOpen(false); // Close mobile menu after click
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/logo.jpg"
            alt="CAPACITI Logo"
            className="w-10 h-10 object-contain transition-transform duration-300 hover:scale-105"
          />
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            CAPACITI
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className={`${
                isScrolled
                  ? 'text-gray-800 hover:text-blue-600'
                  : 'text-white hover:text-blue-200'
              } transition-colors`}
            >
              {link}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection('Contact')}
          className="hidden md:inline-block bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          Work With Us
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden focus:outline-none ${
            isScrolled ? 'text-gray-800' : 'text-white'
          }`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-white shadow-lg">
          {navLinks.map(link => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="block w-full text-left px-6 py-3 text-gray-800 hover:bg-gray-100"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('Contact')}
            className="block w-full text-left px-6 py-3 text-white bg-blue-600 hover:bg-blue-700"
          >
            Work With Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
