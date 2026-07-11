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
        question: "How quickly can we launch our D2C store?",
        answer:
          "Most D2C startups launch in 4–8 weeks. We handle everything from product setup to payment processing to your first customer—working fast without cutting corners on quality or user experience.",
      },
      {
        question: "Do I need an app, website, or both?",
        answer:
          "That depends on your customers' behavior and your goals. We'll help you decide: some brands start web-first for speed and reach, then add a native app later. Others go all-in on mobile. We build both seamlessly.",
      },
      {
        question: "What about inventory management and logistics?",
        answer:
          "We integrate third-party platforms for inventory tracking, order management, and logistics—so you're not reinventing fulfillment. We'll connect you to reliable partners and ensure your systems talk to each other.",
      },
    ],
  },
  {
    title: "Store & app setup",
    questions: [
      {
        question: "Can you integrate payment processing?",
        answer:
          "Yes. We set up Stripe, Razorpay, or your preferred processor, handle PCI compliance, manage subscription billing if needed, and make checkout smooth so customers don't abandon their carts.",
      },
      {
        question: "How do you handle customer data and security?",
        answer:
          "Data security is non-negotiable. We use encryption, secure authentication, comply with GDPR/CCPA, protect customer payment info, and audit regularly. Your customers' trust is your most valuable asset.",
      },
      {
        question: "Can you build a mobile app without starting from scratch?",
        answer:
          "Absolutely. We build iOS and Android apps that share your web codebase where possible, cutting development time and ongoing maintenance. One unified experience across devices.",
      },
    ],
  },
  {
    title: "Launch & growth",
    questions: [
      {
        question: "What's included in a successful launch?",
        answer:
          "A production-ready store, customer support setup, analytics tracking, email integration, social media feeds, SEO fundamentals, and a launch marketing plan. We'll make sure your first customers have a smooth experience.",
      },
      {
        question: "Can you help with customer acquisition?",
        answer:
          "We set up analytics, funnels, and A/B testing so you know what's working. For media buying and content strategy, we can recommend proven partners or bring on fractional marketing support.",
      },
      {
        question: "What happens after we hit our first 1,000 customers?",
        answer:
          "That's where scaling begins. We move from build to optimize: faster load times, better search, personalization, loyalty programs, and retention features. We'll be there for whatever comes next.",
      },
    ],
  },
  {
    title: "Support & scaling",
    questions: [
      {
        question: "Do you provide ongoing support after launch?",
        answer:
          "Yes. We offer retainers for bug fixes, feature releases, performance optimization, and new experiments. Or we can hand off with stellar documentation so your team or another developer can take over.",
      },
      {
        question: "Can you help us understand our metrics and growth?",
        answer:
          "We instrument your store with analytics from day one: conversion rates, customer acquisition cost, lifetime value, churn—everything you need to make data-driven decisions.",
      },
      {
        question: "What if we're ready to raise funding?",
        answer:
          "We'll help you build a compelling product demo, provide technical due diligence documentation, and ensure your tech stack is investor-friendly. A solid product is one of the best fundraising assets.",
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
            <p className="text-gray-300 max-w-md leading-snug lg:mx-auto">
              If you can't find what you're looking for,{" "}
              <a href="/contact" className="underline underline-offset-4">
                get in touch
              </a>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-gray-300 border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-gray-300">
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
