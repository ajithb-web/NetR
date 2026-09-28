import type { ReactNode } from "react";

import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export type FaqCategory = {
  title: string;
  questions: {
    question: string;
    answer: string;
    /** Optional standing note repeated under every item in the block. */
    note?: string;
    link?: { href: string; text: string };
  }[];
};

const defaultCategories: FaqCategory[] = [
  {
    title: "Hiring with us",
    questions: [
      {
        question: "How quickly can you send candidates?",
        answer:
          "Most shortlists go out within [X] business days of the intake call. Niche modules and senior roles can take longer.",
      },
      {
        question: "Do you fill contract and permanent roles?",
        answer:
          "Yes. We place consultants on contract and permanent roles, from one senior specialist to a full implementation team.",
      },
      {
        question: "What if a consultant isn't the right fit?",
        answer:
          "Tell your recruiter. We'll [replace the consultant within X days at no extra fee].",
      },
    ],
  },
  {
    title: "Working with us",
    questions: [
      {
        question: "What do I need to apply?",
        answer:
          "Clear communication skills and valid US work authorization. Apply with your resume on the Careers page.",
      },
      {
        question: "Do you offer training?",
        answer:
          "Yes. We train consultants in areas clients ask for, including AWS, data analysis and business analysis.",
      },
      {
        question: "Will I have one point of contact?",
        answer:
          "Yes. Every consultant gets a dedicated recruiter for the length of the project.",
      },
    ],
  },
  {
    title: "Company",
    questions: [
      {
        question: "Where are you based?",
        answer:
          "Our office is at 175 Greenwich St, Floor 38, New York, NY 10007.",
      },
      {
        question: "How do I reach you?",
        answer: "Email contact@netresolute.com or call [confirm number].",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
  id,
  title = "Common questions",
  description,
  categories = defaultCategories,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
  id?: string;
  title?: string;
  description?: ReactNode;
  categories?: FaqCategory[];
}) => {
  const heading =
    headerTag === "h1" ? (
      <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h1>
    ) : (
      <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h2>
    );

  return (
    <section id={id} className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {heading}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              {description ?? (
                <>
                  Don&apos;t see your question?{" "}
                  <Link
                    href="/contact"
                    className="underline underline-offset-4"
                  >
                    Get in touch
                  </Link>
                  .
                </>
              )}
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
                      <AccordionContent className="text-muted-foreground space-y-3">
                        <p>{item.answer}</p>
                        {item.note && (
                          <p className="text-muted-foreground/80">
                            {item.note}
                          </p>
                        )}
                        {item.link && (
                          <Link
                            href={item.link.href}
                            className="text-foreground inline-block font-medium underline underline-offset-4"
                          >
                            {item.link.text}
                          </Link>
                        )}
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
