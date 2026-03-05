import { m } from 'motion/react';
import Image from 'next/image';

export default function OurWork() {
  const projects = [
    {
      title: "Basement Remediation",
      location: "Richmond, VA",
      image: "https://plus.unsplash.com/premium_photo-1673014201826-ebf421d193fc?auto=format&fit=crop&w=1000&q=80",
      description: "Complete removal of black mold from basement walls and air purification."
    },
    {
      title: "Attic Restoration",
      location: "Henrico, VA",
      image: "https://plus.unsplash.com/premium_photo-1661964387248-55856fa89031?auto=format&fit=crop&w=1000&q=80",
      description: "Insulation replacement and structural treatment after roof leak."
    },
    {
      title: "Bathroom Recovery",
      location: "Glen Allen, VA",
      image: "https://plus.unsplash.com/premium_photo-1676321046695-a23b1d9f576e?auto=format&fit=crop&w=1000&q=80",
      description: "Hidden mold removal behind vanity and tile restoration."
    },
    {
      title: "Crawl Space Encapsulation",
      location: "Midlothian, VA",
      image: "https://plus.unsplash.com/premium_photo-1682148139707-915e573089ae?auto=format&fit=crop&w=1000&q=80",
      description: "Vapor barrier installation and dehumidifier setup for long-term protection."
    }
  ];

  return (
    <section id="work" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-orange-500 font-semibold tracking-wide uppercase text-sm mb-3">Our Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Recent Projects</h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            See how we've helped homeowners across Richmond and the DMV area restore their properties to a safe, healthy condition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent flex flex-col justify-end p-6 md:p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-orange-400 text-sm font-medium mb-2">{project.location}</p>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-slate-300 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.description}
                  </p>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
