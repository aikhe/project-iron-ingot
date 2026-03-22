import "@/styles/globals.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { PrefetcherWrapper } from "../components/Prefetcher";
import { SiDiscord, SiFacebook, SiGithub } from "react-icons/si";
import { HiSun } from "react-icons/hi";
import { Input } from "@/components/ui/input";
import { Search, X } from "@geist-ui/icons";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [theme, setTheme] = useState("dark");
  const [showGrid, setShowGrid] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [yPos, setYPos] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // Hide immediately when scrolling down
    // Show back immediately when scrolling up
    if (latest > previous && latest > 0) {
      setYPos("-100%");
    } else {
      setYPos("0%");
    }
  });

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const toggleGrid = () => setShowGrid((s) => !s);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const handleKeydown = (e) => {
      const key = e.key.toLowerCase();
      if (e.shiftKey && (key === "g" || e.code === "KeyG")) toggleGrid();
      if (e.shiftKey && (key === "t" || e.code === "KeyT")) toggleTheme();
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  const navLinks = [
    { href: "/blog", label: "Blog", hasChevron: true },
    { href: "/bulletin", label: "Bulletin" },
    { href: "/thesis", label: "Thesis", hasChevron: true },
    { href: "/awards", label: "Awards" },
    { href: "/about", label: "About" },
  ];

  return (
    <PrefetcherWrapper>
      <div className="app-root">
        {showBanner && (
          <div className="w-full bg-[#FF3538] h-[2rem] flex items-center px-2 relative z-[100] transition-all duration-300 overflow-hidden group">
            <motion.div
              className="flex whitespace-nowrap gap-2 pr-12"
              initial={{ x: "-50%" }}
              animate={{ x: "0%" }}
              transition={{ repeat: Infinity, ease: "linear", duration: 90 }}
            >
              {[...Array(2)].map((_, groupIndex) => (
                <div key={groupIndex} className="flex items-center gap-4">
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="flex items-center gap-4">
                      {[
                        "📅 Thesis Milestones → Proposal • Implementation • Final Defense",
                        "🎓 BSCS Graduation 2026! Stay updated with important announcements",
                        "📚 Thesis 2026 : Deadlines, proposals, and final defense schedules",
                        "🚀 Celebrate the BSCS Class of 2026",
                      ].map((text, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                          <span className="text-white font-sans font-medium text-[0.875rem]">
                            {text}
                          </span>
                          <span className="text-white">✱</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
            <button
              onClick={() => setShowBanner(false)}
              className="absolute right-0 h-full px-2 bg-[#FF3538] text-white hover:opacity-80 transition-opacity flex items-center justify-center z-10"
              title="Close notification"
            >
              <X size={16} strokeWidth={2.5} />
            </button>
          </div>
        )}

        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>Ingo</title>
        </Head>

        <motion.header
          className="w-full relative overflow-hidden z-[50]"
          style={{
            position: "sticky",
            top: 0,
            background: "var(--color-bg)",
          }}
          initial={{ y: 0 }}
          animate={{ y: yPos }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="stripe-banner absolute inset-0 z-0"></div>
          <div className="absolute bottom-0 left-0 w-full border-dashed-long-h text-[var(--color-border-dashed)]"></div>
          <div className="relative z-[2] h-[4rem] flex items-center justify-between px-[1.4rem] max-w-[var(--container-max-width)] w-[var(--container-width)] mx-auto font-mono font-normal tracking-[0.34%] text-[0.875rem] text-[var(--color-text-muted)]">
            {/* Logo Group */}
            <Link
              href="/"
              className="flex items-center gap-[0.8rem] group cursor-pointer"
            >
              <Image
                className="w-8 h-8 [filter:brightness(0)_invert(var(--logo-invert,0))] group-hover:opacity-80 transition-opacity"
                src="/branding/logo.svg"
                alt="Logo"
                width={32}
                height={32}
                priority
              />
              <span className="whitespace-nowrap font-sans font-semibold text-[1.25rem] tracking-tight text-[var(--color-text)]">
                uccingo
              </span>
            </Link>

            {/* Absolutely Centered Navigation Menu */}
            <nav className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center gap-[2rem] font-sans text-[0.9375rem]">
              {navLinks.map((link) => {
                const isActive = router.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`nav-link flex items-center gap-[0.4rem] cursor-pointer transition-colors duration-200 ${
                      isActive
                        ? "active text-[#FF5154]"
                        : "text-[var(--color-text-muted)] hover:text-[#FF5154]"
                    }`}
                  >
                    <span>{link.label}</span>
                    {link.hasChevron && (
                      <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Actions Group */}
            <div className="flex items-center justify-end gap-[1.2rem]">
              {/* <div
                className="theme-switch"
                onClick={toggleTheme}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                <div className="theme-switch-thumb">
                  {theme === "dark" ? (
                    <Image
                      src="/moon.svg"
                      className="theme-switch-icon"
                      alt="moon"
                      width={14}
                      height={14}
                    />
                  ) : (
                    <HiSun className="theme-switch-icon" />
                  )}
                </div>
              </div> */}

              <div className="relative group/search w-full max-w-[156px] font-sans">
                <Search
                  className="absolute left-2 top-1/2 -translate-y-1/2 group-focus-within/search:text-[var(--color-text)] transition-colors duration-200"
                  size={20}
                  color="#8C8C8C"
                />
                <Input
                  className="pl-8 pr-14 h-[42px] bg-[#1D1D1D] border-[#333333] rounded-[6px] focus-visible:ring-0 focus-visible:border-[var(--color-border-vivid)] transition-all placeholder:text-[#8C8C8C] placeholder:text-[1rem] text-[#8C8C8C] text-[1.125rem]"
                  placeholder="Search"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 px-[8px] py-[2px] border border-[#333333] rounded-[4px] bg-[var(--color-bg-secondary)] text-[0.8rem] text-[#8C8C8C] font-sans whitespace-nowrap">
                  Ctrl K
                </div>
              </div>

              <div className="flex items-center gap-[0.2rem] text-[#515151]">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-150 hover:text-[var(--color-text)]"
                >
                  <SiFacebook size={20} />
                </a>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-150 hover:text-[var(--color-text)]"
                >
                  <SiDiscord size={20} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-150 hover:text-[var(--color-text)]"
                >
                  <SiGithub size={20} />
                </a>
              </div>
            </div>
          </div>
        </motion.header>

        <div className="fixed inset-0 pointer-events-none z-[-1] flex justify-center">
          <div className="grid grid-cols-12 gap-[1.2rem] h-full max-w-[var(--container-max-width)] w-[var(--container-width)]">
            <div className="col-start-1 border-dashed-long-v text-[var(--color-border-dashed)]"></div>
            <div className="col-start-12 border-dashed-long-v justify-self-end text-[var(--color-border-dashed)]"></div>
          </div>
        </div>

        <main>
          <Component {...pageProps} />
        </main>

        {/* Layout Grids */}
        {showGrid && (
          <div className="fixed inset-0 pointer-events-none z-[99999] flex justify-center">
            <div className="grid grid-cols-12 gap-[1.2rem] h-full max-w-[var(--container-max-width)] w-[var(--container-width)]">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white/[0.03] dark:bg-white/[0.02] border-x border-white/[0.05] dark:border-white/[0.03]"
                ></div>
              ))}
            </div>
          </div>
        )}
      </div>
    </PrefetcherWrapper>
  );
}
