# Open items before launch

Everything below is unresolved in the copy deck. Placeholders are rendered on
the site inside `[square brackets]` so nothing invented ships by accident —
search the repo for `[` or `TODO:` to find them all.

## Numbers and terms

- [ ] **Shortlist turnaround in days** — `[X] business days`
      (`src/components/blocks/faq.tsx`)
- [ ] **Replacement / fit guarantee terms** — `[replace the consultant within X
    days at no extra fee]` (`src/components/blocks/faq.tsx`). Confirm with
      counsel before publishing.
- [ ] **The four About stats** — `[15+]`, `[X]` ×3
      (`src/components/blocks/about-hero.tsx`)
- [ ] **Careers reply time** — `[X] days` (`src/components/blocks/footer.tsx`,
      `apply-form.tsx`)
- [ ] **Contact reply time** — `[1 business day]` (`src/components/blocks/contact.tsx`,
      `contact-form.tsx`)

## Contact details — `src/lib/site.ts`

- [ ] **One confirmed phone number** — currently `[One confirmed number]`
- [ ] **Careers email** — currently assumes `careers@netresolute.com`
- [ ] **LinkedIn URL** — currently `#`

## People and proof

- [ ] **Testimonial sign-offs and roles** — quotes 1–3 are trimmed from the old
      site; each speaker must approve their quote, and `[Role]` needs filling
      (`src/components/blocks/testimonials.tsx`)
- [ ] **Photos with written consent** — cards currently use initials panels
      rather than stock photos, which would misattribute a likeness to a named
      person. Swap in real portraits once consent is on file.
- [ ] **Client testimonial** — one card is a visible `[Client testimonial
    needed]` placeholder
- [ ] **Client logos with permission** — the strip currently shows platform
      names as plain wordmarks, the deck's stated fallback. Platform _logos_
      were avoided because they imply partnership.
- [ ] **Leadership names, titles and photos** — five `[Name]` / `[Title]` cards
      (`src/components/blocks/leadership.tsx`). Delete the block and its import
      in `src/app/about/page.tsx` if leadership doesn't want faces on the site.
- [ ] **Real team or office photos** — About still uses the template's stock
      photos (`public/about/1-4.webp`)

## Content

- [ ] **Confirm the four roles are still open** — Java, Python, DevOps, BA
      (`src/app/careers/page.tsx`)
- [ ] **Privacy policy** — `src/app/privacy/privacy.mdx` is the template's
      generated boilerplate with names swapped. Replace with counsel-written
      copy and set the real "last updated" date.
- [ ] **Voice approval**

## Engineering

- [ ] **Form delivery** — `src/actions/server-action.ts` only logs. Wire the
      enquiry form to the hiring inbox/ATS and the application form to the
      careers inbox.
- [ ] **Resume storage** — the application form collects a file but currently
      submits the _file name only_. Uploading the file needs a storage backend
      (S3/UploadThing/etc.) and a multipart or presigned-URL submit path.
- [ ] **Production domain** — `metadataBase` in `src/app/layout.tsx` assumes
      `https://www.netresolute.com`.
- [ ] **Favicon** — still the template's mark, which the NetResolute logo reuses.
      Replace both together if branding changes.
