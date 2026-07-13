"use client";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Brand Presence",
    price: "₹30,000",
    priceSuffix: "starting",
    tagline: "Built to convert traffic into revenue.",
    features: [
      "Brand-focused website",
      "Mobile-first experience",
      "Performance optimization",
      "SEO fundamentals",
      "Analytics setup",
      "CMS",
      "Lead capture",
      "Conversion-focused layouts"
    ],
    highlighted: false,
  },
  {
    name: "Growth Store",
    price: "₹60,000",
    priceSuffix: "starting",
    tagline: "Built for brands ready to increase online revenue.",
    features: [
      "Shopify / Headless store",
      "Custom storefront",
      "Product page optimization",
      "Checkout optimization",
      "Analytics",
      "CRM integrations",
      "Email capture",
      "Performance",
      "Technical SEO"
    ],
    highlighted: true,
  },
];

export const Pricing = ({ className }: { className?: string }) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-4xl">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Pricing
          </h2>
          <p className="text-gray-300 mx-auto max-w-xl leading-snug text-balance">
            Simple, outcome-driven packages for founders who want results, not
            jargon.
          </p>
        </div>

        <div className="mt-8 grid items-start gap-6 text-start md:mt-12 md:grid-cols-2 lg:mt-20">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                plan.highlighted && "outline-primary origin-top outline-4"
              )}
            >
              <CardContent className="flex flex-col gap-7 px-6 py-6">
                <div className="space-y-2">
                  {plan.highlighted && (
                    <span className="bg-primary/10 text-primary inline-block rounded-full px-3 py-1 text-xs font-medium">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-foreground text-lg font-semibold">
                    {plan.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{plan.tagline}</p>
                  <div className="pt-1">
                    <span className="text-foreground text-2xl font-semibold">
                      {plan.price}
                    </span>
                    <span className="text-gray-300 ml-1.5 text-sm">
                      {plan.priceSuffix}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-gray-300 flex items-center gap-1.5"
                    >
                      <Check className="size-5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-fit"
                  variant={plan.highlighted ? "default" : "outline"}
                  asChild
                >
                  <a
                    href="https://cal.com/manoj-sravan-annivg/strategy-call"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a call
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};