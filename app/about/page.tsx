import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { knowledge, studying } from "./mock";

export default function About() {

  return (
    <section
      aria-labelledby="sobre-heading"
      className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8"
    >
      <h1 id="sobre-heading" className="text-xl font-bold md:text-2xl lg:text-3xl">
        Sobre
      </h1>

      {/* Hero */}
      <div className="mt-8 grid items-center gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold md:text-xl">Desenvolvedor Front-end</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            Foco em criar interfaces acessíveis, performáticas e com boa experiência de uso. Atuação
            com React/Next.js, TypeScript e estilização moderna (Tailwind e Styled Components). Interesse
            por design systems, testes e boas práticas de UI.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <Link href="/projects">Ver projetos</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image
            src="/profile_photo.jpeg"
            alt="Foto de perfil"
            width={280}
            height={280}
            className="h-48 w-48 rounded-full object-cover shadow md:h-60 md:w-60 lg:h-72 lg:w-72"
            priority
          />
        </div>
      </div>

      {/* Skills - Já trabalhei */}
      <div className="mt-12">
        <h3 className="mb-3 text-base font-semibold md:text-lg">Tecnologias que uso</h3>
        <Carousel
          opts={{ align: "start", slidesToScroll: 2 }}
          className="w-full max-w-full"
        >
          <CarouselContent>
            {knowledge.map((item, index) => (
              <CarouselItem key={`know-${index}`} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex aspect-square flex-col items-center justify-center gap-4 p-6 text-center">
                      <item.aboutTechs size={48} color={item.color} />
                      <p className="text-sm md:text-base">{item.title}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Skills - Estudando */}
      <div className="mt-10">
        <h3 className="mb-3 text-base font-semibold md:text-lg">Estudando agora</h3>
        <Carousel
          opts={{ align: "start", slidesToScroll: 2 }}
          className="w-full max-w-full"
        >
          <CarouselContent>
            {studying.map((item, index) => (
              <CarouselItem key={`study-${index}`} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="p-1">
                  <Card className="h-full">
                    <CardContent className="flex aspect-square flex-col items-center justify-center gap-4 p-6 text-center">
                      <item.aboutTechs size={48} color={item.color} />
                      <p className="text-sm md:text-base">{item.title}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
