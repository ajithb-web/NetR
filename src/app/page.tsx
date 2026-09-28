import { Background } from "@/components/background";
import { Engagement } from "@/components/blocks/engagement";
import { FAQ } from "@/components/blocks/faq";
import { Features } from "@/components/blocks/features";
import { Hero } from "@/components/blocks/hero";
import { Logos } from "@/components/blocks/logos";
import { Testimonials } from "@/components/blocks/testimonials";

export default function Home() {
  return (
    <>
      <Background className="via-muted to-muted/80">
        <Hero />
        <Logos />
        <Features />
        <Engagement />
      </Background>
      <Testimonials />
      <Background variant="bottom">
        <FAQ />
      </Background>
    </>
  );
}
