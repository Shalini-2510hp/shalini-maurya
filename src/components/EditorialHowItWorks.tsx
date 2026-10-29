import React from "react";
import { ArrowRight } from "lucide-react";

export const EditorialHowItWorks: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Customer Records",
      body: "Record customer details with appropriate permission.",
      detail:
        "The merchant creates a clear digital ledger entry only with explicit customer consent, ensuring transparency on both sides.",
      // Custom minimal SVG drawing 1: The Consent Folio
      renderIllustration: () => (
        <svg viewBox="0 0 120 80" className="w-24 h-16 select-none" fill="none">
          <rect x="15" y="10" width="90" height="60" fill="#FAF7F2" stroke="#DFD4C4" strokeWidth="1" />
          <line x1="25" y1="22" x2="65" y2="22" stroke="#0B1528" strokeWidth="1.2" />
          <line x1="25" y1="32" x2="85" y2="32" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="25" y1="42" x2="75" y2="42" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="25" y1="52" x2="60" y2="52" stroke="#CBD5E1" strokeWidth="1" />
          {/* Subtle lock/permission indicator */}
          <circle cx="88" cy="22" r="6" fill="#F4EDE4" stroke="#C85A32" strokeWidth="1" />
          <path d="M86 22 L88 24 L92 20" stroke="#C85A32" strokeWidth="1" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "Risk Assessment",
      body: "Use permitted information to support more informed credit decisions.",
      detail:
        "Evaluate store credit thresholds using permitted transaction history and shopkeeper-defined guidelines, rather than opaque black-box scores.",
      // Custom minimal SVG drawing 2: The Balance Rule
      renderIllustration: () => (
        <svg viewBox="0 0 120 80" className="w-24 h-16 select-none" fill="none">
          <line x1="20" y1="56" x2="100" y2="56" stroke="#DFD4C4" strokeWidth="1" />
          <line x1="60" y1="20" x2="60" y2="56" stroke="#0B1528" strokeWidth="1" />
          <line x1="30" y1="30" x2="90" y2="30" stroke="#0B1528" strokeWidth="1" />
          {/* Left indicator: Mutual trust */}
          <circle cx="30" cy="40" r="5" fill="#FAF7F2" stroke="#0B1528" strokeWidth="1" />
          <line x1="30" y1="30" x2="30" y2="35" stroke="#CBD5E1" strokeWidth="1" />
          {/* Right indicator: Store limit */}
          <circle cx="90" cy="40" r="5" fill="#FAF7F2" stroke="#C85A32" strokeWidth="1" />
          <line x1="90" y1="30" x2="90" y2="35" stroke="#CBD5E1" strokeWidth="1" />
          {/* Fulcrum */}
          <circle cx="60" cy="30" r="2" fill="#C85A32" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "Repayment Tracking",
      body: "Organize outstanding dues, repayment dates, and reminders.",
      detail:
        "Maintain clear settlement timelines aligned with customer pay cycles. Send courteous, polite reminders that keep community goodwill intact.",
      // Custom minimal SVG drawing 3: The Timeline Horizon
      renderIllustration: () => (
        <svg viewBox="0 0 120 80" className="w-24 h-16 select-none" fill="none">
          <line x1="15" y1="40" x2="105" y2="40" stroke="#DFD4C4" strokeWidth="1" strokeDasharray="3 3" />
          {/* Date points */}
          <circle cx="25" cy="40" r="4" fill="#FAF7F2" stroke="#CBD5E1" strokeWidth="1" />
          <circle cx="60" cy="40" r="4" fill="#FAF7F2" stroke="#CBD5E1" strokeWidth="1" />
          <circle cx="95" cy="40" r="5" fill="#FAF7F2" stroke="#C85A32" strokeWidth="1.5" />
          <path d="M93 40 L95 42 L98 38" stroke="#C85A32" strokeWidth="1.2" strokeLinecap="round" />
          {/* Gentle reminder arc above */}
          <path d="M60 32 C70 20 85 20 95 32" stroke="#C85A32" strokeWidth="1" strokeLinecap="round" fill="none" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#FAF7F2] border-b border-[#E6DFD5]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#7E8B9E] mb-6">
          <span className="text-[#C85A32]">Section 03</span>
          <span>·</span>
          <span>The Operational Flow</span>
        </div>

        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0B1528] tracking-tight leading-[1.12]">
            A simple, connected flow.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475266] leading-relaxed font-sans font-light">
            Designed to bring quiet structure to store credit without interrupting the natural rhythm of neighborhood commerce.
          </p>
        </div>

        {/* The 3-Step Connected Flow (Delicate horizontal connectors, light and readable) */}
        <div className="mt-16 relative">
          
          {/* Thin connector line running across top of steps on desktop */}
          <div
            className="hidden lg:block absolute top-12 left-12 right-12 h-[1px] bg-[#E2D8C9]"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 relative z-10">
            {steps.map((s, idx) => (
              <div key={s.step} className="flex flex-col items-start">
                
                {/* Step Numeral + Custom Minimal Illustration */}
                <div className="flex items-center justify-between w-full mb-6 pb-4 border-b border-[#E6DFD5] lg:border-b-0 lg:pb-0">
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-2xl sm:text-3xl font-normal text-[#C85A32]">
                      {s.step}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#7E8B9E]">
                      Step
                    </span>
                  </div>
                  <div className="p-2 border border-[#E6DFD5] bg-[#FCFAF6]">
                    {s.renderIllustration()}
                  </div>
                </div>

                <h3 className="text-xl font-serif text-[#0B1528] mb-2">
                  {s.title}
                </h3>

                <p className="text-sm font-medium text-[#0B1528] mb-2 font-sans">
                  “{s.body}”
                </p>

                <p className="text-xs text-[#57534E] leading-relaxed font-sans font-light">
                  {s.detail}
                </p>

                <div className="mt-6 pt-3 border-t border-[#F0EAE1] w-full text-[11px] font-mono text-[#7E8B9E]">
                  Phase {s.step} · Privacy Preserved
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Short Privacy Note Callout (Light, restrained typography, no dark block) */}
        <div className="mt-16 p-6 border border-[#DFD4C4] bg-[#F5EFE6] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm text-[#475266] leading-relaxed max-w-2xl font-sans">
            <strong className="text-[#0B1528] font-medium font-serif text-base block sm:inline mr-2">
              Privacy Standard:
            </strong>
            “Customer information should only be accessed and used with appropriate authorization and safeguards.”
          </p>
          <span className="text-xs font-mono text-[#C85A32] uppercase tracking-wider shrink-0 font-medium">
            Authorization First
          </span>
        </div>

      </div>
    </section>
  );
};
