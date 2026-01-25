import React from "react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <div className="text-center">
        <img
          src="/design/Pact Logo Black SVG.svg"
          alt="Pact"
          className="h-20 md:h-28 mx-auto"
        />
        <a
          href="mailto:hello@usepact.ai"
          className="mt-12 inline-block text-slate-600 hover:text-teal-600 text-sm tracking-wide transition-colors"
        >
          hello@usepact.ai
        </a>
      </div>
    </div>
  );
};

export default App;
