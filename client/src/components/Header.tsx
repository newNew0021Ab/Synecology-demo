import { Link, useLocation } from "wouter";
import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollDirection } from "../hooks/useScrollDirection";

export default function Header() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection();

  const navItems = [
    { href: "/", label: "Главная" },
    { href: "/services", label: "Услуги" },
    { href: "/case-studies", label: "Кейсы" },
    { href: "/blog", label: "Блог" },
    { href: "/about", label: "О нас" },
    { href: "/contact", label: "Контакты" },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 glassmorphic border-b border-white/20"
      initial={{ y: 0 }}
      animate={{ 
        y: scrollDirection === 'down' ? '-100%' : 0 
      }}
      transition={{ 
        duration: 0.3, 
        ease: 'easeInOut' 
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2" onClick={handleLogoClick}>
            <div className="w-8 h-8 bg-sea-green rounded-lg flex items-center justify-center">
              <Leaf className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg md:text-xl font-heading font-bold text-dark-slate">
              Synecology
            </span>
          </Link>

          <nav 
            className="hidden lg:flex items-center gap-8"
            role="navigation"
            aria-label="Основная навигация"
          >
            <Link 
              href="/" 
              className={`text-dark-slate hover:text-sea-green transition-colors ${location === '/' ? 'text-sea-green font-semibold' : ''}`}
            >
              Главная
            </Link>
            <Link 
              href="/services" 
              className={`text-dark-slate hover:text-sea-green transition-colors ${location === '/services' ? 'text-sea-green font-semibold' : ''}`}
            >
              Услуги
            </Link>
            <Link 
              href="/case-studies" 
              className={`text-dark-slate hover:text-sea-green transition-colors ${location === '/case-studies' ? 'text-sea-green font-semibold' : ''}`}
            >
              Кейсы
            </Link>
            <Link 
              href="/blog" 
              className={`text-dark-slate hover:text-sea-green transition-colors ${location === '/blog' ? 'text-sea-green font-semibold' : ''}`}
            >
              Блог
            </Link>
            <Link 
              href="/about" 
              className={`text-dark-slate hover:text-sea-green transition-colors ${location === '/about' ? 'text-sea-green font-semibold' : ''}`}
            >
              О нас
            </Link>
            <Link 
              href="/contact" 
              className={`text-dark-slate hover:text-sea-green transition-colors ${location === '/contact' ? 'text-sea-green font-semibold' : ''}`}
            >
              Контакты
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden lg:inline-flex bg-sea-green text-white px-4 lg:px-6 py-2 rounded-full font-semibold hover:bg-sea-green/90 transition-all duration-300 text-sm lg:text-base"
            >
              Связаться с нами
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-dark-slate" />
              ) : (
                <Menu className="w-5 h-5 text-dark-slate" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glassmorphic border-t border-white/20"
          >
            <div className="px-4 py-6 space-y-4">
              <Link 
                href="/" 
                className={`block text-dark-slate hover:text-sea-green transition-colors py-3 px-2 rounded-lg ${location === '/' ? 'text-sea-green font-semibold bg-sea-green/10' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                href="/services" 
                className={`block text-dark-slate hover:text-sea-green transition-colors py-3 px-2 rounded-lg ${location === '/services' ? 'text-sea-green font-semibold bg-sea-green/10' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Услуги
              </Link>
              <Link 
                href="/case-studies" 
                className={`block text-dark-slate hover:text-sea-green transition-colors py-3 px-2 rounded-lg ${location === '/case-studies' ? 'text-sea-green font-semibold bg-sea-green/10' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Кейсы
              </Link>
              <Link 
                href="/blog" 
                className={`block text-dark-slate hover:text-sea-green transition-colors py-3 px-2 rounded-lg ${location === '/blog' ? 'text-sea-green font-semibold bg-sea-green/10' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Блог
              </Link>
              <Link 
                href="/about" 
                className={`block text-dark-slate hover:text-sea-green transition-colors py-3 px-2 rounded-lg ${location === '/about' ? 'text-sea-green font-semibold bg-sea-green/10' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                О нас
              </Link>
              <Link 
                href="/contact" 
                className={`block text-dark-slate hover:text-sea-green transition-colors py-3 px-2 rounded-lg ${location === '/contact' ? 'text-sea-green font-semibold bg-sea-green/10' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </Link>
              <Link
                href="/contact"
                className="block w-full bg-sea-green text-white px-6 py-3 rounded-full font-semibold hover:bg-sea-green/90 transition-all duration-300 text-center mt-6"
                onClick={() => setIsMenuOpen(false)}
              >
                Связаться с нами
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}