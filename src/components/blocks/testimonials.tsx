import { DashedLine } from "../dashed-line";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export type Testimonial = {
  quote: string;
  author: string;
  /** TODO: confirm titles with each speaker before publishing. */
  role: string;
  company: string;
  initials: string;
  pending?: boolean;
};

/**
 * Quotes 1-3 are trimmed from the previous site — each speaker still needs to
 * sign off, and photos need written consent, so the cards run on initials for
 * now.
 */
const defaultItems: Testimonial[] = [
  {
    quote: "They trained me well and support me in every way.",
    author: "Spoorthi Ullal",
    role: "[Role]",
    company: "NetResolute consultant",
    initials: "SU",
  },
  {
    quote: "Regular pay, a dedicated recruiter and strong projects.",
    author: "Tushar Kumar",
    role: "[Role]",
    company: "NetResolute consultant",
    initials: "TK",
  },
  {
    quote: "One of the best work environments I have seen.",
    author: "SagarBhai Patel",
    role: "[Role]",
    company: "NetResolute consultant",
    initials: "SP",
  },
  {
    quote: "[Client testimonial needed]",
    author: "[Client name]",
    role: "[Title]",
    company: "[Client company]",
    initials: "—",
    pending: true,
  },
];

type TestimonialsProps = {
  className?: string;
  dashedLineClassName?: string;
  title?: string;
  description?: string;
  items?: Testimonial[];
};

export const Testimonials = ({
  className,
  dashedLineClassName,
  title = "Why our consultants stay",
  description = "A consultant who feels supported finishes your project. Here is what the people we place say about working with NetResolute.",
  items = defaultItems,
}: TestimonialsProps) => {
  return (
    <>
      <section className={cn("overflow-hidden py-28 lg:py-32", className)}>
        <div className="container">
          <div className="space-y-4">
            <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="text-muted-foreground max-w-md leading-snug">
              {description}
            </p>
          </div>

          <div className="relative mt-8 -mr-[max(3rem,calc((100vw-80rem)/2+3rem))] md:mt-12 lg:mt-20">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="">
                {items.map((testimonial, index) => (
                  <CarouselItem
                    key={index}
                    className="xl:basis-1/3.5 grow basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-[28%] 2xl:basis-[24%]"
                  >
                    <Card className="bg-muted h-full overflow-hidden border-none">
                      <CardContent className="flex h-full flex-col p-0">
                        <div
                          className={cn(
                            "relative flex h-[288px] items-center justify-center lg:h-[328px]",
                            testimonial.pending
                              ? "bg-foreground/5"
                              : "bg-primary/70",
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={cn(
                              "font-display text-6xl font-bold tracking-tight lg:text-7xl",
                              testimonial.pending
                                ? "text-muted-foreground/50"
                                : "text-primary-foreground/70",
                            )}
                          >
                            {testimonial.initials}
                          </span>
                        </div>
                        <div className="flex flex-1 flex-col justify-between gap-10 p-6">
                          <blockquote className="font-display text-lg leading-none! font-medium md:text-xl lg:text-2xl">
                            {testimonial.quote}
                          </blockquote>
                          <div className="space-y-0.5">
                            <div className="text-foreground font-semibold">
                              {testimonial.author}, {testimonial.role}
                            </div>
                            <div className="text-muted-foreground text-sm">
                              {testimonial.company}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-8 flex gap-3">
                <CarouselPrevious className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
                <CarouselNext className="bg-muted hover:bg-muted/80 static size-14.5 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      <DashedLine
        orientation="horizontal"
        className={cn("mx-auto max-w-[80%]", dashedLineClassName)}
      />
    </>
  );
};

export const consultantTestimonials = defaultItems.filter((t) => !t.pending);
