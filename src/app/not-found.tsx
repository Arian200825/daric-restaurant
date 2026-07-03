import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70svh] flex-col items-center justify-center gap-6 py-24 text-center">
      <p className="text-xs uppercase tracking-luxe text-primary">404</p>
      <h1 className="font-display text-4xl italic sm:text-5xl">This page has left the table.</h1>
      <p className="max-w-md text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Button href="/">Return home</Button>
    </Container>
  );
}
