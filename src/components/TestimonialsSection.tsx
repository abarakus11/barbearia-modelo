import Image from "next/image";
import { testimonials } from "@/data/site";

export function TestimonialsSection() {
  return (
    <section className="bg-brand-cream px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title mb-12">Depoimento dos nossos Clientes</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.id} className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="relative h-14 w-14 overflow-hidden rounded-full">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <h3 className="font-semibold">{item.name}</h3>
              </div>
              <p className="text-sm leading-relaxed text-neutral-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
