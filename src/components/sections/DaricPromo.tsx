import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const DARIC_URL = "https://arian200825.github.io/daric-agency/";
const DARIC_CONTACT = "https://arian200825.github.io/daric-agency/contact/";

/**
 * DaricPromo — turns this demo into a Daric lead-gen asset. Owner-facing CTA
 * (not guest-facing) that routes restaurant owners to the Daric agency.
 */
export function DaricPromo() {
  return (
    <section className="border-t border-border bg-surface py-20 sm:py-24">
      <Container>
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <span className="text-xs uppercase tracking-luxe text-primary">A Daric template</span>
          <h2 className="text-3xl sm:text-4xl">Get a custom restaurant website</h2>
          <p className="text-pretty leading-relaxed text-muted">
            Like what you see? This is a Daric template. We design and build
            bespoke, conversion-focused websites for premium restaurants — yours
            could be next.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={DARIC_CONTACT} size="lg">Get a Custom Restaurant Website</Button>
            <Button href={DARIC_URL} size="lg" variant="outline">Explore Daric</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
