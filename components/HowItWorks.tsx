import React, { useState } from 'react';

const stepsData = [
  {
    number: '1',
    title: 'Add the clause & register',
    description: 'Protect your project from day one and ensure outcomes are enforceable by pasting our clause into your contract, send for e-signature, then upload the signed file—we time-stamp and register it.',
    imageUrl: 'https://raw.githubusercontent.com/pactai/public/main/Mockup_copy.png'
  },
  {
    number: '2',
    title: 'Open a case',
    description: 'Kick off resolution in minutes with a shared, guided timeline. Describe the issue, attach your exhibits, notify the other party, and track progress from claim to decision.',
    imageUrl: 'https://raw.githubusercontent.com/pactai/public/main/Mockup_initiate.png'
  },
  {
    number: '3',
    title: 'Get a binding decision',
    description: 'Act with confidence on a court-ready award delivered in days. Receive a professional, printable decision with evidence-linked reasoning—AI-led, human-supervised.',
    imageUrl: 'https://raw.githubusercontent.com/pactai/public/main/Mockup_arbitration.png'
  }
];

const StepAccordionItem: React.FC<{ step: typeof stepsData[0], isActive: boolean, onClick: () => void }> = ({ step, isActive, onClick }) => {
    return (
        <div className="border-b border-slate-200 last:border-b-0">
            <button
                onClick={onClick}
                className="flex items-start w-full py-6 text-left group"
                aria-expanded={isActive}
            >
                <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border-2 font-bold transition-all duration-300 ${isActive ? 'bg-teal-600 text-white border-teal-600' : 'bg-white border-slate-200 text-slate-600 group-hover:border-teal-300'}`}>
                    {step.number}
                </div>
                <div className="ml-5 flex-1">
                     <h3 className={`text-xl font-semibold transition-colors ${isActive ? 'text-teal-700' : 'text-slate-900 group-hover:text-teal-700'}`}>{step.title}</h3>
                     <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                          <p className="text-slate-600 pr-4">{step.description}</p>
                        </div>
                      </div>
                </div>
            </button>
        </div>
    );
}

const HowItWorks: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="py-20 sm:py-24 bg-slate-50/70">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Resolve your dispute in 3 steps</h2>
                    <p className="mt-4 text-xl text-slate-600">
                        A simple, guided workflow
                    </p>
                </div>
                
                <div className="mt-20 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-center">
                    {/* Left Column: Accordion */}
                    <div className="flex flex-col">
                        {stepsData.map((step, index) => (
                            <StepAccordionItem 
                                key={index} 
                                step={step} 
                                isActive={activeStep === index} 
                                onClick={() => setActiveStep(index)} 
                            />
                        ))}
                    </div>

                    {/* Right Column: Image */}
                    <div className="mt-12 lg:mt-0">
                        <div className="sticky top-28">
                            <img 
                                src={stepsData[activeStep].imageUrl} 
                                alt={stepsData[activeStep].title}
                                className="w-full rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;