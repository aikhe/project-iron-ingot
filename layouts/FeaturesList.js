import { useState, useRef } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";
import SecondaryStripe from "./SecondaryStripe";

export default function FeaturesList() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const features = [
    {
      num: "O1",
      title: "Online Public Information Board",
      desc: "Stay informed about the latest announcements, academic updates, and important events happening in the BSCS program.",
    },
    {
      num: "O2",
      title: "Senior Project Discovery Showcase",
      desc: "See what the seniors are doing in the BSCS Program and learn from them too while building their own Thesis project.",
    },
    {
      num: "O3",
      title: "Student Collaborative Network",
      desc: "Connect with other students in the BSCS Program and get to know them better.",
    },
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // latest goes from 0 to 1
    // Map latest (0-1) to indices (0, 1, 2)
    const index = Math.min(
      Math.floor(latest * features.length),
      features.length - 1,
    );
    // Clamp to at least 0
    setActiveIndex(Math.max(0, index));
  });

  return (
    <div className="w-full font-sans mt-[6rem] mb-[6rem]">
      <SecondaryStripe className="m-0" />

      <section className="relative w-full max-w-[var(--container-max-width)] w-[var(--container-width)] mx-auto">
        <div className="relative z-10 grid grid-cols-2 px-[10rem]">
          {/* Left Column (Empty for alignment) */}
          <div></div>

          {/* Right Column: Features List */}
          <div
            ref={containerRef}
            className="flex flex-col border-x border-dashed border-[#2A2A2A]"
          >
            {/* Stripe background block at the top */}
            <div className="relative min-h-[200px] border-b border-dashed border-[#2A2A2A] overflow-hidden">
              <div className="stripe-banner absolute inset-0 z-0"></div>
            </div>
            {features.map((feature, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={idx}
                  className={`flex flex-col p-[2rem] border-b border-dashed border-[#2A2A2A] last:border-b-0 transition-colors duration-500 cursor-pointer ${
                    isActive ? "bg-[#242424]" : "bg-[#1C1C1C]"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span
                      className={`font-minecraft text-[4rem] leading-none transition-colors duration-500 ${
                        isActive ? "text-[#EFEFEF]" : "text-[#434343]"
                      }`}
                    >
                      {feature.num}
                    </span>
                    <h3
                      className={`text-[2rem] font-semibold text-right leading-none transition-colors duration-500 ${
                        isActive ? "text-[#EFEFEF]" : "text-[#434343]"
                      }`}
                    >
                      {feature.title}
                    </h3>
                  </div>
                  <p
                    className={`text-[1.1rem] leading-normal font-normal transition-colors duration-500 ${
                      isActive ? "text-[#8C8C8C]" : "text-[#2A2A2A]"
                    }`}
                  >
                    {feature.desc}
                  </p>
                </div>
              );
            })}
            {/* Stripe background block at the bottom */}
            <div className="relative min-h-[200px] border-t border-dashed border-[#2A2A2A] overflow-hidden">
              <div className="stripe-banner absolute inset-0 z-0"></div>
            </div>
          </div>
        </div>
      </section>

      <SecondaryStripe className="m-0" />
    </div>
  );
}
