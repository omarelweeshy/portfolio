"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, ExternalLink } from "lucide-react";

// Brand icons not in lucide-react — using inline SVGs
const GithubIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
import { personalInfo } from "@/lib/data";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.6 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

// Animated floating particle
function Particle({ x, y, size, delay }: { x: string; y: string; size: number; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-blue-500/20"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.2, 0.6, 0.2],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

const particles = [
  { x: "10%", y: "20%", size: 4, delay: 0 },
  { x: "80%", y: "15%", size: 6, delay: 0.8 },
  { x: "70%", y: "70%", size: 3, delay: 1.5 },
  { x: "25%", y: "75%", size: 5, delay: 2 },
  { x: "90%", y: "50%", size: 4, delay: 0.3 },
  { x: "50%", y: "10%", size: 3, delay: 1.2 },
  { x: "15%", y: "55%", size: 6, delay: 2.5 },
  { x: "60%", y: "85%", size: 4, delay: 0.7 },
];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Animated grid canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let frame = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const spacing = 60;
      const cols = Math.ceil(canvas.width / spacing);
      const rows = Math.ceil(canvas.height / spacing);

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          const dist = Math.sqrt(
            Math.pow(x - canvas.width / 2, 2) + Math.pow(y - canvas.height / 2, 2)
          );
          const wave = Math.sin(dist * 0.012 - frame * 0.015) * 0.5 + 0.5;
          const alpha = wave * 0.12;
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(59, 130, 246, ${alpha})`;
          ctx.fill();
        }
      }
      frame++;
      requestAnimationFrame(draw);
    };

    const raf = requestAnimationFrame(draw);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated dot grid background */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Radial gradient vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#080808_75%)] pointer-events-none" />

      {/* Blue glow orb — left */}
      <div className="glow-blob w-[500px] h-[500px] bg-blue-600/10 -left-32 top-1/3 -translate-y-1/2 pointer-events-none absolute" />
      {/* Emerald glow orb — right */}
      <div className="glow-blob w-[400px] h-[400px] bg-emerald-500/8 -right-24 bottom-1/4 pointer-events-none absolute" />

      {/* Floating particles */}
      {particles.map((p, i) => <Particle key={i} {...p} />)}

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start"
        >
          {/* Location badge */}
          <motion.div variants={item} className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#1f1f1f] bg-[#111] text-[0.72rem] tracking-widest uppercase text-[#666]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {personalInfo.location} · Open to Remote
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={item} className="overflow-hidden mb-2">
            <h1 className="text-[clamp(3.2rem,10vw,9rem)] font-bold leading-[0.9] tracking-tight text-white">
              Omar
            </h1>
          </motion.div>

          <motion.div variants={item} className="overflow-hidden mb-6">
            <h1 className="text-[clamp(3.2rem,10vw,9rem)] font-bold leading-[0.9] tracking-tight gradient-text-blue">
              Ashraf
            </h1>
          </motion.div>

          {/* Roles */}
          <motion.div variants={item} className="mb-6">
            <p className="text-[0.8rem] md:text-[0.9rem] tracking-[0.25em] uppercase text-[#555] font-medium">
              {personalInfo.roles[0]}
              <span className="mx-3 text-blue-500/50">·</span>
              {personalInfo.roles[1]}
              <span className="mx-3 text-blue-500/50">·</span>
              {personalInfo.roles[2]}
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="max-w-xl text-[1rem] md:text-[1.1rem] text-[#666] leading-relaxed mb-10 font-light whitespace-pre-line"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-14">
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="btn-primary"
            >
              View Work
              <ExternalLink size={14} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-outline"
            >
              Get in Touch
              <Mail size={14} />
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex items-center gap-5">
            {[
              { href: personalInfo.github, icon: GithubIcon, label: "GitHub" },
              { href: personalInfo.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
              { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-[#1f1f1f] flex items-center justify-center text-[#555] hover:text-white hover:border-blue-500 transition-all duration-300"
              >
                <Icon size={15} />
              </a>
            ))}
            <div className="h-px w-16 bg-[#1f1f1f] ml-2" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#444] hover:text-[#888] transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-[0.65rem] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
