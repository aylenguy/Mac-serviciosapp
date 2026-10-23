"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header>
      <div className="wrap nav">
        <a href="#inicio" onClick={close}>
          <Image
            src="/images/logo-mac.png"
            alt="MAC Servicios Ambientales"
            width={420}
            height={228}
            priority
          />
        </a>

        <button
          className="burger"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul id="menu" className={open ? "open" : ""}>
          <li><a href="#servicios" onClick={close}>Servicios</a></li>
          <li><a href="#nosotros" onClick={close}>Nosotros</a></li>
          <li><a href="#faq" onClick={close}>Preguntas</a></li>
          <li><a href="#contacto" onClick={close}>Contacto</a></li>
          <li className="nav-cta">
            <a className="btn" href="#contacto">Pedí presupuesto</a>
          </li>
        </ul>
      </div>
    </header>
  );
}