import React, { useMemo, useRef, useState } from 'react';

const PROGRAMMES = [
  {
    title: 'Software Development',
    description:
      'Master full-stack development with our intensive bootcamp covering everything from JavaScript to cloud deployment.',
    duration: '6-12 Months',
    placementRate: '92%',
    imageUrl: '/images/software-development.jpg',
    videoUrl: '/videos/Software Development.mp4',
  },
  {
    title: 'UI/UX Design',
    description:
      'Create beautiful, user-centric digital experiences. Learn design thinking, prototyping, and user testing.',
    duration: '6-12 Months',
    placementRate: '95%',
    imageUrl: '/images/ui-ux.jpg',
    videoUrl: '/videos/UI-UIX.mp4',
  },
  {
    title: 'Cyber Security',
    description:
      'Protect digital assets and learn ethical hacking, network security, and compliance best practices.',
    duration: '6-12 Months',
    placementRate: '90%',
    imageUrl: '/images/cyber-security.jpg',
    videoUrl: '/videos/Cyber Security.mp4',
  },
  {
    title: 'AI / Machine Learning',
    description:
      'Dive deep into machine learning models, AI pipelines, and practical applications in real-world projects.',
    duration: '6-12 Months',
    placementRate: '88%',
    imageUrl: '/images/ai-ml.jpg',
    videoUrl: '/videos/Artificial Intelligent.mp4', // Corrected path
  },
  {
    title: 'IT Support',
    description:
      'Gain hands-on experience with troubleshooting, networks, and enterprise IT solutions.',
    duration: '6-12 Months',
    placementRate: '85%',
    imageUrl: '/images/it-support.jpg',
    videoUrl: '/videos/IT Support.mp4', // Corrected path
  },
  {
    title: 'Data Engineering / Data Analytics',
    description:
      'Learn data pipelines, analytics frameworks, and visualization tools for actionable insights.',
    duration: '6-12 Months',
    placementRate: '89%',
    imageUrl: '/images/data-engineering.jpg',
    videoUrl: '/videos/Data Engineering.mp4', // Corrected path
  },
  {
    title: 'Advanced Digital Skills',
    description:
      'Upskill in advanced software tools, cloud computing, and emerging technologies for modern careers.',
    duration: '6-12 Months',
    placementRate: '90%',
    imageUrl: '/images/advanced-digital.jpg',
    videoUrl: '/videos/Avanced Digital Skills.mp4', // Corrected path
  },
];

const ProgrammesPage: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [interests, setInterests] = useState<string>('');
  const [suggestions, setSuggestions] = useState<typeof PROGRAMMES>(PROGRAMMES);
  const [hasSuggested, setHasSuggested] = useState<boolean>(false);
  const [usedFallback, setUsedFallback] = useState<boolean>(false);
  const [suggestedNames, setSuggestedNames] = useState<string[]>([]);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const KEYWORDS: Record<string, string[]> = {
    'UI/UX Design': ['design', 'ui', 'ux', 'user research', 'figma', 'prototype'],
    'Cyber Security': ['security', 'cyber', 'ethical hacking', 'network', 'encryption'],
    'Data Engineering / Data Analytics': ['data', 'analytics', 'pipeline', 'engineering', 'sql', 'etl'],
    'AI / Machine Learning': ['ai', 'machine learning', 'ml', 'models', 'python'],
    'IT Support': ['support', 'it support', 'helpdesk', 'troubleshooting'],
    'Software Development': ['dev', 'development', 'coding', 'web', 'frontend', 'backend'],
    'Advanced Digital Skills': ['cloud', 'aws', 'devops', 'kubernetes', 'terraform'],
  };

  const handleSuggest = () => {
    const query = interests.toLowerCase().trim();
    if (!query) {
      setSuggestions(PROGRAMMES);
      setHasSuggested(true);
      setUsedFallback(false);
      return;
    }
    const words = query.split(/[^a-z0-9+#]+/g).filter(Boolean);
    const matchesTitle = (title: string) => {
      const keys = KEYWORDS[title] || [];
      return keys.some(k => k.includes(query) || query.includes(k) || words.some(w => k.includes(w) || w.includes(k)));
    };
    const matched = PROGRAMMES.filter(p => matchesTitle(p.title));
    if (matched.length === 0) {
      setSuggestions(PROGRAMMES);
      setSuggestedNames([]);
      setUsedFallback(true);
    } else {
      setSuggestions(matched);
      setSuggestedNames(matched.map(m => m.title));
      setUsedFallback(false);
    }
    setHasSuggested(true);
    // snap back to the start of the carousel so users see updated items
    scrollRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
  };

  return (
    <section id="programmes" className="py-20 bg-[#FAE1DC]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            CAPACITI Programmes
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4">
            Explore our curated programmes with hands-on experience, expert-led curriculum, and strong placement rates. Duration ranges from 6–12 months depending on the programme.
          </p>
        </div>

        {/* Simple AI-style Guidance */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-10">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Which programme is right for you?</h3>
          <p className="text-gray-700 mb-4">Type your interests or goals (e.g. design, security, data, web apps), then get suggestions.</p>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              value={interests}
              onChange={(e) => setInterests(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleSuggest(); }}
              placeholder="e.g. I enjoy design and user research"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              aria-label="Interests input"
            />
            <button onClick={handleSuggest} className="px-6 py-3 rounded-lg bg-[rgb(0,0,0)] text-white font-semibold hover:bg-gray-900 transition">
              Get Suggestions
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2" aria-live="polite">This helper matches keywords to programme content. Clear the field to see all programmes.</p>
          {hasSuggested && (
            <div className="mt-2 space-y-1" aria-live="polite">
              <p className="text-sm text-gray-700">
                Showing {suggestions.length} of {PROGRAMMES.length} programmes{interests.trim() ? ' for your input.' : '.'}
              </p>
              {usedFallback && (
                <p className="text-xs text-gray-500">No exact keyword matches found — showing closest options.</p>
              )}
              {!usedFallback && suggestedNames.length > 0 && (
                <ul className="list-disc pl-5 text-sm text-gray-700">
                  {suggestedNames.map(name => (
                    <li key={name}>{name}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        {/* Scroll Buttons */}
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-14 h-14 flex items-center justify-center text-gray-900 bg-white/20 rounded-full shadow-lg ring-1 ring-white/50 hover:bg-white/30 hover:scale-110 transition duration-300 z-10"
          >
            &#8592;
          </button>
          <button
            onClick={scrollRight}
            className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-14 h-14 flex items-center justify-center text-gray-900 bg-white/20 rounded-full shadow-lg ring-1 ring-white/50 hover:bg-white/30 hover:scale-110 transition duration-300 z-10"
          >
            &#8594;
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory -mx-6 px-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {suggestions.map((prog, index) => (
              <div
                key={prog.title}
                className="flex-none w-80 bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 hover:shadow-xl transition-all duration-300 snap-start group opacity-0 translate-y-8 animate-fade-slide"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative w-full h-48 overflow-hidden">
                  {prog.videoUrl ? (
                    <video
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      src={prog.videoUrl}
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  ) : (
                    <img
                      src={prog.imageUrl}
                      alt={prog.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{prog.title}</h3>
                  <p className="text-gray-700 mb-4 flex-grow">{prog.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-600 border-t pt-4">
                    <span>
                      Duration: <strong>{prog.duration}</strong>
                    </span>
                    <span>
                      Placement Rate: <strong>{prog.placementRate}</strong>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          .flex::-webkit-scrollbar {
            display: none;
          }

          @keyframes fadeSlide {
            0% { opacity: 0; transform: translateY(32px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-slide {
            animation: fadeSlide 0.8s ease forwards;
          }
        `}
      </style>
    </section>
  );
};

export default ProgrammesPage;
