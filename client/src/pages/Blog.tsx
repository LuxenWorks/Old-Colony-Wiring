// Old Colony Wiring — Blog Page
// Design: Navy & Amber Authority
import { motion } from "framer-motion";
import { Phone, Calendar, ChevronRight, Clock } from "lucide-react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } }),
};

const posts = [
  {
    slug: "signs-you-need-electrical-panel-upgrade",
    title: "7 Signs Your Bedford Home Needs an Electrical Panel Upgrade",
    excerpt: "Is your home's electrical panel keeping up with modern power demands? Here are the warning signs Bedford homeowners should never ignore.",
    date: "June 15, 2025",
    readTime: "5 min read",
    img: "/assets/images/service_panel_b93b0b50.jpg",
    category: "Panel Upgrades",
  },
  {
    slug: "ev-charger-installation-guide-bedford-ma",
    title: "The Complete Guide to EV Charger Installation in Bedford, MA",
    excerpt: "Everything you need to know about installing a Level 2 EV charger at your Bedford home — costs, permits, and what to expect.",
    date: "May 28, 2025",
    readTime: "7 min read",
    img: "/assets/images/service_ev_b289d56e.jpg",
    category: "EV Charging",
  },
  {
    slug: "knob-and-tube-wiring-dangers-massachusetts",
    title: "Knob-and-Tube Wiring in Massachusetts: What Homeowners Need to Know",
    excerpt: "Many older New England homes still have knob-and-tube wiring. Here's why it's a problem and what your options are.",
    date: "April 10, 2025",
    readTime: "6 min read",
    img: "/assets/images/service_wiring_b3ead629.jpg",
    category: "Rewiring",
  },
  {
    slug: "recessed-lighting-cost-bedford-ma",
    title: "How Much Does Recessed Lighting Cost in Bedford, MA? (2025 Guide)",
    excerpt: "A detailed breakdown of recessed lighting installation costs in Bedford and surrounding Middlesex County towns.",
    date: "March 5, 2025",
    readTime: "4 min read",
    img: "/assets/images/service_lighting_b4eb0311.jpg",
    category: "Lighting",
  },
  {
    slug: "electrical-permit-bedford-ma-guide",
    title: "Do You Need an Electrical Permit in Bedford, MA? (Complete Guide)",
    excerpt: "Massachusetts requires permits for most electrical work. Here's what requires a permit, how to get one, and why you should never skip it.",
    date: "February 18, 2025",
    readTime: "5 min read",
    img: "/assets/images/service_outlets_670327e4.jpg",
    category: "Permits & Code",
  },
  {
    slug: "generator-installation-new-england-winter",
    title: "Why Every New England Home Needs a Standby Generator",
    excerpt: "Winter storms, nor'easters, and ice storms make power outages a fact of life in Massachusetts. Here's how to protect your home.",
    date: "January 22, 2025",
    readTime: "6 min read",
    img: "/assets/images/about_team_4d654f33.jpg",
    category: "Generators",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.p variants={fadeUp} className="section-label">Electrical Tips & Guides</motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
              The Old Colony Wiring Blog
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-300 text-xl max-w-2xl">
              Electrical tips, guides, and advice for Bedford, MA homeowners — from our licensed electricians.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-[#F8F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article key={post.slug} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i} variants={fadeUp} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 card-lift">
                <div className="relative h-48 overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-amber text-navy text-xs font-display font-bold uppercase tracking-wide px-3 py-1 rounded-full">{post.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12} />{post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} />{post.readTime}</span>
                  </div>
                  <h2 className="font-display font-bold text-lg text-navy mb-2 leading-tight">{post.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="flex items-center gap-1 text-amber font-display font-semibold text-sm uppercase tracking-wide hover:gap-2 transition-all">
                    Read Article <ChevronRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Have an Electrical Question?</h2>
          <p className="text-gray-300 mb-8">Don't guess — call a licensed electrician. Old Colony Wiring offers free phone consultations for Bedford-area homeowners.</p>
          <a href="tel:+17812005745" className="btn-amber text-lg py-4 px-10">
            <Phone size={20} />
            Call (781) 200-5745
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

