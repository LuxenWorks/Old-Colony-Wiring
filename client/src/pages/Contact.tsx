// Old Colony Wiring — Contact Page
// Design: Navy & Amber Authority
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Mail, Send, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } }),
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.p variants={fadeUp} className="section-label">Get In Touch</motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
              Contact Old Colony Wiring
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-300 text-xl max-w-2xl">
              Call us for the fastest response, or fill out the form below and we'll get back to you within one business day.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold text-navy mb-8">Reach Us Directly</motion.h2>
              <div className="space-y-6 mb-10">
                <motion.div variants={fadeUp} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="bg-amber rounded-lg p-3 shrink-0"><Phone size={22} className="text-navy" /></div>
                  <div>
                    <p className="font-display font-bold text-navy text-lg">Phone</p>
                    <a href="tel:+17812005745" className="text-2xl font-display font-bold text-amber hover:text-amber-dark transition-colors">(781) 200-5745</a>
                    <p className="text-gray-500 text-sm mt-1">Call for the fastest response — free estimates available</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeUp} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="bg-amber rounded-lg p-3 shrink-0"><MapPin size={22} className="text-navy" /></div>
                  <div>
                    <p className="font-display font-bold text-navy text-lg">Address</p>
                    <p className="text-gray-700">26 Wiggins Ave<br />Bedford, MA 01730</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeUp} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="bg-amber rounded-lg p-3 shrink-0"><Clock size={22} className="text-navy" /></div>
                  <div>
                    <p className="font-display font-bold text-navy text-lg">Hours</p>
                    <p className="text-gray-700">Monday – Saturday: 7:00am – 6:00pm</p>
                    <p className="text-gray-500 text-sm">Emergency electrical service available</p>
                  </div>
                </motion.div>
                <motion.div variants={fadeUp} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                  <div className="bg-amber rounded-lg p-3 shrink-0"><Mail size={22} className="text-navy" /></div>
                  <div>
                    <p className="font-display font-bold text-navy text-lg">Email</p>
                    <a href="mailto:info@oldcolonywiring.com" className="text-amber hover:text-amber-dark transition-colors">info@oldcolonywiring.com</a>
                  </div>
                </motion.div>
              </div>
              {/* Google Map embed placeholder */}
              <motion.div variants={fadeUp} className="rounded-xl overflow-hidden shadow-lg h-64 bg-gray-200">
                <iframe
                  title="Old Colony Wiring Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.4!2d-71.2762!3d42.4937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDI5JzM3LjMiTiA3McKwMTYnMzQuMyJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <h2 className="font-display text-2xl font-bold text-navy mb-6">Request a Free Estimate</h2>
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle size={56} className="text-amber mx-auto mb-4" />
                    <h3 className="font-display text-2xl font-bold text-navy mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for contacting Old Colony Wiring. We'll reach out within one business day. For faster service, call <a href="tel:+17812005745" className="text-amber font-semibold">(781) 200-5745</a>.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-navy mb-1.5">Your Name *</label>
                        <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition" placeholder="John Smith" />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-navy mb-1.5">Phone Number *</label>
                        <input type="tel" required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition" placeholder="(781) 555-0100" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">Email Address</label>
                      <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">Service Needed</label>
                      <select value={form.service} onChange={e => setForm({...form, service: e.target.value})} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition bg-white">
                        <option value="">Select a service...</option>
                        <option value="panel-upgrade">Electrical Panel Upgrade</option>
                        <option value="rewiring">Residential Rewiring</option>
                        <option value="lighting">Recessed Lighting</option>
                        <option value="ev-charger">EV Charger Installation</option>
                        <option value="outlets">Outlet & Switch Replacement</option>
                        <option value="generator">Generator Installation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">Describe Your Project</label>
                      <textarea rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-amber focus:border-transparent transition resize-none" placeholder="Tell us about your electrical project..." />
                    </div>
                    <button type="submit" className="btn-amber w-full justify-center text-base py-4">
                      <Send size={18} />
                      Send My Request
                    </button>
                    <p className="text-gray-400 text-xs text-center">We typically respond within 4 business hours. For urgent needs, please call directly.</p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
