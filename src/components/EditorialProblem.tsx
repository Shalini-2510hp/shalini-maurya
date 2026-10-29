import React from "react";

export const EditorialProblem: React.FC = () => {
  const challenges = [
    {
      num: "01",
      title: "Delayed Repayment Cycles",
      summary:
        "Customers often repay later than expected, straining the shopkeeper's working capital and daily supplier purchasing.",
      note: "Working capital friction",
    },
    {
      num: "02",
      title: "Fragmented Ledger Keeping",
      summary:
        "Tracking fluctuating balances across loose paper slips and notebooks consumes hours and leaves room for honest disputes.",
      note: "Administrative strain",
    },
    {
      num: "03",
      title: "Uncertain Credit Boundaries",
      summary:
        "Merchants lack simple, dignified rules when deciding how much credit to extend, relying solely on unassisted intuition.",
      note: "Decision ambiguity",
    },
  ];

  return (
    <section id="problem" className="py-20 sm:py-28 bg-[#FAF7F2] border-b border-[#E6DFD5]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#7E8B9E] mb-6">
          <span className="text-[#C85A32]">Section 01</span>
          <span>·</span>
          <span>The Ground Reality</span>
        </div>

        {/* Major Editorial Headline */}
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#0B1528] tracking-tight leading-[1.14] text-balance">
            Everyday credit keeps local commerce moving. Unpaid dues make it harder.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#475266] leading-relaxed font-sans font-light max-w-2xl">
            In neighborhood retail, informal credit (udhaar) is not a defect—it is the lifeblood
            of community commerce. But when repayment timelines drift without clarity, small
            merchants quietly shoulder the financial strain.
          </p>
        </div>

        {/* Typography-led 3-column folio with hairline dividers (NO ROUNDED CARDS) */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 border-t border-[#E6DFD5]">
          {challenges.map((c, idx) => (
            <div
              key={c.num}
              className={`pt-8 pb-10 ${
                idx !== 0 ? "md:border-l md:border-[#E6DFD5] md:pl-8 lg:pl-10" : ""
              } ${idx !== challenges.length - 1 ? "md:pr-8 lg:pr-10" : ""}`}
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-serif text-3xl sm:text-4xl text-[#C85A32] font-normal">
                  {c.num}
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#7E8B9E]">
                  {c.note}
                </span>
              </div>

              <h3 className="text-lg font-serif font-normal text-[#0B1528] mb-3">
                {c.title}
              </h3>

              <p className="text-sm text-[#475266] leading-relaxed font-sans font-light">
                {c.summary}
              </p>

              <div className="mt-8 pt-4 border-t border-[#F0EAE1] text-[11px] font-mono text-[#7E8B9E]">
                Direct merchant interview insight
              </div>
            </div>
          ))}
        </div>

        {/* Editorial footnote */}
        <div className="pt-6 border-t border-[#E6DFD5] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#7E8B9E] gap-2">
          <span>Observations gathered from small retail merchants in central India.</span>
          <span className="font-mono text-[#0B1528]">Qualitative inquiry · No fabricated percentages</span>
        </div>

      </div>
    </section>
  );
};
