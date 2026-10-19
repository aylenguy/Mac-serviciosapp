"use client";

import { motion } from "framer-motion";
import { waUrl } from "../lib/whatsapp";

export default function WhatsAppButton() {
  return (
    <motion.a
      className="wa"
      href={waUrl("Hola! Quisiera pedir un presupuesto.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.8 }}
    >
      <svg viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.7-.3-1.5-.8-2.2-1.5-.5-.5-1-1.2-1.1-1.4-.1-.2 0-.4.1-.5l.4-.4.2-.4c.1-.1 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.6.6-.9 1.3-.9 2.1.1 1 .5 1.9 1.1 2.7 1.1 1.6 2.5 2.8 4.2 3.5.6.3 1.2.4 1.8.5.6.1 1.2 0 1.7-.3.5-.3.9-.9 1-1.5.1-.3.1-.6 0-.7l-.6-.3Z" />
      </svg>
    </motion.a>
  );
}