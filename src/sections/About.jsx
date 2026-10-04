import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";

export default function About() {
  return (
    <section id="about" className="section section-paper">
      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="about-photo-wrap">
            <Reveal>
              <div className="about-photo" />
              <div className="photo-caption">
                <span>01 / 04</span>
                <span>Learning beyond the classroom</span>
              </div>
            </Reveal>
          </div>

          <div>
            <SectionTitle
              eyebrow="About TIS"
              title="A school built for curious minds."
              text="TIS is a co-educational boarding and day school in Dehradun, combining a CBSE curriculum with holistic development and modern facilities."
            />
            <Reveal delay={0.12}>
              <p className="body-copy mt-7">
                At Tulas, learning is designed to be an adventure. Students are
                encouraged to question, create, collaborate and discover their
                own strengths across academics, arts, athletics and outreach.
              </p>
              <a href="#academics" className="text-link mt-8" data-cursor>
                See our approach <ArrowUpRight size={17} />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}