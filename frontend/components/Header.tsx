"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { navLinks, siteConfig } from "@/lib/data";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Floating Island Navigation Container */}
      <header className="fixed top-4 sm:top-6 inset-x-0 z-40 flex justify-center px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 rounded-full px-3 sm:px-4 py-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled
              ? "border border-white/15 dark:border-white/10 bg-white/80 dark:bg-[#070a12]/85 backdrop-blur-2xl shadow-[0_16px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              : "border border-black/10 dark:border-white/10 bg-white/70 dark:bg-[#090d16]/75 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
          }`}
        >
          {/* Avatar & Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 pl-1"
            aria-label="Home"
          >
            <div className="relative h-7 w-7 sm:h-8 sm:w-8 shrink-0 rounded-full overflow-hidden ring-1 ring-black/10 dark:ring-white/20 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/profile.jpg"
                alt="Abhinav Mitra"
                width={32}
                height={32}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xs sm:text-sm font-bold tracking-tight text-text-primary group-hover:text-accent transition-colors">
                Abhinav
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-1 rounded-full p-0.5">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={`relative z-10 block rounded-full px-3.5 py-1.5 text-xs font-medium tracking-tight transition-colors duration-200 ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-text-secondary hover:text-text-primary"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="active-island-pill"
                        className="absolute inset-0 z-[-1] rounded-full bg-accent dark:bg-accent"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 32,
                        }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right Actions: Resume Button & Theme Toggle */}
          <div className="flex items-center gap-2">
            <a
              href={siteConfig.resumeDownloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 rounded-full border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 px-3 py-1.5 text-xs font-semibold text-text-primary transition-colors"
            >
              <ArrowDownTrayIcon className="h-3.5 w-3.5" />
              <span>Resume</span>
            </a>

            <ThemeToggle />

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden flex h-8 w-8 items-center justify-center rounded-full border border-black/10 dark:border-white/10 text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {menuOpen ? (
                <XMarkIcon className="w-4 h-4" />
              ) : (
                <Bars3Icon className="w-4 h-4" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-20 inset-x-4 z-40 md:hidden rounded-3xl border border-black/10 dark:border-white/15 bg-white/95 dark:bg-[#070a12]/95 backdrop-blur-3xl p-5 shadow-2xl"
          >
            <ul className="flex flex-col gap-1.5">
              {navLinks.map((link, idx) => {
                const isActive =
                  link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`block rounded-2xl px-4 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-accent text-white font-semibold"
                          : "text-text-secondary hover:bg-black/5 dark:hover:bg-white/5 hover:text-text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                );
              })}
              <li className="pt-2 border-t border-border mt-2">
                <a
                  href={siteConfig.resumeDownloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-black/5 dark:bg-white/5 border border-border px-4 py-2.5 text-sm font-semibold text-text-primary hover:border-accent transition-colors"
                >
                  <ArrowDownTrayIcon className="h-4 w-4" />
                  <span>Download Resume (PDF)</span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
