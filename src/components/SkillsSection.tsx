"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  BarChart3,
  Code2,
  Cloud,
  TrendingUp,
  Globe,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { skills } from "@/lib/data";

const iconMap = { Brain, BarChart3, Code2, Cloud, TrendingUp, Globe };

export default function SkillsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="glow-blob w-[500px] h-[500px] bg-emerald-500/5 right-0 top-1/2 -translate-y-1/2 absolute" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <SectionWrapper className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="section-divider w-12 h-px" style={{ margin: 0 }} />
            <span className="text-[0.7rem] tracking-[0.25em] uppercase text-[#555]">
              Technical Skills
            </span>
          </div>
          <h2 className="text-[clamp(2.4rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white">
            Crafted expertise,
            <br />
            <span className="gradient-text-emerald">applied precisely.</span>
          </h2>
        </SectionWrapper>

        {/* Skill cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.icon as keyof typeof iconMap];
            const isActive = activeIndex === i;
            const isBlue = skill.accentColor === "blue";
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                onHoverStart={() => setActiveIndex(i)}
                onHoverEnd={() => setActiveIndex(null)}
                className={`relative glass-card p-7 cursor-default transition-all duration-500 overflow-hidden ${
                  isActive ? "border-blue-500/30 bg-white/[0.03]" : ""
                }`}
              >
                {/* Glow on hover */}
                <motion.div
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute inset-0 pointer-events-none rounded-2xl ${
                    isBlue
                      ? "bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.06)_0%,transparent_60%)]"
                      : "bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.06)_0%,transparent_60%)]"
                  }`}
                />

                {/* Icon */}
                <motion.div
                  animate={{ scale: isActive ? 1.1 : 1 }}
                  transition={{ duration: 0.3 }}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${
                    isBlue
                      ? "bg-blue-500/10 text-blue-400"
                      : "bg-emerald-500/10 text-emerald-400"
                  }`}
                >
                  <Icon size={20} />
                </motion.div>

                {/* Category */}
                <h3 className="text-[0.95rem] font-semibold text-white mb-4">
                  {skill.category}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="tag-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
