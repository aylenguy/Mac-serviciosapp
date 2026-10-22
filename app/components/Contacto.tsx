"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Reveal from "./Reveal";
import { servicios } from "../data/servicios";
import { empresa } from "../data/empresa";
import { waUrl, WHATSAPP_DISPLAY } from "../lib/whatsapp";

export default function Contacto() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const f = new FormData(e.currentTarget);

  const nombre = String(f.get("nombre") ?? "").trim();
  const tel = String(f.get("tel") ?? "").trim();
  const servicio = String(f.get("servicio") ?? "");
  const msg = String(f.get("msg") ?? "").trim();

  const pedido =
    servicio === "Otro"
      ? "un presupuesto"
      : `un presupuesto para *${servicio.toLowerCase()}*`;

  const texto =
    `¡Hola! Soy ${nombre} y quiero pedir ${pedido}.\n\n` +
    `Mi teléfono es ${tel}.` +
    (msg ? `\n\nLes cuento: ${msg}` : "");

  window.open(waUrl(texto), "_blank");
}

  return (
    <section className="alt-bg" id="contacto">
      <div className="wrap contact">
        <Reveal>
          <div className="sec-head">
            <h2>
              Pedí tu presupuesto<span>.</span>
            </h2>
            <p className="sub">
              Completá el formulario y te respondemos por WhatsApp. El presupuesto es sin cargo.
            </p>
          </div>
          <ul className="info">
            <li><MapPin size={18} aria-hidden="true" /><span><b>Dirección:</b> {empresa.direccion}</span></li>
            <li>
              <Phone size={18} aria-hidden="true" />
              <span>
                <b>WhatsApp:</b>{" "}
                <a href={waUrl()} target="_blank" rel="noopener noreferrer">{WHATSAPP_DISPLAY}</a>
              </span>
            </li>
           
            <li><Clock size={18} aria-hidden="true" /><span><b>Horario:</b> {empresa.horario}</span></li>
          </ul>
          <div className="map">
            {empresa.mapaSrc ? (
              <iframe src={empresa.mapaSrc} loading="lazy" title="Ubicación" />
            ) : (
              "[Acá va el mapa de Google Maps]"
            )}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Nombre
              <input name="nombre" required autoComplete="name" />
            </label>
            <label>
              Teléfono
              <input name="tel" type="tel" required autoComplete="tel" />
            </label>
            <label>
              Servicio que te interesa
              <select name="servicio">
                {servicios.map((s) => (
                  <option key={s.title}>{s.title}</option>
                ))}
                <option>Otro</option>
              </select>
            </label>
            <label>
              Mensaje
              <textarea name="msg" rows={3} placeholder="Contanos qué necesitás" />
            </label>
            <button className="btn" type="submit">Enviar por WhatsApp</button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
