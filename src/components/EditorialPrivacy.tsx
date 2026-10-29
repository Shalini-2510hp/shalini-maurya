import React from "react";

export const EditorialPrivacy: React.FC = () => {
  const principles = [
    {
      title: "Responsible Data Use",
      text: "Customer records are treated as private custodian files. Information is never monetized, brokered to advertisers, or exposed to third-party telemarketers.",
    },
    {
      title: "Permission-Based Access",
      text: "Mutual trust is inherently personal. Customer records and repayment notes are created with mutual knowledge and explicit boundaries.",
    },
    {
      title: "Transparent Workflows",
      text: "Zero automated bank sweeps, aggressive collection agents, or black-box lockouts. Every step is designed to keep human dignity intact.",
    },
  ];

  return (
    <section id="privacy" className="py-24 sm:py-32 bg-[#FAF7F2] border-b border-[#E6DFD5]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Section Marker */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#7E8B9E] mb-6">
          <span className="text-[#C85A32]">Section 04</span>
          <span>·</span>
          <span>Foundational Principles</span>
        </div>

        {/* Quiet, Spacious Heading */}
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0B1528] tracking-tight leading-[1.14]">
            Trust begins with how information is handled.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#475266] leading-relaxed font-sans font-light">
            Dhanrit's proposed approach puts responsible data handling at its core. Customer
            information should not be publicly exposed or shared with unauthorized parties.
            Any future merchant insights or repayment features will require appropriate permissions,
            safeguards, and feasibility checks.
          </p>
        </div>

        {/* The 3 Core Principles: Elegant Typographic Stack */}
        <div className="mt-16 divide-y divide-[#E6DFD5] border-y border-[#E6DFD5]">
          {principles.map((p, idx) => (
            <div
              key={p.title}
              className="py-8 sm:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline"
            >
              <div className="md:col-span-4 flex items-baseline gap-3">
                <span className="text-xs font-mono text-[#C85A32]">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-serif text-[#0B1528]">
                  {p.title}
                </h3>
              </div>
              <div className="md:col-span-8">
                <p className="text-sm text-[#475266] leading-relaxed font-sans font-light">
                  {p.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet Boundary Disclaimer */}
        <div className="mt-12 text-xs text-[#7E8B9E] leading-relaxed max-w-2xl font-sans">
          <span className="font-semibold text-[#0B1528]">Regulatory Note:</span> Dhanrit does not claim
          regulatory endorsement, Reserve Bank of India (RBI) registration, or completed legal compliance
          certifications at this exploratory stage. All proposed architectures will be subjected to formal
          legal and technical validation prior to any operational rollout.
        </div>

      </div>
    </section>
  );
};
