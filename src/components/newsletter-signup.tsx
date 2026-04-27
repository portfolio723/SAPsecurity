import { Button } from "@/components/ui/button";
import Link from "next/link";

export function NewsletterSignup() {
  return (
    <section id="newsletter" className="w-full py-12 md:py-24 lg:py-32 border-t bg-white">
      <div className="container grid items-center justify-center gap-6 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold font-headline tracking-tighter md:text-4xl/tight">
            Stay Ahead of the Curve
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Subscribe to our newsletter for the latest SAP security news, analysis, and expert commentary delivered to your inbox.
          </p>
        </div>
        <div className="mx-auto w-full max-w-md space-y-4">
          <form className="flex items-center border-2 border-primary rounded-xl overflow-hidden bg-[#F2F2F2]">
            <input
              type="email"
              placeholder="Type your email..."
              className="flex-1 bg-transparent px-5 py-3 text-base md:text-sm outline-none placeholder:text-muted-foreground/60 h-12"
              required
            />
            <Button 
              type="submit" 
              className="rounded-none h-12 px-8 bg-primary text-white hover:bg-primary/90 font-bold text-base md:text-sm"
            >
              Subscribe
            </Button>
          </form>
          <p className="text-[11px] text-muted-foreground leading-relaxed max-w-[320px] mx-auto">
            By subscribing you agree to Substack's{" "}
            <Link href="#" className="underline hover:text-primary transition-colors">Terms of Use</Link>, our{" "}
            <Link href="#" className="underline hover:text-primary transition-colors">Privacy Policy</Link> and our{" "}
            <Link href="#" className="underline hover:text-primary transition-colors">Information collection notice</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
