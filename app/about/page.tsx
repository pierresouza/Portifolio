import React from "react";
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
    <div className="flex w-full items-center justify-center gap-4">
      <main className="flex h-[85vh] w-3/4 flex-col items-center justify-center  lg:px-8">
        <div className="flex flex-col items-center justify-center bg-black dark:bg-slate-950 text-white p-4 w-screen">
          <Carousel
            opts={{
              align: "start",
              slidesToScroll: 2,
            }}
            className="w-full max-w-md md:max-w-2xl lg:max-w-7xl"
          >
            <span className="flex w-full justify-center py">Techs que Já trabalhei</span>
            <CarouselContent>
              {knowledge.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col aspect-square text-center items-center gap-4 justify-center p-6">
                        <item.aboutTechs size={50} />
                        <p className="text-base">{item.title}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <Carousel
            opts={{
              align: "start",
              slidesToScroll: 2,
            }}
            className="w-full max-w-md md:max-w-2xl lg:max-w-7xl"
          >
            <span className="flex w-full justify-center py">Techs que estou estudando</span>
            <CarouselContent>
              {studying.map((item, index) => (
                <CarouselItem key={index + knowledge.length} className="md:basis-1/2 lg:basis-1/5">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col aspect-square text-center items-center gap-4 justify-center p-6">
                        <item.aboutTechs size={50} />
                        <p className="text-base">{item.title}</p>
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
      </main>
    </div>
  );
}
