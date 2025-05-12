import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-secondary text-slate-300 p-6 mt-12 text-center font-sans">
      <div className="container mx-auto">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} AIProductivityBooster.com - All Rights Reserved.
        </p>
        <p>
          Contact: Pete Armstrong | <a href="mailto:admin@aiproductivitybooster.com" className="text-slate-300 hover:text-brand-accent transition-colors duration-300 ease-in-out">admin@aiproductivitybooster.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
