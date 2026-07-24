// Old Colony Wiring — Services Page
// Design: Navy & Amber Authority
import { motion } from "framer-motion";
import { Phone, CheckCircle, ChevronRight, Settings, Home as HomeIcon, Lightbulb, BatteryCharging, Wrench, Zap, Shield, AlertTriangle } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } }),
};

const services = [
  {
    icon: Settings,
    title: "Electrical Panel Upgrades",
    slug: "electrical-panel-upgrade",
    img: "/manus-storage/service_panel_b93b0b50.jpg",
    summary: "Upgrade your home's electrical service to 200 amps for modern power demands.",
    details: [
      "200-amp service upgrades from 60 or 100 amp",
      "Breaker panel replacement and load center installation",
      "Federal Pacific and Zinsco panel replacements",
      "Meter socket upgrades",
      "All permits pulled and inspections managed",
    ],
    why: "An outdated electrical panel is a fire hazard and limits your home's capacity. If your panel is over 25 years old, has fuses instead of breakers, or trips frequently, it's time for an upgrade.",
  },
  {
    icon: HomeIcon,
    title: "Residential Rewiring",
    slug: "residential-rewiring",
    img: "/manus-storage/service_wiring_b3ead629.jpg",
    summary: "Complete rewiring for older Bedford-area homes — safe, code-compliant, and done right.",
    details: [
      "Knob-and-tube wiring replacement",
      "Aluminum wiring remediation",
      "Whole-home rewiring for 1950s–1980s homes",
      "Code compliance upgrades",
      "Arc-fault circuit interrupter (AFCI) installation",
    ],
    why: "Older wiring materials like knob-and-tube or aluminum pose serious fire and shock risks. Massachusetts home inspectors flag these issues — we resolve them completely.",
  },
  {
    icon: Lightbulb,
    title: "Recessed Lighting",
    slug: "recessed-lighting",
    img: "/manus-storage/service_lighting_b4eb0311.jpg",
    summary: "Transform any room with professional LED recessed lighting installation.",
    details: [
      "LED recessed can light installation",
      "Dimmer switch installation",
      "Whole-home lighting upgrades",
      "Under-cabinet lighting",
      "Outdoor and landscape lighting",
    ],
    why: "Recessed lighting adds value, improves ambiance, and reduces energy costs. Our electricians install recessed lights without damaging your ceilings — clean and professional.",
  },
  {
    icon: BatteryCharging,
    title: "EV Charger Installation",
    slug: "ev-charger-installation",
    img: "/manus-storage/service_ev_b289d56e.jpg",
    summary: "Level 2 EV charging station installation for all major electric vehicle brands.",
    details: [
      "Level 2 (240V) EVSE installation",
      "NEMA 14-50 outlet installation",
      "Tesla Wall Connector installation",
      "ChargePoint, JuiceBox, and Clipper Creek",
      "Dedicated 50-amp circuit installation",
    ],
    why: "A Level 2 home charger charges your EV 5–8x faster than a standard outlet. We handle the dedicated circuit, permit, and inspection — you just plug in and charge.",
  },
  {
    icon: Wrench,
    title: "Outlet & Switch Replacement",
    slug: "outlet-switch-replacement",
    img: "/manus-storage/service_outlets_670327e4.jpg",
    summary: "GFCI outlets, USB outlets, smart switches, and whole-panel outlet upgrades.",
    details: [
      "GFCI outlet installation (kitchen, bath, garage)",
      "USB and USB-C outlet installation",
      "Smart switch and dimmer installation",
      "Whole-home outlet replacement",
      "Tamper-resistant outlet installation",
    ],
    why: "GFCI outlets are required by code in kitchens, bathrooms, and garages. We upgrade your outlets to meet current Massachusetts electrical code and improve safety.",
  },
  {
    icon: Zap,
    title: "Generator Installation",
    slug: "generator-installation",
    img: "/manus-storage/service_panel_b93b0b50.jpg",
    summary: "Standby and portable generator hookups for New England's unpredictable weather.",
    details: [
      "Automatic standby generator installation",
      "Transfer switch installation",
      "Portable generator hookup",
      "Generac and Kohler certified",
      "Annual maintenance and testing",
    ],
    why: "New England winters mean power outages. A properly installed standby generator keeps your heat, lights, and sump pump running — protecting your family and your home.",
  },
  {
    icon: Shield,
    title: "Smoke & CO Detector Installation",
    slug: "smoke-co-detector-installation",
    img: "/manus-storage/service_wiring_b3ead629.jpg",
    summary: "Hardwired smoke and carbon monoxide detector installation to Massachusetts code.",
    details: [
      "Hardwired smoke detector installation",
      "Combination smoke/CO detector installation",
      "Massachusetts code compliance",
      "Interconnected detector systems",
      "Real estate sale compliance inspections",
    ],
    why: "Massachusetts requires hardwired smoke and CO detectors for home sales. We install code-compliant systems that protect your family and satisfy inspectors.",
  },
  {
    icon: AlertTriangle,
    title: "Electrical Troubleshooting",
    slug: "electrical-troubleshooting",
    img: "/manus-storage/service_outlets_670327e4.jpg",
    summary: "Diagnose and repair tripping breakers, flickering lights, and electrical faults.",
    details: [
      "Tripping breaker diagnosis and repair",
      "Flickering light troubleshooting",
      "Dead outlet diagnosis",
      "Electrical fault location",
      "Emergency electrical service",
    ],
    why: "Electrical problems don't fix themselves — they get worse. Our licensed electricians diagnose the root cause and fix it right, not just the symptom.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Page Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.p variants={fadeUp} className="section-label">What We Offer</motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
              Electrical Services in Bedford, MA
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-300 text-xl max-w-2xl mb-8">
              From panel upgrades to EV charger installations — Old Colony Wiring handles every residential electrical need in Bedford and surrounding Middlesex County communities.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a href="tel:+17812005745" className="btn-amber text-base py-3.5 px-8">
                <Phone size={18} />
                Call (781) 200-5745 for a Free Estimate
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((svc, i) => (
              <motion.div
                key={svc.slug}
                id={svc.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
                variants={fadeUp}
                className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <img src={svc.img} alt={svc.title + " Bedford MA"} className="rounded-2xl w-full h-72 object-cover shadow-lg" loading="lazy" />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-amber rounded-lg p-2.5">
                      <svc.icon size={22} className="text-navy" />
                    </div>
                    <p className="section-label !mb-0">Service</p>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-3">{svc.title}</h2>
                  <p className="text-gray-600 text-lg mb-4">{svc.summary}</p>
                  <p className="text-gray-500 leading-relaxed mb-5 text-sm border-l-4 border-amber pl-4">{svc.why}</p>
                  <ul className="space-y-2 mb-6">
                    {svc.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-gray-700 text-sm">
                        <CheckCircle size={16} className="text-amber shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <a href="tel:+17812005745" className="btn-amber text-sm py-3 px-6">
                    <Phone size={16} />
                    Get a Free Estimate
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8">Call Old Colony Wiring today for a free, no-obligation estimate on any electrical service in Bedford, MA.</p>
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
