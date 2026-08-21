"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Home,
  Compass,
  Sparkles,
  Zap,
  HelpCircle,
  Layers,
  ArrowUpRight,
  Terminal,
  RefreshCw,
} from "lucide-react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates (-1 to 1) for subtle parallax
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 20,
        y: (e.clientY / innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleCopyPath = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const quickLinks = [
    {
      title: "Core Features",
      description: "Explore next-gen AI capabilities & tools",
      icon: Sparkles,
      href: "/#features",
      badge: "Explore",
    },
    {
      title: "Solutions",
      description: "Automated workflows and integrations",
      icon: Layers,
      href: "/#solutions",
      badge: "Workflow",
    },
    {
      title: "Pricing Plans",
      description: "Transparent pricing for teams of any size",
      icon: Zap,
      href: "/#pricing",
      badge: "Plans",
    },
    {
      title: "Help & FAQ",
      description: "Common questions and platform answers",
      icon: HelpCircle,
      href: "/#faq",
      badge: "Support",
    },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#050508] text-white flex flex-col justify-between overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Google Font Preload for Chakra Petch */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,400;0,600;0,700;1,400;1,700&display=swap"
        rel="stylesheet"
      />

      {/* Atmospheric Glowing Background Orbs & Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle Cyber Grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 45%, black 20%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 45%, black 20%, transparent 80%)",
          }}
        />

        {/* Ambient Gradient Blobs with Dynamic Parallax */}
        <motion.div
          animate={{
            x: mousePos.x * -1.2,
            y: mousePos.y * -1.2,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 60 }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] md:w-[720px] h-[340px] sm:h-[500px] md:h-[720px] bg-gradient-to-tr from-emerald-600/20 via-teal-500/10 to-indigo-600/20 rounded-full blur-[120px] md:blur-[160px]"
        />

        <motion.div
          animate={{
            x: mousePos.x * 0.8,
            y: mousePos.y * 0.8,
          }}
          transition={{ type: "spring", damping: 25, stiffness: 50 }}
          className="absolute top-1/3 left-1/4 w-72 h-72 bg-emerald-500/15 rounded-full blur-[100px]"
        />

        <motion.div
          animate={{
            x: mousePos.x * -0.6,
            y: mousePos.y * -0.6,
          }}
          transition={{ type: "spring", damping: 25, stiffness: 50 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/15 rounded-full blur-[110px]"
        />

        {/* Soft Radial Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,8,0.7)_70%,#050508_100%)]" />
      </div>

      {/* Top Floating Glass Navigation Header */}
      <header className="relative z-20 w-full px-4 sm:px-6 md:px-12 pt-6">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 rounded-full bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
        >
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 rounded-full px-1"
          >
            <Image
              src="https://cdn.jiro.build/Kelo/Kelo%20White.svg"
              alt="Kelo AI Logo"
              width={70}
              height={26}
              priority
              referrerPolicy="no-referrer"
              className="h-6 w-auto object-contain"
            />
          </Link>

          {/* System Telemetry Pill */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-white/70">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>SYSTEM: 404_UNRESOLVED</span>
          </div>

          {/* Quick Header Action */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/"
              className="group flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-white/10 hover:bg-white text-white hover:text-black border border-white/15 hover:border-transparent transition-all duration-300 shadow-sm active:scale-95"
            >
              <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:-translate-y-0.5 transition-transform" />
              <span>Back Home</span>
            </Link>
          </div>
        </motion.div>
      </header>

      {/* Main Interactive 404 Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-12 md:py-16 text-center max-w-5xl mx-auto w-full">
        {/* Hologram / Neural Radar Centerpiece */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6 sm:mb-8 flex items-center justify-center"
        >
          {/* Outer Pulsing Glow Rings */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 flex items-center justify-center">
            {/* Spinning Radar Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-dashed border-emerald-500/25"
            />

            {/* Counter-Spinning Orbit Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 sm:inset-6 rounded-full border border-white/10"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_#10b981]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8]" />
            </motion.div>

            {/* Glowing Core Radar Disc */}
            <div className="absolute inset-10 sm:inset-14 rounded-full bg-gradient-to-b from-white/[0.07] to-transparent backdrop-blur-md border border-white/15 shadow-[0_0_60px_rgba(16,185,129,0.15)] flex flex-col items-center justify-center p-4">
              {/* Radar Scanner Sweep */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(16,185,129,0.25)_360deg)] pointer-events-none"
              />

              {/* Status Indicator Icon */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 p-3 sm:p-4 rounded-2xl bg-black/60 border border-white/15 shadow-inner text-emerald-400"
              >
                <Compass className="w-7 h-7 sm:w-9 sm:h-9 animate-pulse" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* 404 Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs sm:text-sm font-mono font-medium tracking-wide mb-4 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span>ERROR 404 • SIGNAL LOST IN LATENT SPACE</span>
        </motion.div>

        {/* Giant Futuristic 404 Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ fontFamily: "'Chakra Petch', sans-serif" }}
          className="text-6xl sm:text-8xl md:text-9xl font-extrabold tracking-tight mb-4 select-none relative"
        >
          <span className="bg-gradient-to-b from-white via-slate-200 to-slate-500/60 bg-clip-text text-transparent drop-shadow-2xl">
            404
          </span>
          <span className="absolute -inset-1 text-emerald-400/10 blur-xl select-none -z-10">
            404
          </span>
        </motion.h1>

        {/* Catchy Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ fontFamily: "'Chakra Petch', sans-serif" }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight leading-snug"
        >
          Lost in the Neural Coordinates
        </motion.h2>

        {/* Subtitle / Descriptive Text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-sm sm:text-base md:text-lg text-white/70 max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10"
        >
          The automated agent couldn&apos;t pinpoint the page you requested. It
          may have been relocated, purged from the cache, or dissolved into
          higher-dimensional latent space.
        </motion.p>

        {/* Primary Action Button Cluster */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md mx-auto mb-12 sm:mb-16"
        >
          {/* Main "Back to Home" Button */}
          <Link
            href="/"
            className="w-full sm:w-auto flex-1 group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base text-black bg-white hover:bg-white/95 shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            <Home className="w-4 h-4 text-black group-hover:-translate-y-0.5 transition-transform" />
            <span>Back to Home</span>
            <ArrowLeft className="w-4 h-4 text-black rotate-180 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Secondary "Copy / Re-check" Button */}
          <button
            onClick={handleCopyPath}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-medium text-xs sm:text-sm text-white/80 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-white/30 backdrop-blur-xl transition-all duration-300 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            {isCopied ? (
              <>
                <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" />
                <span className="text-emerald-300">URL Copied!</span>
              </>
            ) : (
              <>
                <Terminal className="w-4 h-4 text-white/70" />
                <span>Copy Coordinate</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Quick Navigation / Wayfinding Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-full max-w-4xl"
        >
          <div className="flex items-center justify-between mb-4 px-1 text-left">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-emerald-400" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-white/60 font-mono">
                Suggested Trajectories
              </span>
            </div>
            <span className="text-[11px] font-mono text-white/40 hidden sm:inline-block">
              SELECT_ROUTE // 01 - 04
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left">
            {quickLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group relative p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.08] hover:border-emerald-500/40 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_20px_rgba(16,185,129,0.1)]"
                >
                  {/* Subtle hover gradient highlight */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/15 transition-all" />

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400 group-hover:text-black transition-colors duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-white/60 group-hover:text-emerald-300 group-hover:border-emerald-500/30 transition-colors">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors flex items-center gap-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/50 mt-1 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-medium text-white/40 group-hover:text-white transition-colors">
                    <span>Navigate</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-emerald-400" />
                  </div>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </main>

      {/* Sleek Minimalist System Footer */}
      <footer className="relative z-10 w-full px-4 sm:px-6 md:px-12 py-6 border-t border-white/[0.06] bg-black/40 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>AI MOTION TEMPLATE • ALL SYSTEMS NOMINAL</span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Home className="w-3 h-3" />
              <span>Return Home</span>
            </Link>
            <span className="text-white/20">|</span>
            <Link
              href="/#faq"
              className="hover:text-white transition-colors"
            >
              Need Help?
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
