import Image from "next/image";
import Link from "next/link";

import { ChevronRight } from "lucide-react";

import { DashedLine } from "../dashed-line";

import { Card, CardContent } from "@/components/ui/card";

export type FeatureItem = {
  title: string;
  image: string;
  alt: string;
  href?: string;
};

const defaultItems: FeatureItem[] = [
  {
    title: "Screened against your module",
    image: "/features/shortlist-card.svg",
    alt: "A shortlist of Workday candidates, each marked as interviewed",
    href: "/#engagement",
  },
  {
    title: "Contract or permanent roles",
    image: "/features/role-type-card.svg",
    alt: "A role brief set to contract, with module, phase and start date",
    href: "/faq",
  },
  {
    title: "One hire or a full team",
    image: "/features/team-roster-card.svg",
    alt: "An implementation team roster with counts per role",
    href: "/contact",
  },
];

type FeaturesProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  items?: FeatureItem[];
};

export const Features = ({
  id = "services",
  eyebrow = "WE INTERVIEW. YOU DECIDE.",
  title = "Fewer interviews, better fits",
  description = "We source, screen and interview every candidate before their resume reaches you. You get a short list of people who have done this work before.",
  items = defaultItems,
}: FeaturesProps) => {
  return (
    <section id={id} className="pb-28 lg:pb-32">
      <div className="container">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            {eyebrow}
          </span>
        </div>

        {/* Content */}
        <div className="mx-auto mt-10 grid max-w-4xl items-center gap-3 md:gap-0 lg:mt-24 lg:grid-cols-2">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="text-muted-foreground leading-snug">{description}</p>
        </div>

        {/* Features Card */}
        <Card className="mt-8 rounded-3xl md:mt-12 lg:mt-20">
          <CardContent className="flex p-0 max-md:flex-col">
            {items.map((item, i) => (
              <div key={i} className="flex flex-1 max-md:flex-col">
                <div className="flex-1 p-4 pe-0! md:p-6">
                  <div className="relative aspect-[1.28/1] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover object-left-top ps-4 pt-2"
                    />
                    <div className="from-background absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent" />
                  </div>

                  <CardHeading title={item.title} href={item.href} />
                </div>
                {i < items.length - 1 && (
                  <div className="relative hidden md:block">
                    <DashedLine orientation="vertical" />
                  </div>
                )}
                {i < items.length - 1 && (
                  <div className="relative block md:hidden">
                    <DashedLine orientation="horizontal" />
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

const CardHeading = ({ title, href }: { title: string; href?: string }) => {
  const heading = (
    <h3 className="font-display max-w-60 text-2xl leading-tight font-bold tracking-tight">
      {title}
    </h3>
  );

  if (!href) {
    return <div className="pe-4 pt-4 md:pe-6 md:pt-6">{heading}</div>;
  }

  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-4 pe-4 pt-4 md:pe-6 md:pt-6"
    >
      {heading}
      <div className="rounded-full border p-2">
        <ChevronRight className="size-6 transition-transform group-hover:translate-x-1 lg:size-9" />
      </div>
    </Link>
  );
};
