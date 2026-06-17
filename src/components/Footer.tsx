import Link from "next/link";
import { siteConfig, whatsappLink } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-brand-teal text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3 md:px-6">
        <div>
          <h3 className="mb-3 text-xl font-bold">{siteConfig.name}</h3>
          <p className="text-sm leading-relaxed text-white/90">{siteConfig.footerText}</p>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-bold">Contatos</h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li>{siteConfig.address}</li>
            <li>
              <a href={whatsappLink("Olá!")} target="_blank" rel="noreferrer" className="hover:underline">
                WhatsApp: {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:underline">
                Email: {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-bold">Cadastre-se</h3>
          <p className="mb-4 text-sm text-white/90">
            Agende seu horário ou fale conosco pelo WhatsApp.
          </p>
          <Link href="/agendamentos" className="btn-primary bg-white text-brand-teal hover:bg-brand-cream">
            Agendar agora
          </Link>
        </div>
      </div>

      <div className="border-t border-white/20 py-4 text-center text-xs text-white/70">
        © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
