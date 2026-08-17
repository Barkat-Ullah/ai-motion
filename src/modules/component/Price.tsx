/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const plans = [
  {
    name: "Starter Plan",
    tagline: "From zero to automated.",
    price: "$499",
    isPopular: false,
    features: [
      "PROCESS AUDIT",
      "1 AUTOMATED WORKFLOW",
      "TOOL INTEGRATION SETUP",
      "EMAIL & SLACK NOTIFICATIONS",
      "30-DAY SUPPORT",
      "BI-WEEKLY CHECK-IN",
    ],
  },
  {
    name: "Growth Plan",
    tagline: "Multiple systems, one team.",
    price: "$999",
    isPopular: true,
    features: [
      "EVERYTHING IN STARTER",
      "UP TO 4 AUTOMATED WORKFLOWS",
      "CRM & API INTEGRATIONS",
      "MONTHLY OPTIMIZATION CALL",
      "PERFORMANCE REPORTING",
      "PRIORITY SUPPORT",
    ],
  },
  {
    name: "Custom",
    tagline: "Full automation architecture.",
    price: "Custom",
    isPopular: false,
    features: [
      "EVERYTHING IN GROWTH",
      "UNLIMITED WORKFLOWS",
      "CUSTOM AI AGENTS",
      "DEDICATED ACCOUNT MANAGER",
      "WEEKLY STRATEGY CALLS",
      "SLA AGREEMENT",
    ],
  },
];

function DotGridIcon() {
  return (
    <div className="grid grid-cols-2 gap-1">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="w-1 h-1 rounded-full bg-white" />
      ))}
    </div>
  );
}

export default function Pricing06Kelo({ className }: { className?: string }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <Link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <section
        className={
          "w-full px-0 py-16 bg-[hsl(var(--background))] font-body overflow-hidden relative " +
          (className || "")
        }
      >
        {/* UPPER TEXT BLOCK */}
        <div className="text-center px-6 mb-10 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="font-sans font-semibold text-[48px] text-[hsl(var(--foreground))] leading-[1.04] tracking-tight"
          >
            Simple, flexible plans.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-4 text-sm md:text-base text-[hsl(var(--foreground-dim))] font-body"
          >
            Choose the system that fits your stage. Scale when you're ready.
          </motion.p>
        </div>

        {/* PRICING PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-6 md:mx-10 lg:mx-auto max-w-[1440px] relative rounded-[20px] bg-[hsl(var(--surface))] shadow-[var(--shadow-panel)] overflow-hidden"
        >
          {/* Background photo layer */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://cdn.jiro.build/Kelo/the-interior-of-a-vintage-retro-train-carriage-wit.jpg"
              alt="Atmospheric background"
              fill
              sizes="100vw"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Inner white panel */}
          <div className="relative z-10 bg-white/40 backdrop-blur-xl m-[40px] rounded-[12px] overflow-hidden border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
              {plans.map((plan, idx) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 + idx * 0.1 }}
                  className="flex flex-col px-8 py-10"
                >
                  {/* TOP SECTION */}
                  <div className="pb-8 border-b border-white/10">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-sans font-bold text-2xl text-[hsl(var(--foreground))]">
                        {plan.name}
                      </h3>
                      {plan.isPopular && (
                        <span className="inline-flex items-center px-3 py-1 text-[10px] font-semibold tracking-[0.12em] uppercase bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] font-body">
                          POPULAR
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-[hsl(var(--foreground))] font-body mt-1 opacity-90">
                      {plan.tagline}
                    </p>

                    <div className="mt-8 flex items-baseline gap-1">
                      <span className="font-sans font-bold text-5xl text-[hsl(var(--foreground))] leading-none">
                        {plan.price}
                      </span>
                      <span className="text-xs font-medium tracking-[0.1em] uppercase text-[hsl(var(--foreground-muted))] font-body ml-1">
                        /MONTH
                      </span>
                    </div>

                    <button className="mt-6 w-full flex items-center justify-between rounded-full bg-[hsl(var(--btn-bg))] text-[hsl(var(--btn-text))] p-1.5 group transition-colors hover:bg-[hsl(var(--btn-icon-bg))]">
                      <span className="flex-1 px-5 py-3 text-sm font-medium font-sans text-left">
                        Get in touch
                      </span>
                      <span className="w-10 h-10 rounded-full bg-[hsl(var(--btn-icon-bg))] flex items-center justify-center flex-shrink-0 group-hover:bg-[hsl(var(--btn-bg))] transition-colors">
                        <DotGridIcon />
                      </span>
                    </button>
                  </div>

                  {/* BOTTOM SECTION */}
                  <div className="pt-8 flex flex-col gap-4">
                    <div className="flex flex-col gap-3">
                      {plan.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded-sm bg-black/5 border border-black/10 flex items-center justify-center flex-shrink-0">
                            <Check className="h-2.5 w-2.5 text-black stroke-[2.5]" />
                          </div>
                          <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-[hsl(var(--foreground))] font-body">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
