import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <section className="container mt-10 flex max-w-5xl flex-col-reverse gap-8 md:mt-14 md:gap-14 lg:mt-20 lg:flex-row lg:items-end">
      {/* Images Left - Text Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        {/* TODO: swap for real team or office photos, no stock. */}
        <ImageSection
          images={[
            { src: "/about/1.webp", alt: "NetResolute team at work" },
            { src: "/about/2.webp", alt: "The New York office" },
          ]}
          className="xl:-translate-x-10"
        />

        <TextSection
          title="Who we are"
          paragraphs={[
            "NetResolute is an IT consulting and staffing firm in New York. We place senior consultants on Workday, PeopleSoft, Lawson and UKG projects, and engineers across Java, Python, DevOps, cloud and data.",
            "We interview every candidate before a client sees them, and we stay with consultants after they start. It's why consultants refer their friends to us.",
            "Looking for your next project? See what we're hiring for.",
          ]}
          ctaButton={{
            href: "/careers",
            text: "See open roles",
          }}
        />
      </div>

      {/* Text Left - Images Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <TextSection
          paragraphs={[
            "Our job is simple to say and hard to do well: help people find rewarding work, and help clients find the talent to grow. We do it by knowing the systems we staff. A Workday Financials role needs a different person than a Workday HCM role, and we screen for that difference before anyone books an interview.",
            "We hold ourselves to high ethical standards in how we recruit, pay and treat people. Consultants get regular pay, a dedicated recruiter and straight answers. Clients get accurate profiles, the consultant they interviewed, and a team that picks up the phone.",
          ]}
        />
        <ImageSection
          images={[
            {
              src: "/about/3.webp",
              alt: "A project team in a working session",
            },
            { src: "/about/4.webp", alt: "Consultants collaborating" },
          ]}
          className="hidden lg:flex xl:translate-x-10"
        />
      </div>
    </section>
  );
};

export default About;

interface ImageSectionProps {
  images: { src: string; alt: string }[];
  className?: string;
}

export function ImageSection({ images, className }: ImageSectionProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-[2/1.5] overflow-hidden rounded-2xl"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

interface TextSectionProps {
  title?: string;
  paragraphs: string[];
  ctaButton?: {
    href: string;
    text: string;
  };
}

export function TextSection({
  title,
  paragraphs,
  ctaButton,
}: TextSectionProps) {
  return (
    <section className="flex-1 space-y-4 text-lg md:space-y-6">
      {title && <h2 className="text-foreground text-4xl">{title}</h2>}
      <div className="text-muted-foreground max-w-xl space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {ctaButton && (
        <div className="mt-8">
          <Link href={ctaButton.href}>
            <Button size="lg">{ctaButton.text}</Button>
          </Link>
        </div>
      )}
    </section>
  );
}
