"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Chevron from "./Chevron";

type Props = {
  img: string;
  title: string;
  desc: string;
  items: string[];
  delay?: number;
};

export default function ServiceCard({ img, title, desc, items, delay = 0 }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className={`card${open ? " open" : ""}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      <button className="card-head" aria-expanded={open} onClick={() => setOpen(!open)}>
        <div
          className="thumb"
          style={{ backgroundImage: `url(${img}), linear-gradient(135deg, #FFB000, #E5083A)` }}
        />
        <div className="bar">
          <span>{title}</span>
          <Chevron />
        </div>
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
            <div className="more">
              <p>{desc}</p>
              <ul>
                {items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <a href="#contacto">Pedir presupuesto →</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}