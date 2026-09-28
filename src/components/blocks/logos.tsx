import Marquee from "react-fast-marquee";

import { cn } from "@/lib/utils";

/**
 * Placeholder row. Swap these for client logos once we have written permission
 * — platform names are the fallback only, set as plain wordmarks so they read
 * as coverage rather than a partnership claim.
 */
const topRowPlatforms = ["Workday", "PeopleSoft", "Lawson", "UKG Kronos"];
const bottomRowPlatforms = ["AWS", "Java", "Python", "Kubernetes", "Azure"];

export const Logos = () => {
  return (
    <section className="overflow-hidden pb-28 lg:pb-32">
      <div className="container space-y-10 lg:space-y-16">
        <div className="text-center">
          <h2 className="mb-4 text-xl text-balance md:text-2xl lg:text-3xl">
            Consultants for the systems you run.
            <br className="max-md:hidden" />
            <span className="text-muted-foreground">
              From one senior hire to a full implementation team.
            </span>
          </h2>
        </div>

        <div className="flex w-full flex-col items-center gap-8">
          {/* Top row - 4 platforms */}
          <LogoRow platforms={topRowPlatforms} gridClassName="grid-cols-4" />

          {/* Bottom row - 5 platforms */}
          <LogoRow
            platforms={bottomRowPlatforms}
            gridClassName="grid-cols-5"
            direction="right"
          />
        </div>
      </div>
    </section>
  );
};

type LogoRowProps = {
  platforms: string[];
  gridClassName: string;
  direction?: "left" | "right";
};

const Wordmark = ({ name }: { name: string }) => (
  <span className="font-display text-foreground text-xl font-semibold tracking-tight whitespace-nowrap lg:text-2xl">
    {name}
  </span>
);

const LogoRow = ({ platforms, gridClassName, direction }: LogoRowProps) => {
  return (
    <>
      {/* Desktop static version */}
      <div className="hidden md:block">
        <div
          className={cn(
            "grid items-center justify-items-center gap-x-20 lg:gap-x-28",
            gridClassName,
          )}
        >
          {platforms.map((name) => (
            <span key={name} className="opacity-50">
              <Wordmark name={name} />
            </span>
          ))}
        </div>
      </div>

      {/* Mobile marquee version */}
      <div className="md:hidden">
        <Marquee direction={direction} pauseOnHover>
          {platforms.map((name) => (
            <span key={name} className="mx-8 inline-block opacity-50">
              <Wordmark name={name} />
            </span>
          ))}
        </Marquee>
      </div>
    </>
  );
};
