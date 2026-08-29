import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

function Char({
  char,
  range,
  progress,
}: {
  char: string;
  range: [number, number];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }}>
      {char === " " ? "\u00A0" : char}
    </motion.span>
  );
}

export function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = text.split("");
  const step = 1 / chars.length;

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => (
        <Char
          key={i}
          char={char}
          progress={scrollYProgress}
          range={[i * step, Math.min(1, (i + 1) * step)]}
        />
      ))}
    </p>
  );
}

export default AnimatedText;
