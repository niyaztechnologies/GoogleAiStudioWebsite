
import React from 'react';
import Hero from '../components/Hero';
import { ArrowRight, Star, Shield, Zap, Quote } from 'lucide-react';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "RK Real Estate Tirupati",
      text: "Niyaz Technologies is undoubtedly the best SEO company in Tirupati. Our organic leads doubled within the first three months of working with them.",
      image: "https://picsum.photos/seed/person1/100/100"
    },
    {
      name: "Priya Sharma",
      company: "Tirumala Fashion Boutique",
      text: "Their website designers in Tirupati are true artists. Our new e-commerce site is stunning and so easy for our customers to navigate.",
      image: "https://picsum.photos/seed/person2/100/100"
    },
    {
      name: "Dr. Anil V.",
      company: "SV Dental Care",
      text: "Highly professional digital marketing services. They managed our local advertising so well that we've seen a 40% increase in new patient appointments.",
      image: "https://picsum.photos/seed/person3/100/100"
    }
  ];

  return (
    <div>
      <Hero />
      
      {/* Trust Section */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12 md:gap-24 grayscale opacity-50">
          <p className="text-xl font-bold text-slate-400 italic">Trusted by 500+ Tirupati Businesses</p>
        </div>
      </section>

      {/* Quick Services Snapshot */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Core Services</h2>
              <h3 className="text-4xl font-black text-slate-900 leading-tight">Expert Solutions Tailored for Growth</h3>
            </div>
            <a href="#/services" className="px-8 py-4 bg-white border border-slate-200 rounded-2xl font-bold flex items-center space-x-2 hover:shadow-lg transition-all text-slate-600">
              <span>View All Services</span>
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((s) => (
              <div key={s.id} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
                <h4 className="text-xl font-bold mb-4">{s.title}</h4>
                <p className="text-slate-500 mb-6 text-sm leading-relaxed">{s.description}</p>
                <div className="flex items-center text-blue-600 font-bold text-sm group-hover:translate-x-2 transition-transform">
                  Learn Details <ArrowRight size={14} className="ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-4xl font-black text-slate-900 leading-tight">Why Choose Niyaz Technologies?</h3>
            <div className="space-y-6">
              {[
                { icon: Star, title: 'Results Driven', desc: 'We focus on ROI and conversions, not just vanity metrics.' },
                { icon: Shield, title: 'Local Expertise', desc: 'The best digital marketing company in Tirupati with deep local market insights.' },
                { icon: Zap, title: 'AI-Powered', desc: 'Using Gemini and advanced tech to stay ahead of the competition.' }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">{item.title}</h5>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[3rem] overflow-hidden shadow-2xl transform rotate-1">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" alt="Marketing Strategy" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-10 -ml-48 -mt-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-[120px] opacity-10 -mr-48 -mb-48"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm">Success Stories</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white">Loved by Businesses in Tirupati</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here is what our partners have to say about working with Niyaz Technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-sm relative group hover:bg-white/10 transition-all duration-300">
                <Quote className="absolute top-8 right-8 text-blue-500/20 group-hover:text-blue-500/40 transition-colors" size={48} />
                <div className="flex items-center space-x-4 mb-6">
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-2xl object-cover border-2 border-white/10" />
                  <div>
                    <h4 className="text-white font-bold">{t.name}</h4>
                    <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider">{t.company}</p>
                  </div>
                </div>
                <p className="text-slate-300 italic leading-relaxed">
                  "{t.text}"
                </p>
                <div className="mt-6 flex text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-500 font-bold mb-6 italic">Ready to be our next success story?</p>
            <a href="#/contact" className="px-10 py-5 bg-gradient-primary text-white rounded-2xl font-bold hover:shadow-2xl hover:scale-105 transition-all inline-block">
              Start Your Project
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
