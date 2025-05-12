import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Ensures HelmetProvider is imported
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import BlogListPage from './pages/BlogListPage';
import BlogPostPage from './pages/BlogPostPage';

const App: React.FC = () => {
  return (
    <HelmetProvider> {/* Ensures the app is wrapped with HelmetProvider */}
      <Router>
        <div className="flex flex-col min-h-screen bg-background-main">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/blog" element={<BlogListPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              {/* Add other routes here */}
            </Routes>
          </main>
          <Footer />
          {/* Placeholder for Sticky CTA */}
          <div 
            className="fixed bottom-5 right-5 bg-brand-accent text-white p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 ease-in-out cursor-pointer z-40"
            title="Sticky CTA Placeholder"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </Router>
    </HelmetProvider>
  ) ;
};

export default App;
