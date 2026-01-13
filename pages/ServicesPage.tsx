
import React, { useState } from 'react';
import { CheckCircle2, Search, Layout, Share2, TrendingUp, PenTool, Code, ArrowRight, Plus, Minus } from 'lucide-react';
import { SERVICES } from '../constants';

const AccordionItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`border rounded-3xl transition-all duration-300 ${isOpen ? 'bg-white border-blue-200 shadow-xl shadow-blue-500/5' : 'bg-slate-50 border-slate-100 hover:border-slate-200'}`}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-3xl"
        aria-expanded={isOpen}
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-900'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-white text-slate-400 border border-slate-100'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-6 md:px-8 pb-8 pt-2">
          <p className="text-slate-600 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: 'How long does it take to see SEO results?', a: 'Typically, SEO is a long-term strategy. You can expect to see significant movements in rankings within 3 to 6 months depending on competition. At Niyaz Technologies, we provide monthly reporting so you can track your progress in real-time.' },
    { q: 'Do you offer custom web development?', a: 'Yes, as a leading web development company in Tirupati, we build everything from simple landing pages to complex custom web applications, e-commerce stores, and enterprise software solutions tailored to your unique business needs.' },
    { q: 'Can you manage my social media accounts daily?', a: 'Absolutely. Our social media management service includes content creation, graphic design, caption writing, daily scheduling, and active community engagement across platforms like Facebook, Instagram, and LinkedIn.' },
    { q: 'What makes you the best digital marketing agency in Tirupati?', a: 'Our unique edge comes from combining deep local market knowledge with cutting-edge AI technology. Shaik Akthar Basha leads a team that prioritizes ROI and data-driven results over simple vanity metrics.' }
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="bg-slate-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 font-bold text-xs uppercase tracking-[0.2em] mb-6 border border-blue-500/20">
            Our Digital Marketing Expertise
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Performance Driven <br />
            <span className="gradient-text">Tirupati SEO & Design</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Niyaz Technologies provides the <span className="text-white font-bold underline decoration-blue-500">best digital marketing services in Tirupati</span>, 
            blending creative website design with technical SEO excellence to grow your business.
          </p>
        </div>
      </section>

      {/* Main Services Grid with Detailed Descriptions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                <Search size={32} />
              </div>
              <h2 className="text-4xl font-black text-slate-900">#1 SEO Services in Tirupati</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                As the <span className="font-bold text-blue-600">best SEO company in Tirupati</span>, we don't just aim for traffic—we aim for revenue. 
                Our data-driven SEO strategies ensure your business appears in front of your target audience at the exact moment they are searching.
              </p>
              <ul className="space-y-4">
                {['Local SEO Optimization for Tirupati Businesses', 'Technical Site Audits & Fixing', 'Revenue-Focused Keyword Strategy', 'High-Quality Backlink Building'].map((item) => (
                  <li key={item} className="flex items-center space-x-3 text-slate-700 font-semibold">
                    <CheckCircle2 size={20} className="text-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#/contact" className="inline-flex items-center text-blue-600 font-bold group">
                Start Ranking Today <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" alt="Tirupati SEO Analysis" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2070&auto=format&fit=crop" alt="Web Design Tirupati" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-8">
              <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center">
                <Layout size={32} />
              </div>
              <h2 className="text-4xl font-black text-slate-900">Expert Website Designers in Tirupati</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Your website is your digital storefront. Our <span className="font-bold text-purple-600">website designers in Tirupati</span> craft visually stunning, 
                highly functional sites that provide a seamless user experience across all devices.
              </p>
              <ul className="space-y-4">
                {['Modern Responsive Web Design', 'High-Conversion Landing Pages', 'E-commerce Website Specialists', 'Fast & Secure Web Development'].map((item) => (
                  <li key={item} className="flex items-center space-x-3 text-slate-700 font-semibold">
                    <CheckCircle2 size={20} className="text-purple-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#/contact" className="inline-flex items-center text-purple-600 font-bold group">
                Build Your Digital Store <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                <Share2 size={32} />
              </div>
              <h2 className="text-4xl font-black text-slate-900">Social Media & Local Ads</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We manage your brand's presence across all major platforms. From viral social media management to 
                high-conversion Google Ads, we are the <span className="font-bold text-emerald-600">best digital marketing agency in Tirupati</span> for growth.
              </p>
              <ul className="space-y-4">
                {['Tirupati Specific Meta Ad Campaigns', 'ROI Focused Google Search Ads', 'LinkedIn B2B Lead Generation', 'Viral Content & Video Marketing'].map((item) => (
                  <li key={item} className="flex items-center space-x-3 text-slate-700 font-semibold">
                    <CheckCircle2 size={20} className="text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#/contact" className="inline-flex items-center text-emerald-600 font-bold group">
                Grow Your Audience <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2074&auto=format&fit=crop" alt="Digital Marketing Company Tirupati" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing/Packages Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Flexible Packages</h2>
          <h3 className="text-4xl font-black text-slate-900 mb-16">Solutions for Every Tirupati Business</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Local Starter', 
                price: 'Custom', 
                desc: 'Perfect for local small businesses looking for an online presence.',
                features: ['Basic SEO Setup', 'Social Media Management', 'One-Page Web Design', 'Monthly Growth Reports']
              },
              { 
                name: 'Business Growth', 
                price: 'Recommended', 
                desc: 'Accelerate your brand with comprehensive Tirupati SEO & Ads.',
                features: ['Full SEO Strategy', 'Daily Social Content', 'Professional Website Design', 'Google & Meta Ads']
              },
              { 
                name: 'Enterprise Plus', 
                price: 'Premium', 
                desc: 'Complete digital transformation and custom web development.',
                features: ['Priority 24/7 Support', 'Custom App/Portal Dev', 'Multi-City SEO Focus', 'AI-Powered Market Insights']
              }
            ].map((plan, i) => (
              <div key={i} className={`p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all ${i === 1 ? 'scale-105 border-blue-200 ring-4 ring-blue-50 relative z-10' : ''}`}>
                <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
                <p className="text-blue-600 font-black text-xl mb-6">{plan.price}</p>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed">{plan.desc}</p>
                <ul className="text-left space-y-4 mb-10">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center text-sm font-medium text-slate-600">
                      <CheckCircle2 size={16} className="text-blue-500 mr-3" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#/contact" className={`block w-full py-4 rounded-2xl font-bold transition-all ${i === 1 ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Common Inquiries</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900">Frequently Asked Questions</h3>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem 
                key={i}
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden">
             <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Ready to transform your <br /> digital presence in Tirupati?
              </h2>
              <p className="text-slate-400 text-xl max-w-2xl mx-auto">
                Join 500+ successful brands working with the best <span className="text-blue-400">web development company in Tirupati</span>.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a href="#/contact" className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/40">
                  Book a Free Consultation
                </a>
                <a href="#/strategy" className="px-10 py-5 bg-white/5 text-white border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all">
                  Try Free AI Audit
                </a>
              </div>
             </div>
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] -mr-64 -mt-64 opacity-20"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
