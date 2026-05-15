"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { experiences } from "@/lib/data";
import { Briefcase } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 md:py-40 overflow-hidden">
      <div className="glow-blob w-[500px] h-[600px] bg-blue-600/5 left-0 top-1/2 -translate-y-1/2 absolute" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <SectionWrapper className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="section-divider w-12 h-px" style={{ margin: 0 }} />
            <span className="text-[0.7rem] tracking-[0.25em] uppercase text-[#555]">
              Experience
            </span>
          </div>
          <h2 className="text-[clamp(2.4rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white">
            Where I&apos;ve
            <br />
            <span className="gradient-text-blue">made an impact.</span>
          </h2>
        </SectionWrapper>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px timeline-line md:-translate-x-0.5 hidden sm:block" />

          <div className="flex flex-col gap-0">
            {experiences.map((exp, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: i * 0.1 }}
                  className={`relative flex ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col gap-8 pb-16 last:pb-0`}
                >
                  {/* Content card */}
                  <div className={`md:w-[calc(50%-3rem)] ${isEven ? "md:pr-8 md:text-right" : "md:pl-8"} pl-10 sm:pl-12 md:pl-0`}>
                    <div className="glass-card p-6 hover:border-blue-500/20 hover:bg-white/[0.02] transition-all duration-500 group">
                      {/* Type badge */}
                      <div className={`flex items-center gap-2 mb-3 ${isEven ? "md:justify-end" : ""}`}>
                        <span className="tag-pill">{exp.type}</span>
                      </div>

                      {/* Company & role */}
                      <h3 className="text-lg font-semibold text-white mb-0.5">{exp.company}</h3>
                      <p className="text-[0.83rem] text-blue-400 font-medium mb-1">{exp.role}</p>
                      <p className="text-[0.75rem] tracking-widest uppercase text-[#444] mb-4">
                        {exp.period}
                      </p>

                      {/* Description */}
                      <p className="text-[0.85rem] text-[#666] leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : ""}`}>
                        {exp.highlights.map((h) => (
                          <span key={h} className="tag-pill">{h}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-7 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#111] border border-blue-500/40 flex items-center justify-center z-10">
                      <Briefcase size={13} className="text-blue-400" />
                    </div>
                  </div>

                  {/* Empty side for layout */}
                  <div className="hidden md:block md:w-[calc(50%-3rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
