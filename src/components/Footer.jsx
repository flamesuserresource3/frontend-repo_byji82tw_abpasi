import React from 'react';

export default function Footer() {
  return (
    <footer className="relative mt-10 w-full bg-[#000915] py-10 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(0,255,255,0.08),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} Neon Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}
