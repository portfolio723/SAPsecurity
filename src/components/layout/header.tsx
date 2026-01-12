import Link from 'next/link';
import { Logo } from '@/components/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
        <div className="flex flex-1 items-center justify-between space-x-2">
          <nav className="hidden items-center gap-4 text-sm lg:flex lg:gap-6">
            <Link
              href="#"
              className="font-medium text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 font-medium text-muted-foreground/70 transition-colors hover:text-foreground focus:outline-none">
                SAP Security
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="#">SAP Security Audits</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#">SAP Penetration Testing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#">SAP Vulnerability Management</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#">SAP Custom Code Scanning</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#">SAP Role Redesign</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="#"
              className="font-medium text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              SAP IAG
            </Link>
            <Link
              href="#"
              className="font-medium text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              SAP GRC
            </Link>
            <Link
              href="#"
              className="font-medium text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              SAP Cybersecurity
            </Link>
            <Link
              href="#"
              className="font-medium text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              Product Reviews
            </Link>
            <Link
              href="#"
              className="font-medium text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              Podcasts
            </Link>
            <Link
              href="#"
              className="font-medium text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              Other Tools
            </Link>
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <Link href="#" className="text-sm font-medium text-muted-foreground/70 transition-colors hover:text-foreground">Login</Link>
            <Button size="sm">Become a Contributor</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
