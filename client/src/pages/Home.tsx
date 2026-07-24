// Old Colony Wiring — Homepage
// Design: Navy & Amber Authority
// Goal: Generate phone calls from Bedford MA homeowners
import { motion } from "framer-motion";
import { Phone, Shield, Award, Clock, CheckCircle, Star, MapPin, Zap, ChevronRight, Wrench, Home as HomeIcon, Lightbulb, BatteryCharging, Settings } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LightningMark, LightningDivider, LightningAccent } from "@/components/BrandMark";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.08 } }),
};

const services = [
  { icon: Settings, title: "Electrical Panel Upgrades", desc: "200-amp service upgrades, breaker replacements, and load center installations for modern homes.", href: "/services/electrical-panel-upgrade", img: "/manus-storage/service_panel_b93b0b50.jpg" },
  { icon: HomeIcon, title: "Residential Rewiring", desc: "Complete rewiring of older homes, knob-and-tube replacement, and code compliance upgrades.", href: "/services/residential-rewiring", img: "/manus-storage/service_wiring_b3ead629.jpg" },
  { icon: Lightbulb, title: "Recessed Lighting", desc: "LED recessed light installation, dimmer switches, and whole-home lighting upgrades.", href: "/services/recessed-lighting", img: "/manus-storage/service_lighting_b4eb0311.jpg" },
  { icon: BatteryCharging, title: "EV Charger Installation", desc: "Level 2 EV charging station installation for all major electric vehicle brands.", href: "/services/ev-charger-installation", img: "/manus-storage/service_ev_b289d56e.jpg" },
  { icon: Wrench, title: "Outlet & Switch Replacement", desc: "GFCI outlets, USB outlets, smart switches, and whole-panel outlet upgrades.", href: "/services/outlet-switch-replacement", img: "/manus-storage/service_outlets_670327e4.jpg" },
  { icon: Zap, title: "Generator Installation", desc: "Standby and portable generator hookups, transfer switches, and emergency power systems.", href: "/services/generator-installation", img: "/manus-storage/service_panel_b93b0b50.jpg" },
];

const trustBadges = [
  { icon: Shield, title: "Licensed & Insured", desc: "MA Licensed Electrician — fully bonded and insured for your protection." },
  { icon: Award, title: "20+ Years Experience", desc: "Serving Bedford and Middlesex County homeowners since 2005." },
  { icon: Clock, title: "On-Time Guarantee", desc: "We show up when we say we will — or we discount your invoice." },
  { icon: Star, title: "4.9-Star Rated", desc: "87 verified 5-star Google reviews from your neighbors." },
];

const testimonials = [
  { name: "Sarah M.", city: "Bedford, MA", stars: 5, text: "Old Colony Wiring upgraded our electrical panel and installed recessed lighting throughout the house. The team was professional, clean, and finished ahead of schedule. Highly recommend!" },
  { name: "Tom K.", city: "Lexington, MA", stars: 5, text: "Called them for an emergency outlet issue and they were at my house within two hours. Fixed the problem quickly and explained everything clearly. Fair pricing too." },
  { name: "Jennifer R.", city: "Concord, MA", stars: 5, text: "Had them install a Level 2 EV charger in my garage. The work was immaculate — clean installation, all permits pulled, and they walked me through the whole setup. Five stars." },
  { name: "David L.", city: "Burlington, MA", stars: 5, text: "Rewired our 1960s colonial — a big job. Old Colony Wiring handled it professionally from start to finish. They coordinated with the town inspector and everything passed first time." },
];

const serviceAreas = [
  "Bedford", "Lexington", "Concord", "Burlington", "Woburn",
  "Billerica", "Chelmsford", "Acton", "Westford", "Carlisle",
  "Lincoln", "Waltham", "Stow", "Boxborough", "Littleton",
];

const faqs = [
  { q: "How much does an electrical panel upgrade cost in Bedford, MA?", a: "A 200-amp panel upgrade in Bedford typically ranges from $1,500 to $3,500 depending on the scope of work, permit fees, and whether the meter socket needs replacement. We provide free, no-obligation estimates." },
  { q: "Do I need a permit for electrical work in Bedford, MA?", a: "Yes. Most electrical work in Massachusetts requires a permit from the local building department. Old Colony Wiring handles all permit applications and inspections on your behalf." },
  { q: "How long does a panel upgrade take?", a: "Most residential panel upgrades are completed in one day. We coordinate with Eversource for the meter disconnect and reconnect, so there is typically a 4–6 hour power outage during the work." },
  { q: "Are you licensed to work in Massachusetts?", a: "Yes. We hold a Massachusetts Master Electrician license and carry full liability insurance and workers' compensation coverage. License details are available upon request." },
  { q: "Do you install EV chargers for all car brands?", a: "Yes. We install Level 2 (240V) charging stations compatible with Tesla, Ford, GM, Rivian, BMW, and all other major EV brands. We can also install a NEMA 14-50 outlet for universal compatibility." },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/manus-storage/hero_bg_415d0334.jpg')" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1A30]/90 via-[#1B2A4A]/80 to-[#1B2A4A]/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.p variants={fadeUp} className="section-label mb-3">Bedford, MA's Trusted Electrician</motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Expert Electrical<br />
              <span className="text-amber">Service You Can</span><br />
              Count On
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Old Colony Wiring has served over 1,200 Bedford-area homeowners with safe, code-compliant electrical work since 2005. Licensed, bonded, and insured — we get it right the first time.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+17812005745" className="btn-amber text-base py-4 px-8">
                <Phone size={20} />
                Call (781) 200-5745
              </a>
              <Link href="/contact" className="btn-navy border border-white/30 text-base py-4 px-8">
                Get a Free Estimate
                <ChevronRight size={18} />
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
              {["Licensed & Insured", "Free Estimates", "Permit Included", "Satisfaction Guaranteed"].map((badge) => (
                <span key={badge} className="flex items-center gap-1.5 text-sm text-gray-200">
                  <CheckCircle size={15} className="text-amber" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero trust card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:block"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-amber fill-amber" />)}
                </div>
                <span className="text-white font-semibold">4.9 Stars — 87 Reviews</span>
              </div>
              <blockquote className="text-gray-200 italic text-lg leading-relaxed mb-6">
                "Old Colony Wiring upgraded our panel and rewired our 1960s colonial. Professional, on-time, and fair pricing. They're the only electricians we call."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber flex items-center justify-center font-display font-bold text-navy">M</div>
                <div>
                  <p className="text-white font-semibold text-sm">Michael T.</p>
                  <p className="text-gray-400 text-xs">Bedford, MA</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-3 gap-4 text-center">
                <div><p className="text-2xl font-display font-bold text-amber">20+</p><p className="text-gray-300 text-xs">Years Serving MA</p></div>
                <div><p className="text-2xl font-display font-bold text-amber">1,200+</p><p className="text-gray-300 text-xs">Homes Wired</p></div>
                <div><p className="text-2xl font-display font-bold text-amber">100%</p><p className="text-gray-300 text-xs">Permit Compliant</p></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BADGES BAR — with lightning brand accent */}
      <section className="bg-amber py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {trustBadges.map((badge, i) => (
              <motion.div
                key={badge.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="flex items-center gap-3"
              >
                <div className="bg-navy/10 rounded-lg p-2 shrink-0">
                  <badge.icon size={22} className="text-navy" />
                </div>
                <div>
                  <p className="font-display font-bold text-navy text-sm uppercase tracking-wide leading-tight">{badge.title}</p>
                  <p className="text-navy/70 text-xs leading-snug hidden md:block mt-0.5">{badge.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <LightningMark size={28} />
              <p className="section-label !mb-0">What We Do</p>
              <LightningMark size={28} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy">
              Electrical Services in Bedford, MA
            </h2>
            <div className="flex justify-center mt-3 mb-4">
              <div className="h-1 w-16 bg-amber rounded-full" />
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From panel upgrades to EV charger installations, Old Colony Wiring handles every residential electrical need with precision and care.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="card-lift bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={svc.img} alt={svc.title + " in Bedford MA"} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-amber rounded-lg p-2 inline-flex">
                      <svc.icon size={20} className="text-navy" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-navy mb-2">{svc.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{svc.desc}</p>
                  <Link href={svc.href} className="flex items-center gap-1 text-amber font-display font-semibold text-sm uppercase tracking-wide hover:gap-2 transition-all">
                    Learn More <ChevronRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mt-10">
            <Link href="/services" className="btn-navy text-base">
              View All Services <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-navy clip-diagonal-bottom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <LightningMark size={28} color="#F5A623" />
              <p className="section-label !mb-0">Simple Process</p>
              <LightningMark size={28} color="#F5A623" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              Getting Wired Right Is Easy
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Call or Request Online", desc: "Call (781) 200-5745 or submit our online form. We'll schedule your free estimate within 24 hours." },
              { step: "02", title: "We Diagnose & Plan", desc: "Our licensed electrician visits your home, assesses the work, and provides a clear, written estimate with no hidden fees." },
              { step: "03", title: "We Complete the Work", desc: "We pull all required permits, complete the work to code, and pass the inspection — guaranteed. You get your home back, safe and powered." },
            ].map((step, i) => (
              <motion.div key={step.step} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="relative">
                <div className="text-7xl font-display font-bold text-white/10 mb-4 leading-none">{step.step}</div>
                <div className="w-12 h-1 bg-amber mb-4 rounded-full" />
                <h3 className="font-display font-bold text-2xl text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mt-12">
            <a href="tel:+17812005745" className="btn-amber text-base py-4 px-10">
              <Phone size={20} />
              Call Now for a Free Estimate
            </a>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 bg-white" style={{ marginTop: "-1px" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <img
                src="/manus-storage/about_team_4d654f33.jpg"
                alt="Old Colony Wiring team in Bedford MA"
                className="rounded-2xl w-full object-cover shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber rounded-xl p-5 shadow-xl hidden md:block">
                <p className="font-display font-bold text-3xl text-navy">20+</p>
                <p className="font-body text-navy/80 text-sm font-semibold">Years Serving<br />Bedford, MA</p>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.p variants={fadeUp} className="section-label">About Old Colony Wiring</motion.p>
              <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                Bedford's Electrician — Built on Trust
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-600 text-lg leading-relaxed mb-4">
                Old Colony Wiring was founded in Bedford, MA with one goal: deliver honest, high-quality electrical work to the homeowners of Middlesex County. We are not a franchise or a call center — we are your neighbors.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-6">
                Every job is handled by a Massachusetts-licensed master electrician. We pull all required permits, coordinate with local inspectors, and stand behind our work with a satisfaction guarantee. From simple outlet replacements to full-home rewiring, we treat your home like our own.
              </motion.p>
              <motion.ul variants={fadeUp} className="space-y-3 mb-8">
                {["Massachusetts Master Electrician License", "Fully bonded and insured", "All permits pulled and inspections managed", "Clean, respectful job sites — we protect your home", "Flat-rate pricing — no surprise invoices"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={18} className="text-amber shrink-0" />
                    {item}
                  </li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp} className="flex gap-4">
                <a href="tel:+17812005745" className="btn-amber">
                  <Phone size={18} />
                  Call Now
                </a>
                <Link href="/about" className="btn-navy">
                  Our Story
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <LightningMark size={28} />
              <p className="section-label !mb-0">What Neighbors Say</p>
              <LightningMark size={28} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy">
              Real Reviews from Real Customers
            </h2>
            <div className="flex justify-center mt-3">
              <div className="h-1 w-16 bg-amber rounded-full" />
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="bg-white rounded-xl p-7 shadow-sm border border-gray-100 card-lift">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.stars)].map((_, j) => <Star key={j} size={16} className="text-amber fill-amber" />)}
                </div>
                <p className="text-gray-700 leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center font-display font-bold text-amber text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs flex items-center gap-1"><MapPin size={11} />{t.city}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-20 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <LightningMark size={28} color="#F5A623" />
              <p className="section-label !mb-0">Where We Work</p>
              <LightningMark size={28} color="#F5A623" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
              Serving Middlesex County & Beyond
            </h2>
            <p className="mt-4 text-gray-300 max-w-xl mx-auto">
              Based in Bedford, MA — we serve communities throughout Middlesex County and the greater MetroWest area.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-wrap justify-center gap-3 mb-10">
            {serviceAreas.map((area) => (
              <span key={area} className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-body hover:bg-amber hover:text-navy hover:border-amber transition-all cursor-default">
                {area}, MA
              </span>
            ))}
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center">
            <Link href="/service-areas" className="btn-amber">
              View All Service Areas <ChevronRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <p className="section-label">Common Questions</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy">
              Electrician FAQ — Bedford, MA
            </h2>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.details key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="group bg-[#F8F9FC] rounded-xl border border-gray-100 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-display font-semibold text-navy text-lg list-none">
                  {faq.q}
                  <ChevronRight size={20} className="text-amber shrink-0 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1B2A4A 0%, #0F1A30 100%)" }}
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('/manus-storage/cta_bg_7e67ca2b.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.p variants={fadeUp} className="section-label mb-3">Ready to Get Started?</motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
              Call Bedford's Most Trusted Electrician Today
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
              Free estimates. All permits included. Satisfaction guaranteed. Old Colony Wiring — wiring Bedford homes right since 2005.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+17812005745" className="btn-amber text-lg py-5 px-12">
                <Phone size={22} />
                (781) 200-5745
              </a>
              <Link href="/contact" className="btn-navy border border-white/30 text-lg py-5 px-12">
                Request Online Estimate
              </Link>
            </motion.div>
            <motion.p variants={fadeUp} className="mt-6 text-gray-400 text-sm">
              26 Wiggins Ave, Bedford, MA 01730 · Mon–Sat 7am–6pm · Emergency service available
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
