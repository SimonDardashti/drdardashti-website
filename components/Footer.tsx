"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();
  const isSpanish = pathname?.startsWith("/es");

  const footerLinks = isSpanish
    ? [
        { href: "/es", label: "Inicio" },
        { href: "/es/educacion-para-pacientes", label: "Educación para Pacientes" },
        { href: "/es/articulos", label: "Artículos" },
        { href: "/es/cuidados-conservadores", label: "Cuidados Conservadores" },
        { href: "/es/condiciones", label: "Condiciones" },
        { href: "/es/procedimientos", label: "Procedimientos" },
        { href: "/", label: "English" },
      ]
    : [
        { href: "/", label: "Home" },
        { href: "/patient-education", label: "Patient Education" },
        { href: "/articles", label: "Articles" },
        { href: "/conservative-care", label: "Rehabilitation & Exercise" },
        { href: "/conditions", label: "Conditions" },
        { href: "/procedures", label: "Procedures" },
      ];

  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Image
          src="/images/ui/educational-content-footer.png"
          alt="Educational content notice."
          width={1721}
          height={914}
          className="w-full h-auto"
          sizes="(max-width: 1152px) 100vw, 1152px"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3
            className="text-white font-bold text-base mb-1"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Simon Dardashti, MD
          </h3>
          <p className="text-[10px] text-[#666] uppercase tracking-[0.2em] mb-5">
            {isSpanish ? "Medicina del Dolor · Anestesiología" : "Pain Medicine · Anesthesiology"}
          </p>
          <p className="text-sm text-[#888] leading-relaxed">
            {isSpanish
              ? "Médico especialista en manejo del dolor y anestesiólogo, certificado por la junta. Evaluación y tratamiento basados en evidencia para dolor de columna, nervios, articulaciones y condiciones de dolor crónico complejo en Mission Hills, CA."
              : "Board-certified pain medicine physician and anesthesiologist. Evidence-informed evaluation and treatment for spine, nerve, joint, and complex chronic pain conditions in Mission Hills, CA."}
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-[#888] text-xs font-semibold mb-5 uppercase tracking-widest">
            {isSpanish ? "Navegación" : "Navigation"}
          </h4>
          <ul className="space-y-3 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-[#666] hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Location */}
        <div>
          <h4 className="text-[#888] text-xs font-semibold mb-5 uppercase tracking-widest">
            {isSpanish ? "Ubicación Clínica" : "Clinical Location"}
          </h4>
          <ul className="space-y-2 text-sm text-[#666]">
            <li>Mission Hills, California</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#1a1a1a] px-6 py-6 max-w-6xl mx-auto flex flex-col gap-3 text-xs text-[#555]">
        <p className="leading-relaxed max-w-4xl">
          {isSpanish
            ? "Este sitio web es solo para propósitos informativos generales y no proporciona consejo médico, diagnóstico o tratamiento. El uso de este sitio web no crea una relación médico-paciente. Las preguntas clínicas, prescripciones y preocupaciones médicas específicas del paciente deben manejarse a través del consultorio médico apropiado o canal de comunicación con el paciente. Si experimenta una emergencia médica, llame al 911 o busque atención médica de emergencia."
            : "This website is for general informational purposes only and does not provide medical advice, diagnosis, or treatment. Use of this website does not create a physician-patient relationship. Clinical questions, appointment requests, prescriptions, and patient-specific medical concerns should be handled through the appropriate medical office or patient communication channel. If you are experiencing a medical emergency, call 911 or seek emergency medical care."}
        </p>
        <p className="text-[#444]">&copy; {year} Simon Dardashti, MD · Mission Hills, CA</p>
      </div>
    </footer>
  );
}
