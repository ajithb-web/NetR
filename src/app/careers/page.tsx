import Link from "next/link";

import type { Metadata } from "next";

import { Background } from "@/components/background";
import { AboutHero } from "@/components/blocks/about-hero";
import { FAQ, type FaqCategory } from "@/components/blocks/faq";
import { Features, type FeatureItem } from "@/components/blocks/features";
import {
  Testimonials,
  consultantTestimonials,
} from "@/components/blocks/testimonials";
import { DashedLine } from "@/components/dashed-line";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Training, a dedicated recruiter and regular pay, from your first day with us. See the IT and ERP roles NetResolute is hiring for.",
};

const whatYouGet: FeatureItem[] = [
  {
    title: "Training before placement",
    image: "/features/training-card.svg",
    alt: "A training plan with AWS, SQL and business analysis tracks",
    href: "#open-roles",
  },
  {
    title: "A recruiter who knows your work",
    image: "/features/recruiter-card.svg",
    alt: "Messages between a consultant and their dedicated recruiter",
    href: "#open-roles",
  },
  {
    title: "Pay that arrives on time",
    image: "/features/pay-card.svg",
    alt: "A pay history showing four consecutive on-time weekly payments",
    href: "#open-roles",
  },
];

/** TODO: confirm all four roles are still open before publishing. */
const ALL_ROLES_NOTE =
  "All roles: clear communication and valid US work authorization.";

const applyLink = (role: string) => ({
  href: `/contact?intent=apply&role=${encodeURIComponent(role)}`,
  text: "Apply for this role",
});

const openRoles: FaqCategory[] = [
  {
    title: "Engineering",
    questions: [
      {
        question: "Java Developer",
        answer:
          "Build and test web applications with JEE, JSF, Struts or Hibernate and SQL databases. Git and basic front-end skills needed.",
        note: ALL_ROLES_NOTE,
        link: applyLink("Java Developer"),
      },
      {
        question: "Python Developer",
        answer:
          "Own server-side logic in Flask with MySQL, Postgres, Redis or Mongo. Docker, Kubernetes and CircleCI experience expected.",
        note: ALL_ROLES_NOTE,
        link: applyLink("Python Developer"),
      },
    ],
  },
  {
    title: "Infrastructure",
    questions: [
      {
        question: "DevOps Engineer",
        answer:
          "Deploy, monitor and automate systems on AWS, GCP or Azure. Linux administration, scripting and Kubernetes required.",
        note: ALL_ROLES_NOTE,
        link: applyLink("DevOps Engineer"),
      },
    ],
  },
  {
    title: "Analysis",
    questions: [
      {
        question: "Business Analyst",
        answer:
          "Turn stakeholder needs into BRDs and FRDs on Agile and Waterfall projects. Working knowledge of SQL and Jira required.",
        note: ALL_ROLES_NOTE,
        link: applyLink("Business Analyst"),
      },
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      <Background className="via-muted to-muted/80">
        <div className="pt-28 lg:pt-44">
          <AboutHero
            title="Find your next IT project"
            subtitle="Training, a dedicated recruiter and regular pay, from your first day with us."
            stats={null}
          />
        </div>

        <div className="pt-28 lg:pt-32">
          <Features
            id="what-you-get"
            eyebrow="WHAT YOU GET"
            title="Support that lasts the project"
            description="You won't be placed and forgotten. We train you on the tools clients ask for, match you to roles you can win, and stay in touch until the project ends."
            items={whatYouGet}
          />
        </div>
      </Background>

      <FAQ
        id="open-roles"
        title="Open roles"
        categories={openRoles}
        description={
          <>
            Don&apos;t see your role?{" "}
            <Link
              href="/contact?intent=apply"
              className="underline underline-offset-4"
            >
              Send your resume anyway
            </Link>
            .
          </>
        }
      />
      <DashedLine className="mx-auto max-w-[80%]" />

      <Background variant="bottom">
        <Testimonials
          title="From consultants we've placed"
          description="Three of the people we placed, in their words. Each speaker still needs to sign off before launch."
          items={consultantTestimonials}
          dashedLineClassName="hidden"
        />
      </Background>
    </>
  );
}
