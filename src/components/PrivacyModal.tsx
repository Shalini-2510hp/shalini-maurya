import React from "react";
import { X } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1528]/50 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-[#FAF7F2] border border-[#DFD4C4] shadow-[0_8px_32px_rgba(11,21,40,0.08)] overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E6DFD5] bg-[#F5EFE6]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
            <h3 id="privacy-modal-title" className="text-sm font-serif font-normal text-[#0B1528]">
              Concept Privacy & Research Notice
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#7E8B9E] hover:text-[#0B1528] transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 text-xs sm:text-sm text-[#475266] space-y-4 max-h-[70vh] overflow-y-auto font-sans font-light">
          <div>
            <h4 className="font-serif font-normal text-[#0B1528] text-base mb-1">
              1. Nature of This Exploration
            </h4>
            <p className="leading-relaxed">
              Dhanrit is an early-stage concept currently undertaking problem validation and
              exploratory research in India. This website does not offer transactional banking services,
              live loan underwriting, credit score reports, or customer debt collection.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-normal text-[#0B1528] text-base mb-1">
              2. Voluntary Participation Only
            </h4>
            <p className="leading-relaxed">
              Any feedback submitted via our research forms or external survey links is strictly voluntary.
              We only ask for qualitative thoughts regarding store credit management challenges and optional
              contact channels for follow-up dialogues.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-normal text-[#0B1528] text-base mb-1">
              3. No Customer Credit Data Collection
            </h4>
            <p className="leading-relaxed">
              We do NOT solicit, record, or store customer identification documents (such as Aadhaar or PAN),
              banking credentials, UPI PINs, or customer debt amounts.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-normal text-[#0B1528] text-base mb-1">
              4. Responsible Data Handling & Future Compliance
            </h4>
            <p className="leading-relaxed">
              Should Dhanrit proceed to functional prototype stages, all technical architecture will be designed
              to comply strictly with the Digital Personal Data Protection Act (DPDP Act) and applicable RBI
              directions. No information will ever be sold, distributed to third-party telemarketers, or made public.
            </p>
          </div>

          <div>
            <h4 className="font-serif font-normal text-[#0B1528] text-base mb-1">
              5. Inquiries & Feedback Contact
            </h4>
            <p className="leading-relaxed">
              For questions regarding our exploratory research or to request removal of any feedback provided,
              reach out to our research contact placeholder at{" "}
              <span className="font-mono text-[#0B1528] font-semibold">{SITE_CONFIG.contactEmail}</span>.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#E6DFD5] bg-[#F5EFE6] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-[#0B1528] bg-[#FAF7F2] border border-[#0B1528] hover:bg-[#EFE8DD] transition-colors"
          >
            Understood
          </button>
        </div>

      </div>
    </div>
  );
};
