/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Wand2,
  Megaphone,
  Rocket,
  Settings,
  Zap,
  Star,
  Flame,
  Mail,
  Check,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function FeatureSection({ className }: { className?: string }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <Link
        href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section
        className={
          "w-full px-6 py-[140px] bg-white font-sans relative overflow-hidden " +
          (className || "")
        }
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" as const }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-[1.1]"
            style={{ fontFamily: "'Chakra Petch', sans-serif" }}
          >
            Explore the Power of <br />
            Kelo AI
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" as const }}
            className="text-lg text-gray-500 max-w-2xl mx-auto"
          >
            Scale your customer experience with an AI chatbot that understands
            context, automates workflows, and learns with every chat.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto relative z-10"
        >
          {/* ROW 1 - Card 1: Feature List Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white rounded-[32px] border border-gray-200 p-6 flex flex-col gap-10 group transition-all relative overflow-hidden"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="https://cdn.jiro.build/Kelo/the-interior-of-a-vintage-retro-train-carriage-wit.jpg"
                alt="Vintage Train Interior"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Soft Black Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60" />
            </div>

            <div className="relative z-10">
              <h2
                className="text-3xl md:text-4xl font-bold text-white leading-[1.1] tracking-tight drop-shadow-lg"
                style={{ fontFamily: "'Chakra Petch', sans-serif" }}
              >
                Smarter conversations, <br />
                <span className="text-white italic">better results.</span>
              </h2>
              <p className="text-base text-white leading-relaxed max-w-[450px] mt-2 drop-shadow-md line-clamp-2">
                Our AI chatbot handles complex queries with human-like
                understanding and lightning-fast speed.
              </p>
            </div>

            <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              <div className="flex flex-col gap-4 p-6 rounded-[24px] bg-white/10 backdrop-blur-xl border border-white/20 transition-all hover:bg-white/20 group/item shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-sm shrink-0 transition-transform group-hover/item:scale-110">
                  <Wand2 className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-sm font-bold text-white">
                    NLP Engine
                  </span>
                  <p className="text-[11px] text-white/70 leading-relaxed">
                    Advanced natural language processing for human-like chat.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 p-6 rounded-[24px] bg-white/10 backdrop-blur-xl border border-white/20 transition-all hover:bg-white/20 group/item shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-sm shrink-0 transition-transform group-hover/item:scale-110">
                  <Megaphone className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="text-sm font-bold text-white">
                    Multi-channel
                  </span>
                  <p className="text-[11px] text-white/70 leading-relaxed">
                    Unified experience across web, mobile, and social platforms.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ROW 1 - Card 2: Adaptive Learning Mockup */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white rounded-[32px] border border-gray-200 p-6 flex flex-col overflow-hidden relative min-h-[440px] transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/40 via-teal-50/40 to-lime-100/40" />
            <div className="absolute top-1/4 right-0 w-64 h-64 bg-emerald-400/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-400/20 rounded-full blur-[60px]" />

            <div className="relative z-10 w-full flex-1 flex flex-col items-center justify-center pointer-events-none select-none py-8">
              {/* Glass Container */}
              <div className="w-full max-w-[280px] bg-white/40 backdrop-blur-xl border border-white/60 rounded-[24px] p-7 shadow-2xl shadow-emerald-500/5">
                <div className="space-y-4">
                  {[
                    { label: "Startup", color: "bg-emerald-400" },
                    { label: "Fintech", color: "bg-teal-400" },
                    { label: "AI SaaS", color: "bg-lime-400" },
                  ].map((item: { label: string; color: string }, i: number) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.5 + i * 0.1,
                        ease: "easeOut" as const,
                      }}
                      className="flex items-center gap-3 bg-white/80 rounded-xl p-3 border border-white/40 shadow-sm"
                    >
                      <div className={"w-2 h-2 rounded-full " + item.color} />
                      <span className="text-xs font-medium text-gray-700">
                        {item.label}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Training Data Input */}
                <div className="mt-10 bg-white/90 rounded-full border border-white p-2.5 flex items-center gap-3 shadow-lg shadow-emerald-500/10">
                  <div className="w-6 h-6 rounded-full border-2 border-emerald-100 border-t-emerald-500 animate-spin" />
                  <span className="text-[10px] font-medium text-gray-500 flex-1">
                    Training data...
                  </span>
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <Wand2 className="h-3.5 w-3.5 text-white" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-auto relative z-10 pt-8">
              <h3
                className="text-xl font-bold text-gray-900"
                style={{ fontFamily: "'Chakra Petch', sans-serif" }}
              >
                Context-Aware Learning
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mt-2">
                The chatbot learns from every interaction to provide
                increasingly accurate and personalized responses.
              </p>
            </div>
          </motion.div>

          {/* ROW 2 - Card 3: Smart Automation Mockup */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white rounded-[32px] border border-gray-200 overflow-hidden flex flex-col transition-all"
          >
            <div className="bg-gray-50 h-72 relative flex items-center justify-center overflow-hidden border-b border-gray-200 p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/50" />

              {/* Soft Background Glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-12 bg-emerald-500/10 blur-2xl rounded-full" />

              {/* Floating 3D-styled Background Elements */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity as number,
                  ease: "easeInOut" as const,
                }}
                className="absolute top-10 right-10 w-16 h-16 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_20px_40px_rgba(0,0,0,0.08),inset_0_0_20px_rgba(255,255,255,0.5)] flex items-center justify-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-transparent" />
                <Rocket className="h-7 w-7 text-emerald-600 drop-shadow-md" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 12, 0],
                  rotate: [0, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity as number,
                  ease: "easeInOut" as const,
                  delay: 1,
                }}
                className="absolute bottom-10 left-10 w-18 h-18 rounded-[24px] bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_20px_40px_rgba(0,0,0,0.08),inset_0_0_20px_rgba(255,255,255,0.5)] flex items-center justify-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-teal-400/20 to-transparent" />
                <Star className="h-8 w-8 text-teal-600 drop-shadow-md" />
              </motion.div>

              {/* Visual Workflow Builder Mockup */}
              <div className="relative z-10 w-full max-w-[260px] flex flex-col items-center">
                {/* Trigger Node */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ ease: "easeOut" as const }}
                  className="bg-white rounded-2xl p-4 shadow-xl shadow-emerald-500/5 border border-emerald-100 flex items-center gap-3 w-full mb-8 relative"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center shrink-0">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-gray-900">
                      User Query Trigger
                    </span>
                    <span className="text-[9px] text-gray-400">
                      "I need help with my order"
                    </span>
                  </div>
                  {/* Connecting Line Down */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-px h-8 bg-gradient-to-b from-emerald-200 to-emerald-400/50" />
                </motion.div>

                {/* Action Nodes Grid */}
                <div className="grid grid-cols-2 gap-4 w-full relative">
                  {/* Connecting Lines */}
                  <div className="absolute -top-4 left-1/4 right-1/4 h-px bg-emerald-200" />
                  <div className="absolute -top-4 left-1/4 w-px h-4 bg-emerald-200" />
                  <div className="absolute -top-4 right-1/4 w-px h-4 bg-emerald-200" />

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, ease: "easeOut" as const }}
                    className="bg-white/80 backdrop-blur-md rounded-xl p-3 shadow-lg shadow-emerald-500/5 border border-white flex flex-col gap-2 items-center text-center"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <Settings className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-900">
                      Update CRM
                    </span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, ease: "easeOut" as const }}
                    className="bg-white/80 backdrop-blur-md rounded-xl p-3 shadow-lg shadow-emerald-500/5 border border-white flex flex-col gap-2 items-center text-center"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <Mail className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="text-[10px] font-bold text-gray-900">
                      Send Email
                    </span>
                  </motion.div>
                </div>

                {/* Success Indicator */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, ease: "easeOut" as const }}
                  className="mt-8 bg-emerald-500 text-white text-[10px] font-bold py-2 px-4 rounded-full shadow-lg shadow-emerald-500/20 flex items-center gap-2"
                >
                  <Check className="h-3 w-3 stroke-[3]" />
                  <span>Workflow Executed</span>
                </motion.div>
              </div>
            </div>

            <div className="p-6">
              <h3
                className="text-xl font-bold text-gray-900"
                style={{ fontFamily: "'Chakra Petch', sans-serif" }}
              >
                Automated Workflows
              </h3>
              <p className="text-base text-gray-500 leading-relaxed mt-2">
                Trigger actions across your stack directly from chat, from CRM
                updates to helpdesk tickets.
              </p>
            </div>
          </motion.div>

          {/* ROW 2 - Card 4: Analytics Mockup */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="bg-white rounded-[32px] border border-gray-200 overflow-hidden flex flex-col transition-all"
          >
            <div className="bg-gray-50 h-72 relative flex flex-col items-center justify-center border-b border-gray-200 p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/50" />

              {/* Analytics-like Mockup */}
              <div className="w-full h-full bg-white/60 backdrop-blur-xl rounded-2xl border border-white/80 shadow-2xl shadow-emerald-500/5 p-6 flex flex-col gap-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <Flame className="h-5 w-5 text-emerald-500" />
                    </div>
                    <div>
                      <div className="h-2 bg-gray-900/10 rounded-full w-16 mb-1.5" />
                      <div className="h-1.5 bg-gray-900/5 rounded-full w-10" />
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    {[1, 2, 3, 4].map((i: number) => (
                      <div
                        key={i}
                        className="w-1.5 h-6 bg-emerald-500/10 rounded-full overflow-hidden"
                      >
                        <motion.div
                          animate={{ height: ["20%", "90%", "20%"] }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity as number,
                            delay: i * 0.4,
                            ease: "easeInOut" as const,
                          }}
                          className="w-full bg-emerald-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1 flex items-end gap-3 px-2">
                  {[40, 70, 45, 90, 65, 80, 50, 60].map(
                    (h: number, i: number) => (
                      <div
                        key={i}
                        className="flex-1 bg-slate-100/50 rounded-t-lg relative group h-full flex flex-col justify-end"
                      >
                        <motion.div
                          initial={{ height: 0 }}
                          whileInView={{ height: h + "%" }}
                          transition={{
                            duration: 1.2,
                            delay: i * 0.1,
                            ease: "easeOut" as const,
                          }}
                          className="w-full bg-gradient-to-t from-emerald-400/80 to-emerald-500 rounded-t-lg shadow-lg shadow-emerald-500/10"
                        />
                      </div>
                    ),
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-black/5">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i: number) => (
                      <Image
                        key={i}
                        src={"https://i.pravatar.cc/100?u=" + (i + 10)}
                        alt="User avatar"
                        width={32}
                        height={32}
                        sizes="32px"
                        className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 shadow-sm object-cover"
                        referrerPolicy="no-referrer"
                      />
                    ))}
                  </div>
                  <div className="h-2 bg-gray-900/5 rounded-full w-24" />
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3
                className="text-xl font-bold text-gray-900"
                style={{ fontFamily: "'Chakra Petch', sans-serif" }}
              >
                Conversational Insights
              </h3>
              <p className="text-base text-gray-500 leading-relaxed mt-2">
                Analyze chat patterns and sentiment in real-time to continuously
                improve user satisfaction.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
