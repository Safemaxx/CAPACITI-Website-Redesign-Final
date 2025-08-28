import React from 'react';

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-white bg-cover bg-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        {/* 👇 Updated with your video name */}
        <source src="/videos/Video (online-video-cutter.com).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Building Future-Ready Tech Careers
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow-md">
          CAPACITI is a tech career accelerator bridging the gap between education and employment, empowering individuals with in-demand skills for a thriving digital economy.
        </p>
      </div>
    </section>
  );
};

export default Hero;
