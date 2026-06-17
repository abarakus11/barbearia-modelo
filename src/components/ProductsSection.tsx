import Image from "next/image";
import Link from "next/link";
import { formatPrice, products, siteConfig } from "@/data/site";

export function ProductsSection({ showAllLink = true }: { showAllLink?: boolean }) {
  return (
    <section className="bg-neutral-50 px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title mb-12">Nossos Produtos</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <article key={product.id} className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="relative mb-4 h-44 w-full overflow-hidden rounded-xl bg-brand-cream">
                <Image src={product.image} alt={product.name} fill className="object-contain p-4" />
              </div>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="mt-1 text-brand-red">{formatPrice(product.price)}</p>
              <a
                href={`https://api.whatsapp.com/send?phone=${siteConfig.phoneDigits}&text=${encodeURIComponent(`Olá! Tenho interesse no produto ${product.name}.`)}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-4 w-full"
              >
                Comprar Agora
              </a>
            </article>
          ))}
        </div>

        {showAllLink && (
          <div className="mt-10 text-center">
            <Link href="/produtos" className="btn-outline">
              Ver mais Produtos
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
