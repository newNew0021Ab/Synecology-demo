import { Link } from "wouter";
import { Leaf, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-slate text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-sea-green flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-heading font-bold">Synecology</span>
            </div>
            <p className="text-white/70 mb-4">Экологический консалтинг для устойчивого будущего.</p>
            <div className="flex gap-3">
              <a href="#" className="text-white/70 hover:text-sea-green transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-sea-green transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-sea-green transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="/services" className="hover:text-sea-green transition-colors">
                  Экологическая оценка
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-sea-green transition-colors">
                  Планирование устойчивости
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-sea-green transition-colors">
                  Соответствие требованиям
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-sea-green transition-colors">
                  Управление водными ресурсами
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="/about" className="hover:text-sea-green transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-sea-green transition-colors">
                  Кейсы
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-sea-green transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-sea-green transition-colors">
                  Карьера
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-white/70">
              <li>ул. Зеленая, д. 123</li>
              <li>Эко Сити, 12345</li>
              <li>+7 (555) 123-4567</li>
              <li>hello@synecology.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
          <p>&copy; 2024 Synecology. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
