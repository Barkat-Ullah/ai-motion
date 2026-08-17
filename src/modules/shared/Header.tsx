"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header({ className }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ["Features", "Solutions", "Pricing", "About"] as const;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <>
      <section
        className={
          "min-h-[110vh] flex flex-col bg-black relative w-full " +
          (className || "")
        }
      >
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://cdn.jiro.build/Kelo/Hero%2003.mp4"
            type="video/mp4"
          />
        </video>

        {/* Lighter Overlay */}
        <div className="absolute inset-0 bg-black/20 z-[1]" />

        {/* Navigation Bar */}
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" as const }}
          className="relative z-50 px-4 md:px-8 pt-6 pb-2"
        >
          <div className="max-w-5xl mx-auto flex items-center justify-between p-[10px] rounded-full bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="flex-1 flex items-center pl-3 flex-shrink-0 whitespace-nowrap">
              <Image
                src="https://cdn.jiro.build/Kelo/Kelo%20White.svg"
                alt="Kelo Logo"
                width={96}
                height={24}
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="hidden md:flex items-center gap-8 flex-shrink-0">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={"#" + item.toLowerCase()}
                  className="text-[15px] font-medium text-white/70 hover:text-white transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>

            <div className="hidden md:flex flex-1 items-center justify-end gap-3 flex-shrink-0 whitespace-nowrap">
              <button className="text-[15px] font-medium text-white/70 hover:text-white transition-colors px-3 py-2">
                Log in
              </button>
              <button className="rounded-full px-5 py-2 text-[15px] font-semibold bg-white text-black hover:bg-white/90 transition-all hover:scale-105 active:scale-95">
                Get Started
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                type="button"
                aria-label={
                  isMobileMenuOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="w-10 h-10 rounded-full border border-white/20 bg-white/10 text-white flex items-center justify-center"
              >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen ? (
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.22, ease: "easeOut" as const }}
                className="md:hidden mt-3 max-w-5xl mx-auto rounded-3xl bg-black/55 backdrop-blur-xl border border-white/15 p-4"
              >
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <Link
                      key={item}
                      href={"#" + item.toLowerCase()}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-3 rounded-2xl text-[15px] font-medium text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-white/10 flex flex-col gap-2">
                  <button className="w-full text-[15px] font-medium text-white/80 hover:text-white transition-colors px-4 py-3 rounded-2xl border border-white/15 bg-white/5">
                    Log in
                  </button>
                  <button className="w-full rounded-2xl px-4 py-3 text-[15px] font-semibold bg-white text-black hover:bg-white/90 transition-all">
                    Get Started
                  </button>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.nav>

        <div className="relative flex-1 flex flex-col items-center justify-center text-center px-6 pt-[148px] pb-16 z-10">
          <div className="flex flex-col items-center w-full">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: "easeOut" as const,
              }}
              className="text-center font-semibold text-3xl md:text-6xl lg:text-[66px] leading-[1.1] tracking-[-0.02em] text-white max-w-4xl mt-0 mb-5"
            >
              The Future of
              <br />
              The Next-Gen <span className="italic">Chatbot</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut" as const,
              }}
              className="text-center text-base md:text-lg text-white/90 max-w-[480px] leading-relaxed mb-8"
            >
              The smarter way to manage sales starts with using tools that
              streamline every step of the process
            </motion.p>

            {/* CTA Button + Microcopy */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: "easeOut" as const,
              }}
              className="flex flex-col items-center gap-3"
            >
              <button
                className="rounded-full px-8 py-4 text-base font-semibold bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 transition-all shadow-2xl hover:scale-105 active:scale-95"
                style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
              >
                Get 14 Days Free Trial
              </button>
              <span className="text-sm text-white/60">
                No Credit Card Required
              </span>
            </motion.div>

            {/* Company Logos */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.5,
                  },
                },
              }}
              initial="hidden"
              animate="show"
              className="mt-[60px] flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 hover:opacity-80 transition-opacity duration-500"
            >
              {(
                [
                  {
                    name: "Google",
                    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
                  },
                  {
                    name: "Amazon",
                    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
                  },
                  {
                    name: "Microsoft",
                    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
                  },
                  {
                    name: "Netflix",
                    src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
                  },
                  {
                    name: "Spotify",
                    src: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
                  },
                  {
                    name: "Meta",
                    src: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
                  },
                  {
                    name: "Apple",
                    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
                  },
                  {
                    name: "Airbnb",
                    src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
                  },
                  {
                    name: "Slack",
                    src: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg",
                  },
                ] as { name: string; src: string }[]
              ).map((logo: { name: string; src: string }) => (
                <motion.img
                  key={logo.name}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  src={logo.src}
                  alt={logo.name}
                  className="h-6 w-auto brightness-0 invert"
                  referrerPolicy="no-referrer"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
