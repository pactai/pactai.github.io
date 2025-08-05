import React, { useState } from 'react';
import type { FAQItem } from '../types';
import { FAQ_DATA, ChevronDownIcon } from '../constants';

const FaqAccordionItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-slate-900">{item.question}</span>
        <ChevronDownIcon className={`w-5 h-5 text-slate-500 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-slate-600">{item.answer}</p>
        </div>
      </div>
    </div>
  );
};


const FAQ: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-slate-900">
          Frequently Asked Questions
        </h2>
        <div className="mt-12">
          {FAQ_DATA.map((item, index) => (
            <FaqAccordionItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;