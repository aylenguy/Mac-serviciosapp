import { House, Store, Rat, Droplets, Bug, SprayCan, type LucideIcon } from "lucide-react";

export type Servicio = {
  icon: LucideIcon;
  img: string;
  title: string;
  desc: string;
  items: string[];
};

export const servicios: Servicio[] = [
  {
    icon: House,
    img: "/images/vivienda.webp",
    title: "Control de plagas en viviendas",
    desc: "Tratamientos para el hogar, departamentos y casas.",
    items: ["Cucarachas, hormigas, arañas y pulgas", "Productos seguros para familia y mascotas", "Garantía por escrito"],
  },
  {
    icon: Store,
    img: "/images/comercio.webp",
    title: "Comercios y empresas",
    desc: "Planes de control para locales, industrias y consorcios.",
    items: ["Servicios programados", "Certificados para habilitaciones", "Atención fuera de horario comercial"],
  },
  {
    icon: Rat,
    img: "/images/roedores.webp",
    title: "Control de roedores",
    desc: "Desratización y barreras para evitar su regreso.",
    items: ["Inspección de accesos y nidos", "Cebaderos y monitoreo", "Seguimiento posterior"],
  },
  {
    icon: Droplets,
    img: "/images/agua.webp",
    title: "Limpieza de tanques de agua",
    desc: "Limpieza y desinfección con certificado.",
    items: ["Vaciado, cepillado y desinfección", "Análisis opcional del agua", "Recomendado cada 6 meses"],
  },
  {
    icon: Bug,
    img: "/images/hormiga.webp",
    title: "Hormigas y cucarachas",
    desc: "Tratamientos específicos para las plagas más comunes.",
    items: ["Gel, pulverización y nebulización", "Eliminación de focos", "Control de reinfestación"],
  },
  {
    icon: SprayCan,
    img: "/images/mosquito.webp",
    title: "Mosquitos y pulgas",
    desc: "Control para jardines, patios e interiores.",
    items: ["Fumigación de exteriores", "Tratamiento de mascotas y entornos", "Servicios de temporada"],
  },
];