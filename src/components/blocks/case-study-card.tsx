import { ChevronRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import type { CaseStudy } from "@/lib/case-studies";

type CaseStudyCardProps = {
  study: Pick<CaseStudy, "slug" | "title" | "description" | "image">;
};

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <Card className="overflow-hidden rounded-3xl">
      <CardContent className="p-0">
        <div className="p-4 md:p-6">
          <div className="relative aspect-[1.28/1] overflow-hidden rounded-2xl">
            <img
              src={study.image}
              alt={`${study.title} case study preview`}
              className="h-full w-full object-cover object-left-top"
            />
            <div className="from-background absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent" />
          </div>

          <a
            href={`/casestudies/${study.slug}/`}
            className="group flex items-start justify-between gap-4 pt-4 md:pt-6"
          >
            <div className="space-y-2">
              <h3 className="font-display text-2xl leading-tight font-bold tracking-tight">
                {study.title}
              </h3>
              <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                {study.description}
              </p>
            </div>
            <div className="mt-1 shrink-0 rounded-full border p-2">
              <ChevronRight className="size-6 transition-transform group-hover:translate-x-1 lg:size-9" />
            </div>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
