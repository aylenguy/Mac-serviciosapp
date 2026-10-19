import ServiceCard from "./ServiceCard";
import Reveal from "./Reveal";
import { servicios } from "../data/servicios";

export default function Servicios() {
  return (
    <section id="servicios">
      <div className="wrap">
        <Reveal>
          <h2>Nuestros servicios</h2>
          <p className="sub">Tocá la flecha de cada servicio para ver más información.</p>
        </Reveal>
        <div className="cards">
          {servicios.map((s, i) => (
            <ServiceCard
              key={s.title}
              img={s.img}
              title={s.title}
              desc={s.desc}
              items={s.items}
              delay={(i % 3) * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}