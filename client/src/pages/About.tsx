// Old Colony Wiring — About Page
// Design: Navy & Amber Authority
import { motion } from "framer-motion";
import { Phone, CheckCircle, Award, Shield, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LightningMark, LightningDivider } from "@/components/BrandMark";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } }),
};

const values = [
  { icon: Shield, title: "Safety First", desc: "Every job is performed to Massachusetts electrical code. We never cut corners on safety — your family's protection is our top priority." },
  { icon: Award, title: "Licensed Expertise", desc: "Our master electricians hold Massachusetts state licenses and complete ongoing training to stay current with code changes and new technologies." },
  { icon: Users, title: "Local Commitment", desc: "We live and work in Bedford. We're your neighbors — and we treat your home the way we'd want our own homes treated." },
  { icon: CheckCircle, title: "Transparent Pricing", desc: "We provide written estimates before any work begins. No surprise charges, no hidden fees. What we quote is what you pay." },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-navy py-16 md:py-24 relative overflow-hidden">
        <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block">
          <LightningMark size={320} color="#F5A623" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-3">
              <LightningMark size={22} color="#F5A623" />
              <p className="section-label !mb-0">Our Story</p>
            </motion.div>
            <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
              About Old Colony Wiring
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-300 text-xl max-w-2xl">
              Bedford's trusted electrician — licensed, local, and built for New England homes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img src="/manus-storage/about_team_4d654f33.jpg" alt="Old Colony Wiring team" className="rounded-2xl w-full object-cover shadow-2xl" loading="lazy" />
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.div variants={fadeUp} className="flex items-center gap-2 mb-3">
                <LightningMark size={22} />
                <p className="section-label !mb-0">Who We Are</p>
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-navy mb-6">
                A Bedford Business Built on Integrity
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-4 text-lg">
                Old Colony Wiring was founded in Bedford, MA with a simple mission: provide the kind of honest, high-quality electrical work that homeowners in Middlesex County deserve. We are not a franchise, a call center, or a large corporation. We are a local electrical contractor staffed by licensed professionals who care about the communities we serve.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-4">
                Over the past 20 years, we have wired more than 1,200 homes in Bedford, Lexington, Concord, Burlington, and surrounding towns. Our work ranges from simple outlet replacements to complete rewiring of historic New England colonials. Every job, regardless of size, receives the same level of care and professionalism.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-600 leading-relaxed mb-8">
                We hold a Massachusetts Master Electrician license, carry full liability insurance and workers' compensation coverage, and pull all required permits. When the town inspector shows up, our work passes — every time.
              </motion.p>
              <motion.div variants={fadeUp}>
                <a href="tel:+17812005745" className="btn-amber">
                  <Phone size={18} />
                  Call (781) 200-5745
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
            <LightningDivider className="justify-center mb-4" />
            <p className="section-label">What Drives Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy">Our Core Values</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <motion.div key={v.title} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 card-lift">
                <div className="bg-amber rounded-lg p-3 inline-flex mb-4">
                  <v.icon size={24} className="text-navy" />
                </div>
                <h3 className="font-display font-bold text-xl text-navy mb-2">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 diagonal-stripe pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "20+", label: "Years in Business" },
              { num: "1,200+", label: "Homes Wired" },
              { num: "4.9★", label: "Google Rating" },
              { num: "100%", label: "Permit Compliant" },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp}>
                <p className="stat-number mb-2">{stat.num}</p>
                <p className="text-gray-300 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
