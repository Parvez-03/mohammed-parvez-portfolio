import FadeIn from "./FadeIn";
import Magnet from "./Magnet";
import AnimatedText from "./AnimatedText";
import { ContactButton } from "./Buttons";
import moon from "@/assets/deco-moon.png";
import object1 from "@/assets/deco-object.png";
import lego from "@/assets/deco-lego.png";
import group from "@/assets/deco-group.png";
import portrait from "@/assets/portrait.jpg";
import {
  Braces,
  Code2,
  Database,
  FileCode2,
  Layers,
  Palette,
  Server,
  Atom,
} from "lucide-react";

const deco = [moon, object1, lego, group];

export function AboutHero() {
  return (
    <section className="flex min-h-[75vh] flex-col justify-end px-6 pt-6 pb-14 [overflow-x:clip] sm:pb-16 md:px-10 md:pt-8 md:pb-20">
      <FadeIn delay={0.1} y={40}>
        <h1
          className="hero-heading max-w-[90%] font-black uppercase tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 9vw, 8rem)", lineHeight: 0.95 }}
        >
          The Story Behind The Craft
        </h1>
      </FadeIn>

      <FadeIn delay={0.25} y={20}>
        <p
          className="mt-4 font-light uppercase tracking-wide text-[#D7E2EA]"
          style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.4rem)" }}
        >
          Full-stack developer. Founder of CodeCrafter &amp; TranspiraTech.
        </p>
      </FadeIn>

      <FadeIn delay={0.4} y={20}>
        <div className="mt-12 flex items-center gap-6 sm:gap-10 md:gap-16">
          {deco.map((src, i) => (
            <FadeIn key={i} delay={i * 0.1} y={20}>
              <Magnet padding={150} strength={3}>
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  width={512}
                  height={512}
                  className={`w-[70px] sm:w-[100px] md:w-[130px] ${
                    i % 2 === 0 ? "translate-y-2" : "-translate-y-2"
                  }`}
                />
              </Magnet>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

const stats = [
  { n: "2", label: "Ventures founded" },
  { n: "8", label: "Languages & tools" },
  { n: "1", label: "Full Stack Certificate" },
];

export function StorySection() {
  return (
    <section className="grid gap-12 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-[1fr_1fr] md:gap-20 md:px-10">
      <FadeIn delay={0} x={-40} y={0}>
        <Magnet padding={150} strength={8}>
          <img
            src={portrait}
            alt="Mohammed Parvez at his desk"
            loading="eager"
            width={1024}
            height={1280}
            className="aspect-[4/5] w-full rounded-[40px] object-cover"
          />
        </Magnet>
      </FadeIn>

      <div className="flex flex-col justify-center">
        <AnimatedText
          className="max-w-[100px] font-medium leading-relaxed text-[#D7E2EA]"
          style={{ fontSize: "clamp(1rem, 2vw, 1.4rem);" }}
          text="I'm Mohammed Parvez, a full-stack developer
          working across HTML, CSS, JavaScript, React, Python, PHP,
         Django, and SQL. I got into this because coding is genuinely fun — that
         curiosity turned into two ventures: CodeCrafter, a digital agency helping
         small and local businesses grow online, and TranspiraTech, a smart glass
         and transparent display technology company based in Udaipur, Rajasthan.
         I'm still early in my career, building real things and learning fast,
         one project at a time."
        />

        <div className="mt-12 flex flex-wrap gap-10">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1} y={20}>
              <div>
                <div
                  className="hero-heading font-black"
                  style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
                >
                  {s.n}
                </div>
                <div className="text-xs uppercase tracking-wide text-[#D7E2EA] opacity-70">
                  {s.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5} y={20}>
          <div className="mt-10" id="contact">
            <ContactButton />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Python",
  "PHP",
  "Django",
  "SQL",
  "Web Development",
  "Digital Growth",
];

export function SkillsMarquee() {
  const loop = [...skills, ...skills, ...skills];
  return (
    <section className="bg-[#0C0C0C] py-10 [overflow-x:clip] sm:py-14">
      <div className="marquee-track flex w-max gap-4">
        {loop.map((s, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border-2 border-[#D7E2EA]/30 px-6 py-2 text-sm uppercase tracking-wide text-[#D7E2EA] md:text-base"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}

const timeline = [
  {
    year: "Now",
    title: "Founder, TranspiraTech",
    desc: "Building out a smart glass and transparent display technology company based in Udaipur, Rajasthan, targeting luxury retail, hospitality, museums, and premium commercial spaces.",
  },
  {
    year: "Also",
    title: "Founder, CodeCrafter",
    desc: "Running a digital agency offering web development and digital growth services for small and local businesses.",
  },
  {
    year: "Before That",
    title: "Full Stack Development Certificate, Siddhi Infotech",
    desc: "Completed full-stack training covering HTML, CSS, JavaScript, React, Python, PHP, Django, and SQL.",
  },
  {
    year: "The Start",
    title: "First Lines of Code",
    desc: "Started coding out of pure curiosity because it was fun — that interest is what grew into everything since.",
  },
];

export function ExperienceTimeline() {
  return (
    <section id="timeline" className="px-5 py-20 sm:px-8 sm:py-28 md:px-10">
      <FadeIn>
        <h2
          className="hero-heading mb-16 font-black uppercase tracking-tight sm:mb-20"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)", lineHeight: 0.95 }}
        >
          Timeline
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-4xl border-l-2 border-[#D7E2EA]/20">
        {timeline.map((t, i) => (
          <FadeIn key={t.title} delay={i * 0.12} x={-20} y={0}>
            <div className="relative pb-12 pl-8 md:pl-12">
              <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-[#D7E2EA]" />
              <div className="text-sm font-black uppercase tracking-widest text-[#D7E2EA] opacity-50">
                {t.year}
              </div>
              <h3 className="text-lg font-medium uppercase text-[#D7E2EA] md:text-xl">
                {t.title}
              </h3>
              <p className="mt-1 max-w-xl text-sm font-light leading-relaxed text-[#D7E2EA] opacity-70 md:text-base">
                {t.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

const tools = [
  { label: "HTML", Icon: FileCode2 },
  { label: "CSS", Icon: Palette },
  { label: "JavaScript", Icon: Braces },
  { label: "React", Icon: Atom },
  { label: "Python", Icon: Code2 },
  { label: "PHP", Icon: Layers },
  { label: "Django", Icon: Server },
  { label: "SQL", Icon: Database },
];

export function ToolsSection() {
  return (
    <section
      id="toolkit"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10"
    >
      <FadeIn>
        <h2
          className="mb-16 text-center font-black uppercase tracking-tight text-[#0C0C0C] sm:mb-20"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)", lineHeight: 0.95 }}
        >
          Toolkit
        </h2>
      </FadeIn>

      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {tools.map(({ label, Icon }, i) => (
          <FadeIn key={label} delay={i * 0.06} y={20}>
            <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-[#0C0C0C]/15 p-6 md:p-8">
              <Icon className="h-7 w-7 text-[#0C0C0C]" strokeWidth={1.5} />
              <span className="text-sm font-medium uppercase tracking-wide text-[#0C0C0C]">
                {label}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="-mt-10 flex flex-col items-center gap-8 rounded-t-[40px] bg-[#0C0C0C] px-5 py-24 text-center sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-32 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-40">
      <FadeIn>
        <h2
          className="hero-heading max-w-[90%] font-black uppercase leading-none"
          style={{ fontSize: "clamp(2.5rem, 9vw, 7rem)" }}
        >
          Let's Build Something
        </h2>
      </FadeIn>
      <FadeIn delay={0.1} y={20}>
        <p
          className="font-light text-[#D7E2EA]"
          style={{ fontSize: "clamp(1rem, 2vw, 1.3rem)" }}
        >
          Got a project in mind? I'm one message away.
        </p>
      </FadeIn>
      <FadeIn delay={0.2} y={20}>
        <Magnet padding={150} strength={3}>
          <ContactButton />
        </Magnet>
      </FadeIn>
    </section>
  );
}
