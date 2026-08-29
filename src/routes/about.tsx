import { createFileRoute } from "@tanstack/react-router";
import { AboutHero, StorySection, SkillsMarquee, ExperienceTimeline, ToolsSection, CTASection } from "@/components/portfolio/about-sections";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About — Mohammed Parvez" },
    { name: "description", content: "The story, skills, experience and toolkit of Mohammed Parvez." }
  ]}),
  component: AboutPage,
});

function AboutPage() {
  return <main className="relative min-h-screen overflow-x-clip bg-[#0C0C0C]">
    <AboutHero />
    <StorySection />
    <SkillsMarquee />
    <ExperienceTimeline />
    <ToolsSection />
    <CTASection />
  </main>;
}
