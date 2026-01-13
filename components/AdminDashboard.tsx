
import React, { useState, useEffect } from 'react';
import { leadService, Lead } from '../services/leadService';
import { LayoutDashboard, Users, MessageSquare, CheckCircle, Trash2, ArrowLeft, BarChart3 } from 'lucide-react';

interface AdminDashboardProps {
  onClose: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onClose }) => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filter, setFilter] = useState<Lead['status'] | 'all'>('all');

  useEffect(() => {
    setLeads(leadService.getLeads());
  }, []);

  const handleStatusChange = (id: string, status: Lead['status']) => {
    leadService.updateLeadStatus(id, status);
    setLeads(leadService.getLeads());
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Delete this inquiry?')) {
      leadService.deleteLead(id);
      setLeads(leadService.getLeads());
    }
  };

  const filteredLeads = filter === 'all' ? leads : leads.filter(l => l.status === filter);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <button 
              onClick={onClose}
              className="flex items-center text-slate-500 hover:text-blue-600 font-bold mb-2 transition-colors"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Website
            </button>
            <h1 className="text-3xl font-extrabold text-slate-900">Partner Portal</h1>
          </div>
          
          <div className="flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm">
            {(['all', 'new', 'contacted', 'closed'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`px-4 py-2 rounded-lg text-sm font-bold capitalize transition-all ${
                  filter === s ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Analytics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center space-x-4">
            <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
              <Users size={24} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Total Inquiries</p>
              <p className="text-2xl font-black text-slate-900">{leads.length}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center space-x-4">
            <div className="p-4 bg-amber-50 text-amber-600 rounded-2xl">
              <MessageSquare size={24} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Pending Review</p>
              <p className="text-2xl font-black text-slate-900">{leads.filter(l => l.status === 'new').length}</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center space-x-4">
            <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl">
              <CheckCircle size={24} />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Conversion Rate</p>
              <p className="text-2xl font-black text-slate-900">
                {leads.length > 0 ? Math.round((leads.filter(l => l.status === 'closed').length / leads.length) * 100) : 0}%
              </p>
            </div>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="px-8 py-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Lead Info</th>
                  <th className="px-8 py-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Service</th>
                  <th className="px-8 py-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Message</th>
                  <th className="px-8 py-6 text-xs font-bold text-slate-400 uppercase tracking-widest">Status</th>
                  <th className="px-8 py-6 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredLeads.length > 0 ? (
                  filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="px-8 py-6">
                        <p className="font-bold text-slate-900">{lead.name}</p>
                        <p className="text-sm text-slate-500">{lead.email}</p>
                        <p className="text-[10px] text-slate-400 mt-1">{new Date(lead.timestamp).toLocaleDateString()}</p>
                      </td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full">
                          {lead.service}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                        <p className="text-sm text-slate-600 max-w-xs truncate" title={lead.message}>
                          {lead.message}
                        </p>
                      </td>
                      <td className="px-8 py-6">
                        <select
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value as any)}
                          className={`text-xs font-bold px-3 py-1.5 rounded-lg border-none outline-none cursor-pointer ${
                            lead.status === 'new' ? 'bg-amber-100 text-amber-700' :
                            lead.status === 'contacted' ? 'bg-blue-100 text-blue-700' :
                            'bg-emerald-100 text-emerald-700'
                          }`}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="closed">Closed</option>
                        </select>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <button 
                          onClick={() => handleDelete(lead.id)}
                          className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-8 py-20 text-center text-slate-400">
                      <div className="flex flex-col items-center">
                        <BarChart3 size={48} className="mb-4 opacity-20" />
                        <p className="font-bold">No leads found in this category.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
