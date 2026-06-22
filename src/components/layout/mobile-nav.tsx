'use client';

import Link from 'next/link';
import { X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { Dispatch, SetStateAction } from 'react';

type NavLink = {
  label: string;
  href?: string;
  hasDropdown?: boolean;
  dropdownItems?: { label: string; href: string; desc?: string }[];
};

type MobileNavProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  navLinks: NavLink[];
};

export function MobileNav({ isOpen, setIsOpen, navLinks }: MobileNavProps) {
  if (!isOpen) return null;

  const closeMenu = () => setIsOpen(false);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 animate-fade-in md:hidden"
      onClick={closeMenu}
    >
      <div
        className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-background p-6 shadow-lg overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b">
          <h2 className="font-bold text-lg">Menu</h2>
          <button onClick={closeMenu} className="p-2" aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-6 flex flex-col gap-4">
          <Accordion type="single" collapsible className="w-full">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <AccordionItem value={link.label} key={link.label}>
                  <AccordionTrigger className="py-3 font-bold text-muted-foreground hover:text-foreground transition-colors no-underline">
                    {link.label}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-2 space-y-1">
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block p-3 rounded-lg hover:bg-slate-50 transition-colors"
                          onClick={closeMenu}
                        >
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-[#0F172A]">{item.label}</span>
                            {item.desc && <span className="text-xs text-slate-500 line-clamp-1">{item.desc}</span>}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <Link
                  key={link.label}
                  href={link.href || '#'}
                  className="block py-3 text-base font-bold text-muted-foreground hover:text-foreground transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              )
            )}
          </Accordion>
          <div className="flex flex-col gap-2 pt-4 border-t">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start font-bold"
              asChild
            >
              <Link href="#" onClick={closeMenu}>Login</Link>
            </Button>
            <Button size="sm" className="w-full font-bold" asChild>
              <Link href="#" onClick={closeMenu}>Become a Contributor</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
