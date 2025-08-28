
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Programmes from './components/Programmes';
import Impact from './components/Impact';
import Blog from './components/Blog';
import NewsEvents from './components/NewsEvents';
import Opportunities from './components/Opportunities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
// or, if About is a default export, use:
// import About from './components/About';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Programmes />
        <Impact />
        <Blog />
        <NewsEvents />
        <Opportunities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
