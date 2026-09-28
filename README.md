# NetResolute website

Marketing site for NetResolute — an IT consulting and staffing firm placing
senior Workday, PeopleSoft, Lawson and UKG consultants, plus engineering talent.

Built on the [Mainline](https://github.com/shadcnblocks/mainline-nextjs-template)
Next.js template (MIT) with shadcn/ui, Tailwind 4 and MDX. Copy comes from the
_NetResolute Website Copy (Mainline template)_ deck.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build   # production build + lint + typecheck
npm run format  # prettier
```

## Pages

| Route      | Blocks                                                                              |
| ---------- | ----------------------------------------------------------------------------------- |
| `/`        | Hero, platform strip, features, engagement process, testimonials, FAQ               |
| `/about`   | Hero + stats, Who we are, Mission, Leadership                                       |
| `/careers` | Hero, What you get, Open roles accordion, consultant testimonials                   |
| `/faq`     | Common questions, testimonials                                                      |
| `/contact` | Office/email/phone, enquiry form (`?intent=apply` switches to the application form) |
| `/privacy` | MDX — placeholder, needs counsel-written copy                                       |

Pricing, login and signup were removed; the nav slot became Careers.

## Where the content lives

- `src/lib/site.ts` — company name, address, emails, phone, LinkedIn
- `src/components/blocks/*` — every section, content at the top of each file
- `src/app/careers/page.tsx` — open roles, "What you get" cards
- `src/app/privacy/privacy.mdx` — privacy policy

## Before launch

See [OPEN-ITEMS.md](./OPEN-ITEMS.md). Anything still in `[square brackets]` on
the site is an unconfirmed value from the copy deck.

## Credits

Template by [shadcnblocks.com](https://shadcnblocks.com), MIT licensed.
