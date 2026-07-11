import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import type { CaseStudy } from "@/lib/case-studies";

type CaseStudyDetailProps = {
  study: CaseStudy;
};

export function CaseStudyDetail({ study }: CaseStudyDetailProps) {
  return (
    <section>
      <div className="container max-w-5xl">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/casestudies/">Case Studies</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{study.client}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mt-8 space-y-6">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{study.industry}</Badge>
              {study.services.map((service) => (
                <Badge key={service} variant="outline">
                  {service}
                </Badge>
              ))}
            </div>

            <h1 className="max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">
              {study.title}
            </h1>
            <p className="text-muted-foreground max-w-3xl text-lg leading-relaxed">
              {study.description}
            </p>
          </div>

          <img
            src={study.image}
            alt={`${study.title} project preview`}
            className="aspect-[16/10] w-full rounded-3xl border object-cover object-top"
          />
        </div>

        <div className="prose prose-neutral dark:prose-invert mx-auto mt-12 max-w-3xl">
          <h2>Overview</h2>
          <p>{study.overview}</p>

          <Separator className="not-prose my-10" />

          <h2>The Challenge</h2>
          <p>{study.challenge}</p>

          <h2>Our Solution</h2>
          <p>{study.solution}</p>

          <h2>Results</h2>
          <ul>
            {study.results.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
