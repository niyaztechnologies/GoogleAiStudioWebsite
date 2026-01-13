
import React, { useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { CONTACT_DATA } from '../constants';
import { leadService } from '../services/leadService';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'SEO Services',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    leadService.saveLead(formData);
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', service: 'SEO Services', message: '' });
    
    // Reset success state after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Contact Us</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                Let's Grow Your Brand Together
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                Reach out to the best digital marketing company in Tirupati. We're here to answer your questions and start your digital transformation.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-5 group">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl mb-1">Our Location</h4>
                  <p className="text-slate-600 max-w-xs">{CONTACT_DATA.address}</p>
                  <a 
                    href={CONTACT_DATA.gmbLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 font-bold text-sm mt-3 hover:underline"
                  >
                    View on Google Maps <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-5 group">
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl mb-1">Call Us</h4>
                  <p className="text-slate-600 font-medium">+91 {CONTACT_DATA.phone}</p>
                  <p className="text-slate-400 text-sm">Mon - Sat, 9am - 7pm</p>
                </div>
              </div>

              <div className="flex items-start space-x-5 group">
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl mb-1">Email Us</h4>
                  <p className="text-slate-600 font-medium">{CONTACT_DATA.email}</p>
                  <p className="text-slate-400 text-sm">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-xl relative overflow-hidden">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 animate-in zoom-in-95 duration-500">
                <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={48} />
                </div>
                <h4 className="text-3xl font-extrabold text-slate-900">Message Received!</h4>
                <p className="text-slate-600 max-w-xs">
                  Thank you for reaching out. A strategy expert from Niyaz Technologies will contact you shortly.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="text-blue-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h4 className="text-3xl font-extrabold text-slate-900 mb-8">Send a Message</h4>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="Shaik Akthar Basha"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Service Interested In</label>
                    <select 
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none appearance-none cursor-pointer"
                    >
                      <option>SEO Services</option>
                      <option>Web Design</option>
                      <option>Social Media</option>
                      <option>Paid Ads</option>
                      <option>Full Digital Marketing Package</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Message</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your project goals..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center space-x-3 hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
