import React from 'react';

type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
};

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Chanel Oldfield',
    role: 'Head Of CAPACITI',
    imageUrl: '/images/Chanel11.jpg',
    bio:
      'An experienced and empathetic leader focused on emotional intelligence, values-based leadership, and systems thinking to bring together multidisciplinary teams.',
  },
  {
    name: 'Kelly Maroon',
    role: 'Head of Career Education',
    imageUrl: '/images/Kelly1.jpg',
    bio:
      "Over 14 years in education, with extensive experience building fit-for-purpose educational, technological and collaborative solutions.",
  },
  {
    name: 'Nasheeta Du Toit',
    role: 'Head of Talent',
    imageUrl: '/images/Nash4.jpg',
    bio:
      'Seasoned marketer and communication specialist with experience across advertising, marketing, financial services and publishing.',
  },
  {
    name: 'Chesarae K Pillay',
    role: 'Partnerships Lead',
    imageUrl: '/images/Chesarae3.jpg',
    bio:
      'Builds strategic relationships with industry leaders and educational institutions to create opportunity pathways.',
  },
];

const AboutPage: React.FC = () => (
  <section className="py-20" style={{ backgroundColor: '#FAE1DC' }} id="about">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About CAPACITI</h2>
        <p className="text-lg text-gray-700">
          We are Africa's leading digital skills development organization, committed to
          empowering individuals and transforming communities through innovative education
          and strategic partnerships.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white/70 rounded-xl p-6 shadow">
          <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
          <p className="text-gray-700 mt-2">
            CAPACITI aims to democratize tech careers and foster inclusive societies in Africa,
            viewing quality education as essential for a diverse and growing digital economy.
          </p>
        </div>
        <div className="bg-white/70 rounded-xl p-6 shadow">
          <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
          <p className="text-gray-700 mt-2">
            We empower digitally marginalized youth with technical skills and work readiness,
            focusing on meaningful career opportunities beyond just job acquisition.
          </p>
        </div>
        <div className="bg-white/70 rounded-xl p-6 shadow">
          <h3 className="text-2xl font-bold text-gray-800">Our Values</h3>
          <p className="text-gray-700 mt-2">
            We prioritise respect and excellence, offering specialised training for a future-ready
            workforce while creating opportunities in the digital economy through constant innovation.
          </p>
        </div>
        <div className="bg-white/70 rounded-xl p-6 shadow">
          <h3 className="text-2xl font-bold text-gray-800">Our Impact</h3>
          <p className="text-gray-700 mt-2">
            Transforming the future of South Africa by developing and implementing digital programmes
            and initiatives.
          </p>
        </div>
      </div>

      <div className="mb-16 max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800">More About Us</h3>
        <p className="text-gray-700 mt-3">
          Established in 2010, CAPACITI, part of the UVU Africa Group, is at the forefront of preparing
          young individuals for the tech sector. As one of South Africa’s leading digital talent accelerators,
          we annually train and place approximately 1000 unemployed youth, creating a pipeline of future-fit,
          skilled individuals aligned with industry demand.
        </p>
        <p className="text-gray-700 mt-3">
          Since inception, CAPACITI has refined solutions that economically integrate talent by delivering
          scalable, demand-driven training and preparing individuals for the evolving workplace of the future.
          As a non-profit organisation, we leverage partner investments to positively impact lives.
        </p>
      </div>

      <div className="mb-20">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={member.name}
              className={`rounded-lg shadow-md overflow-hidden w-64 flex flex-col bg-white transition-transform transition-shadow duration-300 hover:shadow-xl hover:-translate-y-2 group opacity-0 translate-y-8 animate-fade-slide`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover transition duration-500 transform group-hover:scale-105 group-hover:brightness-90"
                />
              </div>
              <div className="p-4 text-center">
                <h3
                  className={`text-lg font-semibold text-gray-800 transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-lg opacity-0 animate-name-pop`}
                  style={{ animationDelay: `${index * 0.25 + 0.3}s` }}
                >
                  {member.name}
                </h3>
                <p
                  className={`text-gray-600 opacity-0 animate-role-fade`}
                  style={{ animationDelay: `${index * 0.25 + 0.5}s` }}
                >
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mt-3">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Staff and Candidates */}
      <div className="mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">Staff and Candidates</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              label: 'Our Dedicated Staff',
              text: 'Guiding, mentoring, and opening doors for our candidates.',
              src: '/Staff%20and%20Candidates%20Images/Staff.jpg',
            },
            {
              label: 'Aspiring Innovator',
              text: 'Building skills for real-world impact and opportunity.',
              src: '/Staff%20and%20Candidates%20Images/Candidate1.jpg',
            },
            {
              label: 'Future Technologist',
              text: 'Transforming potential into professional excellence.',
              src: '/Staff%20and%20Candidates%20Images/Candidate2.jpg',
            },
            {
              label: 'Career Trailblazer',
              text: 'Ready to shape the digital economy with confidence.',
              src: '/Staff%20and%20Candidates%20Images/Candidate3.jpg',
            },
          ].map((item) => (
            <figure key={item.src} className="relative bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              {/* Overlay text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-semibold text-sm md:text-base">{item.label}</p>
                  <p className="text-xs md:text-sm text-white/90">{item.text}</p>
                </div>
              </div>
              <figcaption className="p-3 text-center text-gray-700 font-medium">{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>

    <style>
      {`
        @keyframes fadeSlide { 0% {opacity:0; transform:translateY(32px);} 100%{opacity:1; transform:translateY(0);} }
        .animate-fade-slide { animation: fadeSlide 0.8s ease forwards; }
        @keyframes namePop { 0%{opacity:0; transform:scale(0.95);} 100%{opacity:1; transform:scale(1);} }
        .animate-name-pop { animation: namePop 0.5s ease forwards; }
        @keyframes roleFade { 0%{opacity:0;} 100%{opacity:1;} }
        .animate-role-fade { animation: roleFade 0.5s ease forwards; }
      `}
    </style>
  </section>
);

export default AboutPage;
