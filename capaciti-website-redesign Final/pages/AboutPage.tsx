import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;






