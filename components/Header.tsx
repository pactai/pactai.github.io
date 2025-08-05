import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-slate-900">
              pact<span className="text-teal-600">.ai</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              <a href="https://philipolivierjean.notion.site/245efd07666780a0aaaee27db46563c0?pvs=105" target="_blank" rel="noopener noreferrer" className="bg-teal-600 text-white hover:bg-teal-700 px-4 py-2 rounded-md text-sm font-semibold transition-colors shadow-sm hover:shadow-md shadow-teal-600/20">Get updates & early access</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;