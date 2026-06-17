"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides, siteConfig, whatsappLink } from "@/data/site";

export function Hero() {
  const [index, setIndex] = useState(0);
  const slide = heroSlides[index];

  const prev = () => setIndex((i) => (i === 0 ? heroSlides.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === heroSlides.length - 1 ? 0 : i + 1));

  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      <Image
        src={siteConfig.heroImage}
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-4 pb-16 pt-28 md:px-6">
        <div className="max-w-xl text-white">
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-6xl">{slide.title}</h1>
          <p className="mb-8 text-base leading-relaxed text-white/90 md:text-lg">{slide.description}</p>
          <a
            href={whatsappLink(`Olá! Vi o serviço "${slide.title}" no site e gostaria de mais informações.`)}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Contate-nos
          </a>
        </div>

        <div className="mt-10 flex items-center gap-3">
          <button type="button" onClick={prev} className="rounded-full bg-white/90 p-2 text-black" aria-label="Anterior">
            <ChevronLeft size={20} />
          </button>
          <button type="button" onClick={next} className="rounded-full bg-white/90 p-2 text-black" aria-label="Próximo">
            <ChevronRight size={20} />
          </button>
          <div className="ml-2 flex gap-2">
            {heroSlides.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full ${i === index ? "bg-brand-red" : "bg-white/50"}`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <Link href="/agendamentos" className="btn-outline border-white text-white hover:bg-white hover:text-black">
            Agendar horário
          </Link>
        </div>
      </div>
    </section>
  );
}
