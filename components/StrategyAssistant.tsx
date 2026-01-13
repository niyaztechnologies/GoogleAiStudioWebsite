
import React, { useState, useEffect } from 'react';
import { Bot, Send, Loader2, Sparkles, CheckCircle2, Key, AlertCircle } from 'lucide-react';
import { getMarketingStrategy } from '../services/geminiService';

const StrategyAssistant: React.FC = () => {
  const [businessType, setBusinessType] = useState('');
  const [goal, setGoal] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [hasKey, setHasKey] = useState(false);
  const [keyError, setKeyError] = useState(false);

  useEffect(() => {
    checkKeyStatus();
  }, []);

  const checkKeyStatus = async () => {
    if (window.aistudio) {
      const isSelected = await window.aistudio.hasSelectedApiKey();
      setHasKey(isSelected);
    } else {
      // In non-AI Studio environments, we assume the environment variable handles it
      setHasKey(!!process.env.API_KEY);
    }
  };

  const handleOpenKeySelector = async () => {
    if (window.aistudio) {
      await window.aistudio.openSelectKey();
      // Assume selection was successful as per instructions to avoid race conditions
      setHasKey(true);
      setKeyError(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessType || !goal) return;
    
    setLoading(true);
    const strategy = await getMarketingStrategy(businessType, goal);
    
    if (strategy.includes("KEY_ERROR")) {
      setKeyError(true);
      setHasKey(false);
      setResult(null);
    } else {
      setResult(strategy);
    }
    setLoading(false);
  };

  return (
    <section id="strategy" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Mesh Gradient */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600 rounded-full blur-[120px] -mr-96 -mt-96"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-600 rounded-full blur-[120px] -ml-96 -mb-96"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 text-blue-300 border border-white/10">
            <Sparkles size={16} />
            <span className="text-xs font-bold uppercase tracking-widest">Powered by Gemini AI</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Generate Your <span className="gradient-text">Marketing Strategy</span> Instantly
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Experience the "Technology" in Niyaz Technologies. Our AI-driven audit gives you a head start on your competition in Tirupati.
          </p>
        </div>

        {!hasKey ? (
          <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-md text-center">
            <div className="w-20 h-20 bg-blue-600/20 text-blue-400 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Key size={40} />
            </div>
            <h3 className="text-2xl font-black mb-4">AI Features Authorization Required</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              To use our AI-powered Strategy Assistant, you must select an API key from a paid GCP project. 
              {keyError && <span className="block mt-2 text-red-400 font-bold"><AlertCircle className="inline mr-1" size={16} /> The previous key was invalid or not from a paid project.</span>}
            </p>
            <div className="space-y-4">
              <button
                onClick={handleOpenKeySelector}
                className="w-full sm:w-auto px-12 py-5 bg-gradient-primary rounded-2xl font-bold hover:scale-105 transition-all shadow-xl shadow-blue-500/20"
              >
                Select API Key
              </button>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest">
                Requires Billing enabled: <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Documentation</a>
              </p>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2 space-y-6 bg-white/5 p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide">Your Industry</label>
                  <input
                    type="text"
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    placeholder="e.g. Real Estate, Restaurant"
                    className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white outline-none placeholder-slate-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide">Main Goal</label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white outline-none appearance-none cursor-pointer"
                    required
                  >
                    <option value="" disabled className="bg-slate-900">Select a goal</option>
                    <option value="Get more leads" className="bg-slate-900">Get more leads</option>
                    <option value="Brand awareness" className="bg-slate-900">Brand awareness</option>
                    <option value="Online sales" className="bg-slate-900">Online sales</option>
                    <option value="Website traffic" className="bg-slate-900">Website traffic</option>
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 bg-gradient-primary rounded-2xl font-bold flex items-center justify-center space-x-3 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-500/20 disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" />
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <Bot size={20} />
                      <span>Generate AI Strategy</span>
                    </>
                  )}
                </button>
              </form>

              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-3 text-sm text-slate-400">
                  <CheckCircle2 size={16} className="text-blue-500" />
                  <span>Contextual SEO Analysis</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-slate-400">
                  <CheckCircle2 size={16} className="text-blue-500" />
                  <span>Localized Tirupati Market Insights</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 min-h-[400px]">
              {result ? (
                <div className="bg-white text-slate-900 p-8 rounded-[2.5rem] shadow-2xl animate-in zoom-in-95 fade-in duration-500 relative">
                  <div className="absolute -top-4 -right-4 bg-gradient-primary p-3 rounded-2xl text-white shadow-lg">
                    <Sparkles size={24} />
                  </div>
                  <h4 className="text-2xl font-extrabold mb-6 flex items-center">
                    <span className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mr-3">1</span>
                    Your Customized Roadmap
                  </h4>
                  <div className="prose prose-slate max-w-none whitespace-pre-line text-slate-600 leading-relaxed font-medium">
                    {result}
                  </div>
                  <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Ready to execute?</p>
                    <a href="#/contact" className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-colors">
                      Talk to our Experts
                    </a>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center bg-white/5 border-2 border-dashed border-white/10 rounded-[2.5rem] p-12 text-center space-y-4">
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center text-blue-400 mb-2">
                    <Bot size={40} />
                  </div>
                  <h4 className="text-xl font-bold">Waiting for input</h4>
                  <p className="text-slate-500 max-w-xs">
                    Fill in the details to receive a complimentary marketing strategy powered by the latest AI technology.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default StrategyAssistant;
