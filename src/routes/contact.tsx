import { createFileRoute } from "@tanstack/react-router";
import { Mail, ArrowUpRight, MapPin } from "lucide-react";
import FadeIn from "@/components/portfolio/FadeIn";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact — Mohammed Parvez" },
    { name: "description", content: "Get in touch with Mohammed Parvez about a website, digital product or business project." }
  ]}),
  component: ContactPage,
});

function ContactPage() {
  return <main className="min-h-screen bg-[#0C0C0C] px-5 pb-24 pt-36 text-[#D7E2EA] sm:px-8 md:px-10">
    <div className="mx-auto max-w-[1200px]">
      <FadeIn y={40}>
        <p className="text-xs uppercase tracking-[0.3em] opacity-50">Contact</p>
        <h1 className="hero-heading mt-5 max-w-5xl text-[15vw] font-black uppercase leading-[0.8] tracking-[-0.05em] sm:text-[11vw] md:text-[9vw]">Let&apos;s talk.</h1>
      </FadeIn>
      <div className="mt-16 grid gap-10 md:grid-cols-2">
        <FadeIn delay={0.1}>
          <p className="max-w-lg text-base leading-relaxed text-[#D7E2EA]/65 md:text-lg">Have an idea, a website that needs rebuilding, or a business that needs a stronger digital presence? Tell me what you are working on.</p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="space-y-5">
            <a href="mailto:parvezkhan1010@icloud.com" className="flex items-center justify-between rounded-3xl border border-white/10 p-6 transition hover:border-white/30">
              <span className="flex items-center gap-4"><Mail />parvezkhan1010@icloud.com</span><ArrowUpRight />
            </a>
            <div className="flex items-center gap-4 rounded-3xl border border-white/10 p-6"><MapPin /> Udaipur, Rajasthan, India</div>
          </div>
        </FadeIn>
      </div>
    </div>
  </main>;
}
