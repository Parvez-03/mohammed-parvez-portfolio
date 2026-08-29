import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  className?: string;
}

export function Magnet({
  children,
  padding = 150,
  strength = 3,
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 200, damping: 20, mass: 0.5 });

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const inside =
        Math.abs(dx) < rect.width / 2 + padding &&
        Math.abs(dy) < rect.height / 2 + padding;
      if (inside) {
        x.set(dx / strength);
        y.set(dy / strength);
      } else {
        x.set(0);
        y.set(0);
      }
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, [padding, strength, x, y]);

  return (
    <motion.div ref={ref} style={{ x: sx, y: sy }} className={className}>
      {children}
    </motion.div>
  );
}

export default Magnet;
