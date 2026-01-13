
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative z-10">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Founder" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -z-10"></div>
              <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-10 rounded-[2.5rem] shadow-xl z-20">
                <p className="text-4xl font-black mb-1">10+</p>
                <p className="text-sm font-bold uppercase tracking-widest text-blue-400">Years Industry Experience</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-widest">About Us</div>
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
                Empowering Businesses in Tirupati
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Founded by <strong>Shaik Akthar Basha</strong>, Niyaz Technologies was born out of a desire to provide world-class digital marketing expertise to the vibrant business community of Tirupati and beyond.
              </p>
              <div className="space-y-4">
                {[
                  'Tirupati’s most trusted SEO & Design partner.',
                  'Data-driven strategies that prioritize ROI.',
                  'A dedicated team of technology enthusiasts.',
                  'Cutting-edge AI integration in every project.'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle2 size={20} className="text-blue-600 flex-shrink-0" />
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-8 border-t border-slate-100 flex items-center space-x-6">
                <div>
                  <p className="text-2xl font-black text-slate-900">500+</p>
                  <p className="text-xs font-bold text-slate-500 uppercase">Projects</p>
                </div>
                <div className="w-px h-10 bg-slate-200"></div>
                <div>
                  <p className="text-2xl font-black text-slate-900">100%</p>
                  <p className="text-xs font-bold text-slate-500 uppercase">Satisfaction</p>
                </div>
              </div>
              <div className="pt-6">
                <a href="#/contact" className="inline-block px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10">
                  Work With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-12">
          <h2 className="text-4xl font-black">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-blue-400">Integrity</h4>
              <p className="text-slate-400">We believe in transparent communication and honest reporting for every client.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-blue-400">Innovation</h4>
              <p className="text-slate-400">Always exploring new technologies like AI to give our clients an unfair advantage.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
