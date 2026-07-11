import {
  ArrowRight,
  Blend,
  ChartNoAxesColumn,
  CircleDot,
  Diamond,
} from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
import { GITHUB_URL } from "@/consts";

const features = [
 {
  title: "Built to convert",
  description: "Every page, interaction, and checkout flow is designed to maximize conversions and revenue.",
  icon: CircleDot,
},
{
  title: "Commerce-first engineering",
  description: "Fast, scalable ecommerce platforms and customer experiences built for long-term growth.",
  icon: Blend,
},
{
  title: "Growth-focused execution",
  description: "Launch quickly, measure what matters, and continuously improve with data-driven iterations.",
  icon: Diamond,
},
{
  title: "Premium digital experiences",
  description: "Beautiful design, fast performance, and seamless user journeys that strengthen your brand.",
  icon: ChartNoAxesColumn,
},
];

export const Hero = () => {
  return (
    <section className="py-24 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl xl:whitespace-nowrap">
          Build your Startup <br /> with BettrBlocks Studio
          </h1>

          <p className="text-gray-300 text-1xl mt-5 md:text-3xl">
We partner with D2C brands to design, build, and scale high-performing ecommerce experiences and customer-facing digital products.          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild>
              <a href={GITHUB_URL}>Book a discovery call</a>
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-black dark:bg-white dark:text-black text-white dark:hover:text-white shadow-md"
              asChild
            >
              <a
                href="/about"
                className="max-w-56 truncate text-start md:max-w-none"
              >
                Our approach
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-semibold">
                    {feature.title}
                  </h2>
                  <p className="text-gray-300 max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
 
    </section>
  );
};
