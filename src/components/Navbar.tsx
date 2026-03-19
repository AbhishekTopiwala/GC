import { useState, useEffect, ChangeEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, Globe } from "lucide-react";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { useTranslation } from "react-i18next";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Menu", path: "/menu" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isHomePage = location.pathname === "/";
  const hasBackground = isScrolled || !isHomePage;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-300">
      {/* Top Bar - Hidden when scrolled or mobile menu open to save space */}
      <div
        className={cn(
          "bg-maroon-dark text-white flex items-center justify-between px-2 md:px-8 transition-all duration-500 overflow-hidden",
          hasBackground || isMobileMenuOpen ? "max-h-0 opacity-0 py-0" : "max-h-20 opacity-100 py-1.5 md:py-2"
        )}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-[0.65rem] md:text-sm gap-1 md:gap-0">
          <div className="flex items-center gap-4 md:gap-6 justify-center w-full md:w-auto">
            <a href="tel:+919099116166" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone size={12} className="text-gold" style={{ width: '1em', height: '1em' }} />
              <span>+91 90991 16166</span>
            </a>
            <a href="https://wa.me/919099116166" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[#25D366] transition-colors">
              <MessageCircle size={12} className="text-[#25D366]" style={{ width: '1em', height: '1em' }} />
              <span>{t('nav.WhatsApp Us')}</span>
            </a>
          </div>
          <div className="font-serif italic text-gold-light tracking-wider text-center w-full md:w-auto truncate">
            {t('nav.Pure Veg Catering for Every Occasion')}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={cn(
          "transition-all duration-300",
          hasBackground ? "bg-white shadow-lg py-2" : "bg-transparent py-4 border-b border-white/10"
        )}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Name (Logo removed) */}
            <Link to="/" className="flex items-center gap-3 z-50 group">
              <div className="flex flex-col justify-center">
                <span
                  className={cn(
                    "font-serif font-bold text-[1.8rem] md:text-[2.6rem] tracking-tight leading-none transition-colors duration-300",
                    hasBackground || isMobileMenuOpen ? "text-[#5e0000]" : "text-white drop-shadow-md"
                  )}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  <span className="capitalize">{t('nav.Gayatri Caterers')}</span>
                </span>

                <div className="flex items-center gap-3 mt-[4px]">
                  <div className={cn("flex-grow h-[1px] rounded-full", hasBackground || isMobileMenuOpen ? "bg-[#C89B3C]" : "bg-white/50")}></div>
                  <span
                    className={cn(
                      "text-[0.65rem] md:text-[0.85rem] font-bold tracking-[0.15em] transition-colors duration-300 uppercase whitespace-nowrap",
                      hasBackground || isMobileMenuOpen ? "text-[#3D6611]" : "text-white"
                    )}
                  >
                    {t('nav.Pure Veg Catering')}
                  </span>
                  <div className={cn("flex-grow h-[1px] rounded-full", hasBackground || isMobileMenuOpen ? "bg-[#C89B3C]" : "bg-white/50")}></div>
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "relative text-sm font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5 group",
                    location.pathname === link.path
                      ? "text-gold"
                      : hasBackground
                        ? "text-gray-800 hover:text-maroon"
                        : "text-white drop-shadow-sm hover:text-gold"
                  )}
                >
                  {t(`nav.${link.name}`)}
                  <span className={cn(
                    "absolute -bottom-2 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full",
                    location.pathname === link.path ? "w-full" : ""
                  )}></span>
                </Link>
              ))}
              <Link
                to="/contact"
                className={cn(
                  "px-8 py-3 rounded-full font-bold uppercase tracking-wide transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 border-2",
                  hasBackground
                    ? "bg-maroon text-white border-maroon hover:bg-white hover:text-maroon"
                    : "bg-gold text-maroon-dark border-gold hover:bg-transparent hover:text-gold"
                )}
              >
                {t('nav.Get Quote')}
              </Link>

              {/* Language Switcher Desktop */}
              <div className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 shadow-sm transition-colors",
                hasBackground ? "bg-gray-50 text-gray-800" : "bg-white/10 text-white border-white/20 backdrop-blur-sm"
              )}>
                <Globe size={16} className={hasBackground ? "text-gray-600" : "text-white/80"} />
                <select
                  value={i18n.language.substring(0, 2)}
                  onChange={handleLanguageChange}
                  className="bg-transparent font-medium text-sm focus:outline-none cursor-pointer"
                >
                  <option value="gu" className="text-black">ગુજરાતી</option>
                  <option value="en" className="text-black">English</option>
                </select>
              </div>
            </nav>

            {/* Mobile Menu Toggle & Language Switcher */}
            <div className="flex items-center gap-2 lg:hidden z-50">
              <div className={cn(
                "flex items-center gap-1 px-2 py-1 rounded-full border",
                hasBackground || isMobileMenuOpen ? "bg-gray-50 border-gray-200 text-gray-800" : "bg-white/10 text-white border-white/20"
              )}>
                <Globe size={14} />
                <select
                  value={i18n.language.substring(0, 2)}
                  onChange={handleLanguageChange}
                  className="bg-transparent font-medium text-xs focus:outline-none cursor-pointer"
                >
                  <option value="gu" className="text-black">GU</option>
                  <option value="en" className="text-black">EN</option>
                </select>
              </div>
              <button
                className={cn(
                  "p-2 rounded-lg transition-colors",
                  hasBackground || isMobileMenuOpen ? "text-maroon hover:bg-maroon/5" : "text-white hover:bg-white/10"
                )}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 right-0 bg-white shadow-2xl pt-28 pb-8 px-6 flex flex-col lg:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={link.name}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      "text-2xl font-serif border-b border-gray-100 pb-4 block transition-colors",
                      location.pathname === link.path ? "text-gold font-bold" : "text-gray-800 hover:text-maroon"
                    )}
                  >
                    {t(`nav.${link.name}`)}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4"
              >
                <Link
                  to="/contact"
                  className="bg-maroon hover:bg-white border-2 border-maroon text-white hover:text-maroon text-center py-4 rounded-full font-bold uppercase tracking-wider block w-full shadow-lg transition-all"
                >
                  {t('nav.Get A Free Quote')}
                </Link>
              </motion.div>

              <div className="mt-8 flex flex-col items-center gap-3 text-gray-600 bg-gray-50 p-6 rounded-2xl border border-gold/20">
                <span className="font-serif italic text-sm text-center text-maroon">{t('nav.Pure Veg Catering for Every Occasion')}</span>
                <div className="flex items-center gap-4 text-sm font-bold mt-2">
                  <a href="tel:+919099116166" className="flex items-center gap-1.5 hover:text-maroon">
                    <Phone size={18} className="text-gold" />
                    <span>90991 16166</span>
                  </a>
                  <a href="https://wa.me/919099116166" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[#25D366]">
                    <MessageCircle size={18} className="text-[#25D366]" />
                    <span>{t('nav.WhatsApp Us')}</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
