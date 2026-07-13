 
import { DashedLine } from "../dashed-line";

 
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const items = [
  {
    quote:
      "Took complete ownership of delivery, communicated proactively, and consistently moved the project forward with confidence.",
    author: "Manjula R",
    role: "Chief Business Officer",
    company: "Chord AI",
    image: "/testimonials/manjula-r.webp",
  },
  {
    quote:
      "Worked as a true product partner, understood our vision, and translated ideas into a polished digital experience.",
    author: "Sameeksha PN",
    role: "Founder",
    company: "Illumora",
    image: "/testimonials/sameeksha-pn.webp",
  },
  {
    quote:
      "Owned the project end-to-end, delivered on time, and continued to provide dependable support after launch.",
    author: "Vikram",
    role: "Founder",
    company: "Ojas3D Creatives",
    image: "/testimonials/vikram.webp",
  },
  {
    quote:
      "Understood the vision from day one and took full ownership to deliver a clean, thoughtful final product.",
    author: "Vamsi Kalle",
    role: "Author",
    company: "Independent Author",
    image: "/testimonials/vamsi-kalle.webp",
  },
];

export const Testimonials = ({
  className,
  dashedLineClassName,
}: {
  className?: string;
  dashedLineClassName?: string;
}) => {
  return (
    <>
      <section className={cn("overflow-hidden py-28 lg:py-24", className)} id="testimonials">
        <div className="container">
          <div className="space-y-4">
            <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            What it's like to work with us            </h2>
          </div>
          <div className="relative mt-8 -mr-[max(3rem,calc((100vw-80rem)/2+3rem))] md:mt-12 lg:mt-14">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="">
                {items.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="xl:basis-1/3.5 grow basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-[28%] 2xl:basis-[24%]"
                  >
                    <Card className="bg-muted h-full overflow-hidden border-none">
                      <CardContent className="flex h-full flex-col p-0">
                        <div className="flex flex-1 flex-col justify-between gap-10 p-6">
                          <blockquote className="font-display text-lg leading-none! font-medium md:text-xl lg:text-2xl">
                            {testimonial.quote}
                          </blockquote>
                          <div className="space-y-0.5">
                            <div className="text-foreground font-semibold">
                              {testimonial.author}, {testimonial.role}
                            </div>
                            <div className="text-gray-300 text-sm">
                              {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-8 flex gap-3">
                <CarouselPrevious className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
                <CarouselNext className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <DashedLine
        orientation="horizontal"
        className={cn("mx-auto max-w-[80%]", dashedLineClassName)}
      />
    </>
  );
};
