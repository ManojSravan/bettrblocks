import { DashedLine } from "../dashed-line";

import { CaseStudyCard } from "@/components/blocks/case-study-card";
import type { CaseStudy } from "@/lib/case-studies";

type CaseStudiesProps = {
  studies: CaseStudy[];
};

export function CaseStudies({ studies }: CaseStudiesProps) {
  return (
    <section className="pb-28 lg:pb-32">
      <div className="container max-w-6xl">
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-gray-300" />
          <span className="bg-muted text-gray-300 absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            Client work
          </span>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-4 text-center md:mt-12 lg:mt-16">
          <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Case Studies
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl leading-snug">
            Explore how we partner with ambitious brands to design and build
            digital products that drive growth, clarity, and long-term impact.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8">
          {studies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}
