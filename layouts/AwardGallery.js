import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useInView } from "motion/react";
import { ArrowLeft, ArrowRight } from "@geist-ui/icons";
import Image from "next/image";

const awards = [
  {
    id: 1,
    title: "Hack4Gov 2025",
    description:
      "Representing the University of Caloocan City (BS Computer Science) at the NCR Hack4Gov 2025 Competition.",
    badges: ["HACK4GOV2025"],
    year: "2025",
  },
  {
    id: 2,
    title: "Hack4Gov 2025",
    description:
      "Representing the University of Caloocan City (BS Computer Science) at the NCR Hack4Gov 2025 Competition.",
    badges: ["HACK4GOV2025"],
    year: "2025",
  },
  {
    id: 3,
    title: "Hack4Gov 2025",
    description:
      "Representing the University of Caloocan City (BS Computer Science) at the NCR Hack4Gov 2025 Competition.",
    badges: ["HACK4GOV2025"],
    year: "2025",
  },
];

const positionConfig = {
  center: { scale: 1, x: "0%", zIndex: 20 },
  left: { scale: 0.82, x: "18%", zIndex: 10 },
  right: { scale: 0.82, x: "-18%", zIndex: 10 },
};

const springTransition = { type: "spring", damping: 30, stiffness: 180 };

function AwardCard({ award, position, onClick, onHover, isCursorHidden, isInView, isSwitching }) {
  const isCenter = position === "center";
  const config = positionConfig[position];

  return (
    <motion.div
      onClick={!isCenter ? onClick : undefined}
      onMouseEnter={() => !isCenter && onHover(position)}
      onMouseLeave={() => !isCenter && onHover(null)}
      className={`absolute top-0 w-[1000px] aspect-[16/9] ${
        !isCenter ? (isCursorHidden ? "cursor-none" : "cursor-pointer") : ""
      }`}
      animate={{ scale: config.scale, x: config.x }}
      transition={springTransition}
      style={{ zIndex: config.zIndex }}
    >
      {/* Main Card Wrapper */}
      <motion.div 
        className="relative w-full overflow-hidden"
        initial={{ height: 2, opacity: 0 }}
        animate={{ height: isInView ? 562.5 : 2, opacity: isInView ? 1 : 0 }}
        transition={{
          duration: 0.55,
          ease: [0.33, 1, 0.68, 1], // Expo ease matching the ray
          delay: isInView ? 0.4 : 0, // Wait solidly for the ray to finish landing (starts at 0.05, ends at 0.35)
          opacity: { duration: 0.05, delay: isInView ? 0.4 : 0 }, // Snap to visible ONLY when height starts growing
        }}
      >
        {/* The Actual Card Container */}
        <div className="w-full h-full bg-[#242424] border border-[#5B5B5B] flex relative overflow-hidden">
          {/* Content Area */}
          <div className="flex-1 p-8 flex flex-col justify-end relative z-10 bg-gradient-to-b from-[#141414]/[0.69] to-[#121212]">
            {isCenter && (
              <motion.div
                key={award.id}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                variants={{
                  animate: {
                    transition: {
                      staggerChildren: 0.15,
                      delayChildren: isSwitching ? 0.3 : 0.9, // Fast reveal on switch, wait for hologram on scroll (0.4s delay + 0.55s * 0.9 duration)
                    },
                  },
                }}
              >
                <div className="overflow-hidden mb-3">
                  <motion.h3
                    variants={{
                      initial: { y: "110%" },
                      animate: { y: 0 },
                    }}
                    transition={{
                      duration: 0.95,
                      ease: [0.22, 1, 0.36, 1], // Smooth easeOutQuart
                    }}
                    className="text-[1.6rem] font-semibold text-white tracking-tight leading-none"
                  >
                    {award.title}
                  </motion.h3>
                </div>

                <div className="overflow-hidden mb-4">
                  <motion.p
                    variants={{
                      initial: { y: "110%" },
                      animate: { y: 0 },
                    }}
                    transition={{
                      duration: 0.95,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-[#EFEFEF] text-[1rem] leading-relaxed font-normal"
                  >
                    {award.description}
                  </motion.p>
                </div>

                <div className="overflow-hidden">
                  <motion.div
                    variants={{
                      initial: { y: "110%" },
                      animate: { y: 0 },
                    }}
                    transition={{
                      duration: 0.95,
                      ease: [0.22, 1, 0.36, 1], // Smooth easeOutQuart
                    }}
                    className="flex items-center gap-2"
                  >
                    {award.badges.map((badge) => (
                      <div
                        key={badge}
                        className="px-2 py-0.5 bg-[#333333] text-[#EFEFEF] text-[0.8rem] font-sans font-medium uppercase tracking-wide"
                      >
                        {badge}
                      </div>
                    ))}
                    <div className="px-2 py-0.5 bg-[#F02E31] text-[#EFEFEF] text-[0.8rem] font-sans font-medium tracking-wide">
                      {award.year}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Corner Markers */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-[#FF5154] z-30" />
        <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF5154] z-30 transform translate-x-[1px] -translate-y-[1px]" />
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#FF5154] z-30 transform -translate-x-[1px] translate-y-[1px]" />
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#FF5154] z-30 transform translate-x-[1px] translate-y-[1px]" />
      </motion.div>
    </motion.div>
  );
}

export default function AwardGallery() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [hoveredSide, setHoveredSide] = useState(null);
  const [isCursorHidden, setIsCursorHidden] = useState(false);
  const [isRayVisible, setIsRayVisible] = useState(true);
  const [isSwitching, setIsSwitching] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.15 });

  // Smooth mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  useEffect(() => {
    let timer;
    if (hoveredSide) {
      // Wait 150ms before hiding the default cursor
      timer = setTimeout(() => setIsCursorHidden(true), 150);
    } else {
      setIsCursorHidden(false);
    }
    return () => clearTimeout(timer);
  }, [hoveredSide]);

  const cardWidth = 1000;
  const rayHeight = 220;
  const rayTopWidth = 50;

  const getPosition = (itemIndex) => {
    const len = awards.length;
    if (itemIndex === activeIndex) return "center";
    if (itemIndex === (activeIndex - 1 + len) % len) return "left";
    if (itemIndex === (activeIndex + 1) % len) return "right";
    return null;
  };

  const handleClick = (itemIndex) => {
    // Enable switching mode for faster text reveals
    setIsSwitching(true);

    // Hide ray immediately
    setIsRayVisible(false);
    
    // Switch card
    setActiveIndex(itemIndex);
    setHoveredSide(null);

    // Show ray again after cards settle
    setTimeout(() => {
      setIsRayVisible(true);
    }, 350); // 0.35s wait for card movement to settle

    // Reset switching mode after animation completes
    setTimeout(() => {
      setIsSwitching(false);
    }, 1500);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full flex flex-col items-center pt-4 pb-2 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Custom Cursor Circle */}
      <motion.div
        style={{
          position: "fixed",
          left: springX,
          top: springY,
          pointerEvents: "none",
          zIndex: 9999,
          width: "7.2rem",
          height: "7.2rem",
        }}
        initial={{ scale: 0, x: "-50%", y: "-50%" }}
        animate={{
          scale: hoveredSide ? 1 : 0,
          x: "-50%",
          y: "-50%",
        }}
        transition={{
          scale: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
          x: { duration: 0 },
          y: { duration: 0 },
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-r from-[#FF3538] to-[#DE2528] flex items-center justify-center text-white shadow-xl overflow-hidden p-3">
          {/* left is physically on the right, right is physically on the left */}
          {hoveredSide === "left" && <ArrowRight size={44} strokeWidth={2.2} />}
          {hoveredSide === "right" && <ArrowLeft size={44} strokeWidth={2.2} />}
        </div>
      </motion.div>
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
        {/* The Ray */}
        <motion.div
          className="relative z-10"
          style={{ width: cardWidth, height: rayHeight }}
          initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
          animate={{
            clipPath: (isRayVisible && isInView)
              ? "inset(0% 0% 0% 0%)"
              : "inset(0% 0% 100% 0%)",
          }}
          transition={{
            duration: 0.3,
            ease: [0.33, 1, 0.68, 1], // Faster easeOutQuart
            delay: (isRayVisible && isInView) ? 0.05 : 0, // Very quick hide, near-instant show
          }}
        >
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox={`0 0 ${cardWidth} ${rayHeight}`}
            preserveAspectRatio="none"
          >
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

            <path
              d={`M${(cardWidth - rayTopWidth) / 2},0 L${(cardWidth + rayTopWidth) / 2},0 L${cardWidth},${rayHeight} L0,${rayHeight} Z`}
              fill="url(#stripePattern)"
              stroke="none"
              opacity="1"
            />

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
        </motion.div>

        {/* Carousel */}
        <div
          className="relative w-full flex justify-center items-center mt-[-1px] z-20"
          style={{ height: `${(cardWidth * 9) / 16}px` }}
        >
          {awards.map((award, i) => {
            const position = getPosition(i);
            if (!position) return null;
            return (
              <AwardCard
                key={award.id}
                award={award}
                position={position}
                onClick={() => handleClick(i)}
                onHover={setHoveredSide}
                isCursorHidden={isCursorHidden}
                isInView={isInView}
                isSwitching={isSwitching}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
