
import React from 'react';

const LOGOS: string[] = [
  '/logos/Absa.png',
  '/logos/accenture.png',
  '/logos/angloamerican.jpg',
  '/logos/aws.png',
  '/logos/bsg.jpg',
  '/logos/bunny_digital.jpg',
  '/logos/clickatell.jpg',
  '/logos/clicklearning.jpg',
  '/logos/comptia.jpg',
  '/logos/coursera.jpg',
  '/logos/eoh.jpg',
  '/logos/evalex.jpg',
  '/logos/exl.jpg',
  '/logos/gwf.jpg',
  '/logos/ibm.png',
  '/logos/jp_morgan.jpg',
  '/logos/lyra.png',
  '/logos/microsoft.jpg',
  '/logos/mictseta.jpg',
  '/logos/nelsonmandelabay.jpg',
  '/logos/old%20mutual.jpg',
  '/logos/propella.jpg',
  '/logos/pwc.png',
  '/logos/sa_youth.jpg',
  '/logos/sagea.jpg',
  '/logos/sap.png',
  '/logos/thejobsfund.jpg',
  '/logos/uvu%20affrica.jpg',
  '/logos/uvu_bio.jpg',
  '/logos/wipro.jpg',
  '/logos/workota.jpg',
  '/logos/youth4yes.jpg',
];

const Opportunities: React.FC = () => {
  // No handlers needed; external link is used for careers

  return (
    <section id="opportunities" className="py-20 bg-[rgba(241,209,209,0.5)]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Explore Opportunities</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4 mb-8">
          Ready to start your journey in tech? Find current openings and apply to join our next cohort through our dedicated portal.
        </p>
        <a 
          href="https://capaciti.breezy.hr/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[rgb(155,161,157)] text-white font-semibold px-10 py-4 rounded-full hover:bg-[rgb(135,141,137)] transition-transform transform hover:scale-105 text-lg"
        >
          View Career
        </a>
        
        {/* Past and Current Partners */}
        <div className="mt-16 text-left">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">Past and Current Partners</h3>
          <div className="relative overflow-hidden" style={{ background: '#fafafa', borderTop: '2px solid #eee', borderBottom: '2px solid #eee', padding: '20px 0' }}>
            <div className="pointer-events-none" style={{ position: 'absolute', top: 0, left: 0, width: 80, height: '100%', zIndex: 2, background: 'linear-gradient(to right, #fafafa 70%, transparent 100%)' }} />
            <div className="pointer-events-none" style={{ position: 'absolute', top: 0, right: 0, width: 80, height: '100%', zIndex: 2, background: 'linear-gradient(to left, #fafafa 70%, transparent 100%)' }} />

            <div className="flex gap-16 md:gap-24 items-center" style={{ animation: 'partners-scroll 40s linear infinite' }}>
              {LOGOS.map((src) => (
                <img
                  key={src}
                  src={encodeURI(src)}
                  alt="Partner logo"
                  style={{ height: 50, objectFit: 'contain', transition: 'transform .3s ease-in-out' }}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                />
              ))}
              {/* duplicate sequence for seamless loop */}
              {LOGOS.map((src, idx) => (
                <img
                  key={`dup-${idx}-${src}`}
                  src={encodeURI(src)}
                  alt="Partner logo"
                  style={{ height: 50, objectFit: 'contain', transition: 'transform .3s ease-in-out' }}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                />
              ))}
            </div>

            <style>
              {`@keyframes partners-scroll { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }`}
            </style>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default Opportunities;

