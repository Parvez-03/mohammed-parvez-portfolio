import { ArrowUpRight, Mail, Instagram, Linkedin, Github } from "lucide-react";
import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0C0C0C] px-5 py-14 text-[#D7E2EA] sm:px-8 md:px-10 md:py-20">
      <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] opacity-50">Portfolio</p>
          <h2 className="hero-heading mt-4 max-w-xl text-5xl font-black uppercase leading-[0.9] sm:text-7xl">
            Let&apos;s build something memorable.
          </h2>
          <a href="mailto:parvezkhan1010@icloud.com" className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm uppercase tracking-widest transition hover:bg-white hover:text-[#0C0C0C]">
            Start a conversation <ArrowUpRight size={16} />
          </a>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] opacity-50">Explore</p>
          <div className="mt-5 flex flex-col gap-3">
            <Link to="/" className="text-sm uppercase tracking-widest hover:opacity-60">Home</Link>
            <Link to="/about" className="text-sm uppercase tracking-widest hover:opacity-60">About</Link>
            <Link to="/projects" className="text-sm uppercase tracking-widest hover:opacity-60">Projects</Link>
            <Link to="/services" className="text-sm uppercase tracking-widest hover:opacity-60">Services</Link>
            <Link to="/contact" className="text-sm uppercase tracking-widest hover:opacity-60">Contact</Link>
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] opacity-50">Connect</p>
          <div className="mt-5 flex flex-col gap-4 text-sm">
            <a href="mailto:parvezkhan1010@icloud.com" className="flex items-center gap-3 hover:opacity-60"><Mail size={17}/> Email</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:opacity-60"><Linkedin size={17}/> LinkedIn</a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:opacity-60"><Instagram size={17}/> Instagram</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:opacity-60"><Github size={17}/> GitHub</a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-14 flex max-w-[1500px] flex-col justify-between gap-3 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.2em] opacity-40 sm:flex-row">
        <span>© {new Date().getFullYear()} Mohammed Parvez</span>
        <span>Full-stack developer · Founder · Udaipur, Rajasthan</span>
      </div>
    </footer>
  );
}
