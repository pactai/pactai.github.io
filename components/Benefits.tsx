import React from 'react';
import { BenefitIcons } from '../constants';

const BenefitItem: React.FC<{ icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }> = ({ icon: Icon, title, children }) => (
  <div>
    <div className="text-slate-900">
      {/* The original icons in constants.tsx have a default h-6 w-6. We override it here to h-8 w-8 and add margin */}
      <Icon className="h-8 w-8 mb-4" />
    </div>
    <h3 className="text-lg leading-6 font-semibold text-slate-900">{title}</h3>
    <p className="mt-2 text-base text-slate-600">{children}</p>
  </div>
);

const Benefits: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Safeguard every contract on one integrated, secure platform</h2>
        </div>
        <div className="mt-16">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-12 md:gap-y-12">
            <BenefitItem icon={BenefitIcons.consistent} title="Consistent outcomes">
              We double-check each decision, hundreds of times; anything unclear routes to a human arbitrator.
            </BenefitItem>
            <BenefitItem icon={BenefitIcons.surprises} title="Fewer surprises">
              Both sides confirm documents and answer targeted questions before any decision.
            </BenefitItem>
            <BenefitItem icon={BenefitIcons.steps} title="Clear, enforceable next steps">
              Every finding cites a clause or exhibit; export a court-ready PDF.
            </BenefitItem>
            <BenefitItem icon={BenefitIcons.bias} title="Less bias, stronger privacy">
              Identities can be hidden during review; data is encrypted and fully auditable.
            </BenefitItem>
            <BenefitItem icon={BenefitIcons.enforceable} title="Enforceable by design">
                Use our clause and registration to enable legally binding awards.
            </BenefitItem>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Benefits;