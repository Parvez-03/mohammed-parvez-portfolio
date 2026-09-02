import FadeIn from "./FadeIn";

const services = [
  {
    n: "01",
    name: "Web Designing",
    desc: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.",
  },
  {
    n: "02",
    name: "SEO & Digital Marketing",
    desc: "Get found first on Google with our targeted SEO strategies and digital marketing campaigns.",
  },
  {
    n: "03",
    name: "Ai agents & Automation",
    desc: "smart chatbots for you business and save hours with smart workflows.",
  },
  {
    n: "04",
    name: "Branding",
    desc: "Crafting cohesive visual identities — from logos to full brand systems — that communicate a clear and memorable presence.",
  },
  
];

export function ServicesSection() {
  return (
    <section
      id="price"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <h2
        className="text-center font-black uppercase mb-16 sm:mb-20 md:mb-28"
        style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Services
      </h2>

      <div className="mx-auto max-w-5xl">
        {services.map((s, i) => (
          <FadeIn key={s.n} delay={i * 0.1}>
            <div
              className="flex items-start gap-5 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
              style={{
                borderTop: i === 0 ? "1px solid rgba(12, 12, 12, 0.15)" : undefined,
                borderBottom: "1px solid rgba(12, 12, 12, 0.15)",
              }}
            >
              <span
                className="font-black leading-none"
                style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {s.n}
              </span>
              <div className="flex flex-col gap-3">
                <h3
                  className="font-medium uppercase leading-none"
                  style={{ color: "#0C0C0C", fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {s.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl"
                  style={{
                    color: "#0C0C0C",
                    opacity: 0.6,
                    fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)",
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
