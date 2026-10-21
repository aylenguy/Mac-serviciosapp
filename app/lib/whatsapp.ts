// Número de WhatsApp del cliente (código de país + área, sin + ni espacios)
export const WHATSAPP = "5493415803636";

// Cómo se muestra el número en la web (footer y contacto)
export const WHATSAPP_DISPLAY = "341 580-3636";

export const waUrl = (text?: string) =>
  `https://wa.me/${WHATSAPP}` + (text ? `?text=${encodeURIComponent(text)}` : "");