"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { m, AnimatePresence } from 'motion/react';
import { ICONS, COMPANY_INFO } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Our Work', href: '#work' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled
          ? 'bg-white/90 backdrop-blur-md border-slate-200 py-3 shadow-sm'
          : 'bg-transparent border-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="#" className="flex items-center gap-3 group relative z-50">
              {/* Logo Image Placeholder */}
              <div className={`w-12 h-12 flex-shrink-0 rounded-lg flex items-center justify-center overflow-hidden transition-all duration-300 ${scrolled || isOpen ? 'bg-white shadow-sm border border-slate-100' : 'bg-white/10 backdrop-blur-md border border-white/20'}`}>
                {/* Replace this div or the icon inside with your actual <Image src="/logo.png" /> */}
                <ICONS.ShieldCheck className={`w-7 h-7 ${scrolled || isOpen ? 'text-blue-600' : 'text-white'}`} />
              </div>
              <div className="flex flex-col justify-center">
                <span className={`text-[22px] font-black tracking-tight leading-none transition-colors duration-300 ${scrolled || isOpen ? 'text-slate-900' : 'text-white'
                  }`}>
                  Mold Care
                </span>
                <span className={`text-[9px] font-bold uppercase tracking-[0.2em] leading-tight mt-0.5 transition-colors duration-300 ${scrolled || isOpen ? 'text-orange-600' : 'text-orange-200'
                  }`}>
                  Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className={`hidden lg:flex items-center gap-1 p-1.5 rounded-full transition-all duration-500 ${scrolled ? 'bg-white border border-slate-100 shadow-sm' : 'bg-white/5 backdrop-blur-md border border-white/10'
              }`}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-6 py-2.5 rounded-full text-[14px] font-medium tracking-wide transition-all duration-300 relative group overflow-hidden ${scrolled
                    ? 'text-slate-600 hover:text-blue-700 hover:bg-blue-50/80'
                    : 'text-blue-50 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                className={`flex items-center gap-3 pl-1.5 pr-6 py-1.5 rounded-full transition-all duration-300 group shadow-sm hover:shadow-md ${scrolled
                  ? 'bg-slate-900 text-white hover:bg-blue-700'
                  : 'bg-white text-blue-950 hover:bg-blue-50'
                  }`}
              >
                <div className={`p-2.5 rounded-full transition-colors duration-300 ${scrolled ? 'bg-white/10 group-hover:bg-white/20' : 'bg-blue-100 group-hover:bg-blue-200'
                  }`}>
                  <ICONS.Phone className={`w-4 h-4 ${scrolled ? 'text-white' : 'text-blue-700'}`} />
                </div>
                <div className="flex flex-col items-start leading-none">
                  <span className={`text-[9px] font-extrabold uppercase tracking-[0.15em] mb-1 ${scrolled ? 'text-blue-200' : 'text-blue-400'
                    }`}>24/7 Emergency</span>
                  <span className="text-[15px] font-bold tracking-tight tabular-nums">{COMPANY_INFO.phone}</span>
                </div>
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className={`lg:hidden relative z-50 p-2 rounded-lg transition-colors ${isOpen
                ? 'text-slate-900 bg-slate-100'
                : scrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
                }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <ICONS.X className="w-7 h-7" /> : <ICONS.Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl lg:hidden pt-28 px-6 pb-10 flex flex-col overflow-y-auto"
          >
            <div className="flex-1 flex flex-col gap-2">
              {navLinks.map((link, idx) => (
                <m.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => {
                      setIsOpen(false);
                      document.body.style.overflow = 'unset';
                    }}
                    className="text-3xl font-bold text-slate-900 py-4 border-b border-slate-100 hover:text-orange-600 hover:pl-4 transition-all flex items-center justify-between group cursor-pointer block w-full"
                  >
                    {link.name}
                    <ICONS.ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all text-orange-600" />
                  </Link>
                </m.div>
              ))}
            </div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 space-y-4"
            >
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-3 bg-blue-600 text-white p-5 rounded-2xl font-bold text-lg shadow-xl shadow-blue-600/20 active:scale-95 transition-transform"
              >
                <ICONS.Phone className="w-6 h-6" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>

              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex flex-col items-center justify-center gap-2 bg-slate-50 p-4 rounded-2xl text-slate-600 font-medium hover:bg-slate-100 transition-colors"
                >
                  <ICONS.Mail className="w-6 h-6 text-orange-600" />
                  <span>Email Us</span>
                </Link>
                <div className="flex flex-col items-center justify-center gap-2 bg-slate-50 p-4 rounded-2xl text-slate-600 font-medium">
                  <ICONS.Clock className="w-6 h-6 text-green-500" />
                  <span>24/7 Service</span>
                </div>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
