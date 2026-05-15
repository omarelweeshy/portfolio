"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { philosophyPoints } from "@/lib/data";

export default function PhilosophySection() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Center glow */}
      <div className="glow-blob w-[700px] h-[400px] bg-blue-600/6 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 absolute" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <SectionWrapper className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="section-divider w-12 h-px" />
          </div>
          <span className="text-[0.7rem] tracking-[0.25em] uppercase text-[#555] block mb-6">
            Mindset
          </span>
          <h2 className="text-[clamp(2.4rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white max-w-3xl mx-auto">
            Principles that
            <br />
            <span className="gradient-text-emerald">guide the work.</span>
          </h2>
        </SectionWrapper>

        {/* Philosophy items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a] rounded-2xl overflow-hidden">
          {philosophyPoints.map((point, i) => (
            <motion.div
              key={point.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="bg-[#080808] p-10 group hover:bg-[#0e0e0e] transition-colors duration-500 cursor-default"
            >
              {/* Number */}
              <span className="text-[3.5rem] font-bold leading-none gradient-text-blue block mb-6 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                {point.number}
              </span>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                {point.title}
              </h3>

              {/* Body */}
              <p className="text-[0.87rem] text-[#666] leading-relaxed">
                {point.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Education callout */}
        <SectionWrapper delay={0.3} className="mt-16">
          <div className="glass-card p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-2xl">
              🎓
            </div>
            <div className="flex-grow">
              <p className="text-[0.7rem] tracking-[0.2em] uppercase text-[#555] mb-1">Education</p>
              <h4 className="text-xl font-semibold text-white mb-1">
                Bachelor of Artificial Intelligence
              </h4>
              <p className="text-[0.87rem] text-[#666] mb-1">
                Minor in Information Systems | Very Good
              </p>
              <p className="text-[0.8rem] text-[#555]">
                Cairo University (Oct 2021 — Jun 2025)
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="tag-pill">Giza, Egypt</span>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
