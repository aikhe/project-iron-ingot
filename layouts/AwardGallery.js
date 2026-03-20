import Image from "next/image";

export default function AwardGallery() {
  const cardWidth = 1000;
  const rayHeight = 220;
  const rayTopWidth = 50;

  return (
    <section className="relative w-full flex flex-col items-center pt-4 pb-2 overflow-hidden">
      {/* Robot Head */}
      <div className="relative z-30 mb-[-3.5rem]">
        <div className="relative w-[14rem] h-[14rem]">
          <Image
            src="/awards-bot.png"
            alt="Award Bot"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Ray and Content */}
      <div className="relative w-full flex flex-col items-center mt-[-1rem]">
        {/* The Ray - Using SVG for precise dashed slanted borders */}
        <div
          className="relative z-10"
          style={{ width: cardWidth, height: rayHeight }}
        >
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox={`0 0 ${cardWidth} ${rayHeight}`}
            preserveAspectRatio="none"
          >
            {/* Ray Background with Stripe Pattern */}
            <defs>
              <pattern
                id="stripePattern"
                patternUnits="userSpaceOnUse"
                width="7"
                height="6"
              >
                <image
                  href="/horizontal-stripe.svg"
                  x="0"
                  y="0"
                  width="7"
                  height="6"
                />
              </pattern>
            </defs>

            {/* The Fill */}
            <path
              d={`M${(cardWidth - rayTopWidth) / 2},0 L${(cardWidth + rayTopWidth) / 2},0 L${cardWidth},${rayHeight} L0,${rayHeight} Z`}
              fill="url(#stripePattern)"
              stroke="none"
              opacity="1"
            />

            {/* The Dashed Borders */}
            <line
              x1={(cardWidth - rayTopWidth) / 2}
              y1="0"
              x2="0"
              y2={rayHeight}
              stroke="#3A3A3A"
              strokeWidth="1"
              strokeDasharray="4 6"
            />
            <line
              x1={(cardWidth + rayTopWidth) / 2}
              y1="0"
              x2={cardWidth}
              y2={rayHeight}
              stroke="#3A3A3A"
              strokeWidth="1"
              strokeDasharray="4 6"
            />
          </svg>
        </div>

        {/* Content Section - 16/9 Card */}
        <div className="relative w-full flex justify-center items-center mt-[-1px] z-20">
          {/* Main Card Wrapper (to allow markers on top without being clipped by overflow-hidden) */}
          <div className="relative w-[1000px] aspect-[16/9]">
            {/* The Actual Card Container with Border and Overflow */}
            <div className="w-full h-full bg-[#242424] border border-[#5B5B5B] overflow-hidden flex relative">
              {/* Content Area with Vertical Gradient */}
              <div className="flex-1 p-8 flex flex-col justify-end relative z-10 bg-gradient-to-b from-[#141414]/[0.69] to-[#121212]">
                <h3 className="text-[1.6rem] font-semibold text-white mb-3 tracking-tight leading-none group-hover:text-[#FF5154] transition-colors duration-500">
                  Hack4Gov 2025
                </h3>
                <p className="text-[#EFEFEF] text-[1rem] leading-relaxed mb-4 font-normal">
                  Representing the University of Caloocan City (BS Computer
                  Science) at the NCR Hack4Gov 2025 Competition.
                </p>

                <div className="flex items-center gap-2">
                  <div className="px-2 py-0.5 bg-[#333333] text-[#EFEFEF] text-[0.8rem] font-sans font-medium uppercase tracking-wide">
                    HACK4GOV2025
                  </div>
                  <div className="px-2 py-0.5 bg-[#F02E31] text-[#EFEFEF] text-[0.8rem] font-sans font-medium tracking-wide">
                    2025
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Markers (Now outside the overflow-hidden div) */}
            <div className="absolute top-[0px] left-[0px] w-2 h-2 bg-[#FF5154] z-30"></div>
            <div className="absolute top-[0px] right-[0px] w-2 h-2 bg-[#FF5154] z-30"></div>
            <div className="absolute bottom-[0px] left-[0px] w-2 h-2 bg-[#FF5154] z-30"></div>
            <div className="absolute bottom-[0px] right-[0px] w-2 h-2 bg-[#FF5154] z-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
