import { createFileRoute } from "@tanstack/react-router";
import HomeHero from "@/components/portfolio/HomeHero";
import { MarqueeSection } from "@/components/portfolio/MarqueeSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { ContactButton } from "@/components/portfolio/Buttons";
import FadeIn from "@/components/portfolio/FadeIn";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Mohammed Parvez — Full-Stack Developer & Founder" },
    { name: "description", content: "Portfolio of Mohammed Parvez, full-stack developer and founder of CodeCrafter and TranspiraTech." }
  ]}),
  component: HomePage,
});

function HomePage() {
  return <main className="relative overflow-x-clip bg-[#0C0C0C]">
    <HomeHero />
    <section className="px-5 py-20 sm:px-8 md:px-10 md:py-28">
      <FadeIn>
        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          <p className="text-xs uppercase tracking-[0.3em] text-[#D7E2EA]/45">What I do</p>
          <div>
            <h2 className="hero-heading text-4xl font-black uppercase leading-none sm:text-6xl md:text-8xl">Digital experiences with purpose.</h2>
            <p className="mt-7 max-w-2xl text-sm leading-relaxed text-[#D7E2EA]/65 sm:text-base md:text-lg">Web development, business-focused design, and digital growth — combining clean code with a strong visual point of view.</p>
            <div className="mt-8"><ContactButton label="Work With Me" /></div>
          </div>
        </div>
      </FadeIn>
    </section>
    <ProjectsSection />
    <ServicesSection />
    <MarqueeSection />
  </main>;
}
