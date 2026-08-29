import { createFileRoute } from "@tanstack/react-router";
import { ServicesSection } from "@/components/portfolio/ServicesSection";
import { MarqueeSection } from "@/components/portfolio/MarqueeSection";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Services — Mohammed Parvez" },
    { name: "description", content: "Web development, digital growth, e-commerce and creative services." }
  ]}),
  component: () => <main className="min-h-screen bg-[#0C0C0C] pt-24"><ServicesSection /><MarqueeSection /></main>,
});
