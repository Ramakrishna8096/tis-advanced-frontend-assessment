import { Quote } from "lucide-react";
import { testimonials } from "../data/schoolData";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";

export default function Stories() {
  return (
    <section id="stories" className="section section-dark">
      <div className="container">
        <SectionTitle
          light
          eyebrow="From the community"
          title="The Tulas experience, in their words."
        />
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.quote} delay={index * 0.1}>
              <article className="testimonial">
                <Quote size={25} />
                <p>“{item.quote}”</p>
                <span>{item.name}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}