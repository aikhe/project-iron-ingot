export default function MeetCouncilAdviser() {
  return (
    <section className="relative w-full max-w-[var(--container-max-width)] w-[var(--container-width)] mx-auto px-[6rem] mt-[1.4rem] font-sans flex flex-col items-center">
      <h3 className="text-[1.6rem] font-semibold text-white leading-tight tracking-wide mb-[1.5rem]">
        Adviser
      </h3>

      <div className="relative w-full max-w-[28rem] aspect-square bg-[#242424] border border-dashed border-[#8E8E8E] flex items-center justify-center">
        {/* Corner alignment markers */}
        <div className="absolute top-[-1px] left-[-1px] w-[8px] h-[8px] bg-[#FF5154]"></div>
        <div className="absolute top-[-1px] right-[-1px] w-[8px] h-[8px] bg-[#FF5154]"></div>
        <div className="absolute bottom-[-1px] left-[-1px] w-[8px] h-[8px] bg-[#FF5154]"></div>
        <div className="absolute bottom-[-1px] right-[-1px] w-[8px] h-[8px] bg-[#FF5154]"></div>
      </div>

      <div className="flex flex-col items-center mt-[1.2rem] gap-1">
        <h4 className="text-[1.6rem] font-semibold text-white leading-[1.2] tracking-wide">
          Joemen G. Barrios
        </h4>
        <p className="text-[#8C8C8C] text-[1rem] leading-relaxed font-normal">
          CS Coordinator / Council Adviser
        </p>
      </div>
    </section>
  );
}
