"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface BlogPost {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    image:
      "https://cdn.jiro.build/Kelo/a-breathtaking-3d-rendered-landscape-of-smooth-rol.jpg",
    title: "Behind the Scenes: How We Built Kelo Automation",
    description:
      "A cleaner, more intuitive design that reduces clicks, improves focus, and looks stunning in both light and dark modes",
    link: "#",
  },
  {
    id: 2,
    image:
      "https://cdn.jiro.build/Kelo/a-worn-vintage-yellow-wooden-desk-sitting-in-an-op.jpeg",
    title: "3 Sales Metrics That Actually Matter",
    description:
      "Create advanced no-code automations using new conditions and branching logic. Your repetitive tasks just became hands-free.",
    link: "#",
  },
  {
    id: 3,
    image:
      "https://cdn.jiro.build/Kelo/interior-of-an-old-abandoned-vintage-train-carriag.jpeg",
    title: "The ROI of CRM Simplicity in Sales Operations",
    description:
      "Now you can see every action—edits, comments, integrations—all in one real-time feed. Stay aligned without asking.",
    link: "#",
  },
];

export default function BlogSection({ className }: { className?: string }) {
  return (
    <>
      <section
        className={
          "bg-white py-20 px-6 md:px-20 font-sans " + (className || "")
        }
      >
        <div className="max-w-[1200px] mx-auto">
          {/* HEADER ROW */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
            <div className="max-w-2xl">
              <h2 className="font-medium text-3xl md:text-[48px] text-[#111111] leading-[1.15] m-0">
                Explore Product Latest Updates &amp; Insights
              </h2>
            </div>

            <div className="relative group self-start md:self-end">
              <div className="absolute -bottom-[6px] right-0 w-[100px] h-[24px] bg-[radial-gradient(circle,_rgba(160,100,255,0.5),_rgba(100,180,255,0.3))] blur-[14px] rounded-full -z-10" />
              <button className="bg-[#111111] text-white rounded-[12px] px-6 py-3 text-[15px] font-semibold flex items-center gap-2 hover:bg-[#333333] transition-colors">
                All Updates <span className="text-[14px] leading-none">↳</span>
              </button>
            </div>
          </div>

          {/* ARTICLE CARDS ROW */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post: BlogPost) => (
              <motion.div
                key={post.id}
                whileHover={{ y: -2 }}
                className="bg-white border border-[#ebebeb] rounded-[14px] p-5 flex flex-col cursor-pointer transition-all duration-200 hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] group"
              >
                {/* Article Image */}
                <div className="relative w-full h-[240px] rounded-[10px] overflow-hidden mb-[18px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Article Title */}
                <h3 className="font-bold text-[17px] text-[#111111] leading-[1.4] mb-2.5">
                  {post.title}
                </h3>

                {/* Article Description */}
                <p className="text-[14px] text-[#888888] leading-[1.6] mb-5 line-clamp-3">
                  {post.description}
                </p>

                {/* Learn more link */}
                <div className="mt-auto">
                  <a
                    href={post.link}
                    className="text-[14px] font-semibold text-[#111111] inline-flex items-center gap-1.5 hover:underline"
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
                      e.preventDefault()
                    }
                  >
                    Learn more{" "}
                    <span className="text-[16px] leading-none">↳</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
