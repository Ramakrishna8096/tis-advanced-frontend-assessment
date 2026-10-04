import Reveal from "./Reveal";

export default function SectionTitle({ eyebrow, title, text, light = false }) {
  return (
    <Reveal>
      <div className={`section-title ${light ? "text-white" : ""}`}>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {text && <p>{text}</p>}
      </div>
    </Reveal>
  );
}