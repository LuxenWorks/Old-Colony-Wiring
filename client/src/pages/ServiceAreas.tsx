// Old Colony Wiring — Service Areas Page
// Design: Navy & Amber Authority
import { motion } from "framer-motion";
import { Phone, MapPin, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } }),
};

const areas = [
  { name: "Bedford", desc: "Our home base — we've wired more homes in Bedford, MA than any other local electrician. From the historic district to new construction on the outskirts, we know Bedford's homes inside and out.", pop: "14,000+", county: "Middlesex" },
  { name: "Lexington", desc: "Serving Lexington homeowners with panel upgrades, rewiring, and EV charger installations. Lexington's older colonial homes often need knob-and-tube replacement — our specialty.", pop: "34,000+", county: "Middlesex" },
  { name: "Concord", desc: "Electrical services for Concord's historic and modern homes. We handle permit coordination with the Town of Concord building department.", pop: "18,000+", county: "Middlesex" },
  { name: "Burlington", desc: "Residential and light commercial electrical work in Burlington, MA. Panel upgrades, lighting, and EV charger installations.", pop: "26,000+", county: "Middlesex" },
  { name: "Woburn", desc: "Serving Woburn homeowners with full-service residential electrical work. From outlet replacements to complete rewiring.", pop: "41,000+", county: "Middlesex" },
  { name: "Billerica", desc: "Electrical services in Billerica, MA — panel upgrades, generator hookups, and recessed lighting.", pop: "43,000+", county: "Middlesex" },
  { name: "Chelmsford", desc: "Licensed electrician serving Chelmsford, MA. Residential rewiring, panel upgrades, and EV charger installation.", pop: "36,000+", county: "Middlesex" },
  { name: "Acton", desc: "Serving Acton homeowners with expert electrical services. Knob-and-tube replacement, panel upgrades, and smart home wiring.", pop: "24,000+", county: "Middlesex" },
  { name: "Westford", desc: "Electrical contractor serving Westford, MA. Residential panel upgrades, rewiring, and EV charging stations.", pop: "23,000+", county: "Middlesex" },
  { name: "Carlisle", desc: "Serving the rural homes of Carlisle, MA with full-service electrical work including generator installations.", pop: "5,000+", county: "Middlesex" },
  { name: "Lincoln", desc: "Electrical services for Lincoln, MA homeowners — historic home rewiring and modern electrical upgrades.", pop: "6,000+", county: "Middlesex" },
  { name: "Waltham", desc: "Licensed electrician in Waltham, MA. Panel upgrades, rewiring, and EV charger installation for Waltham homes.", pop: "62,000+", county: "Middlesex" },
];

export default function ServiceAreas() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.p variants={fadeUp} className="section-label">Where We Work</motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
              Electrician Service Areas — Middlesex County, MA
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-300 text-xl max-w-2xl mb-8">
              Old Colony Wiring serves Bedford and surrounding communities throughout Middlesex County. Licensed, bonded, and insured for all residential electrical work.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a href="tel:+17812005745" className="btn-amber text-base py-3.5 px-8">
                <Phone size={18} />
                Call (781) 200-5745
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="py-20 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <p className="section-label">Coverage Area</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">Communities We Serve</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, i) => (
              <motion.div key={area.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-lift">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={18} className="text-amber" />
                  <h3 className="font-display font-bold text-xl text-navy">{area.name}, MA</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{area.desc}</p>
                <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-3">
                  <span>Population: {area.pop}</span>
                  <span>{area.county} County</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Don't See Your Town?</h2>
          <p className="text-gray-300 mb-8">We may still be able to serve you. Call us to discuss your location — we regularly travel beyond our listed service areas for larger jobs.</p>
          <a href="tel:+17812005745" className="btn-amber text-lg py-4 px-10">
            <Phone size={20} />
            (781) 200-5745
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
