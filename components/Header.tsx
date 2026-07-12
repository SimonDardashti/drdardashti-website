"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const englishNavLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/conditions", label: "Conditions" },
  { href: "/procedures", label: "Procedures" },
];

const spanishNavLinks = [
  { href: "/es", label: "Inicio" },
  { href: "/es/condiciones", label: "Condiciones" },
  { href: "/es/procedimientos", label: "Procedimientos" },
];

function BookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-[13px] h-[13px] shrink-0"
      aria-hidden="true"
    >
      <path d="M12 5.5v14" />
      <path d="M12 5.5c-2.5-2-6-2.2-8.5-1.2v13.5c2.5-1 6-.8 8.5 1.2c2.5-2 6-2.2 8.5-1.2V4.3c-2.5-1-6-.8-8.5 1.2Z" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isSpanish = pathname?.startsWith("/es");

  return (
    <header className="bg-[#0a0a0a] text-white sticky top-0 z-50 border-b border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href={isSpanish ? "/es" : "/"} className="flex flex-col leading-tight">
          <span
            className="text-base font-bold tracking-wide text-white"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Simon Dardashti, MD
          </span>
          <span className="text-[10px] text-[#888] tracking-[0.2em] uppercase mt-0.5">
            Pain Medicine Physician
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {(isSpanish ? spanishNavLinks : englishNavLinks).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-medium tracking-widest uppercase transition-colors duration-200 hover:text-white ${
                pathname === link.href ? "text-white" : "text-[#888]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#educational-content-notice"
            aria-label="View patient education notice"
            className="flex items-center gap-1.5 text-[#c8a020] text-[10px] font-semibold tracking-[0.3em] uppercase opacity-75 hover:opacity-100 transition-opacity duration-200 no-underline"
          >
            <BookIcon />
            {isSpanish ? "Educación para Pacientes" : "Patient Education"}
          </Link>
          <div className="pl-4 border-l border-[#333]">
            <Link
              href={isSpanish ? "/" : "/es"}
              className={`text-xs font-medium tracking-widest uppercase transition-colors duration-200 hover:text-[#c8a020] ${
                isSpanish ? "text-[#888]" : "text-[#c8a020]"
              }`}
            >
              {isSpanish ? "English" : "En Español"}
            </Link>
          </div>
        </nav>

        {/* Mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-white transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0f0f0f] border-t border-[#1a1a1a] px-6 py-5 flex flex-col gap-4">
          {(isSpanish ? spanishNavLinks : englishNavLinks).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-xs font-medium tracking-widest uppercase py-1 transition-colors hover:text-white ${
                pathname === link.href ? "text-white" : "text-[#888]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-[#1a1a1a] pt-4 mt-2">
            <Link
              href={isSpanish ? "/" : "/es"}
              onClick={() => setMenuOpen(false)}
              className={`text-xs font-medium tracking-widest uppercase py-1 transition-colors hover:text-[#c8a020] block ${
                isSpanish ? "text-[#888]" : "text-[#c8a020]"
              }`}
            >
              {isSpanish ? "English" : "En Español"}
            </Link>
          </div>
          <div className="border-t border-[#1a1a1a] pt-4 mt-2">
            <Link
              href="#educational-content-notice"
              onClick={() => setMenuOpen(false)}
              aria-label="View patient education notice"
              className="flex items-center gap-1.5 text-[#c8a020] text-[10px] font-semibold tracking-[0.3em] uppercase opacity-75 hover:opacity-100 transition-opacity duration-200 no-underline"
            >
              <BookIcon />
              {isSpanish ? "Educación para Pacientes" : "Patient Education"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
