import type { Metadata } from "next";
import Link from "next/link";
import { waUrl, WHATSAPP_DISPLAY } from "../lib/whatsapp";

export const metadata: Metadata = {
  title: "Política de privacidad | MAC Servicios Ambientales",
  description:
    "Cómo usamos los datos que nos compartís al pedir un presupuesto en MAC Servicios Ambientales.",
  alternates: { canonical: "/privacidad" },
};

// Si el cliente quiere mostrar un mail de contacto, completalo acá.
// Si queda en null, solo se muestra el WhatsApp.
const EMAIL: string | null = null;

const h2Style = { marginTop: 36, marginBottom: 8 } as const;

export default function Privacidad() {
  return (
    <main
      style={{
        maxWidth: 760,
        margin: "0 auto",
        padding: "64px 20px 96px",
        lineHeight: 1.7,
      }}
    >
      <p>
        <Link href="/">← Volver al inicio</Link>
      </p>

      <h1 style={{ marginTop: 24, marginBottom: 8 }}>Política de privacidad</h1>
      <p style={{ opacity: 0.7, marginTop: 0 }}>Última actualización: octubre de 2026</p>

      <p style={{ marginTop: 32 }}>
        En MAC Servicios Ambientales valoramos tu privacidad. Esta política explica qué
        información recolectamos, para qué la usamos y cómo podés contactarnos ante cualquier
        consulta.
      </p>

      <h2 style={h2Style}>¿Qué datos recolectamos?</h2>
      <p>
        Cuando pedís un presupuesto desde nuestro formulario, te pedimos tu nombre, tu teléfono,
        el servicio que te interesa y, si querés, un mensaje. Al enviarlo, se abre WhatsApp con
        esos datos ya escritos para que nos los mandes. Este sitio no guarda esa información en
        servidores ni en bases de datos propias.
      </p>

      <h2 style={h2Style}>¿Para qué usamos tus datos?</h2>
      <p>
        Usamos esta información únicamente para responder tu consulta y coordinar el presupuesto
        y el servicio. No compartimos ni vendemos tus datos a terceros.
      </p>

      <h2 style={h2Style}>Servicios de terceros que utilizamos</h2>
      <p>
        Nuestro sitio utiliza Google Maps para mostrar la ubicación, WhatsApp (Meta) para recibir
        tus consultas y Vercel como servicio de alojamiento. Estos servicios pueden generar
        cookies o recolectar datos técnicos según sus propias políticas de privacidad. Por
        ejemplo, la de Google la podés consultar en{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          policies.google.com/privacy
        </a>
        .
      </p>

      <h2 style={h2Style}>Tus derechos</h2>
      <p>
        De acuerdo con la Ley 25.326 de Protección de Datos Personales de Argentina, tenés
        derecho a acceder, rectificar o solicitar la eliminación de tus datos personales en
        cualquier momento.
      </p>
      <p style={{ fontSize: 14, opacity: 0.8 }}>
        El titular de los datos personales tiene la facultad de ejercer el derecho de acceso a
        los mismos en forma gratuita a intervalos no inferiores a seis meses, salvo que se
        acredite un interés legítimo al efecto conforme lo establecido en el artículo 14,
        inciso 3 de la Ley Nº 25.326. La Agencia de Acceso a la Información Pública, en su
        carácter de Órgano de Control de la Ley Nº 25.326, tiene la atribución de atender las
        denuncias y reclamos que interpongan quienes resulten afectados en sus derechos por
        incumplimiento de las normas vigentes en materia de protección de datos personales.
      </p>

      <h2 style={h2Style}>Contacto</h2>
      <p>
        Si tenés dudas sobre esta política o querés ejercer alguno de tus derechos, podés
        escribirnos
        {EMAIL && (
          <>
            {" "}
            a <a href={`mailto:${EMAIL}`}>{EMAIL}</a> o
          </>
        )}{" "}
        por WhatsApp al{" "}
        <a href={waUrl()} target="_blank" rel="noopener noreferrer">
          {WHATSAPP_DISPLAY}
        </a>
        .
      </p>
    </main>
  );
}
