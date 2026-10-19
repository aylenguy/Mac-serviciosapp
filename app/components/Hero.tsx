import Image from "next/image";
import { Check, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

// Reemplazá por el número real, formato internacional sin "+" ni espacios (Rosario: 549341XXXXXXX)
const WHATSAPP_NUMBER = "549341XXXXXXX";
const WHATSAPP_MSG = "Hola, quiero pedir un presupuesto de fumigación";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;

const HERO_IMG = "/images/img-1.jpg";
const HERO_ALT =
  "Técnico de MAC Servicios Ambientales fumigando un ambiente en Rosario";

const puntos = [
  "Productos habilitados",
  "Presupuesto sin cargo",
  "Atención el mismo día",
];

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="wrap">
        {/* Texto sin animación de entrada: es lo primero que se ve y afecta el LCP */}
        <div className="hero-copy">
          <span className="tag">Control de plagas en Rosario</span>
          <h1>
            Fumigación en Rosario con <span>garantía por escrito</span>
          </h1>
          <p>
            Para hogares, comercios, consorcios e industrias. Soluciones
            seguras y con respuesta el mismo día.
          </p>
          <div className="cta">
            <a
              className="btn"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedí tu presupuesto por WhatsApp
            </a>
            <a className="btn alt" href="#servicios">
              Ver servicios
            </a>
          </div>
          <ul className="trust">
            {puntos.map((p) => (
              <li key={p}>
                <Check size={16} strokeWidth={3} aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        <Reveal delay={0.1}>
          <div className="hero-visual">
            <div className="hero-photo">
              <Image
                src={HERO_IMG}
                alt={HERO_ALT}
                fill
                priority
                sizes="(max-width: 760px) 100vw, 480px"
                style={{ objectFit: "cover", objectPosition: "center 25%" }}
              />
            </div>
            <div className="hero-badge">
              <ShieldCheck size={22} aria-hidden="true" />
              <div>
                <b>Garantía por escrito</b>
                <span>En cada trabajo</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
