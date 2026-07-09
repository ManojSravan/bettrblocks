 
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
    quote: "They turned a fuzzy idea into a working MVPfast, calm, and high quality.",
    author: "Amy Chase",
    role: "Founder",
    company: "Fintech Startup",
    image: "/testimonials/amy-chase.webp",
  },
  {
    quote: "The best part: clear decisions, weekly demos, and no surprises at launch.",
    author: "Jonas Kotara",
    role: "Operator",
    company: "B2B SaaS",
    image: "/testimonials/jonas-kotara.webp",
  },
  {
    quote: "As a non-technical founder, I finally felt in control of the build process.",
    author: "Kevin Yam",
    role: "Founder",
    company: "Consumer App",
    image: "/testimonials/kevin-yam.webp",
  },
  {
    quote: "Premium engineering and designdelivered like a product team, not an agency.",
    author: "Kundo Marta",
    role: "CEO",
    company: "Marketplace Startup",
    image: "/testimonials/kundo-marta.webp",
  },
  {
    quote: "They turned a fuzzy idea into a working MVPfast, calm, and high quality.",
    author: "Amy Chase",
    role: "Founder",
    company: "Fintech Startup",
    image: "/testimonials/amy-chase.webp",
  },
  {
    quote: "The best part: clear decisions, weekly demos, and no surprises at launch.",
    author: "Jonas Kotara",
    role: "Operator",
    company: "B2B SaaS",
    image: "/testimonials/jonas-kotara.webp",
  },
  {
    quote: "As a non-technical founder, I finally felt in control of the build process.",
    author: "Kevin Yam",
    role: "Founder",
    company: "Consumer App",
    image: "/testimonials/kevin-yam.webp",
  },
  {
    quote: "Premium engineering and designdelivered like a product team, not an agency.",
    author: "Kundo Marta",
    role: "CEO",
    company: "Marketplace Startup",
    image: "/testimonials/kundo-marta.webp",
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
      <section className={cn("overflow-hidden py-28 lg:py-24", className)}>
        <div className="container">
          <div className="space-y-4">
            <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
              Trusted by founders and product teams
            </h2>
            <p className="text-muted-foreground max-w-md pl-3 leading-snug">
              We build MVPs with a premium quality barso you can launch, learn,
              and iterate with confidence.
            </p>
            
          </div>

          <div className="relative mt-8 -mr-[max(3rem,calc((100vw-80rem)/2+3rem))] md:mt-12 lg:mt-20">
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
                            <div className="text-muted-foreground text-sm">
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
