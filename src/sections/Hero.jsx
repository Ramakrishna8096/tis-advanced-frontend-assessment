import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { stats } from "../data/schoolData";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-image" />
      <div className="hero-overlay" />
      <div className="hero-grid" />

      <div className="container relative z-10 flex min-h-screen items-end pb-14 pt-32 sm:pb-20">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="eyebrow hero-eyebrow"
          >
            Tula's International School · Dehradun
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.12 }}
          >
            Education that
            <br />
            <em>shapes tomorrow.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="hero-copy"
          >
            A modern Gurukul where academic excellence, character, creativity
            and global experiences come together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.38 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a className="button button-accent" href="#admissions" data-cursor>
              Explore admissions <ArrowUpRight size={17} />
            </a>
            <a className="button button-glass" href="#about" data-cursor>
              Discover TIS
            </a>
          </motion.div>
        </div>
      </div>

      <div className="hero-bottom container">
        <div className="hidden items-center gap-2 md:flex">
          <ArrowDown size={15} />
          <span>Scroll to explore</span>
        </div>
        <div className="hero-stats">
          {stats.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}