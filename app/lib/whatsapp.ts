// ⚠️ Cambiar por el número real del cliente (código de país + área, sin + ni espacios)
export const WHATSAPP = "5493410000000";

export const waUrl = (text?: string) =>
  `https://wa.me/${WHATSAPP}` + (text ? `?text=${encodeURIComponent(text)}` : "");