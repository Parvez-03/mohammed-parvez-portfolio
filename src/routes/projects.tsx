import { createFileRoute } from "@tanstack/react-router";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [
    { title: "Projects — Mohammed Parvez" },
    { name: "description", content: "Selected web and digital projects by Mohammed Parvez." }
  ]}),
  component: () => <main className="min-h-screen bg-[#0C0C0C] pt-24"><ProjectsSection /></main>,
});
