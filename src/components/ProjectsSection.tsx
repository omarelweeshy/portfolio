"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

// Inline SVG — lucide-react removed brand icons
const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);
import SectionWrapper from "./SectionWrapper";
import { projects, personalInfo } from "@/lib/data";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(springY, [-100, 100], [4, -4]);
  const rotateY = useTransform(springX, [-100, 100], [-4, 4]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  const isBlue = project.accentColor === "blue";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group cursor-default"
    >
      <div
        className={`glass-card p-8 md:p-10 h-full flex flex-col transition-all duration-500 ${
          hovered ? "border-blue-500/25 bg-white/[0.025]" : ""
        } overflow-hidden`}
      >
        {/* Background glow */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className={`absolute inset-0 pointer-events-none rounded-2xl ${
            isBlue
              ? "bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.07)_0%,transparent_55%)]"
              : "bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.07)_0%,transparent_55%)]"
          }`}
        />

        {/* Index + subtitle */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-[0.65rem] tracking-[0.25em] uppercase text-[#444]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`tag-pill ${
              !isBlue
                ? "bg-emerald-500/8 border-emerald-500/20 text-emerald-400"
                : ""
            }`}
          >
            {project.subtitle}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight tracking-tight">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[0.87rem] text-[#666] leading-relaxed mb-5 flex-grow">
          {project.description}
        </p>

        {/* Impact */}
        <div
          className={`flex items-center gap-2 px-4 py-3 rounded-lg mb-6 ${
            isBlue ? "bg-blue-500/6 border border-blue-500/12" : "bg-emerald-500/6 border border-emerald-500/12"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
              isBlue ? "bg-blue-400" : "bg-emerald-400"
            }`}
          />
          <span className="text-[0.78rem] text-[#888]">{project.impact}</span>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span key={tech} className="tag-pill">{tech}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-2 border-t border-[#1a1a1a]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[0.78rem] text-[#666] hover:text-white transition-colors"
          >
            <GithubIcon size={14} />
            GitHub
          </a>
          <span className="text-[#2a2a2a]">·</span>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[0.78rem] text-[#666] hover:text-blue-400 transition-colors"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
          <div className="ml-auto">
            <motion.div
              animate={{ x: hovered ? 3 : 0, y: hovered ? -3 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight
                size={18}
                className={`transition-colors ${hovered ? "text-blue-400" : "text-[#333]"}`}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32 md:py-40 overflow-hidden">
      <div className="glow-blob w-[600px] h-[600px] bg-blue-600/6 right-0 top-1/2 -translate-y-1/2 absolute" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <SectionWrapper className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="section-divider w-12 h-px" style={{ margin: 0 }} />
            <span className="text-[0.7rem] tracking-[0.25em] uppercase text-[#555]">
              Featured Work
            </span>
          </div>
          <h2 className="text-[clamp(2.4rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-white">
            Projects built
            <br />
            <span className="gradient-text-blue">with purpose.</span>
          </h2>
        </SectionWrapper>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* More work CTA */}
        <SectionWrapper delay={0.3} className="mt-14 text-center">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex"
          >
            <GithubIcon size={15} />
            View All Projects on GitHub
          </a>
        </SectionWrapper>
      </div>
    </section>
  );
}
