import { motion } from "framer-motion";
import { useScrollProgress } from "../hooks/useScrollProgress";

export default function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <motion.div
      className="fixed left-0 top-0 z-[100] h-[3px] origin-left bg-[var(--accent)]"
      style={{ width: `${progress * 100}%` }}
    />
  );
}