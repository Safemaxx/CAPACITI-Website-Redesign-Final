
import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

const Impact: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const impactMetrics = [
    { value: '1,200+', label: 'Graduates Placed' },
    { value: '90%', label: 'Placement Rate' },
    { value: '50+', label: 'Hiring Partners' },
    { value: '15+', label: 'Active Cohorts' },
  ];

  return (
    <section id="impact" className="py-20 bg-[rgb(29,41,81)] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Our Impact in Numbers</h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto mt-4">
            We measure our success by the success of our graduates.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center">
          {impactMetrics.map(metric => (
            <div key={metric.label}>
              <p className="text-4xl md:text-5xl font-bold">{metric.value}</p>
              <p className="text-blue-200 mt-2">{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="relative max-w-3xl mx-auto bg-white text-gray-800 rounded-xl shadow-2xl p-8 md:p-12">
            <div className="text-center">
                <p className="text-xl md:text-2xl italic mb-6">"{TESTIMONIALS[currentTestimonial].quote}"</p>
                <p className="font-bold text-lg">{TESTIMONIALS[currentTestimonial].author}</p>
                <p className="text-gray-500">{TESTIMONIALS[currentTestimonial].role}</p>
            </div>
            <button onClick={prevTestimonial} className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition">
                <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
            </button>
            <button onClick={nextTestimonial} className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition">
                <ChevronRightIcon className="w-6 h-6 text-gray-700" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Impact;
