import Image from "next/image";

export default function Header() {
  return (
    <header>
      <div className="wrap nav">
        <a href="#inicio">
<Image src="/images/logo-mac.png" alt="MAC Servicios Ambientales" width={420} height={228} priority />        </a>
        <ul>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#faq">Preguntas</a></li>
          <li><a href="#contacto">Contacto</a></li>
          <li><a className="btn" href="#contacto">Pedí presupuesto</a></li>
        </ul>
      </div>
    </header>
  );
}