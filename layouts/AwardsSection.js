import { ArrowRight } from "@geist-ui/icons";

export default function AwardsSection() {
  return (
    <section className="relative w-full max-w-[var(--container-max-width)] w-[var(--container-width)] mx-auto px-[6rem] mt-[4rem] mb-[4rem] font-sans">
      <div className="flex flex-col items-center justify-center text-center gap-[0.8rem]">
        <h2 className="text-[2.2rem] font-bold text-[var(--color-text)] leading-[1.1] tracking-[0.34%] flex items-center gap-[0.8rem]">
          Awards
          <span className="font-minecraft text-[#FF5154] font-normal inline-block translate-y-[0.38rem]">
            &
          </span>
          Achievements
          <ArrowRight size={28} className="-ml-1 text-[var(--color-text)]" />
        </h2>
        <p className="text-[#EFEFEF] text-[1.1rem] max-w-[50ch] leading-relaxed font-normal">
          Discover awards, milestones, and technical achievements
        </p>
      </div>
    </section>
  );
}
