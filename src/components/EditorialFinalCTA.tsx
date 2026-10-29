import React from "react";
import { ArrowRight } from "lucide-react";

interface EditorialFinalCTAProps {
  onOpenFeedback: () => void;
}

export const EditorialFinalCTA: React.FC<EditorialFinalCTAProps> = ({ onOpenFeedback }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF7F2] border-b border-[#E6DFD5]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center sm:text-left">
        
        <div className="text-xs font-mono uppercase tracking-widest text-[#7E8B9E] mb-6">
          Inquiry & Dialogue
        </div>

        {/* The Exact Required Typographic Closing */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0B1528] tracking-tight leading-[1.12]">
          Help us understand the realities of udhaar.
        </h2>

        <p className="mt-6 text-base sm:text-lg text-[#475266] leading-relaxed font-sans font-light max-w-2xl">
          If you are a shopkeeper, retailer, or understand the human dynamics of neighborhood credit,
          your perspective can help us shape a more respectful and practical tool.
        </p>

        {/* Restrained Text Link CTA */}
        <div className="mt-8">
          <button
            onClick={onOpenFeedback}
            type="button"
            className="group inline-flex items-center gap-2 text-base font-semibold text-[#0B1528] hover:text-[#C85A32] transition-colors border-b-2 border-[#0B1528] hover:border-[#C85A32] pb-1"
          >
            <span>Share your perspective</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
          </button>
        </div>

        <p className="mt-10 text-xs text-[#7E8B9E] font-sans">
          Voluntary concept research only · We do not collect customer debt, bank accounts, or financial records.
        </p>

      </div>
    </section>
  );
};
