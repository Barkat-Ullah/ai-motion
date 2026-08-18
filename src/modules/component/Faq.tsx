"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";
import Image from "next/image";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQData {
  [key: string]: FAQItem[];
}

const faqData: FAQData = {
  product: [
    {
      question: "Is there a free trial?",
      answer:
        "Yes! We offer a 14-day free trial with full access to all features. No credit card required to get started.",
    },
    {
      question: "How long does setup take?",
      answer:
        "Most teams are up and running within 30 minutes. Our onboarding wizard walks you through every step.",
    },
    {
      question: "Can I integrate Flowis with my current tools?",
      answer:
        "Absolutely. Flowis connects with 1,000+ tools including Slack, Notion, HubSpot, Salesforce, and more via native integrations and Zapier.",
    },
    {
      question: "What happens after the trial ends?",
      answer:
        "You'll be prompted to choose a plan. If you don't upgrade, your account moves to a limited free tier — your data is never deleted.",
    },
    {
      question: "Is Flowis secure enough for enterprise use?",
      answer:
        "Yes. We're SOC 2 Type II certified, GDPR compliant, and offer SSO, audit logs, and custom data retention policies for enterprise customers.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "All plans include email support. Pro plans get priority live chat, and Enterprise plans come with a dedicated Customer Success Manager.",
    },
  ],
  support: [
    {
      question: "How do I contact support?",
      answer:
        "You can reach our support team via live chat (available in-app) or by emailing support@flowis.com. We typically respond within 2 hours.",
    },
    {
      question: "Is there documentation or a knowledge base?",
      answer:
        "Yes, we have a comprehensive help center at docs.flowis.com with guides, tutorials, and video walkthroughs.",
    },
    {
      question: "Do you offer onboarding assistance?",
      answer:
        "All paid plans include a live onboarding call. Enterprise plans get dedicated onboarding with a specialist assigned to your account.",
    },
    {
      question: "Can I request a feature?",
      answer:
        "Absolutely. Submit feature requests through our public roadmap portal — our product team reviews every submission.",
    },
    {
      question: "What's your average response time?",
      answer:
        "For chat support: under 5 minutes. For email: under 4 hours on business days. Enterprise SLAs are available on request.",
    },
  ],
  payments: [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and bank transfers for annual enterprise plans.",
    },
    {
      question: "Can I change my plan at any time?",
      answer:
        "Yes. You can upgrade or downgrade your plan at any time. Upgrades take effect immediately; downgrades apply at the next billing cycle.",
    },
    {
      question: "Is there a refund policy?",
      answer:
        "We offer a 30-day money-back guarantee on all paid plans. No questions asked.",
    },
    {
      question: "Do you offer annual billing discounts?",
      answer:
        "Yes — annual billing saves you 20% compared to monthly billing. Switch anytime from your account settings.",
    },
    {
      question: "Will I get an invoice for each payment?",
      answer:
        "Yes. Invoices are automatically sent to your billing email after every payment and are also available in your account dashboard.",
    },
  ],
};

function MonitorIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
      <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}

function PaymentsIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      <rect x="1" y="4" width="22" height="16" rx="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  );
}

export default function FAQ({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState("product");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setOpenIndex(null);
  };

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const tabs = [
    { id: "product", label: "Product", icon: <MonitorIcon /> },
    { id: "support", label: "Support", icon: <SupportIcon /> },
    { id: "payments", label: "Payments", icon: <PaymentsIcon /> },
  ];

  return (
    <section
      id="about"
      className={
        "scroll-mt-28 bg-white py-[60px] sm:py-[80px] px-4 sm:px-6 md:px-[80px] font-sans " + (className || "")
      }
    >
      <div className="max-w-[780px] mx-auto">
        {/* Header */}
        <div className="text-center mb-[40px]">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[#111111] leading-tight mb-[12px]">
            All You Need to Know
          </h2>
          <p className="text-[16px] text-[#888888]">
            Quick answers to help you get the most out of your unified workspace
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-[8px] border-b border-[#eeeeee] mb-[32px]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={
                "inline-flex items-center gap-[8px] px-[20px] py-[10px] text-[15px] cursor-pointer transition-all border-b-2 whitespace-nowrap " +
                (activeTab === tab.id
                  ? "text-[#00bc7d] font-[600] border-[#00bc7d]"
                  : "text-[#888888] font-[500] border-transparent")
              }
            >
              <span
                className={
                  activeTab === tab.id ? "text-[#00bc7d]" : "text-[#888888]"
                }
              >
                {tab.icon}
              </span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-0">
          {faqData[activeTab].map((item: FAQItem, index: number) => (
            <div key={index} className="border-b border-[#eeeeee] py-[20px]">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center text-left cursor-pointer group"
              >
                <span className="text-[16px] font-[500] text-[#111111]">
                  {item.question}
                </span>
                <span className="text-[20px] text-[#888888] font-[300] transition-transform duration-300">
                  {openIndex === index ? (
                    <X size={20} strokeWidth={1.5} />
                  ) : (
                    <Plus size={20} strokeWidth={1.5} />
                  )}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key={"faq-answer-" + index}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" as const }}
                    className="overflow-hidden"
                  >
                    <div className="pt-[12px] pb-[4px] text-[15px] text-[#666666] leading-[1.7]">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Bottom Contact Card */}
        <div className="mt-[48px] bg-[#f7f7f8] rounded-[14px] p-[24px] md:p-[32px] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <div className="flex -space-x-[12px]">
              <Image
                src="https://i.pravatar.cc/44?img=47"
                alt="Support team member 1"
                width={44}
                height={44}
                sizes="44px"
                className="w-[44px] h-[44px] rounded-full border-2 border-white relative z-[3] object-cover"
                referrerPolicy="no-referrer"
              />
              <Image
                src="https://i.pravatar.cc/44?img=12"
                alt="Support team member 2"
                width={44}
                height={44}
                sizes="44px"
                className="w-[44px] h-[44px] rounded-full border-2 border-white relative z-[2] object-cover"
                referrerPolicy="no-referrer"
              />
              <Image
                src="https://i.pravatar.cc/44?img=33"
                alt="Support team member 3"
                width={44}
                height={44}
                sizes="44px"
                className="w-[44px] h-[44px] rounded-full border-2 border-white relative z-[1] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="ml-[16px]">
              <p className="font-[600] text-[15px] text-[#111111]">
                Have more questions?
              </p>
              <p className="text-[14px] text-[#888888]">
                Contact our support team
              </p>
            </div>
          </div>
          <button className="relative group bg-[#111111] text-white rounded-[16px] px-[24px] py-[14px] text-[15px] font-[600] transition-all hover:bg-[#1a1a1a] flex items-center gap-3 overflow-hidden">
            <span
              className="relative z-10"
              style={{
                textShadow:
                  "0.5px 0 0 rgba(255,0,0,0.4), -0.5px 0 0 rgba(0,255,255,0.4)",
              }}
            >
              Contact Us
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="relative z-10 transition-transform group-hover:translate-x-1"
            >
              <path d="M7 7v6a2 2 0 0 0 2 2h9" />
              <path d="m15 11 4 4-4 4" />
            </svg>
            <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-[120%] h-[20px] bg-[radial-gradient(circle,rgba(160,100,255,0.4),rgba(100,150,255,0.2),transparent_70%)] blur-[15px] pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </div>
    </section>
  );
}
