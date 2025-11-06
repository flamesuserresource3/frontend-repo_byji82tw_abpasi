import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const gradientRing = (
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -inset-24 rounded-full opacity-30 blur-3xl" style={{
      background: 'radial-gradient(60% 60% at 50% 50%, rgba(0,191,255,0.35) 0%, rgba(0,255,255,0.18) 35%, rgba(0,31,63,0.0) 70%)'
    }} />
  </div>
);

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden bg-[#000915] text-white">
      {/* Background subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,191,255,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(0,255,255,0.08),transparent_40%),linear-gradient(to_bottom_right,rgba(0,31,63,0.6),rgba(0,0,0,0.4))]" />

      {/* Top Navigation */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-[#00FFFF]" />
          <span className="text-sm tracking-widest text-[#00FFFF]/80">NEON.CORE</span>
        </div>
        <nav className="hidden gap-6 md:flex">
          {navItems.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-sm font-medium text-white/80 transition hover:text-[#00FFFF]"
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Spline Scene as interactive avatar/hologram */}
      <div className="relative z-0 mx-auto mt-4 h-[56vh] w-full max-w-7xl px-0 md:h-[70vh]">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {gradientRing}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 mx-auto -mt-10 flex w-full max-w-5xl flex-col items-center px-6 text-center md:-mt-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-gradient-to-b from-[#00FFFF] to-[#00BFFF] bg-clip-text text-4xl font-extrabold tracking-tight text-transparent drop-shadow md:text-6xl"
        >
          Your Futuristic Name
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: 'easeOut' }}
          className="mt-4 max-w-2xl text-base text-white/70 md:text-lg"
        >
          Building the Future, One Line of Code at a Time
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full border border-[#00FFFF]/40 bg-[rgba(0,31,63,0.3)] px-6 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:border-[#00FFFF] hover:bg-[rgba(0,31,63,0.5)]"
          >
            Explore Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-[#00FFFF] to-[#00BFFF] px-6 py-3 text-sm font-semibold text-[#001F3F] shadow-[0_0_30px_rgba(0,191,255,0.35)] transition hover:shadow-[0_0_38px_rgba(0,255,255,0.55)]"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Neon particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(24)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.05, 0.3, 0.05], y: [0, -10, 0] }}
            transition={{ duration: 3 + (i % 5), repeat: Infinity, delay: i * 0.12 }}
            className="absolute h-1 w-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 8px rgba(0,255,255,0.8), 0 0 16px rgba(0,191,255,0.5)',
              background: 'linear-gradient(180deg,#00FFFF,#00BFFF)'
            }}
          />
        ))}
      </div>
    </section>
  );
}
