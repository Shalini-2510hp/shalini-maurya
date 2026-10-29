import React, { useState } from "react";
import { X, ExternalLink, CheckCircle2, Shield } from "lucide-react";
import { SITE_CONFIG } from "../config/site";

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    role: "Kirana / Grocery Shopkeeper",
    location: "Raipur / Bhilai",
    primaryChallenge: "Delayed or unpredictable customer repayment",
    thoughts: "",
    contactInfo: "",
    consentGiven: false,
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consentGiven) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1528]/50 backdrop-blur-xs overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="feedback-modal-title"
    >
      <div className="relative w-full max-w-lg bg-[#FAF7F2] border border-[#DFD4C4] shadow-[0_8px_32px_rgba(11,21,40,0.08)] overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E6DFD5] bg-[#F5EFE6]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
            <h3 id="feedback-modal-title" className="text-sm font-serif font-normal text-[#0B1528]">
              Merchant Inquiry & Perspective
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

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-10 h-10 border border-[#C85A32] rounded-full flex items-center justify-center mx-auto mb-4 text-[#C85A32]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-serif text-[#0B1528] mb-2">
                Thank you for sharing your perspective.
              </h4>
              <p className="text-sm text-[#475266] max-w-sm mx-auto leading-relaxed mb-6 font-sans font-light">
                Your voluntary input directly informs our ground research as we explore more respectful
                ways to support shopkeepers.
              </p>
              <button
                onClick={handleReset}
                className="px-5 py-2 text-xs font-semibold text-[#0B1528] bg-[#FAF7F2] border border-[#0B1528] hover:bg-[#EFE8DD] transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <div>
              {/* Privacy and Non-Credit Data Notice */}
              <div className="mb-5 p-3.5 border border-[#DFD4C4] bg-[#F5EFE6] text-xs text-[#5A4738] leading-relaxed flex items-start gap-2.5">
                <Shield className="w-4 h-4 text-[#C85A32] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-[#0B1528] font-medium font-serif">Research Notice:</strong> We do NOT collect
                  customer ledger data, debt accounts, banking credentials, or Aadhaar/PAN. Your
                  participation is entirely voluntary and exploratory.
                </p>
              </div>

              {/* External Survey Shortcut */}
              <div className="mb-5 p-3 border border-[#E6DFD5] bg-[#FFFFFF] flex items-center justify-between text-xs font-sans">
                <span className="text-[#57534E]">Prefer a formal survey link?</span>
                <a
                  href={SITE_CONFIG.feedbackFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#C85A32] hover:text-[#A9431E] transition-colors"
                >
                  <span>Open Survey</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Quick Research Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#7E8B9E] mb-1">
                    Your Perspective
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3 py-2 text-xs font-sans border border-[#DFD4C4] bg-white text-[#0B1528] focus:border-[#C85A32]"
                  >
                    <option value="Kirana / Grocery Shopkeeper">Kirana / Grocery Shopkeeper</option>
                    <option value="General Merchant / Retailer">General Merchant / Retailer</option>
                    <option value="Customer / Shopper">Customer / Neighborhood Shopper</option>
                    <option value="Incubator / Investor / Advisor">Incubator / Investor / Advisor</option>
                    <option value="Other Supporter">Other Supporter</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#7E8B9E] mb-1">
                    Location
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3 py-2 text-xs font-sans border border-[#DFD4C4] bg-white text-[#0B1528] focus:border-[#C85A32]"
                  >
                    <option value="Raipur / Bhilai">Raipur / Bhilai, Chhattisgarh</option>
                    <option value="Other Chhattisgarh">Other Location in Chhattisgarh</option>
                    <option value="Other Indian City">Other Indian City</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#7E8B9E] mb-1">
                    What is the most difficult aspect of udhaar?
                  </label>
                  <select
                    value={formData.primaryChallenge}
                    onChange={(e) => setFormData({ ...formData, primaryChallenge: e.target.value })}
                    className="w-full px-3 py-2 text-xs font-sans border border-[#DFD4C4] bg-white text-[#0B1528] focus:border-[#C85A32]"
                  >
                    <option value="Delayed or unpredictable customer repayment">
                      Delayed or unpredictable customer repayment
                    </option>
                    <option value="Difficulty maintaining paper ledger notes">
                      Difficulty maintaining paper ledger notes
                    </option>
                    <option value="Uncertainty when a new customer asks for credit">
                      Uncertainty when a new customer asks for credit
                    </option>
                    <option value="Awkwardness of asking customers for overdue payments">
                      Awkwardness of asking customers for overdue payments
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#7E8B9E] mb-1">
                    Brief note or recommendation (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.thoughts}
                    onChange={(e) => setFormData({ ...formData, thoughts: e.target.value })}
                    placeholder="e.g. Dignified settlement schedules, WhatsApp receipts, local vernacular..."
                    className="w-full px-3 py-2 text-xs font-sans border border-[#DFD4C4] bg-white text-[#0B1528] focus:border-[#C85A32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#7E8B9E] mb-1">
                    Email or phone (Optional, for 10-min conversation)
                  </label>
                  <input
                    type="text"
                    value={formData.contactInfo}
                    onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                    placeholder="e.g., merchant@example.com or 98XXXXXXXX"
                    className="w-full px-3 py-2 text-xs font-sans border border-[#DFD4C4] bg-white text-[#0B1528] focus:border-[#C85A32]"
                  />
                </div>

                <div className="flex items-start gap-2 pt-2">
                  <input
                    id="consent-check"
                    type="checkbox"
                    checked={formData.consentGiven}
                    onChange={(e) => setFormData({ ...formData, consentGiven: e.target.checked })}
                    className="mt-0.5 border-[#DFD4C4] text-[#C85A32] focus:ring-[#C85A32]"
                    required
                  />
                  <label htmlFor="consent-check" className="text-xs text-[#57534E] leading-snug font-sans">
                    I agree to share this feedback voluntarily for Dhanrit's exploratory concept research.
                  </label>
                </div>

                <div className="pt-3 border-t border-[#E6DFD5] flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-3 py-1.5 text-xs text-[#7E8B9E] hover:text-[#0B1528] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!formData.consentGiven}
                    className="px-4 py-2 text-xs font-semibold text-white bg-[#0B1528] hover:bg-[#C85A32] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    Submit Perspective
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
