import { useState } from 'react';
import { motion } from 'motion/react';
import { ICONS, COMPANY_INFO } from '../constants';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    // IMPORTANT: Web3Forms requires a FormData object
    const formData = new FormData(e.currentTarget);
    // Paste your Access Key from Web3Forms here!
    formData.append("access_key", "8326e61b-d5bb-498c-89b0-234aef8c32f0");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setStatus('success');
        e.currentTarget.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* Contact Info */}
          <div className="bg-blue-600 p-6 md:p-12 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Get a Free Quote</h3>
              <p className="text-blue-100 mb-8 md:mb-10 text-base md:text-lg">
                Don't let mold compromise your health or property. Contact us today for a rapid response and professional assessment.
              </p>

              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start md:items-center gap-4">
                  <div className="bg-blue-500/50 p-3 rounded-lg shrink-0 mt-1 md:mt-0">
                    <ICONS.Phone className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-blue-200 text-sm">Call Us 24/7</p>
                    <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="text-base sm:text-lg md:text-xl font-bold hover:text-orange-300 transition-colors">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start md:items-center gap-4">
                  <div className="bg-blue-500/50 p-3 rounded-lg shrink-0 mt-1 md:mt-0">
                    <ICONS.Mail className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-blue-200 text-sm">Email Us</p>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-base sm:text-lg md:text-xl font-bold hover:text-orange-300 transition-colors block break-all sm:break-normal line-clamp-2">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start md:items-center gap-4">
                  <div className="bg-blue-500/50 p-3 rounded-lg shrink-0 mt-1 md:mt-0">
                    <ICONS.MapPin className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-blue-200 text-sm">Service Area</p>
                    <p className="text-base sm:text-lg md:text-xl font-bold leading-snug pr-2">
                      {COMPANY_INFO.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-12 pt-8 md:pt-12 border-t border-blue-500">
              <div className="flex gap-4">
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                  className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all hover:-translate-y-1 shadow-lg shadow-blue-900/20"
                  aria-label="Call us"
                >
                  <ICONS.Phone className="w-5 h-5 text-white" />
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all hover:-translate-y-1 shadow-lg shadow-blue-900/20"
                  aria-label="Email us"
                >
                  <ICONS.Mail className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://maps.google.com/?q=Richmond,+VA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all hover:-translate-y-1 shadow-lg shadow-blue-900/20"
                  aria-label="View on map"
                >
                  <ICONS.MapPin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 md:p-12 bg-white relative">



            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              {/* Optional: Add Web3Forms honeypot for spam protection */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <input type="text" name="First Name" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50/50" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <input type="text" name="Last Name" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50/50" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <input type="tel" name="Phone" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50/50" placeholder="(804) 555-0123" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">How can we help?</label>
                <textarea rows={4} name="Message" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-slate-50/50 resize-y" placeholder="Describe your issue..."></textarea>
              </div>

              {status === 'error' && (
                <p className="text-red-500 text-sm font-medium text-center">Something went wrong. Please try emailing us directly.</p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center gap-2 text-green-600 bg-green-50 py-3 rounded-lg border border-green-100 mt-4"
                >
                  <ICONS.CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <p className="font-semibold text-sm">Message sent successfully! We'll be in touch shortly.</p>
                </motion.div>
              )}

              <p className="text-xs text-slate-500 text-center mt-4">
                By submitting this form, you agree to our privacy policy. We'll never share your data.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
