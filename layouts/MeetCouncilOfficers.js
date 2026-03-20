import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const OfficerCard = ({ name, role }) => (
  <div className="flex flex-col min-w-[25rem] w-[25rem]">
    <div className="relative w-full aspect-square bg-[#242424] border border-dashed border-[#8E8E8E] flex items-center justify-center mb-[1.2rem]">
      {/* Corner alignment markers */}
      <div className="absolute top-[-1px] left-[-1px] w-[8px] h-[8px] bg-[#FF5154]"></div>
      <div className="absolute top-[-1px] right-[-1px] w-[8px] h-[8px] bg-[#FF5154]"></div>
      <div className="absolute bottom-[-1px] left-[-1px] w-[8px] h-[8px] bg-[#FF5154]"></div>
      <div className="absolute bottom-[-1px] right-[-1px] w-[8px] h-[8px] bg-[#FF5154]"></div>
    </div>
    <div className="flex flex-col items-start gap-1">
      <h4 className="text-[1.4rem] font-semibold text-white leading-tight tracking-wide truncate w-full">
        {name}
      </h4>
      <p className="text-[#8C8C8C] text-[1rem] leading-relaxed font-normal truncate w-full">
        {role}
      </p>
    </div>
  </div>
);

export default function MeetCouncilOfficers() {
  const executives = [
    { name: "Gwyneth F. Uy", role: "President" },
    { name: "Celest Jerez", role: "Vice President" },
  ];

  const officersList = [
    { name: "Crystal Florano", role: "Secretary" },
    { name: "John Aryan Balangeg", role: "Assistant Secretary" },
    { name: "Miguel Santos", role: "Treasurer" },
    { name: "Sophia Reyes", role: "Auditor" },
    { name: "Aiden Cruz", role: "P.R.O." },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex < officersList.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="relative w-full max-w-[var(--container-max-width)] w-[var(--container-width)] mx-auto px-[6rem] mt-[3.4rem] mb-[2rem] font-sans">
      <div className="flex gap-[6rem]">
        {/* Executive Column */}
        <div className="flex flex-col">
          <h3 className="text-[1.6rem] font-semibold text-white leading-tight tracking-wide mb-[2rem]">
            Executive
          </h3>
          <div className="flex gap-[1.5rem]">
            {executives.map((exec, idx) => (
              <OfficerCard key={idx} name={exec.name} role={exec.role} />
            ))}
          </div>
        </div>

        {/* Officers Column */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="flex items-center justify-between mb-[2rem] pr-2">
            <h3 className="text-[1.6rem] font-semibold text-white leading-tight tracking-wide">
              Officers
            </h3>
            <div className="flex gap-2">
              <Button
                onClick={prev}
                className={`w-10 h-10 flex items-center justify-center rounded-[4px] border-none shadow-none ${
                  currentIndex === 0
                    ? "bg-[#333333] text-gray-600 cursor-not-allowed"
                    : "bg-[#F02E31] text-white hover:bg-[#F02E31]/90"
                }`}
                disabled={currentIndex === 0}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </Button>
              <Button
                onClick={next}
                className={`w-10 h-10 flex items-center justify-center rounded-[4px] border-none shadow-none ${
                  currentIndex >= officersList.length - 1
                    ? "bg-[#333333] text-gray-600 cursor-not-allowed"
                    : "bg-[#F02E31] text-white hover:bg-[#F02E31]/90"
                }`}
                disabled={currentIndex >= officersList.length - 1}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Carousel Slider */}
          <div className="relative w-full flex-1">
            <motion.div
              className="flex gap-[1.5rem]"
              animate={{ x: `calc(-${currentIndex} * (25rem + 1.5rem))` }}
              transition={{ type: "spring", stiffness: 350, damping: 35 }}
            >
              {officersList.map((officer, idx) => (
                <OfficerCard
                  key={idx}
                  name={officer.name}
                  role={officer.role}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
