import { FadeIn } from "./FadeIn";
import Magnet from "./Magnet";
import { ContactButton } from "./Buttons";
import portrait from "@/assets/portrait.jpg";

export default function HomeHero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden px-5 pb-10 pt-32 sm:px-8 md:px-10 md:pb-12">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[#BBCCD7]/10 blur-[120px]" />
      </div>
      <FadeIn delay={0.1} y={40}>
        <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#D7E2EA]/55 sm:text-sm">Full-stack developer · Founder</p>
        <h1 className="hero-heading max-w-[1250px] text-[17vw] font-black uppercase leading-[0.8] tracking-[-0.06em] sm:text-[15vw] md:text-[13vw]">
          Mohammed<br/>Parvez
        </h1>
      </FadeIn>
      <div className="mt-10 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
        <FadeIn delay={0.25} y={20}>
          <p className="max-w-xl text-sm font-light uppercase leading-relaxed tracking-wide text-[#D7E2EA]/75 sm:text-base md:text-lg">
            I design and build modern digital experiences, from business websites to ambitious products, while growing CodeCrafter and TranspiraTech.
          </p>
        </FadeIn>
        <FadeIn delay={0.4} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
      <FadeIn delay={0.5} y={30} className="pointer-events-none absolute bottom-0 right-[5%] hidden w-[220px] sm:block md:w-[300px] lg:w-[380px]">
        <Magnet padding={120} strength={4}>
          <img src={portrait} alt="Mohammed Parvez" className="w-full object-cover opacity-90" />
        </Magnet>
      </FadeIn>
    </section>
  );
}
