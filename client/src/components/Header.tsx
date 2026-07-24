// Old Colony Wiring — Header Component
// Design: Navy & Amber Authority — sticky header, transitions on scroll
// Fonts: Oswald (display) + Source Sans 3 (body)
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X, Zap } from "lucide-react";
import { LightningMark } from "@/components/BrandMark";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [location]);

  const isHome = location === "/";

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-navy-dark text-white py-2 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span className="font-body text-gray-300">
            Serving Bedford, Lexington, Concord & Surrounding Communities
          </span>
          <div className="flex items-center gap-6">
            <span className="text-gray-300">Mon–Sat: 7am–6pm</span>
            <a
              href="tel:+17812005745"
              className="flex items-center gap-1.5 text-amber font-display font-semibold tracking-wide hover:text-amber-dark transition-colors"
            >
              <Phone size={14} />
              (781) 200-5745
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? "bg-navy shadow-lg shadow-navy/20"
            : "bg-navy/95 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-2">
                <LightningMark size={36} color="#F5A623" />
                <div>
                  <p className="font-display font-bold text-white text-lg leading-tight tracking-wide uppercase">Old Colony</p>
                  <p className="font-display font-medium text-amber text-sm leading-tight tracking-widest uppercase">Wiring</p>
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-display font-medium text-sm tracking-wide uppercase px-3 py-2 rounded transition-colors ${
                    location === link.href
                      ? "text-amber"
                      : "text-white/90 hover:text-amber"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+17812005745" className="btn-amber text-sm py-2.5 px-5">
                <Phone size={16} />
                Call Now
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2 rounded"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu overlay */}
        {mobileOpen && (
          <div className="lg:hidden bg-navy-dark border-t border-white/10">
            <div className="px-4 py-4 space-y-1">
              <a
                href="tel:+17812005745"
                className="flex items-center gap-2 text-amber font-display font-bold text-lg tracking-wide uppercase py-3 border-b border-white/10"
              >
                <Phone size={18} />
                (781) 200-5745
              </a>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block font-display font-medium text-base tracking-wide uppercase py-3 border-b border-white/10 ${
                    location === link.href ? "text-amber" : "text-white/90"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:+17812005745" className="btn-amber w-full justify-center mt-4 text-base">
                <Phone size={18} />
                Get a Free Estimate
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Mobile sticky call bar */}
      <a href="tel:+17812005745" className="mobile-call-bar">
        <Phone size={20} />
        Tap to Call: (781) 200-5745
      </a>
    </>
  );
}
