import FaqItem from "./FaqItem";
import Reveal from "./Reveal";
import { faqs } from "../data/faqs";

export default function Faq() {
  return (
    <section id="faq">
      <div className="wrap">
        <Reveal>
          <h2>Preguntas frecuentes</h2>
          <p className="sub">Las dudas más comunes antes de contratar.</p>
        </Reveal>
        <Reveal className="faq" delay={0.1}>
          {faqs.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}