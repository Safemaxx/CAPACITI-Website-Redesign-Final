import React from 'react';
import type { NewsEvent } from '../types';

// NEWS_EVENTS array
export const NEWS_EVENTS: NewsEvent[] = [
  {
    title: 'Our Story',
    date: 'Since 2010',
    description:
      "Founded in 2010 to bridge Africa's digital skills gap, CAPACITI has trained over 1,200 individuals with an 87% placement rate through industry-leading programmes and partnerships.",
    imageUrl: '/images/capaciti-team.jpg', // ✅ Updated with your uploaded image
  },
  {
    title: 'CAPACITI Partners with FutureLabs',
    date: 'November 15 2025',
    description:
      'A new partnership to expand our programme offerings and provide more opportunities for aspiring tech professionals.',
    imageUrl: '/images/womenintech-global-summit-2024-1080x608.jpg',
  },
  // Add more news/events here if needed
];

const NewsEventCard: React.FC<{ item: NewsEvent }> = ({ item }) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden flex flex-col md:flex-row items-stretch border-4 border-purple-600 transform hover:-translate-y-1 transition-all duration-300">
    {/* Image */}
    <div className="w-full md:w-1/3 h-64 md:h-auto flex-shrink-0 overflow-hidden">
      <img
        src={item.imageUrl}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-105"
      />
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col justify-between">
      <div className="mb-2 flex items-center flex-wrap gap-2">
        <span className="inline-block bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          News
        </span>
        <span className="text-xs text-purple-800 font-semibold">{item.date}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
      <p className="text-gray-700">{item.description}</p>
    </div>
  </div>
);

const NewsEvents: React.FC = () => {
  return (
    <section id="news" className="py-20 bg-[rgb(245,239,255)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            News & Events
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Find out what's happening at CAPACITI and in our community.
          </p>
        </div>

        <div className="space-y-8">
          {NEWS_EVENTS.map((item) => (
            <NewsEventCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;
