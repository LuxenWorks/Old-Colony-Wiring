import { Link } from "wouter";
import { Phone, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="flex-1 flex items-center justify-center bg-[#F8F9FC] py-24">
        <div className="text-center max-w-lg px-4">
          <p className="font-display text-8xl font-bold text-amber mb-4">404</p>
          <h1 className="font-display text-3xl font-bold text-navy mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">The page you're looking for doesn't exist. Let's get you back on track.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-navy">
              <Home size={18} />
              Back to Home
            </Link>
            <a href="tel:+17812005745" className="btn-amber">
              <Phone size={18} />
              Call (781) 200-5745
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
