import { motion } from "framer-motion";
import { facilities } from "../data/schoolData";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";

export default function Facilities() {
  return (
    <section id="facilities" className="section section-cream">
      <div className="container">
        <SectionTitle
          eyebrow="Campus & facilities"
          title="Built around the student."
          text="Purposeful spaces, technology and support systems create an environment where students can focus on growth."
        />
        <div className="facility-grid mt-14">
          {facilities.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <motion.article whileHover={{ y: -6 }} className="facility-card">
                <div className="facility-icon">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <span className="facility-index">0{index + 1}</span>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}