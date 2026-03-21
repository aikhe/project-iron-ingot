import { ArrowRight } from "@geist-ui/icons";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CouncilAbout() {
  const [isHovered, setIsHovered] = useState(false);
  const [isCursorHidden, setIsCursorHidden] = useState(false);
  const sectionRef = useRef(null);

  // Smooth mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Delay cursor hiding to make it feel more natural
  useEffect(() => {
    let timer;
    if (isHovered) {
      // Wait 150ms before hiding the default cursor
      timer = setTimeout(() => setIsCursorHidden(true), 150);
    } else {
      setIsCursorHidden(false);
    }
    return () => clearTimeout(timer);
  }, [isHovered]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full max-w-[var(--container-max-width)] w-[var(--container-width)] mx-auto px-[6rem] mb-[2rem] font-sans py-[1.5rem] overflow-visible"
    >
      {/* Custom Cursor Circle */}
      <motion.div
        style={{
          position: "fixed",
          left: springX,
          top: springY,
          pointerEvents: "none",
          zIndex: 9999,
          width: "8.4rem",
          height: "8.4rem",
        }}
        initial={{ scale: 0, x: "-50%", y: "-50%" }}
        animate={{
          scale: isHovered ? 1 : 0,
          x: "-50%",
          y: "-50%",
        }}
        transition={{
          scale: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
          // Ensure position centering doesn't animate, just stays static
          x: { duration: 0 },
          y: { duration: 0 },
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-[#FF3538] to-[#DE2528] flex items-center justify-center text-white shadow-xl overflow-hidden p-3">
          <motion.div
            className="relative w-full h-full translate-x-[-0.34rem] translate-y-[-0.4rem]"
            animate={
              isHovered
                ? {
                    rotate: [0, -5, 8, -5, 8, 0],
                  }
                : { rotate: 0 }
            }
            transition={{
              delay: 0.35,
              duration: 0.7,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1.5,
            }}
          >
            <Image
              src="/curious-bot.png"
              alt="Curious Bot"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>
      </motion.div>

      <Link href="/about" className="block no-underline">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`flex flex-col items-center justify-center text-center relative z-[1] w-fit mx-auto cursor-pointer ${
            isCursorHidden ? "cursor-none" : ""
          }`}
        >
          {/* Robot Image */}
          <div className="relative w-[340px] h-[200px]">
            <Image
              src="/hero-bot.png"
              alt="Hero Bot"
              fill
              className="object-contain"
            />
          </div>

          <h2 className="text-[2.2rem] font-bold text-[var(--color-text)] leading-[1.1] tracking-[0.34%] flex items-center gap-[0.4rem]">
            See more on{" "}
            <span className="font-minecraft text-[#FF5154] font-normal inline-block translate-y-[0.38rem]">
              About
            </span>
            <ArrowRight size={34} className="text-inherit" />
          </h2>
        </div>
      </Link>
    </section>
  );
}
