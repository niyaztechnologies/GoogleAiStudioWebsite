
import React from 'react';
import { Search, Layout, Share2, TrendingUp, PenTool, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';

const iconMap: Record<string, any> = {
  Search,
  Layout,
  Share2,
  TrendingUp,
  PenTool,
};

const colorMap: Record<string, string> = {
  seo: 'blue',
  'website-design': 'purple',
  'social-media': 'emerald',
  ads: 'rose',
  'content-writing': 'amber',
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 border border-blue-100 mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></span>
              <span className="text-xs font-black uppercase tracking-[0.2em]">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
              Empowering Tirupati Brands with <span className="gradient-text">Elite Solutions</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed">
              We don't just provide services; we build growth engines. From local SEO to custom website design, Niyaz Technologies is your partner in digital dominance.
            </p>
          </div>
          <div className="hidden lg:block">
            <a 
              href="#/strategy" 
              className="group flex items-center space-x-4 px-8 py-5 bg-white border-2 border-slate-100 rounded-[2rem] font-bold text-slate-900 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <span>Get Your Free Strategy Audit</span>
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowRight size={20} />
              </div>
            </a>
          </div>
        </div>

        {/* Dynamic Bento-Style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {SERVICES.map((service, idx) => {
            const IconComponent = iconMap[service.icon];
            const color = colorMap[service.id];
            
            // Adjust grid span based on index for "Bento" look
            const gridSpan = idx === 0 || idx === 1 ? 'lg:col-span-3' : 'lg:col-span-2';
            
            return (
              <div
                key={service.id}
                className={`${gridSpan} group relative bg-white p-10 rounded-[3rem] border border-slate-100 hover:border-${color}-200 transition-all duration-500 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] flex flex-col justify-between overflow-hidden`}
              >
                {/* Background Accent Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700`}></div>
                
                <div>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-${color}-50 text-${color}-600 group-hover:bg-${color}-600 group-hover:text-white group-hover:rotate-12 transition-all duration-300 shadow-sm shadow-${color}-200`}>
                    <IconComponent size={32} />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{service.title}</h4>
                  <p className="text-slate-500 leading-relaxed font-medium mb-8">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {service.keywords.slice(0, 2).map((k) => (
                      <span key={k} className="text-[10px] font-black uppercase tracking-widest text-slate-400 border border-slate-100 px-3 py-1 rounded-full group-hover:border-slate-200 group-hover:text-slate-500 transition-colors">
                        {k}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#/contact"
                    className={`inline-flex items-center text-sm font-black text-${color}-600 hover:gap-3 transition-all duration-300 group/link`}
                  >
                    <span>Consult with an Expert</span>
                    <ArrowRight size={18} className="ml-2 group-hover/link:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Highlights Banner */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 bg-slate-900 rounded-[4rem] p-12 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>
          
          <div className="flex items-start space-x-6">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-blue-400 flex-shrink-0">
              <CheckCircle2 size={28} />
            </div>
            <div>
              <h5 className="text-xl font-bold mb-2">ROI Focused</h5>
              <p className="text-slate-400 text-sm leading-relaxed">We focus on metrics that matter: Leads, Sales, and Profit for your Tirupati business.</p>
            </div>
          </div>

          <div className="flex items-start space-x-6">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-purple-400 flex-shrink-0">
              <CheckCircle2 size={28} />
            </div>
            <div>
              <h5 className="text-xl font-bold mb-2">Dedicated Support</h5>
              <p className="text-slate-400 text-sm leading-relaxed">You get a dedicated account manager at Niyaz Technologies who knows your brand by name.</p>
            </div>
          </div>

          <div className="flex items-start space-x-6">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-emerald-400 flex-shrink-0">
              <CheckCircle2 size={28} />
            </div>
            <div>
              <h5 className="text-xl font-bold mb-2">AI Strategy</h5>
              <p className="text-slate-400 text-sm leading-relaxed">Leveraging the power of Gemini AI to predict trends and outperform the Tirupati competition.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Dynamic colors for Tailwind JIT */}
      <div className="hidden border-blue-200 bg-blue-50 text-blue-600 shadow-blue-200 border-purple-200 bg-purple-50 text-purple-600 shadow-purple-200 border-emerald-200 bg-emerald-50 text-emerald-600 shadow-emerald-200 border-rose-200 bg-rose-50 text-rose-600 shadow-rose-200 border-amber-200 bg-amber-50 text-amber-600 shadow-amber-200 text-blue-500 text-purple-500 text-emerald-500 text-rose-500 text-amber-500 bg-blue-500 bg-purple-500 bg-emerald-500 bg-rose-500 bg-amber-500"></div>
    </section>
  );
};

export default Services;
