import Image from "next/image";
import Link from "next/link";
import { formatPrice, serviceCategories, services } from "@/data/site";

export function ServicesSection({ showAllLink = true }: { showAllLink?: boolean }) {
  return (
    <section className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="mx-auto mt-3 max-w-2xl text-neutral-600">
            {serviceCategories.join(" / ")}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <article key={service.id} className="card-surface text-center">
              <div className="relative mx-auto mb-4 h-40 w-full overflow-hidden rounded-xl bg-white">
                <Image src={service.image} alt={service.name} fill className="object-contain p-3" />
              </div>
              <h3 className="text-lg font-semibold">{service.name}</h3>
              <p className="mt-1 text-brand-red">{formatPrice(service.price)}</p>
              <Link href="/agendamentos" className="btn-primary mt-4 w-full">
                Agendar
              </Link>
            </article>
          ))}
        </div>

        {showAllLink && (
          <div className="mt-10 text-center">
            <Link href="/servicos" className="btn-outline">
              Ver todos os serviços
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
