import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { programs } from "../data/schoolData";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";

export default function Academics() {
  return (
    <section id="academics" className="section section-dark">
      <div className="container">
        <SectionTitle
          light
          eyebrow="The Tulas approach"
          title="More than a curriculum."
          text="A learning experience designed to build reasoning, creativity, confidence and real-world capability."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {programs.map((program, index) => (
            <Reveal key={program.number} delay={index * 0.1}>
              <motion.article whileHover={{ y: -8 }} className="program-card">
                <div className="flex items-start justify-between">
                  <span className="program-number">{program.number}</span>
                  <span className="program-tag">{program.tag}</span>
                </div>
                <h3>{program.title}</h3>
                <p>{program.text}</p>
                <span className="card-arrow"><ArrowUpRight size={18} /></span>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="marquee">
            <span>CURIOUS</span><i>✦</i><span>COLLABORATIVE</span><i>✦</i>
            <span>CONFIDENT</span><i>✦</i><span>CREATIVE</span><i>✦</i>
          </div>
        </Reveal>
      </div>
    </section>
  );
}