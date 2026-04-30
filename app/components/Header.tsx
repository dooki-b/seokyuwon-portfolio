"use client";

import { motion } from "framer-motion";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Project", href: "#project" },
  { label: "Approach", href: "#approach" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-divider"
    >
      <nav className="container-content flex items-center justify-between py-4">
        <a
          href="#"
          className="font-display font-semibold text-lg tracking-tight hover:text-accent transition-colors"
        >
          서규원
        </a>
        <ul className="hidden md:flex items-center gap-8 font-mono text-sm">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-fg-muted hover:text-fg transition-colors uppercase tracking-wider"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:koreanfu@gmail.com"
          className="hidden md:inline-block font-mono text-xs uppercase tracking-wider px-4 py-2 border border-fg hover:bg-fg hover:text-bg transition-colors"
        >
          Contact
        </a>
      </nav>
    </motion.header>
  );
}
