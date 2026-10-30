import React from "react";
import { SITE_CONFIG } from "../config/site";

interface ComingSoonLandingProps {
  onOpenFeedback: () => void;
  onOpenPrivacy: () => void;
}

export const ComingSoonLanding: React.FC<ComingSoonLandingProps> = ({
  onOpenFeedback,
  onOpenPrivacy,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#0B1E3F] font-sans overflow-x-hidden selection:bg-[#E05315]/20 selection:text-[#0B1E3F]">
      
      {/* ============================================================ */}
      {/* 1. TOP HEADER & HERO SECTION                                  */}
      {/* ============================================================ */}
      <section className="relative px-6 sm:px-10 lg:px-16 pt-6 sm:pt-8 pb-10 lg:pb-12 bg-[#FAF6F0]">
        
        {/* Brand Header */}
        <header className="max-w-7xl mx-auto flex items-center justify-between mb-8 sm:mb-12">
          <div className="flex items-center gap-2">
            <img
              src="/assets/aistudio/Group_1_0a51f95d.png"
              alt="Dhanrit Logo"
              className="h-11 sm:h-12 lg:h-13 w-auto object-contain select-none"
            />
          </div>
        </header>

        {/* Hero Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline & Description */}
          <div className="lg:col-span-5 flex flex-col items-start z-10">
            <h1 className="font-gotu text-5xl sm:text-6xl lg:text-[62px] xl:text-[70px] font-bold tracking-tight text-[#0B1E3F] leading-[1.12] text-balance [-webkit-text-stroke:0.35px_currentColor]">
              Udhaar ab <br />
              <span className="text-[#E05315]">samajhdari se.</span>
            </h1>

            <p className="mt-6 sm:mt-7 text-lg sm:text-xl lg:text-[22px] text-[#5A6578] leading-relaxed max-w-xl font-sans">
              Dhanrit is exploring a simpler way for small merchants to manage udhaar,
              make informed credit decisions, and track repayments.
            </p>
          </div>

          {/* Right Column: Original Artwork (Shopkeeper, Customer Records & Payment Support) */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[680px]">
              <img
                src="/assets/aistudio/Thoughtful_Shopkeeper_with_Smart_UI_Panels_9a648a5a.png"
                alt="Kirana shopkeeper managing customer udhaar records with Dhanrit"
                className="w-full h-auto object-contain select-none"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. COMING SOON SECTION                                       */}
      {/* ============================================================ */}
      <section className="relative bg-[#E8EFF7] border-t border-[#EDE4D8] px-6 sm:px-10 lg:px-16 py-12 sm:py-16 overflow-hidden flex-grow flex items-center">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center relative z-10">
          
          {/* Left: Coming soon headline */}
          <div className="md:col-span-5 lg:col-span-4 flex items-center">
            <h2 className="font-gotu text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#0B1E3F] tracking-tight">
              Coming soon...
            </h2>
          </div>

          {/* Right: Contextual Narrative */}
          <div className="md:col-span-7 lg:col-span-8 flex items-center md:border-l md:border-[#C5D7E8] md:pl-8">
            <p className="text-base sm:text-lg text-[#5A6B82] leading-relaxed font-sans font-normal max-w-2xl">
              We're learning from shopkeepers to understand their everyday challenges with udhaar.
              Dhanrit is at an early stage, and your perspective can help shape what comes next.
            </p>
          </div>

        </div>
      </section>

      {/* Subtle Colophon Footer */}
      <footer className="bg-[#FAF6F0] border-t border-[#EDE4D8] px-6 sm:px-10 lg:px-16 py-4 text-xs text-[#7E8B9E] flex flex-col sm:flex-row items-center justify-between gap-2">
        <div>
          © {new Date().getFullYear()} Dhanrit. All rights reserved. (Early-stage concept)
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenPrivacy}
            className="hover:text-[#0B1E3F] transition-colors underline"
          >
            Privacy Notice
          </button>
        </div>
      </footer>

    </div>
  );
};
