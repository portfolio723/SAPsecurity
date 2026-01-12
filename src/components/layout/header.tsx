'use client';

import Link from 'next/link';
import { Logo } from '@/components/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MobileNav } from '@/components/layout/mobile-nav';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'SAP Security',
    hasDropdown: true,
    dropdownItems: [
      { label: 'Access Control', href: '#' },
      { label: 'Authorization', href: '#' },
      { label: 'Security Notes', href: '#' },
    ],
  },
  { label: 'SAP IAG', href: '#' },
  { label: 'SAP GRC', href: '#' },
  { label: 'SAP Cybersecurity', href: '#' },
  { label: 'Product Reviews', href: '#' },
  { label: 'Podcasts', href: '#' },
  { label: 'Other Tools', href: '#' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 glass-effect border-b'
            : 'bg-background border-b'
        }`}
      >
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:h-20 md:px-6">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
               <span className="font-bold text-lg" style={{ color: '#F25140' }}>SAP Security Expert</span>
            </Link>
          </div>
          
          <div className="hidden flex-1 justify-center lg:flex">
            <nav className="flex items-center gap-4 text-sm xl:gap-6">
              {navLinks.map((link) => (
                <div key={link.label} className="relative">
                  {link.hasDropdown ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center gap-1 font-medium text-muted-foreground/70 transition-colors hover:text-foreground focus:outline-none">
                        {link.label}
                        <ChevronDown className="h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {link.dropdownItems?.map((item) => (
                           <DropdownMenuItem key={item.label} asChild>
                            <Link href={item.href}>{item.label}</Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      href={link.href || '#'}
                      className="font-medium text-muted-foreground/70 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="flex items-center justify-end">
             <div className="hidden items-center gap-2 md:flex lg:gap-4">
              <Link
                href="#"
                className="text-sm font-medium text-muted-foreground/70 transition-colors hover:text-foreground"
              >
                Login
              </Link>
              <Button size="sm">Become a Contributor</Button>
            </div>
             <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-foreground md:hidden"
              aria-label="Open mobile menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>
      <MobileNav 
        isOpen={isMobileMenuOpen} 
        setIsOpen={setIsMobileMenuOpen}
        navLinks={navLinks}
      />
    </>
  );
}
