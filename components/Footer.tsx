
import React from 'react';
import { CONTACT_DATA, SEO_KEYWORDS } from '../constants';
import { Instagram, Linkedin, Twitter, Facebook, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-black tracking-tighter text-white">NIYAZ</span>
              <span className="text-2xl font-light text-slate-400">TECHNOLOGIES</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Tirupati's premier digital marketing partner. We turn clicks into customers using the latest SEO, design, and growth strategies.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '#/home' },
                { name: 'Services', href: '#/services' },
                { name: 'About Us', href: '#/about' },
                { name: 'Strategy Audit', href: '#/strategy' },
                { name: 'Contact', href: '#/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-white transition-colors flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Expertise</h4>
            <ul className="space-y-4">
              {['SEO Strategy', 'Social Media', 'PPC Advertising', 'Web Design', 'Development'].map((link) => (
                <li key={link}>
                  <a href="#/services" className="text-slate-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold mb-6">Find Us</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              {CONTACT_DATA.address}
            </p>
            <div className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors">
              <Globe size={16} className="text-blue-500" />
              <a href={CONTACT_DATA.website} target="_blank" rel="noopener noreferrer" className="text-sm font-medium">
                niyaztechnologies.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} NIYAZ TECHNOLOGIES. All rights reserved.
            </p>
          </div>
          
          <div className="mt-8 opacity-20 hover:opacity-100 transition-opacity">
            <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold text-center mb-4">Service Tags</p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {SEO_KEYWORDS.map((k) => (
                <span key={k} className="text-[10px] text-slate-600 font-medium">{k}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
