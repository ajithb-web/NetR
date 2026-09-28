import type { Metadata } from "next";

import { Background } from "@/components/background";
import About from "@/components/blocks/about";
import { AboutHero } from "@/components/blocks/about-hero";
import { Leadership } from "@/components/blocks/leadership";
import { DashedLine } from "@/components/dashed-line";

export const metadata: Metadata = {
  title: "About",
  description:
    "NetResolute is an IT consulting and staffing firm in New York placing senior Workday, PeopleSoft, Lawson and UKG consultants.",
};

export default function AboutPage() {
  return (
    <Background>
      <div className="py-28 lg:py-32 lg:pt-44">
        <AboutHero />

        <About />
        <div className="pt-28 lg:pt-32">
          <DashedLine className="container max-w-5xl scale-x-115" />
          <Leadership />
        </div>
      </div>
    </Background>
  );
}
