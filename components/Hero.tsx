
import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowRightCircle, Sparkles, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax offsets
  const blob1Transform = `translate(${scrollY * 0.1}px, ${scrollY * 0.2}px)`;
  const blob2Transform = `translate(${scrollY * -0.05}px, ${scrollY * 0.15}px)`;

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Parallax Decorative Background Elements */}
      <div 
        className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[100px] -z-10 transition-transform duration-75 ease-out"
        style={{ transform: blob1Transform }}
      ></div>
      <div 
        className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-purple-100/60 rounded-full blur-[100px] -z-10 transition-transform duration-75 ease-out"
        style={{ transform: blob2Transform }}
      ></div>
      
      {/* Additional subtle floating shape */}
      <div 
        className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl -z-10 animate-pulse"
        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 border border-blue-100 shadow-sm">
              <Sparkles size={16} className="animate-spin-slow" />
              <span className="text-sm font-bold uppercase tracking-wider">Top Rated in Tirupati</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Scale Your <span className="gradient-text">Business</span> with NIYAZ TECHNOLOGIES
            </h1>
            
            <p className="text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              We are the <span className="text-blue-600 font-bold">best digital marketing agency in Tirupati</span>, dedicated to driving real growth through premium SEO, stunning website design, and results-focused advertising.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#/services"
                className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-blue-600 transition-all shadow-2xl hover:-translate-y-1 active:scale-95"
              >
                <span>Explore Services</span>
                <ChevronRight size={20} />
              </a>
              <a
                href="#/strategy"
                className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 border-2 border-slate-100 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-slate-50 transition-all shadow-lg hover:-translate-y-1 active:scale-95"
              >
                <span>Free AI Audit</span>
                <ArrowRightCircle size={20} className="text-blue-600" />
              </a>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/${i + 120}/100/100`}
                    alt="Satisfied Client"
                    className="w-14 h-14 rounded-2xl border-4 border-white object-cover shadow-lg hover:z-30 hover:scale-110 transition-transform"
                  />
                ))}
              </div>
              <div className="text-sm">
                <p className="font-black text-slate-900 text-lg">500+ Local Successes</p>
                <p className="text-slate-500 font-medium">Leading the way in Andhra Pradesh</p>
              </div>
            </div>
          </div>

          <div className="relative animate-in fade-in zoom-in duration-1000 delay-200">
            {/* Background decorative square */}
            <div className="absolute inset-0 bg-blue-600/5 rounded-[3rem] -rotate-3 scale-105 -z-10"></div>
            
            <div className="relative z-10 bg-white p-5 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100 transform rotate-2 hover:rotate-0 transition-all duration-700 ease-in-out group">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                alt="Digital Marketing Excellence"
                className="rounded-[2rem] w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Floating Metric Card */}
              <div className="absolute bottom-8 left-8 right-8 dark-glass-card p-8 rounded-3xl text-white shadow-2xl animate-in slide-in-from-bottom-8 duration-1000">
                <div className="flex justify-between items-center mb-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-blue-300 font-black mb-1">Performance Growth</p>
                    <p className="text-3xl font-black">+420% Organic Leads</p>
                  </div>
                  <div className="p-4 bg-blue-500 rounded-2xl shadow-lg shadow-blue-500/40">
                    <TrendingUp size={28} />
                  </div>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-400 to-emerald-400 w-[92%] rounded-full shadow-[0_0_12px_rgba(59,130,246,0.5)]"></div>
                </div>
              </div>
            </div>
            
            {/* Floating Achievement Badges with parallax */}
            <div 
              className="absolute -top-12 -right-8 glass-card p-6 rounded-[2rem] shadow-2xl z-20 hidden md:block transition-transform duration-150"
              style={{ transform: `translateY(${scrollY * -0.05}px)` }}
            >
              <div className="text-center">
                <p className="text-4xl font-black text-blue-600 leading-none">#1</p>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1">SEO TIRUPATI</p>
              </div>
            </div>

            <div 
              className="absolute top-1/4 -left-12 glass-card px-6 py-4 rounded-2xl shadow-xl z-20 hidden lg:flex items-center space-x-3 border border-white transition-transform duration-150"
              style={{ transform: `translateY(${scrollY * 0.08}px)` }}
            >
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="text-xs font-black text-slate-900">AI-Powered</p>
                <p className="text-[10px] text-slate-500 font-bold uppercase">Strategies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
