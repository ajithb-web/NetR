/**
 * TODO: leadership names, titles and photos. Drop the whole block if leadership
 * doesn't want faces on the site.
 */
const leaders = [
  { name: "[Name]", title: "[Title]" },
  { name: "[Name]", title: "[Title]" },
  { name: "[Name]", title: "[Title]" },
  { name: "[Name]", title: "[Title]" },
  { name: "[Name]", title: "[Title]" },
];

export function Leadership() {
  return (
    <section className="container max-w-5xl py-12">
      <h2 className="text-foreground text-4xl font-medium tracking-wide">
        Leadership
      </h2>
      <div className="mt-8 grid grid-cols-2 gap-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {leaders.map((leader, i) => (
          <div key={i}>
            <div className="bg-primary/70 grid size-[120px] place-items-center rounded-2xl">
              <span
                aria-hidden="true"
                className="font-display text-primary-foreground/40 text-3xl font-bold"
              >
                NR
              </span>
            </div>
            <h3 className="mt-3 font-semibold">{leader.name}</h3>
            <p className="text-muted-foreground">{leader.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
