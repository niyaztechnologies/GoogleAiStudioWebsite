
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import AIAuditPage from './pages/AIAuditPage';
import ContactPage from './pages/ContactPage';
import AdminDashboard from './components/AdminDashboard';

export type Page = 'home' | 'services' | 'about' | 'strategy' | 'contact' | 'admin';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash;
      // Robust cleaning: remove #, then remove leading /, then split to get the primary route
      const cleanHash = rawHash.startsWith('#/') 
        ? rawHash.slice(2).split('/')[0] 
        : rawHash.startsWith('#') 
          ? rawHash.slice(1).split('/')[0] 
          : '';
      
      const validPages: Page[] = ['home', 'services', 'about', 'strategy', 'contact', 'admin'];
      const targetPage = cleanHash as Page;

      if (validPages.includes(targetPage)) {
        setCurrentPage(targetPage);
      } else if (!rawHash || rawHash === '#' || rawHash === '#/') {
        setCurrentPage('home');
      } else {
        // Redirect unknown hashes to home
        window.location.hash = '#/home';
      }
      
      // Always scroll to top on page change
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run once on mount to handle initial URL

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'services': return <ServicesPage />;
      case 'about': return <AboutPage />;
      case 'strategy': return <AIAuditPage />;
      case 'contact': return <ContactPage />;
      case 'admin': return <AdminDashboard onClose={() => window.location.hash = '#/home'} />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navigation />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
