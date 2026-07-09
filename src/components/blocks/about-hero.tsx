import { DashedLine } from "@/components/dashed-line";

const stats = [
  {
    value: "4–8 wks",
    label: "Typical MVP timeline",
  },
  {
    value: "1 team",
    label: "Design + engineering",
  },
  {
    value: "Weekly",
    label: "Demos & shipping cadence",
  },
  {
    value: "Premium",
    label: "Quality bar",
  },
];

export function AboutHero() {
  return (
    <section className="">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <h1 className="text-3xl tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            A premium product engineering studio
          </h1>

          <p className="text-muted-foreground mt-5 text-xl md:text-2xl lg:text-3xl">
            We build MVPs for small startups and non‑technical founders.
          </p>

          <p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12">
            We’re the team you hire when you want speed without shortcuts. From
            strategy and UX to full‑stack engineering and launch, we run a clear,
            founder-friendly process that keeps scope focused and delivery
            predictable.
            <br />
            <br />
            We obsess over the details that compound: crisp requirements, great
            UX, maintainable code, and production-ready delivery. You’ll get
            weekly demos, honest trade-offs, and a product you can keep building
            on.
          </p>
        </div>

        <div
          className={`relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:pt-0 lg:pl-10`}
        >
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <div className="font-display text-3xl tracking-wide md:text-4xl">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
