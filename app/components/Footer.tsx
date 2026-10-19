import Image from "next/image";
import { empresa } from "../data/empresa";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <Image src="/images/logo-mac.png" alt={empresa.nombre} width={420} height={228} />
            <p>Control de plagas y desinfección de ambientes.</p>
          </div>
          <div>
            <b>Enlaces</b>
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#faq">Preguntas frecuentes</a>
            <a href="#contacto">Contacto</a>
          </div>
          <div>
            <b>Zona de atención</b>
            <span>{empresa.zona}</span>
            <br />
            <span>{empresa.horario}</span>
          </div>
          <div>
            <b>Redes</b>
            <a href={empresa.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={empresa.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
        <p className="copy">© 2026 {empresa.nombre}. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}