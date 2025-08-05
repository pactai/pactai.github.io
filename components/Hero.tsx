import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
       <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[40rem] w-[80rem] -translate-x-1/2 bg-[radial-gradient(50%_40%_at_50%_0%,rgba(13,148,136,0.08),transparent)]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-x-16 lg:items-center">
          <div className="lg:col-span-1">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
                Settle contract disputes in <span className="text-teal-600">days</span>, not months.
              </h1>
              <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg sm:text-xl text-slate-600">
                Pact.ai is the arbitration AI helping freelancers, agencies, and small businesses resolve disputes faster, enforce scope, and get paid.
              </p>
              <div className="mt-10 flex flex-col items-center lg:items-start gap-4">
                <a
                  href="https://philipolivierjean.notion.site/245efd07666780a0aaaee27db46563c0?pvs=105"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full max-w-xs text-center bg-teal-600 text-white hover:bg-teal-700 px-8 py-3 rounded-lg text-base font-semibold transition-colors shadow-lg shadow-teal-600/30 transform hover:scale-105"
                >
                  Get updates & early access
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 mt-20 lg:mt-0">
            <img
              src="https://raw.githubusercontent.com/pactai/public/main/Mockup_hero.png"
              alt="https://raw.githubusercontent.com/pactai/public/main/Mockup_hero.png"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;