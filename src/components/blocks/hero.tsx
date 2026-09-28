import Image from "next/image";
import Link from "next/link";

import { ArrowRight, Blend, CircleDot, Database, Diamond } from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Workday",
    description: "HCM and Financials, functional or technical.",
    icon: CircleDot,
  },
  {
    title: "PeopleSoft & Lawson",
    description: "One senior hire or a full team for upgrades.",
    icon: Blend,
  },
  {
    title: "UKG (Kronos)",
    description: "Setup, testing, training and go-live support.",
    icon: Diamond,
  },
  {
    title: "Engineering & data",
    description: "Java, Python, DevOps, AWS, data and BA roles.",
    icon: Database,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl xl:whitespace-nowrap">
            Senior ERP consultants, vetted
          </h1>

          <p className="text-muted-foreground text-1xl mt-5 md:text-3xl">
            Workday, PeopleSoft, Lawson and UKG experts, interviewed by us
            before you meet them.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild>
              <Link href="/contact">Get a shortlist</Link>
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              asChild
            >
              <Link
                href="/careers"
                className="max-w-56 truncate text-start md:max-w-none"
              >
                Looking for work? Apply
                <ArrowRight className="stroke-3" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Right side - Coverage */}
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
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 max-lg:ml-6 max-lg:h-[550px] max-lg:overflow-hidden md:mt-20 lg:container lg:mt-24">
        <div className="relative h-[793px] w-full">
          <Image
            src="/hero/workspace.svg"
            alt="A NetResolute shortlist: senior Workday candidates, each interviewed before the client sees them"
            fill
            priority
            className="rounded-2xl object-cover object-left-top shadow-lg max-lg:rounded-tr-none"
          />
        </div>
      </div>
    </section>
  );
};
