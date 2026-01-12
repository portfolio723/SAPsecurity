import Link from "next/link";
import { Logo } from "@/components/icons";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-6 w-6 text-sap-blue" />
            <span className="hidden font-bold sm:inline-block font-headline text-sap-blue">
              SAP Security Expert Hub
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
            <nav className="flex items-center gap-4 text-sm lg:gap-6">
                <Link
                    href="#articles"
                    className="text-muted-foreground/70 transition-colors hover:text-foreground"
                >
                    Content
                </Link>
                <Link
                    href="#"
                    className="text-muted-foreground/70 transition-colors hover:text-foreground"
                >
                    Login
                </Link>
                <Button variant="default" size="sm" asChild>
                    <Link href="#newsletter">Subscription</Link>
                </Button>
            </nav>
        </div>
      </div>
    </header>
  );
}
