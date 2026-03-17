import { Link } from "react-router-dom";
import Logo from "./Logo";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-maroon-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center group">
              <div className="flex flex-col justify-center">
                <span className="font-serif font-bold text-[1.8rem] md:text-[2.6rem] text-white tracking-tight leading-none" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Gayatri Caterers
                </span>
                <div className="flex items-center gap-3 mt-1.5">
                  <div className="flex-grow h-[1px] rounded-full bg-white/50"></div>
                  <span className="text-[0.65rem] md:text-[0.85rem] font-bold tracking-[0.15em] text-white uppercase whitespace-nowrap">
                    Pure Veg Catering
                  </span>
                  <div className="flex-grow h-[1px] rounded-full bg-white/50"></div>
                </div>
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Premium pure vegetarian catering service in Gujarat, India. Making
              your celebrations memorable with authentic taste and impeccable
              service.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-semibold text-gold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-gold"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Menu", path: "/menu" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight size={16} className="text-gold group-hover:translate-x-1 transition-transform" /> {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-serif font-semibold text-gold mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-gold"></span>
            </h3>
            <ul className="space-y-3">
              {[
                "Wedding Catering",
                "Birthday Parties",
                "Corporate Events",
                "Religious Functions",
                "Outdoor Catering",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight size={16} className="text-gold group-hover:translate-x-1 transition-transform" /> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-semibold text-gold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-gold"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="text-gold shrink-0 mt-1" size={20} />
                <span>
                  Paresh Tailor, Oops Soni Ramchhodbhai Jewellers, Madhumati Colony
                  <br />
                  Navsari, Gujarat 396445
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="text-gold shrink-0" size={20} />
                <span>
                  +91 90991 16166 <br /> +91 72278 01023
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="text-gold shrink-0" size={20} />
                <span>info@gayatricaterers.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Gayatri Caterers. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link to="#" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer >
  );
}
