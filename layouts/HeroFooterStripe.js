export default function HeroFooterStripe() {
  const stackLogos = [
    {
      src: "/stack/nextjs.svg",
      alt: "Next.js",
      w: "6rem",
      h: "2rem",
    },
    {
      src: "/stack/vercel.svg",
      alt: "Vercel",
      w: "6rem",
      h: "1.2rem",
    },
    {
      src: "/stack/sanity.svg",
      alt: "Sanity",
      w: "6.5rem",
      h: "1.2rem",
    },
    {
      src: "/stack/shadcn.svg",
      alt: "Shadcn/UI",
      w: "7.5rem",
      h: "1.6rem",
    },
    {
      src: "/stack/motion.svg",
      alt: "Motion",
      w: "7.5rem",
      h: "0.8rem",
    },
    {
      src: "/stack/tailwindcss.svg",
      alt: "Tailwind",
      w: "9rem",
      h: "1rem",
    },
  ];

  return (
    <div className="w-full relative h-[3.2rem] mt-[4rem] overflow-hidden">
      <div className="stripe-banner absolute inset-0 z-0"></div>
      <div className="absolute top-0 left-0 w-full border-dashed-long-h text-[#2A2A2A]"></div>
      <div className="absolute bottom-0 left-0 w-full border-dashed-long-h text-[#2A2A2A]"></div>

      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <div className="flex items-center h-full border-l border-dashed border-[#2A2A2A]">
          {stackLogos.map((stack, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-6 h-full border-r border-dashed border-[#2A2A2A] group"
            >
              <div
                className="transition-all duration-300 bg-[#3A3A3A] group-hover:bg-[#EFEFEF]"
                style={{
                  width: stack.w,
                  height: stack.h,
                  maskImage: `url(${stack.src})`,
                  WebkitMaskImage: `url(${stack.src})`,
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
