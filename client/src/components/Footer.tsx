
import { Link } from "wouter";
import { Leaf, Linkedin, Twitter, Instagram } from "lucide-react";
import { useState } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

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
            <p className="text-white/70 mb-2">Экологический консалтинг. Помогаем разобраться в законодательстве РБ.</p>
            
            <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
              <div className="flex gap-3 mb-4">
                <AlertDialogTrigger asChild>
                  <button className="text-white/70 hover:text-sea-green transition-colors cursor-pointer">
                    <Linkedin className="w-5 h-5" />
                  </button>
                </AlertDialogTrigger>
                <AlertDialogTrigger asChild>
                  <button className="text-white/70 hover:text-sea-green transition-colors cursor-pointer">
                    <Twitter className="w-5 h-5" />
                  </button>
                </AlertDialogTrigger>
                <AlertDialogTrigger asChild>
                  <button className="text-white/70 hover:text-sea-green transition-colors cursor-pointer">
                    <Instagram className="w-5 h-5" />
                  </button>
                </AlertDialogTrigger>
              </div>
              
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Социальные сети</AlertDialogTitle>
                  <AlertDialogDescription>
                    Мы пока что не ведем социальные сети, но скоро они появятся! 
                    Следите за обновлениями на нашем сайте.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction onClick={() => setIsOpen(false)}>
                    Понятно
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          
          
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="/services/emissions-inventory" className="hover:text-sea-green transition-colors">
                  Инвентаризация выбросов
                </Link>
              </li>
              <li>
                <Link href="/services/pdv-standards" className="hover:text-sea-green transition-colors">
                  Нормативы ПДВ
                </Link>
              </li>
              <li>
                <Link href="/services/ecological-passport" className="hover:text-sea-green transition-colors">
                  Экологический паспорт
                </Link>
              </li>
              <li>
                <Link href="/services/gas-treatment-passport" className="hover:text-sea-green transition-colors">
                  Паспорт газоочистной установки
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
                <Link href="/contact" className="hover:text-sea-green transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="text-white/70 space-y-2">
              <p>ООО «Синэкология»</p>
              <p>УНП 193885234</p>
              <p>г. Минск, пр-т. Газеты звезда д.16, пом. 53, офис 5В, 220117 </p>
              <a href="tel:+375296024280" className="block hover:text-sea-green transition-colors">
                +375 (29) 602-42-80
              </a>
              <a href="mailto:synecology@yandex.by" className="block hover:text-sea-green transition-colors">
                synecology@yandex.by
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70 text-sm">
          <p>&copy; 2025 Synecology. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
