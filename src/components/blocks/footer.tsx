import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GITHUB_URL } from "@/consts";

export function Footer() {
  const navigation = [
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Case Studies", href: "/casestudies" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const social = [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/bettrblocks-studio" },
  ];

  const legal = [{ name: "Privacy Policy", href: "/privacy" }];

  return (
    <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Build Your Startup Today!
        </h2>
        
        <div>
          <Button size="lg" className="mt-4" asChild>
            <a href={GITHUB_URL}>Book a Discovery Call</a>
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </a>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name} <ArrowUpRight className="size-4" />
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-gray-300 text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="text-primary mt-10 w-full md:mt-14 lg:mt-20 flex items-center justify-center">
        <svg
          viewBox="0 0 800 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full max-w-3xl h-auto"
        >
          <defs>
            <linearGradient
              id="bettrBlocksGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="150"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="currentColor" />
              <stop offset="1" stopColor="#F8F8F8" stopOpacity="0.41" />
            </linearGradient>
          </defs>
          <text
            x="400"
            y="120"
            fontSize="120"
            fontWeight="bold"
            textAnchor="middle"
            fill="url(#bettrBlocksGradient)"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="-2"
          >
            bettrblocks
          </text>
        </svg>
      </div>
    </footer>
  );
}
