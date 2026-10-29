import React from "react";
import { SITE_CONFIG } from "../config/site";

export const EditorialBeginning: React.FC = () => {
  const validationRoadmap = [
    {
      phase: "01",
      title: "Problem Validation",
      status: "In Progress",
      desc: "In-depth qualitative conversations with kirana store owners across Raipur and Bhilai on udhaar customs, seasonal cycles, and repayment delays.",
    },
    {
      phase: "02",
      title: "Workflow Refinement",
      status: "Upcoming",
      desc: "Testing paper and minimal digital ledger concepts to measure merchant ease of use and customer acceptance.",
    },
    {
      phase: "03",
      title: "Feasibility Review",
      status: "Planned",
      desc: "Evaluating data privacy frameworks under India's DPDP Act, along with payment and regulatory requirements.",
    },
  ];

  return (
    <section id="beginning" className="py-20 sm:py-28 bg-[#F6F2EB] border-b border-[#E6DFD5]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Marker */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#7E8B9E] mb-6">
          <span className="text-[#C85A32]">Section 05</span>
          <span>·</span>
          <span>Our Beginning</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Narrative Column */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0B1528] tracking-tight leading-[1.12]">
              Listening before we build.
            </h2>

            <p className="mt-6 text-base text-[#475266] leading-relaxed font-sans font-light">
              We are beginning by understanding the day-to-day credit challenges of kirana stores,
              provision shops, and neighborhood retailers.
            </p>

            <div className="mt-6 p-5 border border-[#DFD4C4] bg-[#FCFAF6]">
              <div className="text-xs font-mono uppercase tracking-wider text-[#C85A32] mb-1">
                Field Research Focus
              </div>
              <div className="text-lg font-serif text-[#0B1528] mb-2">
                {SITE_CONFIG.initialFocusLocation}
              </div>
              <p className="text-xs text-[#57534E] leading-relaxed font-sans font-light">
                Raipur and Bhilai offer a rich snapshot of urban and semi-industrial neighborhood commerce,
                where generational kirana relationships intersect with modern digital payments.
              </p>
            </div>

            <p className="mt-6 text-xs text-[#7E8B9E] font-sans leading-relaxed">
              Dhanrit does not claim an established merchant network, institutional pilot, or commercial
              traction. We are an early-stage concept testing core assumptions.
            </p>
          </div>

          {/* Validation Roadmap List (Folio style) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono uppercase tracking-widest text-[#7E8B9E] pb-2 border-b border-[#DFD4C4]">
              Validation Milestones
            </div>

            {validationRoadmap.map((item) => (
              <div
                key={item.phase}
                className="p-6 bg-[#FCFAF6] border border-[#E2D8C9]"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-serif text-lg text-[#0B1528]">
                    {item.phase}. {item.title}
                  </span>
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 border ${
                      item.status === "In Progress"
                        ? "border-[#C85A32] text-[#C85A32] bg-[#F9EFEA]"
                        : "border-[#DFD4C4] text-[#7E8B9E] bg-[#FAF7F2]"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <p className="text-xs text-[#57534E] leading-relaxed font-sans font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
