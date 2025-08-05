import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <a href="#" className="text-2xl font-bold text-slate-900">
            pact<span className="text-teal-600">.ai</span>
          </a>
        </div>
        <p className="mt-8 text-center text-base text-slate-500">
          &copy; {new Date().getFullYear()} Pact.ai. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;