import {  Linkedin } from "lucide-react";

import { DashedLine } from "../dashed-line";

 
const contactInfo = [
  {
    title: "Based in",
    content: (
      <p className="text-muted-foreground mt-3">
        Remote-first
        <br />
        Working across time zones
      </p>
    ),
  },
  {
    title: "Email",
    content: (
      <div className="mt-3">
        <div>
          <p className="">New projects</p>
          <a
            href="mailto:hello@blocksbetter.studio"
            className="text-muted-foreground hover:text-foreground"
          >
            hello@blocksbetter.studio
          </a>
        </div>
        <div className="mt-1">
          <p className="">Partnerships</p>
          <a
            href="mailto:partners@blocksbetter.studio"
            className="text-muted-foreground hover:text-foreground"
          >
            partners@blocksbetter.studio
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "Follow us",
    content: (
      <div className="mt-3 flex gap-6 lg:gap-10">
        
         
        <a href="https://www.linkedin.com/company/bettrblocks-studio" target="_blank" className="text-muted-foreground hover:text-foreground">
          <Linkedin className="size-5" />
        </a>
         
      </div>
    ),
  },
];

export const Contact = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container max-w-2xl">
        <h1 className="text-center text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          Tell us what you’re building
        </h1>
        <div className="mt-14 flex justify-between gap-8 max-sm:flex-col md:mt-18 lg:mt-24 lg:gap-12">
          {contactInfo.map((info, index) => (
            <div key={index}>
              <h2 className="font-medium">{info.title}</h2>
              {info.content}
            </div>
          ))}
        </div>

        <DashedLine className="my-12" />

       
      </div>
    </section>
  );
};
