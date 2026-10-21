"use client";

import ServiceCard from "./ServiceCard";
import Reveal from "./Reveal";
import { servicios } from "../data/servicios";

export default function Servicios() {
  return (
    <section id="servicios">
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
         
            <h2>
              Nuestros servicios<span>.</span>
            </h2>
            <p className="sub">
              Soluciones profesionales para prevenir y controlar plagas en hogares, comercios e
              industrias. Tocá la flecha de cada servicio para ver más.
            </p>
          </div>
        </Reveal>
        <div className="cards">
          {servicios.map((s, i) => (
            <ServiceCard
              key={s.title}
              img={s.img}
              icon={s.icon}
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
