import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMousePosition } from "../hooks/useMousePosition";

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onOver = (e) => {
      const target = e.target.closest("a, button, [data-cursor]");
      setActive(Boolean(target));
    };
    document.addEventListener("mouseover", onOver);
    return () => document.removeEventListener("mouseover", onOver);
  }, []);

  return (
    <motion.div
      className="cursor-ring"
      animate={{
        x: x - (active ? 26 : 18),
        y: y - (active ? 26 : 18),
        width: active ? 52 : 36,
        height: active ? 52 : 36,
        opacity: x < 0 ? 0 : 1
      }}
      transition={{ type: "spring", stiffness: 500, damping: 35, mass: 0.2 }}
    />
  );
}