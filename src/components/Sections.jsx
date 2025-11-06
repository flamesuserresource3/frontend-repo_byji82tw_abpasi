import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Linkedin, Mail, Phone, Award, Briefcase, Code2 } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_10%_20%,rgba(0,255,255,0.08),transparent),radial-gradient(60%_70%_at_90%_30%,rgba(0,191,255,0.08),transparent)]" />
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl font-bold tracking-tight text-[#00FFFF] md:text-4xl"
      >
        Background
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mx-auto mt-6 max-w-3xl text-center text-white/80"
      >
        I am a futuristic developer passionate about immersive interfaces and performant systems. Educated in computer science with a focus on human-computer interaction and real-time graphics.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="mx-auto mt-10 w-full max-w-xl rounded-xl border border-[#00FFFF]/20 bg-[#001F3F]/30 p-5 backdrop-blur"
      >
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-[#00FFFF]/30 px-4 py-2 text-[#00FFFF] transition hover:border-[#00FFFF]">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href="#" className="inline-flex items-center gap-2 rounded-full border border-[#00BFFF]/30 px-4 py-2 text-[#00BFFF] transition hover:border-[#00BFFF]">
            <ExternalLink className="h-4 w-4" /> View CV
          </a>
          <a href="mailto:you@example.com" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-white/90 transition hover:border-white/40">
            <Mail className="h-4 w-4" /> Email
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export function ProjectsSection() {
  const projects = [
    { title: 'Neon Interface Kit', tech: ['React', 'Framer Motion', 'Tailwind'], img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop', link: '#', repo: '#'},
    { title: 'Holo Timeline', tech: ['Next.js', 'D3', 'Vercel'], img: 'https://images.unsplash.com/photo-1557264337-e8a93017fe92?q=80&w=1200&auto=format&fit=crop', link: '#', repo: '#'},
    { title: 'Quantum Particles', tech: ['WebGL', 'Three.js'], img: 'https://images.unsplash.com/photo-1545670723-196ed0954986?q=80&w=1200&auto=format&fit=crop', link: '#', repo: '#'},
  ];

  return (
    <section id="projects" className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl font-bold tracking-tight text-[#00BFFF] md:text-4xl"
      >
        Projects
      </motion.h2>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <motion.div
            key={p.title}
            whileHover={{ y: -6, boxShadow: '0 0 24px rgba(0,255,255,0.35), inset 0 0 18px rgba(0,191,255,0.15)' }}
            className="group relative overflow-hidden rounded-xl border border-[#00FFFF]/20 bg-[#001F3F]/40 backdrop-blur"
          >
            <div className="relative h-44 w-full overflow-hidden">
              <img src={p.img} alt={p.title} className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#001F3F] to-transparent opacity-80" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white/95">{p.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2 text-xs text-[#00FFFF]/80">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full border border-[#00FFFF]/30 px-2 py-0.5">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3 text-sm">
                <a href={p.link} className="inline-flex items-center gap-1 text-[#00FFFF] hover:underline"><ExternalLink className="h-4 w-4" /> Demo</a>
                <a href={p.repo} className="inline-flex items-center gap-1 text-[#00BFFF] hover:underline"><Github className="h-4 w-4" /> Code</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function SkillsExperienceSection() {
  const skills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 88 },
    { name: 'Next.js', level: 85 },
    { name: 'Tailwind', level: 92 },
    { name: 'Framer Motion', level: 80 },
  ];

  const experiences = [
    { role: 'Frontend Engineer', company: 'Neon Labs', period: '2022 - Present' },
    { role: 'UI Engineer', company: 'Holo Systems', period: '2020 - 2022' },
    { role: 'Intern', company: 'Quantum Tech', period: '2019 - 2020' },
  ];

  return (
    <section id="skills" className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20 text-white">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Skills */}
        <div>
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-[#00FFFF]" />
            <h3 className="text-2xl font-bold text-[#00FFFF]">Skills</h3>
          </div>
          <div className="mt-6 space-y-4">
            {skills.map((s) => (
              <div key={s.name} className="">
                <div className="mb-2 flex items-center justify-between text-sm text-white/80">
                  <span>{s.name}</span>
                  <span>{s.level}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-white/10">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-[#00FFFF] to-[#00BFFF] shadow-[0_0_18px_rgba(0,255,255,0.6)]"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-[#00BFFF]" />
            <h3 className="text-2xl font-bold text-[#00BFFF]">Experience</h3>
          </div>
          <div className="relative mt-6 pl-6">
            <div className="absolute left-2 top-0 h-full w-[2px] bg-gradient-to-b from-[#00FFFF] to-[#00BFFF]" />
            <div className="space-y-6">
              {experiences.map((e) => (
                <div key={e.role} className="relative">
                  <div className="absolute -left-[11px] top-1 h-4 w-4 rounded-full bg-[#001F3F] ring-2 ring-[#00FFFF]" />
                  <div className="rounded-lg border border-[#00FFFF]/20 bg-[#001F3F]/40 p-4 backdrop-blur">
                    <div className="text-white/90">{e.role}</div>
                    <div className="text-sm text-white/60">{e.company}</div>
                    <div className="mt-1 text-xs text-[#00FFFF]/80">{e.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CertificatesContactSection() {
  const certificates = [
    { title: 'Advanced React', issuer: 'Meta', year: '2023' },
    { title: 'Motion Design', issuer: 'Framer', year: '2022' },
  ];

  return (
    <section id="contact" className="relative mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-20 text-white">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Certificates */}
        <div>
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-[#00FFFF]" />
            <h3 className="text-2xl font-bold text-[#00FFFF]">Certificates</h3>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {certificates.map((c) => (
              <div key={c.title} className="rounded-xl border border-[#00FFFF] bg-white/5 p-4 backdrop-blur-lg" style={{ boxShadow: 'inset 0 0 18px rgba(0,255,255,0.18), 0 0 22px rgba(0,191,255,0.22)' }}>
                <div className="text-white/90">{c.title}</div>
                <div className="text-sm text-white/70">{c.issuer}</div>
                <div className="text-xs text-[#00FFFF]/80">{c.year}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-[#00BFFF]" />
            <h3 className="text-2xl font-bold text-[#00BFFF]">Contact</h3>
          </div>
          <form className="mt-6 space-y-4">
            <div>
              <label className="mb-1 block text-sm text-white/70">Name</label>
              <input className="w-full rounded-md border border-white/20 bg-[#001F3F]/50 px-3 py-2 text-sm text-white outline-none ring-0 transition placeholder:text-white/40 focus:border-[#00FFFF]" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">Email</label>
              <input type="email" className="w-full rounded-md border border-white/20 bg-[#001F3F]/50 px-3 py-2 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-[#00BFFF]" placeholder="you@example.com" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/70">Message</label>
              <textarea rows={4} className="w-full rounded-md border border-white/20 bg-[#001F3F]/50 px-3 py-2 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-[#00FFFF]" placeholder="Say hello..." />
            </div>
            <button type="button" className="w-full rounded-md bg-gradient-to-r from-[#00FFFF] to-[#00BFFF] px-4 py-2 text-sm font-semibold text-[#001F3F] shadow-[0_0_26px_rgba(0,191,255,0.35)] transition hover:shadow-[0_0_36px_rgba(0,255,255,0.55)]">
              Send Message
            </button>
          </form>

          <div className="mt-6 flex items-center gap-4 text-white/80">
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 transition hover:border-[#00FFFF]"><Github className="h-4 w-4" /> GitHub</a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 transition hover:border-[#00FFFF]"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 transition hover:border-[#00FFFF]"><Phone className="h-4 w-4" /> Call</a>
          </div>
        </div>
      </div>
    </section>
  );
}
