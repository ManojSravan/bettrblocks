import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Getting started",
    questions: [
      {
        question: "I’m a non-technical founder — can you still build this?",
        answer:
          "Yes. We’re set up for founder-led teams: we’ll translate your goals into scope, user flows, designs, and a build plan—then ship a production-ready MVP with weekly demos and clear decisions.",
      },
      {
        question: "What do you need from me to start?",
        answer:
          "A clear problem statement, your target user, and a rough idea of what “success” looks like. If that’s still fuzzy, we’ll start with a Discovery Sprint to get you to clarity fast.",
      },
      {
        question: "How fast can we ship an MVP?",
        answer:
          "Most MVP builds land in 4–8 weeks depending on scope. We’ll give you scope guardrails up front and keep the build focused on the smallest version that proves the idea with real users.",
      },
    ],
  },
  {
    title: "Process",
    questions: [
      {
        question: "How do you keep scope from exploding?",
        answer:
          "We define a crisp MVP, lock milestones, and use trade-offs: every new idea is either a swap, a follow-up iteration, or a backlog item. You always know what’s in and what’s out.",
      },
      {
        question: "Do you provide design and branding too?",
        answer:
          "Yes. We can take you from user flows and UI design through implementation. If you already have designs, we can plug in and build from your Figma.",
      },
    ],
  },
  {
    title: "Engagement & handoff",
    questions: [
      {
        question: "What happens after launch?",
        answer:
          "We can move into a Growth Retainer for iterations, experiments, and new features. If you want to bring the work in-house, we’ll hand off cleanly with documentation and a maintainable codebase.",
      },
      {
        question: "Can you work with my existing team or freelancers?",
        answer:
          "Absolutely. We can integrate with your team, tighten the product plan, and ship alongside your existing engineers—without changing your tools or workflows.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Frequently asked questions
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                Frequently asked questions
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              If you can’t find what you’re looking for,{" "}
              <a href="/contact" className="underline underline-offset-4">
                get in touch
              </a>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
