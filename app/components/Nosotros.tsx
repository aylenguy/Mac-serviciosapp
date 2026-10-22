import Image from "next/image";
import { Check, Users } from "lucide-react";
import Reveal from "./Reveal";


const NOSOTROS_IMG: string | null = null; 
const NOSOTROS_ALT = "Los dueños de MAC Servicios Ambientales";


const FLOTA: string[] = [];
const FLOTA_ALT = "Vehículo de MAC Servicios Ambientales";

const puntos = [
  "Empresa familiar: trato cercano y de confianza",
  "Personal capacitado y con experiencia",
  "Productos habilitados, seguros para personas y mascotas",
  "Atención en Rosario y alrededores",
  "Respuesta rápida y presupuesto sin cargo",
];

export default function Nosotros() {
  return (
    <section className="alt-bg" id="nosotros">
      <div className="wrap">
        <div className="about">
          <Reveal>
            <div className="sec-head">
              <h2>
                Quiénes somos<span>.</span>
              </h2>
            </div>
            <p>
              <b>MAC Servicios Ambientales</b> es una empresa familiar de Rosario dedicada al
              control de plagas y la desinfección de ambientes, para hogares, comercios,
              consorcios e industrias.
            </p>
            <p>
              Trabajamos con responsabilidad y con productos habilitados, para que puedas
              despreocuparte y volver a disfrutar de tu espacio. Cada trabajo lo hacemos como si
              fuera para nuestra propia casa.
            </p>
            <ul className="checks">
              {puntos.map((p) => (
                <li key={p}>
                  <Check size={18} strokeWidth={3} aria-hidden="true" />
                  {p}
                </li>
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
                  style={{ objectFit: "cover", objectPosition: "center 30%" }}
                />
              )}
              <div className="about-badge">
                <Users size={20} aria-hidden="true" />
                <span>Empresa familiar</span>
              </div>
            </div>
          </Reveal>
        </div>

        {FLOTA.length > 0 && (
          <Reveal>
            <div className="flota">
              <h3>Nuestra flota</h3>
              <div className="flota-grid">
                {FLOTA.map((src, i) => (
                  <div className="flota-item" key={src}>
                    <Image
                      src={src}
                      alt={`${FLOTA_ALT} ${i + 1}`}
                      fill
                      sizes="(max-width: 760px) 100vw, 340px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
