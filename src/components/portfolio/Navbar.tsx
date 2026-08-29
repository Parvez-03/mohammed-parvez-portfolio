import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 md:px-10 md:pt-6">
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between rounded-full border border-white/10 bg-[#0c0c0c]/75 px-4 py-3 backdrop-blur-xl sm:px-6">
        <Link to="/" onClick={() => setOpen(false)} className="text-sm font-semibold uppercase tracking-widest text-[#D7E2EA] sm:text-base">
          Mohammed Parvez
        </Link>

        <div className="hidden items-center gap-6 md:flex lg:gap-9">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-xs uppercase tracking-widest text-[#D7E2EA] transition-opacity hover:opacity-100"
              style={{ opacity: pathname === link.to ? 1 : 0.58 }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-[#D7E2EA] md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-[1500px] rounded-3xl border border-white/10 bg-[#0c0c0c]/95 p-4 backdrop-blur-xl md:hidden">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 px-3 py-4 text-sm uppercase tracking-widest text-[#D7E2EA] last:border-0"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
