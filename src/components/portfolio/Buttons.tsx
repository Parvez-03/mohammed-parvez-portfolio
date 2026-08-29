import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function ContactButton({ label = "Contact Me" }: { label?: string }) {
  return (
    <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium uppercase tracking-wide text-[#0C0C0C] transition-transform duration-200 hover:scale-105">
      {label}<ArrowUpRight className="h-4 w-4" />
    </Link>
  );
}

export function LiveProjectButton({ label = "View Projects" }: { label?: string }) {
  return (
    <Link to="/projects" className="inline-flex items-center gap-2 rounded-full border border-[#D7E2EA] px-7 py-3 text-sm font-light uppercase tracking-wide text-[#D7E2EA] transition-transform duration-200 hover:scale-105">
      {label}<ArrowUpRight className="h-4 w-4" />
    </Link>
  );
}
