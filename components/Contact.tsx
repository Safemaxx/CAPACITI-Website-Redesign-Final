import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const locations = [
  {
    position: { lat: -33.928992, lng: 18.475708 },
    label: 'Cape Town Innovation Hub',
    info: '2nd Floor Brickfield Canvas, 35 Brickfield Rd, Woodstock, Cape Town 7925',
  },
  {
    position: { lat: -33.935236, lng: 18.661345 },
    label: 'Khayelitsha Bandwidth Barn',
    info: 'Cnr Spine Road and Mew Way, Ilitha Park, Lookout Hill, Khayelitsha',
  },
  {
    position: { lat: -33.921860, lng: 18.485295 },
    label: 'CAPACITI campus Cape Town',
    info: '95 Durham Ave, Salt River, Cape Town',
  },
  {
    position: { lat: -26.2041, lng: 28.0456 },
    label: 'CAPACITI campus Johannesburg',
    info: '13th Floor, Hollard City Campus, 19 Ameshof Road, Braamfontein',
  },
  {
    position: { lat: -33.9560, lng: 25.5920 },
    label: 'CAPACITI office in Gqeberha',
    info: '270 Cape Road, Mill Park, Gqeberha, 6001',
  },
];

const center = { lat: -30.5595, lng: 22.9375 }; // South Africa center

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-[rgb(34,26,38)] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get In Touch</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
            Have questions or want to partner with us? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            {isSubmitted ? (
              <div className="text-center py-10">
                <h3 className="text-2xl font-semibold text-green-600">Thank You!</h3>
                <p className="text-gray-600 mt-2">Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="mt-8 md:mt-0">
            <h3 className="text-2xl font-bold text-white text-center mb-4">Our Locations</h3>
            <MapContainer center={center} zoom={5} style={{ height: "500px", width: "100%", borderRadius: "12px" }}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {locations.map((loc, idx) => (
                <Marker key={idx} position={loc.position}>
                  <Popup>
                    <strong>{loc.label}</strong>
                    <br />
                    {loc.info}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
