"use client";

import { m } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ICONS, COMPANY_INFO } from '../constants';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-28 pb-12 lg:pt-20 lg:pb-16 overflow-x-clip">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://plus.unsplash.com/premium_photo-1664477027317-5b3110359968?auto=format&fit=crop&q=80&w=2070"
          alt="Professional mold removal technician in full PPE gear disinfecting a home"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Darker, more clinical overlay for the 'tech/expert' vibe */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-blue-950/85 to-blue-900/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Expert Mold Removal <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200">
                in Richmond
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Protect your home and health with our professional mold inspection and remediation services. Fast, effective, and certified solutions for a safer environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all shadow-xl shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1 group"
              >
                <ICONS.Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                <div className="text-left leading-tight">
                  <span className="block text-xs font-medium opacity-90 uppercase tracking-wide">Call Now:</span>
                  <span className="block font-bold">{COMPANY_INFO.phone}</span>
                </div>
              </a>
              <Link
                href="#contact"
                className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:-translate-y-1"
              >
                Get a Free Quote
                <ICONS.ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </m.div>
          {/* Floating Card / Visual Element */}
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 bg-white rounded-2xl p-6 shadow-2xl shadow-blue-900/50 max-w-md mx-auto transform hover:rotate-2 transition-transform duration-500">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <ICONS.ShieldCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Safety First</h3>
                    <p className="text-xs text-slate-500">Certified Protocols</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-600">100%</p>
                  <p className="text-xs text-slate-500">Satisfaction</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                  <ICONS.Droplets className="w-5 h-5 text-blue-500" />
                  <div className="flex-1">
                    <div className="h-2 bg-slate-200 rounded-full w-full">
                      <div className="h-2 bg-blue-500 rounded-full w-[15%]"></div>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Moisture Levels: Restored to Normal</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                  <ICONS.Wind className="w-5 h-5 text-orange-500" />
                  <div className="flex-1">
                    <div className="h-2 bg-slate-200 rounded-full w-full">
                      <div className="h-2 bg-green-500 rounded-full w-[98%]"></div>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Air Quality: Excellent</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-sm text-slate-600 italic">
                  "The difference in air quality was immediate. Highly professional team."
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex text-orange-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-900">John Schnieder</span>
                </div>
              </div>
            </div>

            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl" />
          </m.div>
        </div>

        {/* Floating Trust Banner */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 lg:mt-24 z-30 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/30 rounded-[2rem] p-6 lg:p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 md:divide-x divide-white/10 w-full transition-all duration-500 overflow-hidden relative group"
        >
          {/* Subtle sheen reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

          {/* Item 1 */}
          <div className="flex-1 flex items-center justify-start md:justify-center gap-5 px-4 md:px-8 w-full block-group">
            <div className="bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner shadow-white/20 group-hover:bg-white/20 transition-all duration-300">
              <ICONS.CheckCircle className="w-7 h-7 text-green-400" />
            </div>
            <div>
              <p className="font-bold text-white tracking-wide text-lg md:text-xl relative inline-block">
                Licensed & Insured
              </p>
              <p className="text-blue-200 text-sm font-medium opacity-90">Full Coverage Protection</p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex-1 flex items-center justify-start md:justify-center gap-5 px-4 md:px-8 w-full block-group">
            <div className="bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner shadow-white/20 group-hover:bg-white/20 transition-all duration-300">
              <ICONS.Clock className="w-7 h-7 text-orange-400" />
            </div>
            <div>
              <p className="font-bold text-white tracking-wide text-lg md:text-xl relative inline-block">
                24/7 Emergency
              </p>
              <p className="text-blue-200 text-sm font-medium opacity-90">On-site in Minutes</p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex-1 flex items-center justify-start md:justify-center gap-5 px-4 md:px-8 w-full block-group">
            <div className="bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner shadow-white/20 group-hover:bg-white/20 transition-all duration-300">
              <ICONS.Award className="w-7 h-7 text-blue-400" />
            </div>
            <div>
              <p className="font-bold text-white tracking-wide text-lg md:text-xl relative inline-block">
                IICRC Certified
              </p>
              <p className="text-blue-200 text-sm font-medium opacity-90">Industry Gold Standard</p>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
