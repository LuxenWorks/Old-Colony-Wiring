// Old Colony Wiring — Footer Component
// Design: Navy & Amber Authority — dark navy footer with amber accents
import { Link } from "wouter";
import { Phone, MapPin, Clock, Mail, Facebook, Instagram, Star } from "lucide-react";
import { LightningMark } from "@/components/BrandMark";

const services = [
  { label: "Electrical Panel Upgrades", href: "/services/electrical-panel-upgrade" },
  { label: "Residential Rewiring", href: "/services/residential-rewiring" },
  { label: "EV Charger Installation", href: "/services/ev-charger-installation" },
  { label: "Recessed Lighting", href: "/services/recessed-lighting" },
  { label: "Outlet & Switch Replacement", href: "/services/outlet-switch-replacement" },
  { label: "Generator Installation", href: "/services/generator-installation" },
];

const areas = [
  "Bedford, MA", "Lexington, MA", "Concord, MA", "Burlington, MA",
  "Woburn, MA", "Billerica, MA", "Chelmsford, MA", "Acton, MA",
  "Westford, MA", "Carlisle, MA",
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <LightningMark size={40} color="#F5A623" />
              <div>
                <p className="font-display font-bold text-white text-xl leading-tight tracking-wide uppercase">Old Colony</p>
                <p className="font-display font-medium text-amber text-sm leading-tight tracking-widest uppercase">Wiring</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Licensed, bonded, and insured electricians serving Bedford, MA and surrounding Middlesex County communities since 2005.
            </p>
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-amber fill-amber" />
              ))}
              <span className="text-gray-400 text-sm ml-2">4.9 / 87 Reviews</span>
            </div>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-amber transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-lg text-amber uppercase tracking-wide mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-display font-semibold text-lg text-amber uppercase tracking-wide mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {areas.map((area) => (
                <li key={area}>
                  <span className="text-gray-400 text-sm">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg text-amber uppercase tracking-wide mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-amber mt-0.5 shrink-0" />
                <div>
                  <a href="tel:+17812005745" className="text-white font-semibold hover:text-amber transition-colors">
                    (781) 200-5745
                  </a>
                  <p className="text-gray-400 text-sm">Free Estimates</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber mt-0.5 shrink-0" />
                <div>
                  <p className="text-white text-sm">26 Wiggins Ave</p>
                  <p className="text-gray-400 text-sm">Bedford, MA 01730</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-amber mt-0.5 shrink-0" />
                <div>
                  <p className="text-white text-sm">Mon–Sat: 7am–6pm</p>
                  <p className="text-gray-400 text-sm">Emergency service available</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-amber mt-0.5 shrink-0" />
                <a href="mailto:info@oldcolonywiring.com" className="text-gray-400 hover:text-white text-sm transition-colors">
                  info@oldcolonywiring.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Old Colony Wiring. All rights reserved. | MA License #E-12345
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/sitemap" className="text-gray-500 hover:text-gray-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
