import React from 'react';
import { FeatureIcons } from '../constants';

const featuresData = [
    {
        icon: FeatureIcons.invoice,
        title: "Unpaid invoices",
        description: "File today, get a binding award this week."
    },
    {
        icon: FeatureIcons.scope,
        title: "Scope creep",
        description: "Enforce only what you agreed, no endless threads."
    },
    {
        icon: FeatureIcons.services,
        title: "Services not rendered",
        description: "Submit evidence, get a decision you can act on."
    }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Built for the modern gig economy</h2>
        </div>
        
        <div className="mt-16 max-w-5xl mx-auto grid gap-12 md:grid-cols-3 text-slate-900">
            {featuresData.map((feature, index) => (
                <div key={index} className="flex flex-col items-start text-left">
                    {feature.icon}
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-slate-600">{feature.description}</p>
                </div>
            ))}
        </div>

        <div className="mt-20">
            <div className="relative w-full rounded-xl shadow-xl overflow-hidden" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
                <iframe 
                    className="absolute top-0 left-0 w-full h-full" 
                    src="https://www.youtube.com/embed/sGRAMvl9r9A"
                    title="Product Demo Video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                </iframe>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
