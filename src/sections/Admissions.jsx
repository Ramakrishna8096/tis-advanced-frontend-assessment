import { ArrowUpRight, Phone } from "lucide-react";
import Reveal from "../components/Reveal";

export default function Admissions() {
  return (
    <section id="admissions" className="admission-section">
      <div className="admission-image" />
      <div className="admission-overlay" />
      <div className="container relative z-10">
        <Reveal>
          <div className="max-w-3xl">
            <span className="eyebrow hero-eyebrow">Admissions open · 2027</span>
            <h2 className="admission-title">Ready to begin<br /><em>their next chapter?</em></h2>
            <p className="admission-copy">
              Explore the Tulas International School experience and start your
              admissions journey for Classes IV–XII.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://admission.tis.edu.in/" target="_blank" rel="noreferrer" className="button button-accent" data-cursor>
                Start application <ArrowUpRight size={17} />
              </a>
              <a href="tel:+919837983791" className="button button-glass" data-cursor>
                <Phone size={16} /> +91 98379 83791
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}