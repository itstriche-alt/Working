"use client";

import { ICONS, COMPANY_INFO } from '../constants';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 lg:py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">

          {/* Brand Column */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 flex-shrink-0">
                <Image
                  src="/logo.svg"
                  alt="Mold Care Solutions logo"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[22px] font-black text-white leading-none tracking-tight">
                  Mold Care
                </span>
                <span className="text-[11px] font-bold text-orange-400 uppercase tracking-[0.2em] leading-tight mt-0.5">
                  Solutions
                </span>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              Professional mold remediation services dedicated to restoring the safety and comfort of your home. Licensed, insured, and trusted by homeowners across Richmond and the DMV area.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#hero" className="hover:text-orange-800 transition-colors block py-1">Home</Link></li>
              <li><Link href="#services" className="hover:text-orange-800 transition-colors block py-1">Services</Link></li>
              <li><Link href="#process" className="hover:text-orange-800 transition-colors block py-1">Process</Link></li>
              <li><Link href="#work" className="hover:text-orange-800 transition-colors block py-1">Our Work</Link></li>
              <li><Link href="#testimonials" className="hover:text-orange-800 transition-colors block py-1">Testimonials</Link></li>
              <li><Link href="#contact" className="hover:text-orange-800 transition-colors block py-1">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <ICONS.Phone className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="hover:text-white transition-colors font-medium">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <ICONS.Mail className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors break-all">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <ICONS.MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="leading-tight">{COMPANY_INFO.location}</span>
              </li>
              <li className="flex items-start gap-3">
                <ICONS.Clock className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="leading-tight">24/7 Emergency Service Available</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Mold Care Solutions. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
