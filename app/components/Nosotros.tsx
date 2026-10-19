import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "./Reveal";

// 👇 Foto de la sección. Ponela en public/images/. Mientras sea null se ve el logo.
const NOSOTROS_IMG: string | null = null; // ejemplo: "/images/img-2.jpg"
const NOSOTROS_ALT = "Equipo de MAC Servicios Ambientales";

const puntos = [
  "Personal capacitado y con experiencia",
  "Productos habilitados, seguros para personas y mascotas",
  "Atención en Rosario y alrededores",
  "Respuesta rápida y presupuesto sin cargo",
];

export default function Nosotros() {
  return (
    <section className="alt-bg" id="nosotros">
      <div className="wrap about">
        <Reveal>
          <h2>Quiénes somos</h2>
          <p>
            <b>MAC Servicios Ambientales</b> es una empresa de Rosario dedicada al control de plagas
            y la desinfección de ambientes, para hogares, comercios, consorcios e industrias.
          </p>
          <p>
            Trabajamos con responsabilidad y con productos habilitados, para que puedas despreocuparte
            y volver a disfrutar de tu espacio.
          </p>
          <ul className="checks">
            {puntos.map((p) => (
              <li key={p}><Check size={18} strokeWidth={3} />{p}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="about-visual">
            {NOSOTROS_IMG && (
              <Image
                src={NOSOTROS_IMG}
                alt={NOSOTROS_ALT}
                fill
                sizes="(max-width: 760px) 100vw, 480px"
                style={{ objectFit: "cover" }}
              />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}