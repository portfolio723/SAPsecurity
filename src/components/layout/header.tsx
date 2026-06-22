'use client';

import Link from 'next/link';
import { Logo } from '@/components/icons';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Menu, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MobileNav } from '@/components/layout/mobile-nav';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', href: '/' },
  {
    label: 'SAP Security',
    hasDropdown: true,
    dropdownItems: [
      { 
        label: 'Access Control', 
        desc: 'Managing SoD and critical access risks.',
        href: '#' 
      },
      { 
        label: 'Authorization', 
        desc: 'System-wide permission and role structures.',
        href: '#' 
      },
      { 
        label: 'Security Notes', 
        desc: 'Critical patches and vulnerability fixes.',
        href: '#' 
      },
    ],
  },
  {
    label: 'SAP GRC & IAG',
    hasDropdown: true,
    dropdownItems: [
      { 
        label: 'SAP Access Control', 
        desc: 'Managing SoD and critical access risks.',
        href: '#' 
      },
      { 
        label: 'SAP Process Control', 
        desc: 'Automating internal control monitoring.',
        href: '#' 
      },
      { 
        label: 'SAP Risk Management', 
        desc: 'Enterprise risk identification and mitigation.',
        href: '#' 
      },
      { 
        label: 'Cloud IAG', 
        desc: 'Modern identity governance for cloud SAP.',
        href: '#' 
      },
    ],
  },
  { label: 'SAP Cybersecurity', href: '#' },
  {
    label: 'Resources',
    hasDropdown: true,
    dropdownItems: [
      { 
        label: 'Fundamentals', 
        desc: 'Zero to Expert learning roadmap.',
        href: '/fundamentals' 
      },
      { 
        label: 'Product Reviews', 
        desc: 'Unbiased technical deep-dives.',
        href: '#' 
      },
      { 
        label: 'Podcasts', 
        desc: 'Expert conversations on SAP trends.',
        href: '#' 
      },
      { 
        label: 'Case Studies', 
        desc: 'Real-world implementation stories.',
        href: '#' 
      },
    ],
  },
  { label: 'Contact Us', href: '#' },
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
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? 'bg-background/95 glass-effect border-b'
            : 'bg-background border-b'
        )}
      >
        <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:h-20 md:px-6">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
               <Logo width={180} height={180} />
            </Link>
          </div>
          
          <div className="hidden flex-1 justify-center lg:flex">
            <nav className="flex items-center gap-4 text-sm xl:gap-6">
              {navLinks.map((link) => (
                <div key={link.label} className="relative">
                  {link.hasDropdown ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center gap-1 font-bold text-muted-foreground/80 transition-colors hover:text-foreground focus:outline-none outline-none">
                        {link.label}
                        <ChevronDown className="h-4 w-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="min-w-[320px] p-2 rounded-[12px] border-[#E8ECF2] shadow-xl">
                        {link.dropdownItems?.map((item) => (
                           <DropdownMenuItem key={item.label} asChild className="p-0 focus:bg-transparent">
                            <Link 
                              href={item.href}
                              className="group flex items-center justify-between p-4 rounded-[8px] hover:bg-slate-50 transition-all cursor-pointer outline-none"
                            >
                              <div className="flex flex-col gap-0.5">
                                <span className="font-bold text-[15px] text-[#0F172A] group-hover:text-primary transition-colors">
                                  {item.label}
                                </span>
                                <span className="text-[13px] text-slate-500 font-medium leading-tight">
                                  {item.desc}
                                </span>
                              </div>
                              
                              <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5" />
                              </div>
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      href={link.href || '#'}
                      className="font-bold text-muted-foreground/80 transition-colors hover:text-foreground"
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
              <Button variant="outline" size="sm" className="font-bold border-muted-foreground/20 rounded-[4px]" asChild>
                <Link href="#">Member Login</Link>
              </Button>
              <Button size="sm" className="font-bold px-6 rounded-[4px]">Become a Contributor</Button>
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
