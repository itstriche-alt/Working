"use client";

import { m } from 'motion/react';
import { ICONS, TESTIMONIALS } from '../constants';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-blue-950 text-white relative overflow-hidden">
      {/* Eye-catching Background Design */}
      <div className="absolute inset-0 z-0">
        {/* Deep gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900" />

        {/* Abstract geometric shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 mix-blend-overlay" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 mix-blend-screen" />

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        {/* Dynamic accent lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 30 50 70 50 100 0" stroke="white" strokeWidth="0.5" fill="none" />
          <path d="M0 80 C 40 40 60 60 100 20" stroke="orange" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-orange-400 font-semibold tracking-wide uppercase text-sm mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Trusted by Your Neighbors</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-blue-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-700"
            >
              <div className="flex gap-1 text-orange-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <ICONS.Award key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-blue-100 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs text-blue-300">Homeowner</p>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
