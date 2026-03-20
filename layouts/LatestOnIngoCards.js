import Image from "next/image";
import { ArrowRight } from "@geist-ui/icons";

export default function LatestOnIngoCards() {
  const rows = [
    {
      id: 1,
      blogImage: "/vibe-bot.png",
      blogAlt: "Vibe Bot",
      blogTitle: "Blog",
      blogDesc: "Explore expert articles, technical tutorials, and the latest trends in the ever-evolving field of computer science.",
      articleTitle: "Introduction to Computer Science Program",
      articleAuthor: "By Jacqueline Porral, Justine Consulta on Jul 29, 2022",
      articleTags: ["COMPUTER NETWORKS"],
      articleBg: "bg-[#242424]"
    },
    {
      id: 2,
      blogImage: "/thesis-bot.png",
      blogAlt: "Thesis Bot",
      blogTitle: "Thesis Showcase",
      blogDesc: "Explore the latest senior research projects and innovations from our BSCS candidates.",
      articleTitle: "CyKlas",
      articleAuthor: "By Prof. Joemen Barrios on Jul 27, 2022",
      articleTags: ["WEBSITE", "E-LEARNING", "EDUCATION"],
      articleBg: "bg-[#242424]"
    },
    {
      id: 3,
      blogImage: "/bulletin-bot.png",
      blogAlt: "Bulletin Bot",
      blogTitle: "Information Board",
      blogDesc: "Stay updated with important announcements, academic schedules, and program notices.",
      articleTitle: "MARK YOUR DATES! AUGUST 9 2024",
      articleAuthor: "By Genrey Cristobal on Aug 05, 2024",
      articleTags: ["RESUMPTION OF CLASSES"],
      articleBg: "bg-[#242424]"
    }
  ];

  return (
    <div className="w-full font-sans bg-[#181818] relative overflow-hidden">
      {rows.map((row, idx) => {
        const isEven = idx % 2 === 1;

        // Common styles for both cards
        const cardBaseClass =
          "bg-[#181818] border-y border-dashed border-[#474747] flex flex-col relative z-20 transition-colors hover:bg-[#1D1D1D] -my-px";

        // Internal content for the Blog Card (Image-based)
        const BlogCard = (
          <div className={`${cardBaseClass} ${isEven ? "border-r" : "border-x"} group/card`}>
            <div className="p-[1.8rem] pb-0 text-left">
              <h3 className="text-[1.6rem] font-semibold text-white flex items-center gap-2 tracking-tight group cursor-pointer leading-none">
                {row.blogTitle}{" "}
                <ArrowRight
                  size={24}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </h3>
              <p className="text-[#8C8C8C] text-[1.1rem] leading-tight mt-4 font-normal">
                {row.blogDesc}
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center relative overflow-hidden pb-[1.8rem]">
              <div className="relative w-[60%] h-[60%]">
                <Image
                  src={row.blogImage}
                  alt={row.blogAlt}
                  fill
                  className="object-contain"
                  priority={row.id === 1}
                />
              </div>
            </div>
          </div>
        );

        // Internal content for the Article Card (Banner-based)
        const ArticleCard = (
          <div className={`${cardBaseClass} ${isEven ? "border-x" : "border-r"}`}>
            <div className="p-[1.8rem] pb-8 text-left">
              <h3 className="text-[1.6rem] font-semibold text-white leading-[1.2] tracking-tight mb-2 hover:text-[#FF5154] cursor-pointer transition-colors leading-tight">
                {row.articleTitle}
              </h3>
              <p className="text-[#8C8C8C] text-[1.1rem] leading-tight font-normal">
                {row.articleAuthor}
              </p>
            </div>

            <div className={`flex-1 relative overflow-hidden ${row.articleBg} group cursor-pointer`}>
              <div className="absolute bottom-6 left-6 z-10 flex items-center gap-2">
                {row.articleTags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 bg-[#333333] text-[#EFEFEF] text-[0.8rem] font-sans font-medium uppercase tracking-wide">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#121212] opacity-80 pointer-events-none"></div>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          </div>
        );

        return (
          <div
            key={row.id}
            className={`w-full border-b border-dashed border-[#2A2A2A] transition-colors ${
              idx === 0 ? "border-t" : "-mt-px"
            }`}
          >
            <div className="relative max-w-[var(--container-max-width)] w-[var(--container-width)] mx-auto grid grid-cols-[12rem_1fr_1fr_12rem]">
              {/* Left Side Gutter (Stripe visible) */}
              <div className="border-l border-r border-dashed border-[#2A2A2A] relative z-0 overflow-hidden min-h-[480px]">
                <div className="stripe-banner absolute inset-0"></div>
              </div>

              {/* Central Cards - Alternating Order */}
              {isEven ? (
                <>
                  {ArticleCard}
                  {BlogCard}
                </>
              ) : (
                <>
                  {BlogCard}
                  {ArticleCard}
                </>
              )}

              {/* Right Side Gutter (Stripe visible) */}
              <div className="border-l border-r border-dashed border-[#2A2A2A] relative z-0 overflow-hidden">
                <div className="stripe-banner absolute inset-0"></div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
