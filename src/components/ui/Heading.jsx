"use client";
import { motion } from "framer-motion";

export function Heading({ className, children }) {
  return (
    <div
      className={`text-4xl font-semibold text-center text-heading font-poppins ${className}`}
    >
      <motion.div
        initial={{ translateY: 20, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
