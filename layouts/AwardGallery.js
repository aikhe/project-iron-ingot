import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight } from "@geist-ui/icons";
import Image from "next/image";
import { useRouter } from "next/router";
import { client } from "../lib/sanity";

const AWARDS_QUERY = `
  *[_type == 'award' && defined(headerImage)] | order(academicYear desc, dateAwarded desc) [0...10] {
    _id,
    "title": awardTitle,
    "slug": slug.current,
    "headerImage": headerImage.asset->url,
    "images": awardImages[].asset->url,
    "category": awardCategory,
    "badges": awardBadges,
    "description": awardDescription,
    academicYear,
    dateAwarded,
    tags
  }
`;

const positionConfig = {
  center: { scale: 1, x: "0%", zIndex: 20 },
  left: { scale: 0.82, x: "18%", zIndex: 10 },
  right: { scale: 0.82, x: "-18%", zIndex: 10 },
};

const springTransition = { type: "spring", damping: 30, stiffness: 180 };

const formatDescription = (text) => {
  if (!text) return null;
  const boldRegex = /([\uD835\uDC00-\uD835\uDC19\uD835\uDC1A-\uD835\uDC33\uD835\uDFCE-\uD835\uDFD7]+)/gu;

  const diffUpper = 0x1D400 - 0x41;
  const diffLower = 0x1D41A - 0x61;
  const diffDigit = 0x1D7CE - 0x30;

  const normalize = (str) => {
    let result = '';
    for (const char of str) {
      const code = char.codePointAt(0);
      if (code >= 0x1D400 && code <= 0x1D419) result += String.fromCharCode(code - diffUpper);
      else if (code >= 0x1D41A && code <= 0x1D433) result += String.fromCharCode(code - diffLower);
      else if (code >= 0x1D7CE && code <= 0x1D7D7) result += String.fromCharCode(code - diffDigit);
      else result += char;
    }
    return result;
  };

  const parts = text.split(boldRegex);
  return parts.map((part, i) => {
    if (part.match(boldRegex)) {
      return <strong key={i} className="font-bold text-white">{normalize(part)}</strong>;
    }
    return part;
  });
};

function AwardCard({ award, position, onClick, onHover, isCursorHidden, isInView, isSwitching }) {
  const isCenter = position === "center";
  const config = positionConfig[position];

  return (
    <motion.div
      onClick={onClick}
      onMouseEnter={() => onHover(isCenter ? "center" : position)}
      onMouseLeave={() => onHover(null)}
      className={`absolute top-0 w-[1000px] aspect-[16/9] ${isCursorHidden ? "cursor-none" : "cursor-pointer"
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
          ease: [0.33, 1, 0.68, 1],
          delay: isInView ? 0.4 : 0,
          opacity: { duration: 0.05, delay: isInView ? 0.4 : 0 },
        }}
      >
        {/* The Actual Card Container */}
        <div className="w-full h-full bg-[#242424] flex relative overflow-hidden">
          {/* Absolute border overlay to prevent clipping and stay above the image */}
          <div className="absolute inset-0 border border-[#5B5B5B] pointer-events-none z-30" />
          {/* Background Image from Sanity */}
          {award.headerImage && (
            <Image
              src={award.headerImage}
              alt={award.title}
              fill
              className="object-cover"
              sizes="1000px"
              priority={isCenter}
            />
          )}

          {/* Text Overlay Gradient (Only covering the bottom) */}
          <div className="absolute inset-x-0 bottom-0 top-1/3 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent z-10" />

          {/* Content Area */}
          <div className="flex-1 p-8 flex flex-col justify-end relative z-20">
            {isCenter && (
              <motion.div
                key={award._id}
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
                    className="text-[#EFEFEF] text-[1rem] leading-relaxed font-normal [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] overflow-hidden"
                  >
                    {formatDescription(award.description)}
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
                    {award.category && (
                      <div className="px-2 py-0.5 bg-[#333333] text-[#EFEFEF] text-[0.8rem] font-sans font-medium uppercase tracking-wide">
                        {award.category}
                      </div>
                    )}
                    {award.badges && award.badges.map((badge) => (
                      <div
                        key={badge}
                        className="px-2 py-0.5 bg-[#333333] text-[#EFEFEF] text-[0.8rem] font-sans font-medium uppercase tracking-wide"
                      >
                        {badge}
                      </div>
                    ))}
                    {award.academicYear && (
                      <div className="px-2 py-0.5 bg-[#F02E31] text-[#EFEFEF] text-[0.8rem] font-sans font-medium tracking-wide">
                        {award.academicYear}
                      </div>
                    )}
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
  const [awards, setAwards] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredSide, setHoveredSide] = useState(null);
  const [isCursorHidden, setIsCursorHidden] = useState(false);
  const [isRayVisible, setIsRayVisible] = useState(true);
  const [isSwitching, setIsSwitching] = useState(false);
  const router = useRouter();

  // Fetch awards from Sanity
  useEffect(() => {
    client.fetch(AWARDS_QUERY).then((data) => {
      if (data && data.length > 0) {
        setAwards(data);
        // Find Hack4Gov award and set as initial middle card
        const hackIndex = data.findIndex(a =>
          a.title?.toLowerCase().includes("hack4gov")
        );
        if (hackIndex !== -1) {
          setActiveIndex(hackIndex);
        }
      }
    });
  }, []);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

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
    if (itemIndex === activeIndex) {
      router.push("/awards");
      return;
    }

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
          overflow: "hidden",
        }}
        initial={{ scale: 0, x: "-50%", y: "-50%" }}
        animate={{
          scale: hoveredSide ? 1 : 0,
          x: "-50%",
          y: "-50%",
          width: hoveredSide === "center" ? "11.2rem" : "7.2rem",
          height: hoveredSide === "center" ? "2.6rem" : "7.2rem",
          borderRadius: hoveredSide === "center" ? "6px" : "9999px",
        }}
        transition={{
          scale: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
          width: { duration: 0.3, ease: "easeOut" },
          height: { duration: 0.3, ease: "easeOut" },
          borderRadius: { duration: 0.3, ease: "easeOut" },
          x: { duration: 0 },
          y: { duration: 0 },
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-[#FF3538] to-[#DE2528] flex items-center justify-center text-white shadow-xl overflow-hidden px-2 py-1 gap-1">
          {/* left is physically on the right, right is physically on the left */}
          {hoveredSide === "left" && <ArrowRight size={44} strokeWidth={2.2} />}
          {hoveredSide === "right" && <ArrowLeft size={44} strokeWidth={2.2} />}
          {hoveredSide === "center" && (
            <>
              <span className="font-semibold text-[1.05rem] whitespace-nowrap">See all awards</span>
              <ArrowRight size={20} strokeWidth={2.4} />
            </>
          )}
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
                key={award._id}
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
