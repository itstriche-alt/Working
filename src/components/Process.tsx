"use client";

import React from 'react';
import { m } from 'motion/react';
import { Droplets, Shield, Wind, Trash2, Sparkles, Sun, ClipboardCheck } from 'lucide-react';
import { ICONS } from '../constants'; // Keeping for the floating stats icon if needed

export default function Process() {
  const steps = [
    {
      title: "Find the water source (leak, flood, humidity, crawlspace moisture, etc.)",
      bullets: [
        "Use moisture meter / thermal camera",
        "Fix the leak FIRST — mold won't stop if moisture remains"
      ],
      icon: Droplets
    },
    {
      title: "Isolate the affected area with plastic sheeting",
      bullets: [
        "Seal vents and doorways",
        "Use negative air machine",
        "Prevent cross-contamination to clean areas"
      ],
      icon: Shield
    },
    {
      title: "Air Filtration",
      bullets: [
        "Run HEPA air scrubber",
        "Use HEPA vacuum during removal",
        "This keeps spores from spreading"
      ],
      icon: Wind
    },
    {
      title: "Remove Contaminated Materials",
      bullets: [
        "Drywall (flood cut if needed)",
        "Insulation",
        "Carpet & padding",
        "Ceiling tiles"
      ],
      subSection: {
        title: "Non-porous materials:",
        bullets: [
          "Clean + disinfect",
          "HEPA vacuum"
        ]
      },
      icon: Trash2
    },
    {
      title: "Cleaning & Treatment",
      bullets: [
        "HEPA vacuum all surfaces",
        "Wipe with antimicrobial solution",
        "Wire brush / sand wood if needed",
        "Apply encapsulant if required (like on framing in crawlspace)"
      ],
      icon: Sparkles
    },
    {
      title: "Drying",
      bullets: [
        "Set up dehumidifiers",
        "Air movers",
        "Monitor moisture levels daily",
        "Make sure structure reaches dry standard"
      ],
      icon: Sun
    },
    {
      title: "Post-Remediation Verification (Optional but Professional)",
      bullets: [
        "Visual inspection",
        "Moisture readings",
        "Third-party air test (if necessary)"
      ],
      icon: ClipboardCheck
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-slate-50 overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Top Header Section */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-orange-500 font-semibold tracking-wide uppercase text-sm mb-3 relative inline-block">
            <span className="relative z-10">Our Process</span>
            <span className="absolute bottom-1 left-0 w-full h-2 bg-orange-100 -z-10 transform -rotate-1"></span>
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">How We Restore Your Home</h3>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Mold remediation is a science. We follow a strict, industry-standard protocol to ensure complete removal and safety.
          </p>
        </m.div>

        {/* Steps Timeline Section */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-6 md:left-8 top-10 bottom-10 w-0.5 bg-blue-100/50 hidden md:block"></div>

          <div className="space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <m.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  key={index}
                  className="group bg-white rounded-2xl p-6 md:p-8 border border-slate-100/80 shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-2 hover:border-blue-100 transition-all duration-300 relative overflow-hidden cursor-pointer"
                >
                  {/* Hover accent line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>

                  <div className="flex gap-4 md:gap-6 relative z-10">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:shadow-md transition-all duration-300 relative">
                        {/* Number Badge scales and changes color on hover */}
                        <span className="absolute -top-3 -right-3 w-7 h-7 bg-blue-600 group-hover:bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md z-20 transition-all duration-300 group-hover:scale-110">
                          {index + 1}
                        </span>
                        {/* Icon scales and tilts on hover */}
                        <Icon className="w-6 h-6 md:w-8 md:h-8 text-slate-400 group-hover:text-blue-600 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 relative z-10" />
                      </div>
                    </div>
                    <div className="flex-1 mt-1">
                      <h4 className="text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300 flex items-center relative gap-2">
                        {step.title}
                      </h4>
                      <ul className="text-slate-600 text-sm md:text-base leading-relaxed space-y-2">
                        {step.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0"></span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {step.subSection && (
                        <div className="mt-5 p-4 bg-slate-50 rounded-xl border border-slate-100 group-hover:bg-blue-50/50 transition-colors duration-300">
                          <p className="text-slate-800 text-sm md:text-base font-semibold mb-2 flex items-center gap-2">
                            {step.subSection.title}
                          </p>
                          <ul className="text-slate-600 text-sm md:text-base leading-relaxed space-y-1.5">
                            {step.subSection.bullets.map((bullet, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="w-1 h-1 rounded-full bg-blue-400 mt-2 flex-shrink-0"></span>
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
