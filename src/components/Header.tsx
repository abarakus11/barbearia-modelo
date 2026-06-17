"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram, Menu, X } from "lucide-react";
import { useState } from "react";
import { siteConfig, whatsappLink } from "@/data/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/agendamentos", label: "Agendamentos" },
  { href: "/produtos", label: "Produtos" },
  { href: "/servicos", label: "Serviços" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 md:px-6">
        <Link href="/" className="text-xl font-bold uppercase tracking-wide text-white md:text-2xl">
          {siteConfig.name}
        </Link>

        <button
          type="button"
          className="rounded-md p-2 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium text-white transition hover:text-brand-red ${
                pathname === link.href ? "text-brand-red" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappLink("Olá! Gostaria de mais informações.")}
            target="_blank"
            rel="noreferrer"
            className="text-white transition hover:text-brand-red"
            title="WhatsApp"
          >
            <span className="text-lg font-bold">W</span>
          </a>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-white transition hover:text-brand-red"
            title="Instagram"
          >
            <Instagram size={18} />
          </a>
        </nav>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/80 px-4 py-4 backdrop-blur md:hidden">
          <nav className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white hover:text-brand-red"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
