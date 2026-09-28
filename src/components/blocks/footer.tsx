"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const hiringCta = {
  title: "Tell us the role you need",
  description:
    "Share the module and dates. We'll come back with consultants we've already interviewed.",
  button: { text: "Get a shortlist", href: "/contact" },
};

const candidateCta = {
  title: "Send us your resume",
  description:
    "Tell us what you do best. We'll match you to roles that fit and reply within [X] days.",
  button: { text: "Send my resume", href: "/contact?intent=apply" },
};

export function Footer() {
  const pathname = usePathname();
  const cta = pathname?.startsWith("/careers") ? candidateCta : hiringCta;

  const navigation = [
    { name: "Services", href: "/#services" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const social = [{ name: "LinkedIn", href: site.linkedin }];

  const legal = [{ name: "Privacy Policy", href: "/privacy" }];

  return (
    <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          {cta.title}
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          {cta.description}
        </p>
        <div>
          <Button size="lg" className="mt-4" asChild>
            <Link href={cta.button.href}>{cta.button.text}</Link>
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name} <ArrowUpRight className="size-4" />
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} {site.legalName}
          </li>
        </ul>
      </nav>

      <div className="mt-10 w-full overflow-hidden md:mt-14 lg:mt-20">
        <span
          aria-hidden="true"
          className="font-display from-primary-foreground/90 dark:from-foreground/90 block bg-linear-to-b to-transparent to-90% bg-clip-text px-2 text-center text-[clamp(3.5rem,17.5vw,17rem)] leading-[0.85] font-bold tracking-tighter whitespace-nowrap text-transparent select-none"
        >
          NetResolute
        </span>
      </div>
    </footer>
  );
}
