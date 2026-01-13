
import React from 'react';
import Contact from '../components/Contact';
import { CONTACT_DATA } from '../constants';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6">Get In Touch</h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              Ready to start your project? Use the form below or find us at our Tirupati headquarters.
            </p>
          </div>
          <Contact />
        </div>
      </section>
      
      {/* Map Placeholder/CTA */}
      <section className="h-[500px] w-full bg-slate-200 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2070&auto=format&fit=crop)' }}></div>
        <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[2px] flex items-center justify-center">
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl max-w-lg text-center mx-4">
            <h3 className="text-2xl font-black mb-4">Visit Our Office</h3>
            <p className="text-slate-600 mb-8">{CONTACT_DATA.address}</p>
            <a 
              href={CONTACT_DATA.gmbLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all inline-block"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
