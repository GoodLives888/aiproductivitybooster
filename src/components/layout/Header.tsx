import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Home, Info, Mail, Rss, Search, Zap, } from 'lucide-react'; // Added icons

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', text: 'Home', icon: <Home size={18} /> },
    { to: '/about', text: 'About', icon: <Info size={18} /> },
    { to: '/blog', text: 'Blog', icon: <Rss size={18} /> }, // Placeholder for blog list
    { to: '/contact', text: 'Contact', icon: <Mail size={18} /> },
  ];

  return (
    <header className="bg-brand-primary text-white shadow-md sticky top-0 z-50 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Site Title */}
          <Link to="/" className="text-2xl font-bold font-heading hover:text-brand-accent transition-colors">
            AIProductivityBooster.com
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-brand-secondary hover:text-brand-accent transition-all duration-200 ${
                    isActive ? 'bg-brand-secondary text-brand-accent scale-105' : 'text-gray-200'
                  }`
                }
              >
                {link.icon}
                <span>{link.text}</span>
              </NavLink>
            ))}
            {/* Example of an icon-only button or a more distinct CTA */}
            <button 
              aria-label="Search Tools (Placeholder)"
              className="p-2 rounded-full hover:bg-brand-secondary text-gray-200 hover:text-brand-accent transition-colors"
            >
              <Search size={20} />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-200 hover:text-brand-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-accent p-2 rounded-md"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-brand-secondary absolute w-full shadow-xl pb-4">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium hover:bg-brand-primary hover:text-brand-accent transition-all duration-200 ${
                    isActive ? 'bg-brand-primary text-brand-accent' : 'text-gray-100'
                  }`
                }
              >
                {link.icon}
                <span>{link.text}</span>
              </NavLink>
            ))}
          </nav>
          {/* Example of a more prominent CTA in mobile menu */}
          <div className="mt-4 px-4">
            <Link 
              to="#get-started" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-3 rounded-md text-base font-medium text-white bg-brand-accent hover:bg-opacity-90 transition-colors"
            >
              <Zap size={18} className="inline mr-2"/> Get Started Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

