import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const AboutSection = () => {
  return (
    <section className="container mt-10 flex max-w-5xl flex-col-reverse gap-8 md:mt-14 md:gap-14 lg:mt-20 lg:flex-row lg:items-end">
      {/* Images Left - Text Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <ImageSection
          images={[
            { src: "/about/1.webp", alt: "Team collaboration" },
            { src: "/about/2.webp", alt: "Team workspace" },
          ]}
          className="xl:-translate-x-10"
        />

        <TextSection
          title="The team"
          paragraphs={[
            "We’re a small, senior team of product designers and engineers who build MVPs end-to-end. No layers, no handoffs—just a tight team that ships.",
            "We work best with small startups and non‑technical founders who want a partner that can translate goals into product decisions, then deliver production-ready software.",
            "If you’d like to work together, start with a short call and we’ll map the fastest path to a launchable MVP.",
          ]}
          ctaButton={{
            href: "/contact",
            text: "Book a discovery call",
          }}
        />
      </div>

      {/* Text Left - Images Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <TextSection
          paragraphs={[
            "Our approach is simple: define the MVP, ship it fast, then iterate with real user feedback. We keep scope tight, communicate clearly, and maintain a premium quality bar.",
            "You’ll get weekly demos, pragmatic trade-offs, and a codebase you can grow—whether you keep working with us or transition to an in-house team.",
          ]}
        />
        <ImageSection
          images={[
            { src: "/about/3.webp", alt: "Modern workspace" },
            { src: "/about/4.webp", alt: "Team collaboration" },
          ]}
          className="hidden lg:flex xl:translate-x-10"
        />
      </div>
    </section>
  );
};

interface ImageSectionProps {
  images: { src: string; alt: string }[];
  className?: string;
}

export function ImageSection({ images, className }: ImageSectionProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-[2/1.5] overflow-hidden rounded-2xl"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="size-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

interface TextSectionProps {
  title?: string;
  paragraphs: string[];
  ctaButton?: {
    href: string;
    text: string;
  };
}

export function TextSection({
  title,
  paragraphs,
  ctaButton,
}: TextSectionProps) {
  return (
    <div className="flex-1 space-y-4 text-lg font-medium md:space-y-6">
      {title && <h2 className="text-primary text-3xl font-medium">{title}</h2>}
      <div className="text-muted-foreground max-w-xl space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {ctaButton && (
        <div className="mt-8">
          <a href={ctaButton.href}>
            <Button size="lg">{ctaButton.text}</Button>
          </a>
        </div>
      )}
    </div>
  );
}
