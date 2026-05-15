"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Copy, Check } from "lucide-react";

// Brand icons — inline SVGs (lucide-react removed brand logos)
const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
import SectionWrapper from "./SectionWrapper";
import { personalInfo } from "@/lib/data";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-32 md:py-48 overflow-hidden">
      {/* Background */}
      <div className="glow-blob w-[600px] h-[600px] bg-blue-600/8 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 absolute" />

      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10 text-center">
        {/* Label */}
        <SectionWrapper>
          <span className="text-[0.7rem] tracking-[0.25em] uppercase text-[#555] block mb-8">
            Let&apos;s Connect
          </span>

          {/* Heading */}
          <h2 className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.95] tracking-tight text-white mb-6">
            Ready to
            <br />
            <span className="gradient-text-blue">build something</span>
            <br />
            <span className="gradient-text-white">remarkable?</span>
          </h2>

          <p className="text-[1rem] text-[#666] max-w-xl mx-auto mb-14 leading-relaxed">
            Whether it&apos;s an AI system, a digital product, or an ambitious idea —
            I&apos;m interested in conversations that lead somewhere meaningful.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a href={`mailto:${personalInfo.email}`} className="btn-primary text-base px-8 py-4">
              Send an Email
              <ArrowRight size={16} />
            </a>
            <button onClick={copyEmail} className="btn-outline text-base px-8 py-4 flex items-center gap-2">
              {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
              {copied ? "Copied!" : personalInfo.email}
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-6 justify-center mb-12">
            <div className="h-px w-16 bg-[#1a1a1a]" />
            <span className="text-[0.65rem] tracking-widest uppercase text-[#444]">Or find me on</span>
            <div className="h-px w-16 bg-[#1a1a1a]" />
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4">
            {[
              { href: personalInfo.linkedin, icon: LinkedinIcon, label: "LinkedIn", desc: "Professional" },
              { href: personalInfo.github, icon: GithubIcon, label: "GitHub", desc: "Code" },
              { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email", desc: "Direct" },
            ].map(({ href, icon: Icon, label, desc }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="glass-card px-6 py-4 flex flex-col items-center gap-2 hover:border-blue-500/25 hover:bg-white/[0.02] transition-all duration-300 group"
              >
                <Icon size={20} className="text-[#555] group-hover:text-blue-400 transition-colors" />
                <span className="text-[0.78rem] text-white font-medium">{label}</span>
                <span className="text-[0.68rem] text-[#444] tracking-widest uppercase">{desc}</span>
              </motion.a>
            ))}
          </div>
        </SectionWrapper>
      </div>

      {/* Footer */}
      <div className="mt-24 border-t border-[#111]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[0.72rem] text-[#333] tracking-widest uppercase">
            Omar Ashraf · {new Date().getFullYear()}
          </span>
          <span className="text-[0.72rem] text-[#2a2a2a] tracking-widest uppercase">
            Designed & Built with precision
          </span>
        </div>
      </div>
    </section>
  );
}
