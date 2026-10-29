import React from "react";
import { DhanritLogo } from "./DhanritLogo";
import { SITE_CONFIG } from "../config/site";

interface EditorialFooterProps {
  onOpenPrivacy: () => void;
  onOpenFeedback: () => void;
}

export const EditorialFooter: React.FC<EditorialFooterProps> = ({
  onOpenPrivacy,
  onOpenFeedback,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAF7F2] text-[#0B1528] pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Main Colophon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E6DFD5] items-start">
          
          {/* Brand & Proposition */}
          <div className="md:col-span-6 space-y-4">
            <DhanritLogo size="sm" />
            
            <p className="text-sm text-[#475266] max-w-sm leading-relaxed font-sans font-light">
              An early-stage concept for responsible informal credit management and repayment tracking for India's small merchants.
            </p>

            <div className="text-xs text-[#7E8B9E] font-mono">
              Research Base: Raipur & Bhilai, Chhattisgarh
            </div>
          </div>

          {/* Editorial Index */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#7E8B9E]">
              Index
            </div>
            <ul className="space-y-2 text-xs font-sans text-[#475266]">
              <li>
                <a href="#problem" className="hover:text-[#0B1528] transition-colors">
                  The Ground Reality
                </a>
              </li>
              <li>
                <a href="#approach" className="hover:text-[#0B1528] transition-colors">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#0B1528] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-[#0B1528] transition-colors">
                  Trust & Privacy
                </a>
              </li>
              <li>
                <a href="#beginning" className="hover:text-[#0B1528] transition-colors">
                  Field Research
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenFeedback}
                  className="hover:text-[#C85A32] text-[#0B1528] font-medium transition-colors text-left"
                >
                  Share Perspective →
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Inquiries */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[#7E8B9E]">
              Inquiries
            </div>
            <p className="text-xs text-[#475266] leading-relaxed font-sans">
              For research dialogues, incubator questions, or advisory notes:
            </p>
            <div className="text-xs font-mono text-[#0B1528]">
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="underline underline-offset-4 decoration-[#DFD4C4] hover:decoration-[#0B1528]"
              >
                {SITE_CONFIG.contactEmail}
              </a>
            </div>
            <p className="text-[10px] text-[#7E8B9E] font-mono italic">
              [Email placeholder — replace with verified domain address before launch]
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenPrivacy}
                className="text-xs text-[#475266] hover:text-[#0B1528] underline underline-offset-4 decoration-[#DFD4C4] transition-colors"
              >
                Concept Privacy Notice
              </button>
            </div>
          </div>

        </div>

        {/* Quiet Legal & Copyright Baseline */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#7E8B9E] gap-4 font-sans">
          <div>
            © {currentYear} Dhanrit. All rights reserved.
          </div>
          <div className="text-[11px] text-[#7E8B9E] max-w-md sm:text-right">
            Dhanrit is an early-stage research concept. Not an NBFC, banking institution, or payment collection agency.
          </div>
        </div>

      </div>
    </footer>
  );
};
