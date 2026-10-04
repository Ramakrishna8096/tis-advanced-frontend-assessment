import { motion } from "framer-motion";
import { sports } from "../data/schoolData";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";

export default function Life() {
  return (
    <section id="life" className="section section-paper overflow-hidden">
      <div className="container">
        <SectionTitle
          eyebrow="Life at TIS"
          title="Where every day has a story."
          text="School becomes a community when students have space to play, create, lead and belong."
        />

        <div className="life-grid mt-14">
          <Reveal>
            <div className="life-large" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="life-small" />
          </Reveal>
          <Reveal delay={0.2}>
            <div className="life-copy">
              <span className="eyebrow">Beyond academics</span>
              <h3>Play. Create. Lead.</h3>
              <p>
                From sport and clubs to arts and student-led experiences,
                TIS gives students multiple ways to discover what they can do.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-20">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h3 className="subheading">16+ sports</h3>
            <span className="muted">Move with purpose.</span>
          </div>
          <div className="sports-grid">
            {sports.map((sport, i) => (
              <motion.div
                key={sport}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.025 }}
                className="sport-pill"
              >
                <span>0{i + 1}</span>{sport}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}