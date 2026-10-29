import React, { useState } from "react";
import { DhanritLogo } from "./DhanritLogo";
import { SITE_CONFIG } from "../config/site";
import { ArrowUpRight } from "lucide-react";

interface EditorialNavbarProps {
  onOpenFeedback: () => void;
}

export const EditorialNavbar: React.FC<EditorialNavbarProps> = ({ onOpenFeedback }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-[#E6DFD5]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Brand Wordmark & Mark */}
          <a
            href="#"
            className="flex items-center gap-2.5 focus-visible:ring-1 focus-visible:ring-[#C85A32]"
            aria-label="Dhanrit Home"
          >
            <DhanritLogo size="sm" />
          </a>

          {/* Quiet Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-sans font-medium text-[#475266]"
            aria-label="Main Navigation"
          >
            {SITE_CONFIG.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#0B1528] transition-colors py-1 hover:border-b hover:border-[#0B1528]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Restrained Text-Style CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenFeedback}
              type="button"
              className="group inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-[#0B1528] hover:text-[#C85A32] transition-colors py-1.5 border-b border-[#0B1528] hover:border-[#C85A32]"
            >
              <span>Share perspective</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Menu Minimal Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden text-xs font-mono uppercase tracking-wider text-[#475266] hover:text-[#0B1528] px-2 py-1 border border-[#E6DFD5]"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? "Close" : "Menu"}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E6DFD5] bg-[#FAF7F2] px-6 py-6 space-y-4">
          {SITE_CONFIG.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-sans text-[#475266] hover:text-[#0B1528] py-1 border-b border-[#F0EAE1]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenFeedback();
              }}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C85A32] hover:text-[#A9431E]"
            >
              <span>Share your perspective →</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
