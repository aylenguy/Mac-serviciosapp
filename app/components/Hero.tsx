import Image from "next/image";
import { Bug, BugOff, Rat, SprayCan, ShieldCheck, MessageCircle, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { waUrl } from "../lib/whatsapp";

// El número de WhatsApp vive en lib/whatsapp.ts (un solo lugar para toda la web)
const WHATSAPP_URL = waUrl("Hola, quiero pedir un presupuesto de fumigación");

// PNG/WebP del técnico SIN fondo (transparente), guardado en public/images/
const HERO_IMG = "/images/hero-image-2.webp";
const HERO_ALT = "Técnico de MAC Servicios Ambientales fumigando un ambiente en Rosario";

const plagas = [
  { Icon: Bug, label: "Cucarachas" },
  { Icon: BugOff, label: "Hormigas" },
  { Icon: Rat, label: "Roedores" },
  { Icon: SprayCan, label: "Mosquitos" }, // lucide no tiene ícono de mosquito; cambialo si querés
];

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="wrap">
        {/* Texto sin animación de entrada: es lo primero que se ve y afecta el LCP */}
        <div className="hero-copy">
          <span className="tag">
            <ShieldCheck size={15} aria-hidden="true" />
            Control de plagas · Rosario
          </span>
          <h1>
            Plagas afuera. <span>Tranquilidad adentro.</span>
          </h1>
          <p>
            Soluciones profesionales para hogares, comercios, consorcios e
            industrias. Con garantía por escrito.
          </p>

          <ul className="plagas">
            {plagas.map(({ Icon, label }) => (
              <li key={label}>
                <span>
                  <Icon size={22} aria-hidden="true" />
                </span>
                {label}
              </li>
            ))}
          </ul>

          <div className="cta">
            <a
              className="btn btn-ico"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Pedí presupuesto
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="btn alt" href="#servicios">
              Ver servicios
            </a>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="hero-visual">
            {/* mancha amarilla orgánica detrás del técnico */}
            <svg
              className="hero-blob"
              viewBox="0 0 500 560"
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                <linearGradient id="blobGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FFE08A" />
                  <stop offset="100%" stopColor="#FFB000" />
                </linearGradient>
              </defs>
              <path
                fill="url(#blobGrad)"
                d="M330 20C420 10 500 80 490 180C480 270 400 300 420 380C440 460 380 540 280 550C160 560 60 520 30 420C0 320 90 260 110 180C130 90 230 30 330 20Z"
              />
            </svg>

            {/* líneas de rocío */}
            <svg
              className="hero-spray"
              viewBox="0 0 70 80"
              aria-hidden="true"
              focusable="false"
            >
              <g stroke="#E5083A" strokeWidth="5" strokeLinecap="round" fill="none">
                <path d="M50 6 L64 26" />
                <path d="M30 22 L58 34" />
                <path d="M44 52 L58 44" />
              </g>
            </svg>

            <Image
              className="hero-img"
              src={HERO_IMG}
              alt={HERO_ALT}
              fill
              priority
              quality={90}
              sizes="(max-width: 760px) 90vw, 480px"
              style={{ objectFit: "cover", objectPosition: "88% bottom" }}
            />

            <div className="hero-badge">
              <ShieldCheck size={26} aria-hidden="true" />
              <div>
                <b>
                  Garantía
                  <br />
                  por escrito
                </b>
                <span>En cada trabajo</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
