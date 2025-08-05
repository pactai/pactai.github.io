import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="bg-slate-50">
      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          <span className="block">Be the first to know</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-slate-600">
          Get updates and early access to Pact.ai. Help us shape the future of dispute resolution.
        </p>
        <a href="https://philipolivierjean.notion.site/245efd07666780a0aaaee27db46563c0?pvs=105" target="_blank" rel="noopener noreferrer" className="mt-8 w-full inline-flex items-center justify-center px-8 py-3 border border-transparent rounded-lg shadow-sm text-base font-semibold text-white bg-teal-600 hover:bg-teal-700 sm:w-auto transition-colors transform hover:scale-105 shadow-lg shadow-teal-600/30">
          Get updates & early access
        </a>
        <p className="mt-4 text-sm text-slate-500">
          No spam. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default CTA;