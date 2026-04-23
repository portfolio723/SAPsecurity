'use client';

import Link from 'next/link';
import { Logo } from '@/components/icons';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-[#0b1120] text-gray-400 py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <Logo width={40} height={40} className="brightness-0 invert" />
                <div className="flex flex-col">
                  <span className="text-white font-black text-xl tracking-tight leading-none uppercase">SAP SECURITY EXPERT</span>
                  <span className="text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase mt-1">ACCESS | RISK | COMPLIANCE</span>
                </div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              The leading community for SAP Security, GRC, and BTP professionals. Join us to learn, share, and grow.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary transition-colors">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary transition-colors">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-primary transition-colors">
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-8">RESOURCES</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="#" className="hover:text-white transition-colors">SAP Security</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">SAP GRC</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">SAP IAG</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">BTP Security</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">SAP Cybersecurity</Link></li>
            </ul>
          </div>

          {/* Explore Column */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-8">EXPLORE</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="#" className="hover:text-white transition-colors">Podcasts</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Product Reviews</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Expert Recommendations</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Become a Contributor</Link></li>
            </ul>
          </div>

          {/* Legal & Contact Column */}
          <div>
            <h4 className="text-white font-black text-sm uppercase tracking-widest mb-8">LEGAL & CONTACT</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Accessibility</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Safety Movement</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Security & Compliance</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Responsible AI</Link></li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-gray-800 pt-10">
          <p className="text-[10px] text-gray-600 leading-relaxed text-center max-w-5xl mx-auto mb-8 font-medium">
            SAP SE, SAP AG, or any of their affiliates ("SAP") has no affiliation, association, endorsement, sponsorship, or connection whatsoever with SAP Security Expert or the website <Link href="https://sapsecurityexpert.com" className="underline hover:text-gray-400">sapsecurityexpert.com</Link>. This website is independently owned and operated by a third party and is not authorized, approved, or related in any manner to SAP. All content provided herein is for informational purposes only and does not represent the views, products, or services of SAP.
          </p>
          <p className="text-xs text-center font-bold tracking-widest uppercase">
            © 2026 SAP Security Expert. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
