import React from "react";

export const EditorialHeroIllustration: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div className={`relative w-full max-w-[540px] mx-auto ${className}`}>
      {/* Outer editorial frame: warm paper backing with fine hairline boundary */}
      <div className="relative bg-[#F5EFE6] border border-[#E2D8C9] p-5 sm:p-7 shadow-[0_4px_24px_rgba(11,21,40,0.04)]">
        
        {/* Editorial Header Marker */}
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#E2D8C9] text-[11px] font-mono tracking-wider text-[#7E8B9E] uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
            <span>Artifact: Bahi-Khata & Customer Folio</span>
          </div>
          <span>Ref: Raipur Study No. 04</span>
        </div>

        {/* The Open Ledger Sheet: SVG Composition */}
        <svg
          viewBox="0 0 480 340"
          className="w-full h-auto select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shadow beneath the ledger paper */}
          <rect x="22" y="24" width="436" height="296" fill="#E6DDCF" />

          {/* Ledger Paper (Warm off-white archival paper) */}
          <rect
            x="20"
            y="20"
            width="440"
            height="300"
            fill="#FCFAF6"
            stroke="#DFD4C4"
            strokeWidth="1"
          />

          {/* Traditional Red Spine Binding Ribbon (Left Margin) */}
          <rect x="20" y="20" width="16" height="300" fill="#9B3822" />
          <line x1="28" y1="20" x2="28" y2="320" stroke="#7A2816" strokeWidth="1" strokeDasharray="3 3" />

          {/* Ledger Rules (Faint traditional blue-grey lines) */}
          {[60, 90, 120, 150, 180, 210, 240, 270].map((y) => (
            <line
              key={y}
              x1="44"
              y1={y}
              x2="450"
              y2={y}
              stroke="#E8EEF5"
              strokeWidth="1"
            />
          ))}

          {/* Vertical Column Dividing Lines */}
          <line x1="105" y1="36" x2="105" y2="300" stroke="#DFD5C6" strokeWidth="1" />
          <line x1="250" y1="36" x2="250" y2="300" stroke="#DFD5C6" strokeWidth="1" />
          <line x1="360" y1="36" x2="360" y2="300" stroke="#DFD5C6" strokeWidth="1" />

          {/* Column Headers in refined typography */}
          <text x="50" y="50" fill="#7E8B9E" fontSize="9" fontFamily="monospace" letterSpacing="0.08em">
            DATE
          </text>
          <text x="115" y="50" fill="#7E8B9E" fontSize="9" fontFamily="monospace" letterSpacing="0.08em">
            CUSTOMER & FOLIO
          </text>
          <text x="260" y="50" fill="#7E8B9E" fontSize="9" fontFamily="monospace" letterSpacing="0.08em">
            TERMS & DUEDATE
          </text>
          <text x="370" y="50" fill="#7E8B9E" fontSize="9" fontFamily="monospace" letterSpacing="0.08em">
            STATUS
          </text>

          {/* Row 1: Traditional Entry */}
          <text x="50" y="80" fill="#475266" fontSize="10" fontFamily="sans-serif">
            14 Oct
          </text>
          <text x="115" y="78" fill="#0B1528" fontSize="11" fontWeight="600" fontFamily="sans-serif">
            M. Verma
          </text>
          <text x="115" y="90" fill="#7E8B9E" fontSize="8.5" fontFamily="monospace">
            Folio #084 · Household tab
          </text>
          <text x="260" y="78" fill="#475266" fontSize="10" fontFamily="sans-serif">
            Monthly salary cycle
          </text>
          <text x="260" y="90" fill="#C85A32" fontSize="9" fontFamily="sans-serif">
            Settlement: 1st Nov
          </text>
          {/* Status pill: Restrained hairline tag */}
          <rect x="370" y="70" width="70" height="18" fill="#F4EDE4" stroke="#DFD4C4" strokeWidth="1" />
          <text x="382" y="82" fill="#5A4738" fontSize="8.5" fontWeight="500" fontFamily="sans-serif">
            Consistent
          </text>

          {/* Row 2: Traditional Entry with Risk Discretion Flag */}
          <text x="50" y="110" fill="#475266" fontSize="10" fontFamily="sans-serif">
            18 Oct
          </text>
          <text x="115" y="108" fill="#0B1528" fontSize="11" fontWeight="600" fontFamily="sans-serif">
            K. Dewangan
          </text>
          <text x="115" y="120" fill="#7E8B9E" fontSize="8.5" fontFamily="monospace">
            Folio #112 · First-time tab
          </text>
          <text x="260" y="108" fill="#475266" fontSize="10" fontFamily="sans-serif">
            Initial ₹500 store limit
          </text>
          <text x="260" y="120" fill="#7E8B9E" fontSize="8.5" fontFamily="sans-serif">
            Merchant discretion rule
          </text>
          <rect x="370" y="100" width="70" height="18" fill="#FCFAF6" stroke="#C85A32" strokeWidth="1" />
          <text x="380" y="112" fill="#C85A32" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">
            Review Tab
          </text>

          {/* Row 3: Follow-up / Respectful Repayment */}
          <text x="50" y="140" fill="#475266" fontSize="10" fontFamily="sans-serif">
            22 Oct
          </text>
          <text x="115" y="138" fill="#0B1528" fontSize="11" fontWeight="600" fontFamily="sans-serif">
            R. Sahu & Bros
          </text>
          <text x="115" y="150" fill="#7E8B9E" fontSize="8.5" fontFamily="monospace">
            Folio #029 · Weekly bulk
          </text>
          <text x="260" y="138" fill="#475266" fontSize="10" fontFamily="sans-serif">
            Due every Saturday
          </text>
          <text x="260" y="150" fill="#7E8B9E" fontSize="8.5" fontFamily="sans-serif">
            Polite reminder sent
          </text>
          <rect x="370" y="130" width="70" height="18" fill="#EBF3EE" stroke="#BCD7C4" strokeWidth="1" />
          <text x="380" y="142" fill="#2E6244" fontSize="8.5" fontWeight="500" fontFamily="sans-serif">
            Scheduled
          </text>

          {/* Overlaid Paper Slip: "Merchant-Customer Mutual Record" (Tucked with brass paperclip) */}
          <g transform="translate(140, 168)">
            {/* Soft drop shadow */}
            <rect x="4" y="4" width="280" height="120" fill="#E5D9C8" />
            
            {/* The Slip itself */}
            <rect
              x="0"
              y="0"
              width="280"
              height="120"
              fill="#FFFFFF"
              stroke="#D3C7B6"
              strokeWidth="1"
            />

            {/* Fine Header on the Slip */}
            <rect x="0" y="0" width="280" height="26" fill="#FBF8F2" stroke="#E6DFD5" strokeWidth="1" />
            <text x="14" y="17" fill="#0B1528" fontSize="9.5" fontWeight="600" fontFamily="sans-serif">
              MUTUAL UNDERSTANDING RECORD
            </text>
            <text x="210" y="17" fill="#7E8B9E" fontSize="8.5" fontFamily="monospace">
              PRIVACY SAFEGUARD
            </text>

            {/* Brass paperclip representation */}
            <path
              d="M18 -8 C18 -14 26 -14 26 -8 L26 22 C26 28 14 28 14 22 L14 -4"
              stroke="#B47228"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />

            {/* Slip content */}
            <text x="14" y="46" fill="#475266" fontSize="9" fontFamily="sans-serif">
              Customer Consent Status:
            </text>
            <text x="148" y="46" fill="#0B1528" fontSize="9.5" fontWeight="600" fontFamily="sans-serif">
              Explicit & Private
            </text>

            <text x="14" y="66" fill="#475266" fontSize="9" fontFamily="sans-serif">
              Data Boundary:
            </text>
            <text x="148" y="66" fill="#0B1528" fontSize="9" fontFamily="sans-serif">
              Zero public broadcast / No ad sharing
            </text>

            <text x="14" y="86" fill="#475266" fontSize="9" fontFamily="sans-serif">
              Credit Guardrail:
            </text>
            <text x="148" y="86" fill="#C85A32" fontSize="9" fontWeight="600" fontFamily="sans-serif">
              Merchant-defined limits (Not automated lockouts)
            </text>

            {/* Red wax/stamp seal of Nyāsa / Trust in bottom right */}
            <g transform="translate(240, 92)">
              <circle cx="14" cy="10" r="14" fill="#C85A32" fillOpacity="0.12" stroke="#C85A32" strokeWidth="1" strokeDasharray="2 1.5" />
              <text x="14" y="13" textAnchor="middle" fill="#C85A32" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">
                NYĀSA
              </text>
            </g>
          </g>

          {/* Minimal Stylized Balance Scale Glyph (Representing Equilibrium / Trust) */}
          <g transform="translate(56, 175)">
            {/* Vertical pivot */}
            <line x1="28" y1="20" x2="28" y2="70" stroke="#0B1528" strokeWidth="1.2" />
            <line x1="16" y1="70" x2="40" y2="70" stroke="#0B1528" strokeWidth="1.5" />
            {/* Crossbeam */}
            <line x1="8" y1="26" x2="48" y2="26" stroke="#0B1528" strokeWidth="1.2" />
            {/* Left pan */}
            <line x1="8" y1="26" x2="4" y2="44" stroke="#7E8B9E" strokeWidth="0.8" />
            <line x1="8" y1="26" x2="16" y2="44" stroke="#7E8B9E" strokeWidth="0.8" />
            <path d="M2 44 Q10 50 18 44 Z" fill="#EAE2D5" stroke="#0B1528" strokeWidth="0.8" />
            {/* Right pan */}
            <line x1="48" y1="26" x2="40" y2="44" stroke="#7E8B9E" strokeWidth="0.8" />
            <line x1="48" y1="26" x2="52" y2="44" stroke="#7E8B9E" strokeWidth="0.8" />
            <path d="M38 44 Q46 50 54 44 Z" fill="#EAE2D5" stroke="#0B1528" strokeWidth="0.8" />
            {/* Fulcrum indicator */}
            <circle cx="28" cy="26" r="2" fill="#C85A32" />
            <text x="28" y="85" textAnchor="middle" fill="#7E8B9E" fontSize="7.5" fontFamily="monospace">
              BALANCE
            </text>
          </g>
        </svg>

        {/* Art-Directed Caption */}
        <div className="mt-4 pt-3.5 border-t border-[#E2D8C9] flex items-center justify-between text-[11px] text-[#7E8B9E]">
          <span>Traditional bahi-khata discipline reimagined</span>
          <span className="font-mono text-[#0B1528]">Non-extractive · Local</span>
        </div>

      </div>
    </div>
  );
};
