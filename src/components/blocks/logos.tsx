import Marquee from "react-fast-marquee";

import { cn } from "@/lib/utils";

type Company = {
  name: string;
  logo: string;
  width: number;
  height: number;
  href: string;
};

export const Logos = () => {
  const topRowCompanies = [
    {
      name: "Communn.io",
      logo: "/clients/onecommunn_logo.jpeg",
      width: 110,
      height: 20,
      href: "communn.io",
    },
    {
      name: "Illumora",
      logo: "/clients/illumora_logo.jpeg",
      width: 110,
      height: 20,
      href: "Illumora.co",
    },
     {
      name: "BoomBooth Studios",
      logo: "/clients/boombooth.png",
      width: 110,
      height: 20,
      href: "boombooth.com",
    },
    {
      name: "Chord AI",
      logo: "/clients/chordai.jpeg",
      width: 110,
      height: 20,
      href: "chordai.com",
    },
  ];

  const bottomRowCompanies = [
    {
      name: "Ojas3D Creatives",
      logo: "/clients/ojaslogo.png",
      width: 112,
      height: 27,
      href: "ojas3d.com",
    },
    {
      name: "AgriGrader Global Solutions",
      logo: "/clients/agrigrader.png",
      width: 112,
      height: 30,
      href: "https://descript.com",
    },
  ];

  return (
    <section className="overflow-hidden pb-28 lg:pb-32">
      <div className="container space-y-10 lg:space-y-16">
        <div className="text-center">
          <h2 className="mb-4 text-xl text-balance md:text-2xl lg:text-3xl">
          Trusted by startups and growing businesses.

            <br className="max-md:hidden" />
            <span className="text-gray-300">
            From early-stage startups to growing businesses.            </span>
          </h2>
        </div>

        <div className="flex w-full flex-col items-center gap-8">
          {/* Top row - 3 logos */}
          <LogoRow companies={topRowCompanies} logoBoxClassName="h-20 w-20" />

          {/* Bottom row - 2 logos */}
          <LogoRow companies={bottomRowCompanies} logoBoxClassName="h-16 w-28" direction="right" />
        </div>
      </div>
    </section>
  );
};

type LogoRowProps = {
  companies: Company[];
  logoBoxClassName: string;
  direction?: "left" | "right";
};

const LogoRow = ({ companies, logoBoxClassName, direction }: LogoRowProps) => {
  return (
    <>
      {/* Desktop static version */}
      <div className="hidden md:block">
        <div className="grid auto-cols-max grid-flow-col items-center justify-center justify-items-center gap-x-20 lg:gap-x-28">
          {companies.map((company, index) => (
            <a href={company.href} target="_blank" key={index}>
              <div className={cn("flex items-center justify-center rounded-md", logoBoxClassName)}>
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={company.width}
                  height={company.height}
                  className="max-h-full max-w-full object-contain transition-opacity hover:opacity-70"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
      {/* Mobile marquee version */}
      <div className="md:hidden">
        <Marquee direction={direction} pauseOnHover>
          {companies.map((company, index) => (
            <a
              href={company.href}
              target="_blank"
              key={index}
              className="mx-8 inline-block transition-opacity hover:opacity-70"
            >
              <div className={cn("flex items-center justify-center", logoBoxClassName)}>
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={company.width}
                  height={company.height}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </a>
          ))}
        </Marquee>
      </div>
    </>
  );
};
