
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, LayoutDashboard } from 'lucide-react';
import { CONTACT_DATA } from '../constants';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleHash = () => setActiveHash(window.location.hash);
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHash);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#/home' },
    { name: 'Services', href: '#/services' },
    { name: 'About', href: '#/about' },
    { name: 'AI Audit', href: '#/strategy' },
    { name: 'Contact', href: '#/contact' },
  ];

  // More flexible active check
  const isActive = (href: string) => {
    if (!activeHash || activeHash === '#' || activeHash === '#/') {
      return href === '#/home';
    }
    return activeHash.startsWith(href);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#/home" className="flex items-center space-x-2 group">
              <span className={`text-2xl font-black tracking-tighter transition-colors ${isScrolled ? 'text-blue-600' : 'text-slate-900 group-hover:text-blue-600'}`}>
                NIYAZ
              </span>
              <span className="text-2xl font-light text-slate-500 hidden sm:inline tracking-widest">TECHNOLOGIES</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-bold transition-all px-4 py-2 rounded-xl ${
                  isActive(link.href) 
                    ? 'text-blue-600 bg-blue-50/80 shadow-sm' 
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            <div className="h-6 w-px bg-slate-200 mx-2"></div>

            <a
              href="#/admin"
              className={`flex items-center space-x-2 px-4 py-2 text-sm font-bold rounded-xl transition-all ${
                isActive('#/admin') ? 'text-blue-600 bg-blue-50' : 'text-slate-500 hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              <LayoutDashboard size={16} />
              <span>Partner</span>
            </a>

            <a
              href={`tel:${CONTACT_DATA.phone}`}
              className="ml-4 flex items-center space-x-2 bg-slate-900 text-white px-6 py-3 rounded-2xl hover:bg-blue-600 transition-all shadow-lg hover:-translate-y-0.5"
            >
              <Phone size={16} />
              <span className="font-bold text-sm">Let's Talk</span>
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-900 p-2 hover:bg-slate-100 rounded-xl transition-colors">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-white z-40 p-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-6 py-4 rounded-2xl font-black text-lg transition-all ${
                  isActive(link.href) ? 'bg-blue-50 text-blue-600 shadow-sm' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="h-px bg-slate-100 my-4"></div>
            <a
              href="#/admin"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center space-x-3 px-6 py-4 rounded-2xl font-black text-slate-700 hover:bg-slate-50"
            >
              <LayoutDashboard size={22} className="text-blue-600" />
              <span>Partner Portal</span>
            </a>
            <div className="pt-4">
              <a
                href={`tel:${CONTACT_DATA.phone}`}
                className="flex items-center justify-center space-x-3 bg-gradient-primary text-white py-5 rounded-3xl font-bold shadow-xl shadow-blue-200"
              >
                <Phone size={20} />
                <span>Call Us: {CONTACT_DATA.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
