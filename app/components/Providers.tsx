"use client";

import { MotionConfig } from "framer-motion";

// reducedMotion="user": respeta la opción "reducir movimiento" del sistema
export default function Providers({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}