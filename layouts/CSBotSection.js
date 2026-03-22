import Image from "next/image";

export default function CSBotSection() {
  return (
    <section className="relative section-container px-[6rem] mt-[2.5rem] mb-[4rem] font-sans">
      <div className="flex flex-col items-center justify-center text-center gap-[0.6rem]">
        <div className="relative w-[200px] h-[200px]">
          <Image
            src="/mascot/cs-bot.png"
            alt="CS Bot"
            fill
            className="object-contain"
          />
        </div>
        <h2 className="text-[2.2rem] font-bold text-[var(--color-text)] leading-[1.1] tracking-[0.34%] max-w-[20ch]">
          See what{" "}
          <span className="font-minecraft text-[#FF5154] font-normal">
            Ingo
          </span>{" "}
          has to offer
        </h2>
        <p className="text-[#EFEFEF] text-[1.1rem] max-w-[50ch] leading-relaxed font-normal">
          Explore projects, people, and the bscs community
        </p>
      </div>
    </section>
  );
}
