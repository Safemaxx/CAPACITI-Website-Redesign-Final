import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setOpenSection(null); // Close any open mobile footer section
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const navLinks = ['About', 'Programmes', 'Impact', 'Blog', 'News', 'Opportunities', 'Contact'];
  const socialLinks = ['LinkedIn', 'Twitter', 'Facebook', 'Instagram'];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo & About */}
          <div>
            <h3 className="text-xl font-bold mb-4">CAPACITI</h3>
            <p className="text-gray-400">
              A division of the Cape Innovation & Technology Initiative. 
              Empowering the next generation of tech leaders.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-semibold mb-4 md:cursor-default cursor-pointer flex justify-between items-center"
              onClick={() => toggleSection('links')}
            >
              Quick Links
              <span className="md:hidden">{openSection === 'links' ? '-' : '+'}</span>
            </h4>
            <ul className={`space-y-2 md:block ${openSection === 'links' ? 'block' : 'hidden'}`}>
              {navLinks.map(link => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="text-gray-400 hover:text-white transition-colors w-full text-left"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4
              className="font-semibold mb-4 md:cursor-default cursor-pointer flex justify-between items-center"
              onClick={() => toggleSection('socials')}
            >
              Connect
              <span className="md:hidden">{openSection === 'socials' ? '-' : '+'}</span>
            </h4>
            <ul className={`space-y-2 md:block ${openSection === 'socials' ? 'block' : 'hidden'}`}>
              {socialLinks.map(social => (
                <li key={social}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">{social}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4
              className="font-semibold mb-4 md:cursor-default cursor-pointer flex justify-between items-center"
              onClick={() => toggleSection('newsletter')}
            >
              Newsletter
              <span className="md:hidden">{openSection === 'newsletter' ? '-' : '+'}</span>
            </h4>
            <div className={`${openSection === 'newsletter' ? 'block' : 'hidden'} md:block`}>
              <p className="text-gray-400 mb-4">
                Stay up to date with our latest news and opportunities.
              </p>
              <form>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 text-gray-800 rounded-l-md focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} CAPACITI. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
