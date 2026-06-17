import Image from "next/image";
import { siteConfig } from "@/data/site";

export function AboutSection() {
  return (
    <section className="px-4 py-20 md:px-6">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div className="relative h-80 overflow-hidden rounded-2xl md:h-[420px]">
          <Image src={siteConfig.aboutImage} alt="Sobre nós" fill className="object-cover" />
        </div>
        <div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Sobre Nós</h2>
          <p className="leading-relaxed text-neutral-600">{siteConfig.aboutText}</p>
        </div>
      </div>
    </section>
  );
}
