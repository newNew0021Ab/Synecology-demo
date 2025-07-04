import { Link, useLocation } from "wouter";
import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Главная" },
    { href: "/services", label: "Услуги" },
    { href: "/case-studies", label: "Кейсы" },
    { href: "/blog", label: "Блог" },
    { href: "/about", label: "О нас" },
    { href: "/contact", label: "Контакты" },
  ];

  return (
    <header className="glassmorphic fixed top-4 left-4 right-4 z-50 rounded-2xl px-6 py-4 mx-auto max-w-7xl">
      <nav className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-sea-green flex items-center justify-center">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-heading font-bold text-sea-green">Synecology</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`hover:text-sea-green transition-colors ${
                  location === item.href ? "text-sea-green" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden glassmorphic p-2 rounded-lg"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Get Started Button */}
        <Link
          href="/contact"
          className="hidden md:block glassmorphic glassmorphic-hover px-6 py-2 rounded-full text-sea-green font-semibold"
        >
          Начать проект
        </Link>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-white/20">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block py-2 hover:text-sea-green transition-colors ${
                    location === item.href ? "text-sea-green" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="block py-2 text-sea-green font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Начать проект
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
