"use client";

import { useState } from "react";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Discovery Sprint",
    monthlyPrice: "$2,500",
    yearlyPrice: "$4,500",
    description: "1–2 weeks to align and de-risk",
    features: [
      "Product brief + scope guardrails",
      "Clickable prototype (if needed)",
      "Technical plan + delivery roadmap",
      "Clear estimate for MVP build",
    ],
  },
  {
    name: "MVP Build",
    monthlyPrice: "$9,500",
    yearlyPrice: "$24,000",
    features: [
      "Design + full-stack engineering",
      "Production deployment + CI/CD",
      "QA pass + bugfix window",
      "Analytics + event tracking",
      "Weekly demos + async updates",
    ],
  },
  {
    name: "Growth Retainer",
    monthlyPrice: "$6,500",
    yearlyPrice: "$18,000",
    features: [
      "Ongoing iterations & experiments",
      "Performance, reliability, and refactors",
      "New features shipped every week",
      "Priority support and planning",
    ],
  },
];

export const Pricing = ({ className }: { className?: string }) => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Pricing
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
            Premium engagements for founders who want a real product team—without
            hiring one. Start with a sprint, ship an MVP, then iterate with a
            retainer.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-5 text-start md:mt-12 md:grid-cols-3 lg:mt-20">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`${
                plan.name === "MVP Build"
                  ? "outline-primary origin-top outline-4"
                  : ""
              }`}
            >
              <CardContent className="flex flex-col gap-7 px-6 py-5">
                <div className="space-y-2">
                  <h3 className="text-foreground font-semibold">{plan.name}</h3>
                  <div className="space-y-1">
                    <div className="text-muted-foreground text-lg font-medium">
                      {isAnnual ? plan.yearlyPrice : plan.monthlyPrice}{" "}
                      {plan.name !== "Free" && (
                        <span className="text-muted-foreground">
                          per user/
                          {isAnnual ? "year" : "month"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {plan.name !== "Free" ? (
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={isAnnual}
                      onCheckedChange={() => setIsAnnual(!isAnnual)}
                      aria-label="Toggle annual billing"
                    />
                    <span className="text-sm font-medium">
                      Fixed project pricing
                    </span>
                  </div>
                ) : (
                  <span className="text-muted-foreground text-sm">
                    {plan.description}
                  </span>
                )}

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-muted-foreground flex items-center gap-1.5"
                    >
                      <Check className="size-5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-fit"
                  variant={plan.name === "MVP Build" ? "default" : "outline"}
                >
                  Book a call
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
