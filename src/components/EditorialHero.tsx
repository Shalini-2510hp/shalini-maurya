import React from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { EditorialHeroIllustration } from "./EditorialHeroIllustration";

interface EditorialHeroProps {
  onOpenFeedback: () => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({ onOpenFeedback }) => {
  return (
    <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-[#E6DFD5] paper-grain">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Subtle top editorial notation */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#7E8B9E] mb-8">
          <span className="text-[#C85A32] font-semibold">Concept 01</span>
          <span className="text-[#CBD5E1]">/</span>
          <span>Informal Credit Infrastructure</span>
          <span className="text-[#CBD5E1]">/</span>
          <span className="border border-[#DFD4C4] bg-[#F5EFE6] px-2 py-0.5 text-[#5A4738]">
            Early-stage concept
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left: Typographic Statement */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#0B1528] tracking-tight leading-[1.08] text-balance">
              Credit decisions deserve more clarity.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#475266] leading-relaxed max-w-xl font-sans font-light">
              Dhanrit is exploring a more thoughtful way for India's small merchants to manage
              udhaar, assess credit risk, and track repayments.
            </p>

            {/* Restrained Actions */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8">
              <button
                onClick={onOpenFeedback}
                type="button"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-[#0B1528] bg-[#FAF7F2] hover:bg-[#F2ECE1] border border-[#0B1528] px-5 py-3 transition-colors shadow-[2px_2px_0px_#0B1528]"
              >
                <span>Share your perspective</span>
                <ArrowRight className="w-4 h-4 text-[#C85A32] transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#problem"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#7E8B9E] hover:text-[#0B1528] transition-colors py-2"
              >
                <span>The reality of udhaar</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#7E8B9E]" />
              </a>
            </div>

            {/* Quiet contextual footnote */}
            <div className="mt-12 pt-6 border-t border-[#E6DFD5] w-full text-xs text-[#7E8B9E] flex items-center justify-between">
              <span>Ground research: Raipur & Bhilai</span>
              <span className="font-mono">Est. 2026</span>
            </div>
          </div>

          {/* Right: Bespoke Art-Directed Ledger Illustration */}
          <div className="lg:col-span-6 w-full">
            <EditorialHeroIllustration />
          </div>

        </div>

      </div>
    </section>
  );
};
