"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  isFaded?: boolean;
}

const integrations: Integration[] = [
  {
    id: "arc",
    name: "Arc",
    description: "The browser that works for you",
    icon: (
      <Image
        width={28}
        height={28}
        sizes="28px"
        src="https://www.google.com/s2/favicons?domain=arc.net&sz=128"
        alt="Arc"
        className="w-7 h-7"
        referrerPolicy="no-referrer"
      />
    ),
  },
  {
    id: "notion",
    name: "Notion",
    description: "All-in-one workspace for notes and docs",
    icon: (
      <Image
        width={28}
        height={28}
        sizes="28px"
        src="https://cdn.simpleicons.org/notion/000000"
        alt="Notion"
        className="w-7 h-7"
        referrerPolicy="no-referrer"
      />
    ),
  },
  {
    id: "raycast",
    name: "Raycast",
    description: "Control your tools with a keystroke",
    icon: (
      <Image
        width={28}
        height={28}
        sizes="28px"
        src="https://cdn.simpleicons.org/raycast/FF6363"
        alt="Raycast"
        className="w-7 h-7"
        referrerPolicy="no-referrer"
      />
    ),
  },
  {
    id: "loom",
    name: "Loom",
    description: "Async video messaging for teams",
    icon: (
      <Image
        width={28}
        height={28}
        sizes="28px"
        src="https://cdn.simpleicons.org/loom/625DF5"
        alt="Loom"
        className="w-7 h-7"
        referrerPolicy="no-referrer"
      />
    ),
  },
  {
    id: "mailchimp",
    name: "Mailchimp",
    description: "Marketing automation and email marketing",
    icon: (
      <Image
        width={28}
        height={28}
        sizes="28px"
        src="https://cdn.simpleicons.org/mailchimp/FFE01B"
        alt="Mailchimp"
        className="w-7 h-7"
        referrerPolicy="no-referrer"
      />
    ),
  },
  {
    id: "lovable",
    name: "Lovable",
    description: "Build apps with natural language",
    icon: (
      <Image
        width={28}
        height={28}
        sizes="28px"
        src="https://www.google.com/s2/favicons?domain=lovable.dev&sz=128"
        alt="Lovable"
        className="w-7 h-7 rounded-sm"
        referrerPolicy="no-referrer"
      />
    ),
  },
  {
    id: "bolt",
    name: "Bolt",
    description: "Lightning fast development environment",
    icon: (
      <Image
        width={28}
        height={28}
        sizes="28px"
        src="https://cdn.simpleicons.org/stackblitz/F59E0B"
        alt="Bolt"
        className="w-7 h-7"
        referrerPolicy="no-referrer"
      />
    ),
  },
  {
    id: "warp",
    name: "Warp",
    description: "The terminal for the 21st century",
    icon: (
      <Image
        width={28}
        height={28}
        sizes="28px"
        src="https://cdn.simpleicons.org/warp/00A3FF"
        alt="Warp"
        className="w-7 h-7"
        referrerPolicy="no-referrer"
      />
    ),
  },
  {
    id: "vscode",
    name: "Visual Studio Code",
    description: "Code editing. Redefined.",
    icon: (
      <Image
        width={28}
        height={28}
        sizes="28px"
        src="https://www.google.com/s2/favicons?domain=code.visualstudio.com&sz=128"
        alt="VS Code"
        className="w-7 h-7"
        referrerPolicy="no-referrer"
      />
    ),
  },
  {
    id: "nextjs",
    name: "Next.js",
    description: "The React Framework for the Web",
    icon: (
      <Image
        width={28}
        height={28}
        sizes="28px"
        src="https://www.google.com/s2/favicons?domain=nextjs.org&sz=128"
        alt="Next.js"
        className="w-7 h-7"
        referrerPolicy="no-referrer"
      />
    ),
  },
  {
    id: "figma",
    name: "Figma",
    description: "The collaborative interface design tool",
    icon: (
      <Image
        width={28}
        height={28}
        sizes="28px"
        src="https://www.google.com/s2/favicons?domain=figma.com&sz=128"
        alt="Figma"
        className="w-7 h-7"
        referrerPolicy="no-referrer"
      />
    ),
  },
  {
    id: "obsidian",
    name: "Obsidian",
    description: "A powerful knowledge base on local files",
    icon: (
      <Image
        width={28}
        height={28}
        sizes="28px"
        src="https://www.google.com/s2/favicons?domain=obsidian.md&sz=128"
        alt="Obsidian"
        className="w-7 h-7"
        referrerPolicy="no-referrer"
      />
    ),
  },
  {
    id: "dropbox",
    name: "Dropbox",
    description: "Cloud storage and file synchronization",
    icon: (
      <Image
        width={28}
        height={28}
        sizes="28px"
        src="https://www.google.com/s2/favicons?domain=dropbox.com&sz=128"
        alt="Dropbox"
        className="w-7 h-7"
        referrerPolicy="no-referrer"
      />
    ),
  },
  {
    id: "zapier",
    name: "Zapier",
    description: "Automate your work across 5,000+ apps",
    icon: (
      <Image
        width={28}
        height={28}
        sizes="28px"
        src="https://www.google.com/s2/favicons?domain=zapier.com&sz=128"
        alt="Zapier"
        className="w-7 h-7"
        referrerPolicy="no-referrer"
      />
    ),
  },
  {
    id: "cleanshot",
    name: "Cleanshot",
    description: "The ultimate screen recording tool",
    icon: (
      <Image
        width={28}
        height={28}
        sizes="28px"
        src="https://www.google.com/s2/favicons?domain=cleanshot.com&sz=128"
        alt="Cleanshot"
        className="w-7 h-7 rounded-sm"
        referrerPolicy="no-referrer"
      />
    ),
  },
  {
    id: "framer",
    name: "Framer",
    description: "Design and publish your dream site",
    icon: (
      <Image
        width={28}
        height={28}
        sizes="28px"
        src="https://www.google.com/s2/favicons?domain=framer.com&sz=128"
        alt="Framer"
        className="w-7 h-7"
        referrerPolicy="no-referrer"
      />
    ),
  },
  {
    id: "linear",
    name: "Linear",
    description: "The issue tracker for high-performance teams",
    icon: (
      <Image
        width={28}
        height={28}
        sizes="28px"
        src="https://www.google.com/s2/favicons?domain=linear.app&sz=128"
        alt="Linear"
        className="w-7 h-7"
        referrerPolicy="no-referrer"
      />
    ),
  },
  {
    id: "discord",
    name: "Discord",
    description: "Where the world hangs out",
    icon: (
      <Image
        width={28}
        height={28}
        sizes="28px"
        src="https://www.google.com/s2/favicons?domain=discord.com&sz=128"
        alt="Discord"
        className="w-7 h-7"
        referrerPolicy="no-referrer"
      />
    ),
  },
  {
    id: "supabase",
    name: "Supabase",
    description: "The open source Firebase alternative",
    icon: (
      <Image
        width={28}
        height={28}
        sizes="28px"
        src="https://www.google.com/s2/favicons?domain=supabase.com&sz=128"
        alt="Supabase"
        className="w-7 h-7"
        referrerPolicy="no-referrer"
      />
    ),
  },
  {
    id: "craft",
    name: "Craft",
    description: "Document your thoughts and ideas",
    icon: (
      <Image
        width={28}
        height={28}
        sizes="28px"
        src="https://www.google.com/s2/favicons?domain=craft.do&sz=128"
        alt="Craft"
        className="w-7 h-7 rounded-sm"
        referrerPolicy="no-referrer"
      />
    ),
  },
  {
    id: "vercel",
    name: "Vercel",
    description: "Develop. Preview. Ship.",
    icon: (
      <Image
        width={28}
        height={28}
        sizes="28px"
        src="https://www.google.com/s2/favicons?domain=vercel.com&sz=128"
        alt="Vercel"
        className="w-7 h-7"
        referrerPolicy="no-referrer"
      />
    ),
  },
  {
    id: "github",
    name: "GitHub",
    description: "Where the world builds software",
    icon: (
      <Image
        width={28}
        height={28}
        sizes="28px"
        src="https://www.google.com/s2/favicons?domain=github.com&sz=128"
        alt="GitHub"
        className="w-7 h-7"
        referrerPolicy="no-referrer"
      />
    ),
  },
  {
    id: "grok",
    name: "Grok.com",
    description: "AI that understands the world",
    icon: (
      <Image
        width={28}
        height={28}
        sizes="28px"
        src="https://www.google.com/s2/favicons?domain=x.ai&sz=128"
        alt="Grok"
        className="w-7 h-7"
        referrerPolicy="no-referrer"
      />
    ),
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "The world's most popular AI assistant",
    icon: (
      <Image
        width={28}
        height={28}
        sizes="28px"
        src="https://www.google.com/s2/favicons?domain=openai.com&sz=128"
        alt="ChatGPT"
        className="w-7 h-7"
        referrerPolicy="no-referrer"
      />
    ),
  },
  {
    id: "v0",
    name: "v0",
    description: "Generative UI for developers",
    icon: (
      <Image
        width={28}
        height={28}
        sizes="28px"
        src="https://www.google.com/s2/favicons?domain=v0.dev&sz=128"
        alt="v0"
        className="w-7 h-7 rounded-sm"
        referrerPolicy="no-referrer"
      />
    ),
  },
];

const allIntegrations: Integration[] = [...integrations, ...integrations];

export default function IntegrationSection({
  className,
}: {
  className?: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const scrollPos = useRef<number>(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;

    const autoScroll = () => {
      if (!isHovered) {
        scrollPos.current += 0.5;
        if (scrollPos.current >= scrollContainer.scrollWidth / 2) {
          scrollPos.current = 0;
        }
        scrollContainer.scrollLeft = scrollPos.current;
      } else {
        scrollPos.current = scrollContainer.scrollLeft;
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
        crossOrigin="anonymous"
      />

      <section
        className={
          "bg-white py-20 px-6 md:px-20 font-sans overflow-hidden " +
          (className || "")
        }
      >
        <style>
          {
            "\n          .no-scrollbar::-webkit-scrollbar {\n            display: none;\n          }\n        "
          }
        </style>
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
            <div className="flex-1">
              <h2 className="font-semibold text-4xl md:text-[42px] text-[#111111] mb-2 leading-tight">
                Works With Your Stack
              </h2>
              <p className="text-[15px] text-[#888888]">
                Plug and play with 1,000+ integrations
              </p>
            </div>
            <button className="rounded-full px-6 py-2.5 text-sm font-medium text-white bg-[#00bc7d] hover:bg-[#00a36c] transition-colors border border-[#00bc7d]">
              All Integrations
            </button>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

            <div
              ref={scrollRef}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="flex flex-row gap-4 overflow-x-auto pb-4 no-scrollbar cursor-grab active:cursor-grabbing"
              style={
                {
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                } as React.CSSProperties
              }
            >
              {allIntegrations.map((item: Integration, index: number) => (
                <motion.div
                  key={item.id + "-" + index}
                  whileHover={{ y: -4 }}
                  className={
                    "min-w-[220px] md:min-w-[260px] bg-[#f9f9f9] border border-[#ebebeb] rounded-[14px] p-7 md:p-8 flex flex-col gap-3 transition-all duration-200 hover:bg-white hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] " +
                    (item.isFaded ? "opacity-45" : "opacity-100")
                  }
                >
                  <div className="mb-1">{item.icon}</div>
                  <h3 className="font-bold text-[15px] text-[#111111]">
                    {item.name}
                  </h3>
                  <p className="text-[13px] text-[#888888] leading-[1.5]">
                    {item.description}
                  </p>
                  <div className="mt-auto">
                    <span className="text-[13px] font-semibold text-[#111111] hover:underline flex items-center gap-1">
                      Learn more <span className="text-[10px]">&#x2197;</span>
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
