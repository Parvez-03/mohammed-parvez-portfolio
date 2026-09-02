import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";
import { LiveProjectButton } from "./Buttons";
import transpiraTechHero from "../../assets/transpiratechhero.png";
import Contactformt from "../../assets/contacttranspiratech.png";
import productimaget from "../../assets/productimage.png";
import herocode from "../../assets/codecrafterhero.png";
import pricingcode from "../../assets/pricingcodecrafter.png";
import workcode from "../../assets/workcodecrafter.png";
const projects = [
  {
    n: "01",
    name: "Transpira Tech",
    category: "Personal",
    url : "https://stalwart-brioche-f1cc0d.netlify.app",
    col1: [
      
    productimaget,
      Contactformt,
    ],
    col2: transpiraTechHero,
  },
  {
    n: "02",
    name: "Code Crafter",
    category: "Personal Business",
    url : "https://code-crafter-7zg7.onrender.com",
    col1: [
      pricingcode,
      workcode,
    ],
    col2: herocode,
  }
];

const radius = "rounded-[40px] sm:rounded-[50px] md:rounded-[60px]";

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: (typeof projects)[number];
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="sticky top-24 md:top-32 h-[85vh] flex items-start justify-center">
      <motion.div
        style={{ scale, top: `${index * 28}px`, backgroundColor: "#0C0C0C" }}
        className={`relative w-full border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 ${radius}`}
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {project.n}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm">
                {project.category}
              </span>
              <h3
                className="text-[#D7E2EA] font-medium uppercase leading-none"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {project.name}
              </h3>
            </div>
          </div>
          <LiveProjectButton />
        </div>

        <div className="mt-6 flex gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">

  <div className="flex w-[40%] flex-col gap-3 sm:gap-4">

    {/* Image 1 */}
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block cursor-pointer"
    >
      <img
        src={project.col1[0]}
        alt={`${project.name} preview one`}
        loading="eager"
        className={`w-full object-cover ${radius}`}
        style={{ height: "clamp(130px, 16vw, 230px)" }}
      />
    </a>

    {/* Image 2 */}
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block cursor-pointer"
    >
      <img
        src={project.col1[1]}
        alt={`${project.name} preview two`}
        loading="lazy"
        className={`w-full object-cover ${radius}`}
        style={{ height: "clamp(160px, 22vw, 340px)" }}
      />
    </a>

  </div>

  {/* Main Image */}
  <div className="w-[60%]">
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full cursor-pointer"
    >
      <img
        src={project.col2}
        alt={`${project.name} main visual`}
        loading="lazy"
        className={`h-full w-full object-cover ${radius}`}
      />
    </a>
  </div>

</div> 
      </motion.div>
    </div>
  );
}

export function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      ref={ref}
      className={`relative z-10 -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]`}
      style={{ backgroundColor: "#0C0C0C" }}
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight mb-10"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Project
        </h2>
      </FadeIn>
      {projects.map((p, i) => (
        <ProjectCard
          key={p.n}
          project={p}
          index={i}
          total={projects.length}
          progress={scrollYProgress}
        />
      ))}
    </section>
  );
}
