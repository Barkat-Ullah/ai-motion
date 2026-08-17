"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer({ className }: { className?: string }) {
  const socialIcons = [
    {
      name: "TikTok",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.77 0 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.31 6.31 0 00-.79-.05 6.34 6.34 0 000 12.68 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      ),
    },
    {
      name: "X",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
          <path d="M23 7s-.3-1.9-1.2-2.7c-1.1-1.2-2.4-1.2-3-1.3C16.2 3 12 3 12 3s-4.2 0-6.8.2c-.6.1-1.9.1-3 1.3C1.3 5.1 1 7 1 7S.7 9.1.7 11.2v2c0 2.1.3 4.2.3 4.2s.3 1.9 1.2 2.7c1.1 1.2 2.6 1.1 3.3 1.2C7.5 21.5 12 21.5 12 21.5s4.2 0 6.8-.3c.6-.1 1.9-.1 3-1.3.9-.8 1.2-2.7 1.2-2.7s.3-2.1.3-4.2v-2C23.3 9.1 23 7 23 7zM9.7 15.5V8.4l8 3.6-8 3.5z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      icon: (
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth={2}
        >
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
        </svg>
      ),
    },
  ];

  return (
    <section className={"w-full " + (className || "")}>
      <div className="m-2 rounded-[20px] overflow-hidden relative min-h-[680px] md:min-h-[800px] flex flex-col font-sans">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://cdn.jiro.build/Kelo/the-interior-of-a-vintage-retro-train-carriage-wit.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Row 1 — Newsletter Hero */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-5 sm:px-10 md:px-20 pt-14 md:pt-20 pb-8 md:pb-10">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" as const }}
            className="text-3xl sm:text-5xl md:text-[64px] lg:text-[80px] font-[800] text-white leading-[1.05] tracking-[-0.02em] text-center"
          >
            Weekly News. No Fluff.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: "easeOut" as const,
            }}
            className="mt-8 sm:mt-10 w-full max-w-[520px] bg-white/18 backdrop-blur-md rounded-full border border-white/25 flex flex-col sm:flex-row items-stretch gap-2 sm:gap-1.5 p-2 overflow-hidden"
          >
            <input
              type="email"
              placeholder="Enter Your E-mail"
              className="h-12 sm:h-14 flex-1 min-w-0 rounded-full sm:rounded-none bg-transparent px-5 sm:px-6 text-[15px] text-white placeholder:text-white/70 outline-none border-none"
            />
            <button className="h-12 sm:h-14 shrink-0 w-full sm:w-auto px-6 sm:px-8 bg-[#00bc7d] text-white rounded-full text-[13px] font-bold tracking-[0.1em] hover:bg-[#00a66e] transition-colors whitespace-nowrap flex items-center justify-center">
              SUBSCRIBE
            </button>
          </motion.div>
        </div>

        {/* Row 2 — Footer Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[24px] mx-3 sm:mx-5 mb-3 sm:mb-5 p-5 sm:p-8 md:p-10 shadow-2xl"
        >
          {/* Footer Row A */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 items-start">
            {/* Column 1 — Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2">
                <Image
                  src="https://cdn.jiro.build/Kelo/Kelo%20White.svg"
                  alt="Kelo Logo"
                  width={64}
                  height={24}
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="mt-3 text-white/55 text-[13px] leading-relaxed max-w-[260px]">
                Kelo empowers creators with state-of-the-art AI image generation
                tools to bring any vision to life instantly.
              </p>
            </div>

            {/* Column 2 — Explore */}
            <div>
              <h4 className="text-white text-[13px] font-semibold mb-4">
                Explore
              </h4>
              <ul className="space-y-2">
                {[
                  "AI Generator",
                  "Style Library",
                  "Community Gallery",
                  "API Documentation",
                  "Enterprise Solutions",
                ].map((link: string) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 text-[13px] hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — About Project */}
            <div>
              <h4 className="text-white text-[13px] font-semibold mb-4">
                About Project
              </h4>
              <ul className="space-y-2">
                {["Our Mission", "AI Ethics", "Research", "Careers"].map(
                  (link: string) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-white/60 text-[13px] hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Column 4 — Support */}
            <div>
              <h4 className="text-white text-[13px] font-semibold mb-4">
                Support
              </h4>
              <ul className="space-y-2">
                {[
                  "Help Center",
                  "API Status",
                  "Privacy Policy",
                  "Terms of Service",
                ].map((link: string) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 text-[13px] hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Row B */}
          <div className="mt-6 pt-5 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full">
              <span className="text-white/50 text-[12px]">
                Our Story Continues:
              </span>
              <div className="flex gap-3 sm:gap-4 flex-wrap">
                {socialIcons.map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
