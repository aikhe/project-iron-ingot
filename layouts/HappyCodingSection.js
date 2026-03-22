import Image from "next/image";

export default function HappyCodingSection() {
  return (
    <section className="relative w-full bg-[#1B1B1B] py-[8rem]">
      {/* Centered Content Container */}
      <div className="section-container px-[6rem]">
        <div className="flex items-center justify-center gap-[4rem]">
          {/* Graduation Bot Image */}
          <div className="relative w-[280px] h-[280px]">
            <Image
              src="/mascot/grad-bot.png"
              alt="Graduation Bot"
              fill
              className="object-contain"
            />
          </div>

          {/* Typography */}
          <h2 className="font-minecraft text-white text-[3.5rem] tracking-wider uppercase leading-none mt-4">
            HAPPY CODING!
          </h2>
        </div>
      </div>
    </section>
  );
}
