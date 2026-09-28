import { DashedLine } from "@/components/dashed-line";

export type Stat = { value: string; label: string };

/** TODO: replace the bracketed figures once the four About stats are confirmed. */
const defaultStats: Stat[] = [
  { value: "[15+]", label: "Years in IT staffing" },
  { value: "[X]", label: "Consultants placed" },
  { value: "[X]", label: "Client companies" },
  { value: "[X]", label: "Days to first shortlist" },
];

type AboutHeroProps = {
  title?: string;
  subtitle?: string;
  stats?: Stat[] | null;
};

export function AboutHero({
  title = "Right consultant, right project",
  subtitle = "We match IT professionals with the projects they're best at.",
  stats = defaultStats,
}: AboutHeroProps) {
  return (
    <section className="">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl">
            {subtitle}
          </p>
        </div>

        {stats && stats.length > 0 && (
          <div
            className={`relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:pt-0 lg:pl-10`}
          >
            <DashedLine
              orientation="vertical"
              className="absolute top-0 left-0 max-lg:hidden"
            />
            <DashedLine
              orientation="horizontal"
              className="absolute top-0 lg:hidden"
            />
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <div className="font-display text-4xl tracking-wide md:text-5xl">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
