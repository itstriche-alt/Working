import React from 'react';
import { m } from 'motion/react';
import { ICONS, SERVICES } from '../constants';

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <h2 className="text-orange-500 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Comprehensive Mold Solutions</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            We don't just remove mold; we identify the source, treat the affected areas, and prevent future growth.
          </p>
        </m.div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {SERVICES.map((service, index) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS] as React.ElementType;
            return (
              <m.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300 hover:-translate-y-2 border border-slate-100 hover:border-blue-100 group flex flex-col w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[400px] relative overflow-hidden cursor-pointer"
              >
                {/* Subtle Sheen Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/0 via-blue-50/40 to-blue-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300 shrink-0 relative z-10">
                  <Icon className="w-7 h-7 text-blue-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed flex-grow">
                  {service.description}
                </p>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
