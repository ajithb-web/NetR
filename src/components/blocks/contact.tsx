import React from "react";

import Link from "next/link";

import { Linkedin } from "lucide-react";

import { ApplyForm } from "@/components/blocks/apply-form";
import { ContactForm } from "@/components/blocks/contact-form";
import { DashedLine } from "@/components/dashed-line";
import { site } from "@/lib/site";

const contactInfo = [
  {
    title: "New York office",
    content: (
      <p className="text-muted-foreground mt-3">
        {site.address.line1}
        <br />
        {site.address.line2}
      </p>
    ),
  },
  {
    title: "Email us",
    content: (
      <div className="mt-3">
        <div>
          <p className="">Hiring</p>
          <Link
            href={`mailto:${site.email}`}
            className="text-muted-foreground hover:text-foreground"
          >
            {site.email}
          </Link>
        </div>
        <div className="mt-1">
          <p className="">Careers</p>
          <Link
            href={`mailto:${site.careersEmail}`}
            className="text-muted-foreground hover:text-foreground"
          >
            {site.careersEmail}
          </Link>
        </div>
        <div className="mt-1">
          <p className="">Phone</p>
          {/* TODO: one confirmed phone number */}
          <p className="text-muted-foreground">{site.phone}</p>
        </div>
      </div>
    ),
  },
  {
    title: "Follow us",
    content: (
      <div className="mt-3 flex gap-6 lg:gap-10">
        <Link
          href={site.linkedin}
          className="text-muted-foreground hover:text-foreground"
          aria-label="NetResolute on LinkedIn"
        >
          <Linkedin className="size-5" />
        </Link>
      </div>
    ),
  },
];

export default function Contact({
  intent,
  role,
}: {
  intent?: string;
  role?: string;
}) {
  const applying = intent === "apply";

  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container max-w-2xl">
        <h1 className="text-center text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          {applying ? "Send us your resume" : "Get in touch"}
        </h1>
        <p className="text-muted-foreground mt-4 text-center leading-snug font-medium lg:mx-auto">
          {applying
            ? "Tell us what you do best. We'll match you to roles that fit and reply within [X] days."
            : "Tell us the role. We'll reply within [1 business day]."}
        </p>
        <p className="text-muted-foreground mt-2 text-center text-sm">
          {applying ? (
            <>
              Hiring instead?{" "}
              <Link href="/contact" className="underline underline-offset-4">
                Tell us the role you need
              </Link>
              .
            </>
          ) : (
            <>
              Looking for work?{" "}
              <Link href="/careers" className="underline underline-offset-4">
                Apply on our Careers page
              </Link>
              .
            </>
          )}
        </p>

        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
          {contactInfo.map((info, index) => (
            <div key={index}>
              <h2 className="font-medium">{info.title}</h2>
              {info.content}
            </div>
          ))}
        </div>

        <DashedLine className="my-12" />

        <div className="mx-auto">
          <h2 className="mb-4 text-lg font-semibold">
            {applying ? "Your application" : "Tell us what you need"}
          </h2>
          {applying ? <ApplyForm defaultRole={role} /> : <ContactForm />}
        </div>
      </div>
    </section>
  );
}
