import "@/styles/globals.css";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { PrefetcherWrapper } from "../components/Prefetcher";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");
  const [showGrid, setShowGrid] = useState(false);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const toggleGrid = () => setShowGrid((s) => !s);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
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

  return (
    <PrefetcherWrapper>
      <div className="app-root">
        <Head>
          <link rel="icon" href="/branding/logo.ico" />
          <title>Aikhe | Iron Ingot</title>
        </Head>

        <header className="w-full relative">
          <div className="absolute top-0 left-0 w-full border-dashed-long-h text-[var(--color-border-dashed)]"></div>
          <div className="absolute bottom-0 left-0 w-full border-dashed-long-h text-[var(--color-border-dashed)]"></div>
          <div className="z-[2] h-[4.8rem] grid grid-cols-12 gap-[1.2rem] items-center whitespace-nowrap font-mono font-medium tracking-[0.34%] text-[0.875rem] px-[2.4rem] text-[var(--color-text-muted)] max-w-[var(--container-max-width)] w-[var(--container-width)] mx-auto">
            <div className="col-start-1 col-span-3 flex items-center gap-[0.8rem]">
              <Image
                className="w-8 h-8 [filter:brightness(0)_invert(var(--logo-invert,0))]"
                src="/branding/logo.svg"
                alt="Logo"
                width={32}
                height={32}
                priority
              />
              <span className="whitespace-nowrap font-sans font-semibold text-[1.25rem] tracking-tight text-[var(--color-text)]">
                uccingo
              </span>
            </div>

            {/* Centered Navigation Menu */}
            <nav className="col-start-4 col-span-6 flex justify-center items-center gap-[2rem] font-sans text-[0.9375rem]">
              <div className="flex items-center gap-[0.4rem] cursor-pointer hover:text-[var(--color-text)] transition-colors duration-150">
                <span>Blog</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="cursor-pointer hover:text-[var(--color-text)] transition-colors duration-150">Bulletin</div>
              <div className="flex items-center gap-[0.4rem] cursor-pointer hover:text-[var(--color-text)] transition-colors duration-150">
                <span>Thesis</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="cursor-pointer hover:text-[var(--color-text)] transition-colors duration-150">Awards</div>
              <div className="cursor-pointer hover:text-[var(--color-text)] transition-colors duration-150">About</div>
            </nav>

            <button
              className="col-start-12 justify-self-end bg-none border-none text-[var(--color-text-muted)] font-mono text-[0.875rem] font-medium cursor-pointer p-0 transition-colors duration-150 hover:text-[var(--color-text)]"
              onClick={toggleTheme}
            >
              MODE: {theme.toUpperCase()}
            </button>
          </div>
        </header>

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
                <div key={i} className="bg-white/[0.03] dark:bg-white/[0.02] border-x border-white/[0.05] dark:border-white/[0.03]"></div>
              ))}
            </div>
          </div>
        )}
      </div>
    </PrefetcherWrapper>
  );
}
