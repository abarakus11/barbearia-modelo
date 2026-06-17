"use client";

import { FormEvent, useState } from "react";
import { siteConfig, whatsappLink } from "@/data/site";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nome = String(data.get("nome") || "");
    const telefone = String(data.get("telefone") || "");
    const email = String(data.get("email") || "");
    const mensagem = String(data.get("mensagem") || "");

    const text = `Olá! Meu nome é ${nome}.\nTelefone: ${telefone}\nEmail: ${email}\n\n${mensagem}`;
    window.open(whatsappLink(text), "_blank");
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <section className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title mb-10">Contate-nos</h2>

        <div className="grid gap-10 lg:grid-cols-2">
          <form onSubmit={handleSubmit} className="card-surface space-y-4">
            <input name="nome" required placeholder="Seu Nome" className="w-full rounded-lg border px-4 py-3" />
            <input name="telefone" required placeholder="Seu Telefone" className="w-full rounded-lg border px-4 py-3" />
            <input name="email" type="email" required placeholder="Seu Email" className="w-full rounded-lg border px-4 py-3" />
            <textarea name="mensagem" required rows={5} placeholder="Mensagem" className="w-full rounded-lg border px-4 py-3" />
            <button type="submit" className="btn-primary w-full">Enviar</button>
            {sent && <p className="text-sm text-green-700">Mensagem enviada pelo WhatsApp.</p>}
          </form>

          <div className="overflow-hidden rounded-2xl">
            <iframe
              src={siteConfig.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 360 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
