"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Reveal from "./Reveal";
import { servicios } from "../data/servicios";
import { empresa } from "../data/empresa";
import { waUrl } from "../lib/whatsapp";

export default function Contacto() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const texto =
      `Hola! Soy ${f.get("nombre")}.\nServicio: ${f.get("servicio")}\nTeléfono: ${f.get("tel")}` +
      (f.get("msg") ? `\nMensaje: ${f.get("msg")}` : "");
    window.open(waUrl(texto), "_blank");
  }

  return (
    <section className="alt-bg" id="contacto">
      <div className="wrap contact">
        <Reveal>
          <h2>Pedí tu presupuesto</h2>
          <p style={{ color: "var(--mute)" }}>
            Completá el formulario y te respondemos por WhatsApp. El presupuesto es sin cargo.
          </p>
          <ul className="info">
            <li><MapPin size={18} /><span><b>Dirección:</b> {empresa.direccion}</span></li>
            <li><Phone size={18} /><span><b>WhatsApp:</b> {empresa.telefono}</span></li>
            <li><Mail size={18} /><span><b>Email:</b> {empresa.email}</span></li>
            <li><Clock size={18} /><span><b>Horario:</b> {empresa.horario}</span></li>
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