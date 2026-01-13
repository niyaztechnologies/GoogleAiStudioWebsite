
export interface Lead {
  id: string;
  name: string;
  email: string;
  service: string;
  message: string;
  timestamp: number;
  status: 'new' | 'contacted' | 'closed';
}

const STORAGE_KEY = 'niyaz_tech_leads';

export const leadService = {
  getLeads: (): Lead[] => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  },

  saveLead: (lead: Omit<Lead, 'id' | 'timestamp' | 'status'>): Lead => {
    const leads = leadService.getLeads();
    const newLead: Lead = {
      ...lead,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: Date.now(),
      status: 'new'
    };
    leads.push(newLead);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
    return newLead;
  },

  updateLeadStatus: (id: string, status: Lead['status']) => {
    const leads = leadService.getLeads();
    const index = leads.findIndex(l => l.id === id);
    if (index !== -1) {
      leads[index].status = status;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
    }
  },

  deleteLead: (id: string) => {
    const leads = leadService.getLeads().filter(l => l.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
  }
};
