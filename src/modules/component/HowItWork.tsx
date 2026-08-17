"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Database, BarChart2, CheckCircle } from "lucide-react";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  },
};

export default function HowItWorks({ className }: { className?: string }) {
  return (
    <>
      <section
        className={
          "w-full px-5 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-white relative overflow-hidden " +
          inter.className +
          " " +
          (className || "")
        }
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity as number,
              ease: "easeInOut" as const,
            }}
            className="absolute -top-20 -left-20 w-56 h-56 md:w-96 md:h-96 bg-[#00bc7d]/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity as number,
              ease: "easeInOut" as const,
              delay: 1,
            }}
            className="absolute -bottom-20 -right-20 w-56 h-56 md:w-96 md:h-96 bg-[#00bc7d]/5 rounded-full blur-3xl"
          />
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20 flex flex-col items-center gap-4 relative z-10"
        >
          <h2 className="font-bold text-3xl md:text-[48px] text-center leading-[1.1] max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="block"
            >
              Transform your business
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="block"
            >
              in 3 simple steps
            </motion.span>
          </h2>
        </motion.div>

        {/* Step Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20 max-w-7xl mx-auto relative z-10"
        >
          {/* STEP 01 */}
          <motion.div
            variants={stepVariants}
            className="flex flex-col gap-6 group cursor-default"
          >
            <div className="rounded-2xl overflow-hidden relative aspect-[4/3] w-full shadow-lg transition-shadow duration-500">
              <Image
                src="https://cdn.jiro.build/Kelo/67594d4535b941c71eee76123efaf48a.jpg"
                alt="Analyze Your Process"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover w-full h-full absolute inset-0 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/5 transition-opacity duration-500" />

              {/* Stacked Glass Chips Mockup */}
              <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full bg-white/20 backdrop-blur-2xl rounded-[15px] border border-white/30 p-6 flex flex-col justify-center gap-2 shadow-2xl shadow-black/5 overflow-hidden"
                >
                  {/* Chip 1 */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      y: [0, -2, 0],
                    }}
                    transition={{
                      opacity: { delay: 0.4 },
                      x: { delay: 0.4 },
                      y: {
                        duration: 3,
                        repeat: Infinity as number,
                        ease: "easeInOut" as const,
                      },
                    }}
                    className="bg-white/40 backdrop-blur-md rounded-[8px] border border-white/40 px-2 py-1 flex items-center gap-2 shadow-lg shadow-black/5"
                  >
                    <div className="w-5 h-5 rounded-[6px] bg-white/20 flex items-center justify-center shrink-0">
                      <motion.div
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity as number,
                          ease: "easeInOut" as const,
                        }}
                      >
                        <Database className="h-2.5 w-2.5 text-gray-600" />
                      </motion.div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold leading-none mb-0.5">
                        Data Collection
                      </span>
                      <span className="text-[6px] text-gray-500 leading-none">
                        Gathering workflow information
                      </span>
                    </div>
                  </motion.div>

                  {/* Chip 2 - Active/White */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="relative bg-white rounded-[8px] px-2.5 py-1.5 flex items-center gap-2 shadow-2xl shadow-[#00bc7d]/10 z-10 border border-[#00bc7d]/20 overflow-hidden"
                  >
                    {/* Scanning line animation */}
                    <motion.div
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity as number,
                        ease: "linear" as const,
                      }}
                      className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[#00bc7d]/20 to-transparent -skew-x-12 pointer-events-none"
                    />

                    <div className="w-7 h-7 rounded-[6px] bg-[#00bc7d]/10 flex items-center justify-center shrink-0">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity as number,
                          ease: "easeInOut" as const,
                        }}
                      >
                        <BarChart2 className="h-3.5 w-3.5 text-[#00bc7d]" />
                      </motion.div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-bold leading-none mb-1">
                        Process Analysis
                      </span>
                      <span className="text-[8px] text-gray-500 leading-none">
                        Identifying patterns &amp; tasks
                      </span>
                    </div>
                  </motion.div>

                  {/* Chip 3 */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      y: [0, 2, 0],
                    }}
                    transition={{
                      opacity: { delay: 0.6 },
                      x: { delay: 0.6 },
                      y: {
                        duration: 3,
                        repeat: Infinity as number,
                        ease: "easeInOut" as const,
                        delay: 0.5,
                      },
                    }}
                    className="bg-white/40 backdrop-blur-md rounded-[8px] border border-white/40 px-2 py-1 flex items-center gap-2 shadow-lg shadow-black/5"
                  >
                    <div className="w-5 h-5 rounded-[6px] bg-white/20 flex items-center justify-center shrink-0">
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity as number,
                          ease: "easeInOut" as const,
                        }}
                      >
                        <CheckCircle className="h-2.5 w-2.5 text-gray-600" />
                      </motion.div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-bold leading-none mb-0.5">
                        Optimization Report
                      </span>
                      <span className="text-[6px] text-gray-500 leading-none">
                        Recommendations ready
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="inline-flex w-fit rounded-full bg-transparent text-[#00bc7d] text-xs font-bold px-3 py-1 border border-[#00bc7d] transition-colors duration-300">
                Step 01
              </span>
              <h3 className="text-2xl font-bold leading-tight transition-colors duration-300">
                Analyze Your Process
              </h3>
              <p className="text-base text-gray-500 leading-relaxed">
                Connect your tools - our AI scans workflows to spot automation.
              </p>
            </div>
          </motion.div>

          {/* STEP 02 */}
          <motion.div
            variants={stepVariants}
            className="flex flex-col gap-6 group cursor-default"
          >
            <div className="rounded-2xl overflow-hidden relative aspect-[4/3] w-full shadow-lg transition-shadow duration-500">
              <Image
                src="https://cdn.jiro.build/Kelo/interior-of-an-old-abandoned-vintage-train-carriag.jpeg"
                alt="Automate with AI"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover w-full h-full absolute inset-0 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Glass Container Mockup */}
              <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full bg-white/20 backdrop-blur-2xl rounded-[15px] border border-white/30 p-6 flex items-center justify-between shadow-2xl shadow-black/5 overflow-hidden"
                >
                  {/* Left: Concentric Circles (Focused Radar) */}
                  <div className="relative w-1/2 h-full flex items-center justify-center">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      {/* Glowing Center Point */}
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity as number,
                          ease: "easeInOut" as const,
                        }}
                        className="w-3 h-3 rounded-full bg-white shadow-[0_0_15px_white] z-10"
                      />

                      {/* Dynamic Ripples */}
                      {[1, 2, 3, 4, 5].map((i: number) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.2 }}
                          animate={{
                            scale: [0.2, 1.8],
                            opacity: [0, 0.6, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity as number,
                            ease: "easeOut" as const,
                            delay: i * 0.8,
                          }}
                          className="absolute border border-white/40 rounded-full"
                          style={{ width: "100%", height: "100%" }}
                        />
                      ))}

                      {/* Static/Subtle Rings for depth */}
                      {[1, 2, 3, 4].map((i: number) => (
                        <div
                          key={"static-" + i}
                          className="absolute border border-white/15 rounded-full"
                          style={{ width: i * 25 + "%", height: i * 25 + "%" }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Right: Action Pills */}
                  <div className="flex flex-col gap-2 items-end pr-2">
                    {(["Consult", "Summarize", "Invest"] as string[]).map(
                      (text: string, i: number) => (
                        <motion.div
                          key={text}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className={
                            "rounded-[8px] px-4 py-2 shadow-xl shadow-black/5 border flex items-center justify-center min-w-[85px] " +
                            (i === 1
                              ? "bg-[#00bc7d] border-[#00bc7d] text-white"
                              : "bg-white border-white text-gray-800")
                          }
                        >
                          <span className="text-[11px] font-bold tracking-tight leading-none">
                            {text}
                          </span>
                        </motion.div>
                      ),
                    )}
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="inline-flex w-fit rounded-full bg-transparent text-[#00bc7d] text-xs font-bold px-3 py-1 border border-[#00bc7d] transition-colors duration-300">
                Step 02
              </span>
              <h3 className="text-2xl font-bold leading-tight transition-colors duration-300">
                Automate with AI
              </h3>
              <p className="text-base text-gray-500 leading-relaxed">
                AI learns and adapts to optimize your workflows effortlessly.
              </p>
            </div>
          </motion.div>

          {/* STEP 03 */}
          <motion.div
            variants={stepVariants}
            className="flex flex-col gap-6 group cursor-default"
          >
            <div className="rounded-2xl overflow-hidden relative aspect-[4/3] w-full shadow-lg transition-shadow duration-500">
              <Image
                src="https://cdn.jiro.build/Kelo/a-worn-vintage-yellow-wooden-desk-sitting-in-an-op.jpeg"
                alt="Predictive Analytics"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover w-full h-full absolute inset-0 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Glass Container Mockup */}
              <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full bg-white/20 backdrop-blur-2xl rounded-[15px] border border-white/30 p-6 flex flex-col justify-center gap-3 shadow-2xl shadow-black/5 overflow-hidden"
                >
                  {/* Main Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-white rounded-[8px] p-2 flex items-center gap-3 shadow-xl shadow-black/5 border border-white relative overflow-hidden"
                  >
                    {/* Subtle scanning effect for the card */}
                    <motion.div
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity as number,
                        ease: "linear" as const,
                      }}
                      className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[#00bc7d]/5 to-transparent -skew-x-12 pointer-events-none"
                    />

                    {/* Grid Icon */}
                    <div className="w-10 h-10 rounded-[8px] bg-[#00bc7d]/10 flex items-center justify-center shrink-0">
                      <div className="grid grid-cols-3 gap-0.5">
                        {Array.from({ length: 9 }).map(
                          (_: unknown, i: number) => (
                            <motion.div
                              key={i}
                              animate={{ opacity: [0.4, 1, 0.4] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity as number,
                                delay: i * 0.1,
                              }}
                              className="w-1 h-1 bg-[#00bc7d] rounded-[0.5px]"
                            />
                          ),
                        )}
                      </div>
                    </div>

                    {/* Bar Chart Visualization */}
                    <div className="flex-1 flex items-end gap-1 h-8 px-1">
                      {(
                        [4, 8, 12, 6, 10, 8, 7, 6, 5, 9, 5, 11] as number[]
                      ).map((h: number, i: number) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{
                            height: [
                              h * 1.5 + "px",
                              h * 2.2 + "px",
                              h * 1.5 + "px",
                            ],
                          }}
                          transition={{
                            height: {
                              duration: 2,
                              repeat: Infinity as number,
                              ease: "easeInOut" as const,
                              delay: i * 0.05,
                            },
                          }}
                          className="w-1.5 bg-[#00bc7d]/20 rounded-[1px]"
                        />
                      ))}
                    </div>

                    {/* Right Bar */}
                    <motion.div
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity as number,
                        ease: "easeInOut" as const,
                      }}
                      className="w-2 h-8 rounded-[2px] bg-[#00bc7d]/20 shrink-0"
                    />
                  </motion.div>

                  {/* Bottom Pill */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    className="bg-white rounded-[8px] px-3 py-1.5 w-fit shadow-lg shadow-black/5 border border-white flex items-center gap-2"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity as number }}
                      className="w-1 h-1 rounded-full bg-[#00bc7d]"
                    />
                    <span className="text-[10px] font-bold tracking-tight leading-none">
                      Analytics Engine
                    </span>
                  </motion.div>
                </motion.div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="inline-flex w-fit rounded-full bg-transparent text-[#00bc7d] text-xs font-bold px-3 py-1 border border-[#00bc7d] transition-colors duration-300">
                Step 03
              </span>
              <h3 className="text-2xl font-bold leading-tight transition-colors duration-300">
                Predictive Analytics
              </h3>
              <p className="text-base text-gray-500 leading-relaxed">
                Data-driven insights with machine learning for smarter business
                decisions.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 relative z-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto rounded-full px-10 py-4 text-sm font-bold tracking-widest uppercase bg-[#00bc7d] text-white shadow-xl shadow-[#00bc7d]/20 hover:shadow-2xl hover:shadow-[#00bc7d]/30 transition-all duration-300"
          >
            Get Started
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto rounded-full px-10 py-4 text-sm font-bold tracking-widest uppercase bg-white text-gray-900 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Book a Demo
          </motion.button>
        </motion.div>
      </section>
    </>
  );
}
