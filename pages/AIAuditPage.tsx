
import React from 'react';
import StrategyAssistant from '../components/StrategyAssistant';

const AIAuditPage: React.FC = () => {
  return (
    <div className="pt-20 bg-slate-900 min-h-screen">
      <div className="py-20 text-center">
        <h1 className="text-5xl font-black text-white mb-6">AI Strategy Auditor</h1>
        <p className="text-slate-400 max-w-xl mx-auto">
          Leverage our custom Gemini-powered tool to get an instant digital marketing roadmap for your Tirupati business.
        </p>
      </div>
      <StrategyAssistant />
    </div>
  );
};

export default AIAuditPage;
