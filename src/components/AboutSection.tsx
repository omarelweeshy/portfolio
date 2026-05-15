"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  BarChart3,
  Zap,
  Layers,
  Lightbulb,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { aboutPillars } from "@/lib/data";

const iconMap = { Brain, Code2, BarChart3, Zap, Layers, Lightbulb };

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 md:py-40 overflow-hidden">
      {/* Subtle background glow */}
      <div className="glow-blob w-[600px] h-[400px] bg-blue-600/5 left-1/2 -translate-x-1/2 top-0 absolute" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <SectionWrapper className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="section-divider w-12 h-px" style={{ margin: 0 }} />
            <span className="text-[0.7rem] tracking-[0.25em] uppercase text-[#555]">About</span>
          </div>

          <div className="max-w-4xl">
            <h2 className="text-[clamp(2.4rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white mb-6">
              Where engineering
              <br />
              <span className="gradient-text-blue">meets imagination.</span>
            </h2>
            <p className="text-[1.05rem] text-[#666] leading-relaxed max-w-2xl">
              I&apos;m an AI Engineer and Full Stack Developer based in New Cairo, with a Bachelor&apos;s in
              Artificial Intelligence from Cairo University. I build systems that combine intelligent
              automation, rigorous engineering, and data-driven insights — at the intersection of
              technology and human experience.
            </p>
          </div>
        </SectionWrapper>

        {/* Stats row */}
        <SectionWrapper delay={0.1} className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-[#1a1a1a] rounded-2xl overflow-hidden">
            {[
              { number: "4+", label: "Years Experience" },
              { number: "10+", label: "Projects Shipped" },
              { number: "3", label: "Industries Served" },
              { number: "∞", label: "Problems to Solve" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-8 border-r border-b border-[#1a1a1a] last:border-r-0 flex flex-col gap-2 group hover:bg-[#111] transition-colors duration-300"
              >
                <span className="text-4xl font-bold gradient-text-blue">{stat.number}</span>
                <span className="text-[0.75rem] tracking-widest uppercase text-[#555]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Pillars grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {aboutPillars.map((pillar) => {
            const Icon = iconMap[pillar.icon as keyof typeof iconMap];
            const isBlue = pillar.color === "blue";
            return (
              <motion.div
                key={pillar.label}
                variants={cardVariant}
                className="glass-card p-7 group hover:border-blue-500/20 hover:bg-white/[0.02] transition-all duration-500 cursor-default"
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${
                    isBlue
                      ? "bg-blue-500/10 text-blue-400"
                      : "bg-emerald-500/10 text-emerald-400"
                  } group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={20} />
                </div>
                <h3 className="text-[0.95rem] font-semibold text-white mb-2">{pillar.label}</h3>
                <p className="text-[0.83rem] text-[#666] leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
