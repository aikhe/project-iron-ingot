import Image from "next/image";
import { ArrowRight } from "@geist-ui/icons";

export default function CouncilAbout() {
  return (
    <section className="relative w-full max-w-[var(--container-max-width)] w-[var(--container-width)] mx-auto px-[6rem] mb-[2rem] font-sans">
      <div className="flex flex-col items-center justify-center text-center cursor-pointer group">
        {/* Robot Image */}
        <div className="relative w-[340px] h-[200px]">
          <Image
            src="/hero-bot.png"
            alt="Hero Bot"
            fill
            className="object-contain"
          />
        </div>

        {/* Text Content */}
        <h2 className="text-[2.2rem] font-bold text-[var(--color-text)] leading-[1.1] tracking-[0.34%] flex items-center gap-[0.4rem]">
          See more on{" "}
          <span className="font-minecraft text-[#FF5154] font-normal inline-block translate-y-[0.38rem]">
            About
          </span>
          <ArrowRight size={34} className="text-inherit" />
        </h2>
      </div>
    </section>
  );
}
