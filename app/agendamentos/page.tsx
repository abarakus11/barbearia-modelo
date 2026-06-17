import { BookingForm } from "@/components/BookingForm";
import { siteConfig } from "@/data/site";
import Image from "next/image";

export const metadata = {
  title: `Agendamentos | ${siteConfig.name}`,
};

export default function AgendamentosPage() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-brand-teal px-4 py-24 md:px-6">
      <Image src={siteConfig.heroImage} alt="" fill className="object-cover opacity-20" />
      <div className="relative mx-auto max-w-xl text-center text-white">
        <h1 className="mb-3 text-3xl font-bold md:text-4xl">Agendamentos</h1>
        <p className="mb-8 text-sm text-white/90">
          Preencha os dados e confirme pelo WhatsApp. Nossa equipe finaliza o agendamento.
        </p>
        <BookingForm />
      </div>
    </section>
  );
}
