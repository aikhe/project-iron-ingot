import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@geist-ui/icons";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useState, useEffect } from "react";

function BlogCardWithCursor({
  row,
  cardBaseClass,
  borderClass,
  setHoveredCard,
  isCursorHidden,
}) {
  return (
    <>
      <div
        className={`${cardBaseClass} ${borderClass} ${isCursorHidden ? "cursor-none" : ""}`}
        onMouseEnter={() => {
          setHoveredCard("blog");
        }}
        onMouseLeave={() => {
          setHoveredCard(null);
        }}
      >
        <div className="p-[1.8rem] pb-0 text-left">
          <h3 className="text-[1.6rem] font-semibold text-white flex items-center gap-2 tracking-tight leading-none">
            {row.blogTitle} <ArrowRight size={24} />
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
    </>
  );
}

function ArticleCardWithCursor({
  row,
  cardBaseClass,
  borderClass,
  setHoveredCard,
  isCursorHidden,
}) {
  return (
    <>
      <div
        className={`${cardBaseClass} ${borderClass} ${isCursorHidden ? "cursor-none" : ""}`}
        onMouseEnter={() => {
          setHoveredCard("article");
        }}
        onMouseLeave={() => {
          setHoveredCard(null);
        }}
      >
        <div className="p-[1.8rem] pb-8 text-left">
          <h3 className="text-[1.6rem] font-semibold text-white leading-tight tracking-wide mb-2">
            {row.articleTitle}
          </h3>
          <p className="text-[#8C8C8C] text-[1.1rem] leading-tight font-normal">
            {row.articleAuthor}
          </p>
        </div>

        <div
          className={`flex-1 relative overflow-hidden border-t border-[#2A2A2A] ${row.articleBg || "bg-[#242424]"}`}
        >
          {row.articleImage && (
            <Image
              src={row.articleImage}
              alt={row.articleTitle}
              fill
              className="object-cover opacity-80"
            />
          )}
          <div className="absolute bottom-6 left-6 z-10 flex flex-wrap gap-2">
            {row.articleTags &&
              row.articleTags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 bg-[#333333] text-[#EFEFEF] text-[0.8rem] font-sans font-medium uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
          </div>
          <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent pointer-events-none" />
        </div>
      </div>
    </>
  );
}

export default function LatestOnIngoCards({ blog, thesis, bulletin }) {
  const [hoveredCard, setHoveredCard] = useState(null); // 'blog' | 'article' | null
  const [isCursorHidden, setIsCursorHidden] = useState(false);

  useEffect(() => {
    let timer;
    if (hoveredCard) {
      timer = setTimeout(() => setIsCursorHidden(true), 150);
    } else {
      setIsCursorHidden(false);
    }
    return () => clearTimeout(timer);
  }, [hoveredCard]);

  // Shared cursor tracking
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

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const options = { month: "short", day: "numeric", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const rows = [
    {
      id: 1,
      href: `/blog/${blog?.slug || ""}`,
      blogImage: "/vibe-bot.png",
      blogAlt: "Vibe Bot",
      blogTitle: "Blog",
      blogDesc:
        "Explore expert articles, technical tutorials, and the latest trends in the ever-evolving field of computer science.",
      articleTitle: blog?.title || "Introduction to Computer Science Program",
      articleAuthor: `By ${blog?.authors?.[0]?.fullName?.firstName || "Ingo"} ${blog?.authors?.[0]?.fullName?.lastName || ""} on ${formatDate(blog?._createdAt) || "Jul 29, 2022"}`,
      articleTags: blog?.tags?.slice(0, 3) || ["COMPUTER NETWORKS"],
      articleBg: "bg-[#242424]",
      articleImage: null,
    },
    {
      id: 2,
      href: `/thesis/${thesis?.slug || ""}`,
      blogImage: "/thesis-bot.png",
      blogAlt: "Thesis Bot",
      blogTitle: "Thesis Showcase",
      blogDesc:
        "Explore the latest senior research projects and innovations from our BSCS candidates.",
      articleTitle: thesis?.title || "CyKlas",
      articleAuthor: `By ${thesis?.authors?.map((m) => `${m.fullName.firstName} ${m.fullName.lastName}`).join(", ") || "BSCS Candidates"} on ${formatDate(thesis?._createdAt) || "Jul 27, 2022"}`,
      articleTags: thesis?.tags?.slice(0, 3) || [
        "WEBSITE",
        "E-LEARNING",
        "EDUCATION",
      ],
      articleBg: "bg-[#181818]",
      articleImage: thesis?.headerImage || null,
    },
    {
      id: 3,
      href: `/bulletin/${bulletin?.slug || ""}`,
      blogImage: "/bulletin-bot.png",
      blogAlt: "Bulletin Bot",
      blogTitle: "Bulletin Board",
      blogDesc:
        "Stay updated with important announcements, academic schedules, and program notices.",
      articleTitle: bulletin?.title || "MARK YOUR DATES! AUGUST 9 2024",
      articleAuthor: `By ${bulletin?.authors?.[0]?.fullName?.firstName || "Ingo"} ${bulletin?.authors?.[0]?.fullName?.lastName || ""} on ${formatDate(bulletin?._createdAt) || "Aug 05, 2024"}`,
      articleTags: bulletin?.tags?.slice(0, 3) || ["RESUMPTION OF CLASSES"],
      articleBg: "bg-[#242424]",
      articleImage: null,
    },
  ];

  return (
    <div className="w-full font-sans bg-[#181818] relative overflow-hidden">
      {/* Shared Custom Cursor */}
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
          scale: hoveredCard ? 1 : 0,
          x: "-50%",
          y: "-50%",
          width: hoveredCard === "blog" ? "8.4rem" : "7.2rem",
          height: hoveredCard === "blog" ? "8.4rem" : "7.2rem",
          borderRadius: "9999px",
        }}
        transition={{
          scale: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
          width: { duration: 0.3, ease: "easeOut" },
          height: { duration: 0.3, ease: "easeOut" },
          x: { duration: 0 },
          y: { duration: 0 },
        }}
      >
        <div className="w-full h-full bg-gradient-to-r from-[#FF3538] to-[#DE2528] flex items-center justify-center text-white shadow-xl overflow-hidden relative">
          {/* Blog Cursor Content */}
          <motion.div
            className="absolute inset-0 p-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: hoveredCard === "blog" ? 1 : 0,
              scale: hoveredCard === "blog" ? 1 : 0.8,
            }}
            transition={{ duration: 0.2 }}
            style={{ pointerEvents: "none" }}
          >
            <motion.div
              className="relative w-full h-full translate-x-[-0.34rem] translate-y-[-0.4rem]"
              animate={
                hoveredCard === "blog"
                  ? { rotate: [0, -5, 8, -5, 8, 0] }
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
          </motion.div>

          {/* Article Cursor Content */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: hoveredCard === "article" ? 1 : 0,
              scale: hoveredCard === "article" ? 1 : 0.8,
            }}
            transition={{ duration: 0.2 }}
            style={{ pointerEvents: "none" }}
          >
            <ArrowRight size={44} strokeWidth={2.2} />
          </motion.div>
        </div>
      </motion.div>

      {rows.map((row, idx) => {
        const isEven = idx % 2 === 1;

        const cardBaseClass =
          "bg-[#181818] border-y border-dashed border-[#474747] flex flex-col relative z-20 -my-px";

        const BlogCard = (
          <Link
            key={`blog-link-${row.id}`}
            href={row.href}
            className="contents"
          >
            <BlogCardWithCursor
              row={row}
              cardBaseClass={cardBaseClass}
              borderClass={isEven ? "border-r" : "border-x"}
              setHoveredCard={setHoveredCard}
              isCursorHidden={isCursorHidden}
            />
          </Link>
        );

        const ArticleCard = (
          <Link
            key={`article-link-${row.id}`}
            href={row.href}
            className="contents"
          >
            <ArticleCardWithCursor
              row={row}
              cardBaseClass={cardBaseClass}
              borderClass={isEven ? "border-x" : "border-r"}
              setHoveredCard={setHoveredCard}
              isCursorHidden={isCursorHidden}
            />
          </Link>
        );

        return (
          <div
            key={row.id}
            className={`w-full border-b border-dashed border-[#2A2A2A] transition-colors ${
              idx === 0 ? "border-t" : "-mt-px"
            }`}
          >
            <div className="relative section-container grid grid-cols-[12rem_1fr_1fr_12rem]">
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
