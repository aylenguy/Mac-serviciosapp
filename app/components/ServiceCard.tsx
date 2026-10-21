"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";

type Props = {
  img: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  items: string[];
  delay?: number;
};

export default function ServiceCard({ img, icon: Icon, title, desc, items, delay = 0 }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className={`scard${open ? " open" : ""}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      <button className="scard-head" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span
          className="scard-media"
          style={{ backgroundImage: `url(${img}), linear-gradient(135deg, #FFB000, #E5083A)` }}
        />
        <span className="scard-body">
          <Icon className="scard-icon" size={28} strokeWidth={1.6} aria-hidden="true" />
          <span className="scard-title">{title}</span>
          <span className="scard-desc">{desc}</span>
        </span>
        <span className="scard-arrow">
          <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="scard-more">
              <ul>
                {items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <a href="#contacto">Pedí presupuesto →</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
