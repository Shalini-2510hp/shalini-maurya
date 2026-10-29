import React from "react";
import { ArrowRight } from "lucide-react";

export const EditorialApproach: React.FC = () => {
  return (
    <section id="approach" className="py-20 sm:py-28 bg-[#F6F2EB] border-b border-[#E6DFD5]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Marker */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#7E8B9E] mb-6">
          <span className="text-[#C85A32]">Section 02</span>
          <span>·</span>
          <span>Design Philosophy</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Editorial Thesis */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0B1528] tracking-tight leading-[1.12]">
                A deliberate architecture for everyday credit.
              </h2>

              <p className="mt-6 text-base text-[#475266] leading-relaxed font-sans font-light">
                Dhanrit aims to support better-informed credit decisions and more organized repayment
                tracking—placing customer privacy and merchant discretion at the center of the solution.
              </p>

              <blockquote className="mt-8 pl-5 border-l-2 border-[#C85A32] italic font-serif text-lg text-[#0B1528] leading-snug">
                “Informal credit is built on mutual respect. Technology should protect that trust,
                not replace it with impersonal algorithms or aggressive collection.”
              </blockquote>
            </div>

            {/* Validation Disclosure Tag */}
            <div className="mt-10 p-4 border border-[#DFD4C4] bg-[#FAF7F2] text-xs text-[#5A4738] leading-relaxed">
              <span className="font-mono uppercase font-semibold text-[#C85A32] block mb-1">
                Development Boundary
              </span>
              These capabilities represent an exploratory model. Dhanrit does not claim live bank integration,
              automated debt recovery, or algorithmic credit scoring at this idea-validation stage.
            </div>
          </div>

          {/* Right: Asymmetric Editorial Composition (Not 3 identical cards) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Capability Folio 1: Customer Records */}
            <div className="p-7 bg-[#FCFAF6] border border-[#E2D8C9] shadow-[0_2px_12px_rgba(11,21,40,0.02)]">
              <div className="flex items-baseline justify-between mb-3 border-b border-[#EFE8DD] pb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#C85A32]">
                  Pillar 01
                </span>
                <span className="text-xs font-mono text-[#7E8B9E]">
                  Mutual Consent Required
                </span>
              </div>
              <h3 className="text-xl font-serif text-[#0B1528] mb-2">
                Structured Customer Records
              </h3>
              <p className="text-sm text-[#475266] leading-relaxed font-sans font-light">
                Organize customer balances and repayment histories into private digital folios.
                Replacing fragmented slips of paper with transparent records that both shopkeeper and
                customer understand.
              </p>
              <div className="mt-4 pt-3 border-t border-[#F0EAE1] flex items-center justify-between text-xs text-[#7E8B9E]">
                <span>Replaces: Lost paper slips & forgotten dues</span>
                <span className="text-[#0B1528] font-medium">Privacy-controlled</span>
              </div>
            </div>

            {/* Capability Folio 2: Risk Assessment */}
            <div className="p-7 bg-[#FCFAF6] border border-[#E2D8C9] shadow-[0_2px_12px_rgba(11,21,40,0.02)]">
              <div className="flex items-baseline justify-between mb-3 border-b border-[#EFE8DD] pb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#C85A32]">
                  Pillar 02
                </span>
                <span className="text-xs font-mono text-[#7E8B9E]">
                  Merchant-Configured
                </span>
              </div>
              <h3 className="text-xl font-serif text-[#0B1528] mb-2">
                Informed Risk Assessment
              </h3>
              <p className="text-sm text-[#475266] leading-relaxed font-sans font-light">
                Explore permitted information and merchant-configured rules to support credit decisions.
                Setting transparent limits for new shoppers and reviewing past promptness without invasive surveillance.
              </p>
              <div className="mt-4 pt-3 border-t border-[#F0EAE1] flex items-center justify-between text-xs text-[#7E8B9E]">
                <span>Replaces: Pure unassisted guesswork</span>
                <span className="text-[#0B1528] font-medium">Discretionary rules</span>
              </div>
            </div>

            {/* Capability Folio 3: Repayment Tracking */}
            <div className="p-7 bg-[#FCFAF6] border border-[#E2D8C9] shadow-[0_2px_12px_rgba(11,21,40,0.02)]">
              <div className="flex items-baseline justify-between mb-3 border-b border-[#EFE8DD] pb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#C85A32]">
                  Pillar 03
                </span>
                <span className="text-xs font-mono text-[#7E8B9E]">
                  Dignified Follow-up
                </span>
              </div>
              <h3 className="text-xl font-serif text-[#0B1528] mb-2">
                Organized Repayment Tracking
              </h3>
              <p className="text-sm text-[#475266] leading-relaxed font-sans font-light">
                Track settlement cycles, align credit with customer salary dates, and dispatch polite,
                timely reminders that preserve warm neighborhood goodwill.
              </p>
              <div className="mt-4 pt-3 border-t border-[#F0EAE1] flex items-center justify-between text-xs text-[#7E8B9E]">
                <span>Replaces: Awkward door-to-door chasing</span>
                <span className="text-[#0B1528] font-medium">Respectful scheduling</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
