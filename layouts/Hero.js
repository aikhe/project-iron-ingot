import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@geist-ui/icons";
import { motion } from "motion/react";
import HeroCarousel from "@/components/Home/Hero/HeroCarousel";

export default function Hero() {
  return (
    <section className="relative section-container px-[6rem] mt-[2.6rem] mb-[2rem] font-sans">
      <div className="grid grid-cols-[1.1fr_1.05fr] gap-[2rem] items-center">
        {/* Left Column: Hero Content */}
        <div className="flex flex-col items-start gap-2 pr-[2rem] -mt-16">
          {/* Welcome Tag */}
          <div className="flex -ml-10 items-center gap-4">
            <div className="relative w-[180px] h-[180px]">
              <Image
                src="/mascot/welcome-bot.png"
                alt="Welcome Bot"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex items-center -mt-16 gap-[1rem] text-[var(--color-text)]">
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66602 10.8317C6.66602 11.5417 5.84435 11.9125 5.31352 11.4842L5.24352 11.4208L0.243515 6.42083C0.100035 6.27734 0.0138431 6.08642 0.00110865 5.8839C-0.0116258 5.68138 0.0499721 5.48117 0.174348 5.32083L0.243515 5.2425L5.24352 0.2425L5.32185 0.173333L5.38602 0.128334L5.46602 0.0833337L5.49602 0.0691668L5.55185 0.0466669L5.64185 0.0200001L5.68602 0.0116666L5.73602 0.00333349L5.78352 0L5.88185 0L5.93018 0.00416676L5.98018 0.0116666L6.02352 0.0200001L6.11352 0.0466669L6.16935 0.0691668L6.27935 0.1275L6.35435 0.181667L6.42185 0.2425L6.49102 0.320834L6.53602 0.385L6.58102 0.465L6.59518 0.495L6.61768 0.550834L6.64435 0.640833L6.65268 0.685L6.66102 0.735L6.66435 0.7825L6.66602 10.8317Z"
                  fill="currentColor"
                />
              </svg>
              <span className="font-minecraft text-[1.4rem] tracking-widest mt-1">
                WELCOME!
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-[2.9rem] font-bold text-[var(--color-text)] leading-[1.1] tracking-[0.34%] mb-2">
            Your CS{" "}
            <span className="font-minecraft text-[#FF5154] font-normal">
              In
            </span>
            formation on the{" "}
            <span className="font-minecraft text-[#FF5154] font-normal">
              Go
            </span>
            !
          </h1>

          {/* Description */}
          <p className="text-[#EFEFEF] text-[1rem] max-w-[40ch] leading-relaxed mb-4 font-normal">
            Stay informed about the latest announcements, academic updates, and
            important events happening in the BSCS program.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Button className="bg-[#333333] hover:bg-[#444444] text-[var(--color-text)] border-none h-[40px] px-4 rounded-[4px] font-sans font-medium text-[0.9375rem] transition-colors">
              See whats new on the board
            </Button>
            <motion.div className="relative" initial="rest" whileHover="hover">
              <Button className="bg-gradient-to-r from-[#FF3538] to-[#DE2528] hover:brightness-110 text-white border-none h-[40px] px-4 rounded-[4px] font-sans font-medium text-[0.9375rem] transition-all flex items-center gap-[0.6rem]">
                2026 Thesis <ArrowRight size={18} />
              </Button>
              <motion.div
                className="absolute -top-[1.2rem] -right-[2.4rem] bg-white/60 rounded-[2px] px-[0.6rem] py-[0.1rem] whitespace-nowrap pointer-events-none z-10 outline-[2px] outline-dashed outline-white"
                variants={{
                  rest: { y: 0, rotate: 12 },
                  hover: {
                    y: [0, -6, 0],
                    rotate: [12, 4, 20, 6, 18, 4, 20, 6, 18, 12],
                    transition: {
                      duration: 0.8,
                      ease: "easeInOut",
                    },
                  },
                }}
              >
                <span className="text-[#121212] font-sans font-medium text-[0.9rem] tracking-normal">
                  Coming Soon!
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Hero Carousel */}
        <HeroCarousel />
      </div>
    </section>
  );
}
