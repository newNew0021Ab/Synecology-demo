
import { motion } from "framer-motion";
import { Link } from "wouter";
import { PlayCircle, ArrowRight, Factory, Recycle, FileText, Droplets, Trash2, ClipboardList } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSEO } from "@/hooks/useSEO";
import { OptimizedImage } from "@/components/OptimizedImage";
import NavigationLink from "@/components/NavigationLink";

export default function Home() {
  const isMobile = useIsMobile();

  // SEO optimization
  useSEO({
    title: "Synecology - Экологический консалтинг в Беларуси | Экологические услуги",
    description: "Экологический консалтинг для устойчивого будущего. Экспертные решения в области экологической оценки, планирования устойчивости и соответствия требованиям в Беларуси.",
    keywords: "экологический консалтинг, экологические услуги, Беларусь, Минск, экологическая оценка, ПДВ, инвентаризация выбросов, экологический паспорт, обращение с отходами",
    ogTitle: "Synecology - Экологический консалтинг в Беларуси",
    ogDescription: "Превращаем эконормы в вашу прибыль. Экологический консалтинг для устойчивого будущего в Беларуси.",
    ogImage: "https://synecology.ru/og-image.jpg",
    canonical: "https://synecology.ru/"
  });

  const services = [
    {
      icon: Factory,
      title: "Разработка акта инвентаризации выбросов загрязняющих веществ в атмосферный воздух",
      description: "Комплексная инвентаризация источников выбросов для соблюдения экологических нормативов.",
    },
    {
      icon: Recycle,
      title: "Разработка проекта нормативов допустимых выбросов загрязняющих веществ в атмосферный воздух",
      description: "Определение предельно допустимых концентраций выбросов для предприятий.",
    },
    {
      icon: FileText,
      title: "Разработка экологического паспорта предприятия",
      description: "Составление документа, отражающего экологическое состояние и воздействие предприятия.",
    },
    {
      icon: Droplets,
      title: "Разработка паспорта газоочистной установки (ГОУ)",
      description: "Техническая документация для систем очистки промышленных газов.",
    },
    {
      icon: Trash2,
      title: "Разработка инструкции по обращению с отходами",
      description: "Правила и процедуры безопасного обращения с промышленными отходами.",
    },
    {
      icon: ClipboardList,
      title: "Ведение книг и журналов учета в области экологии",
      description: "Ведение обязательной экологической отчетности и документооборота.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1441974231531-c62277687169?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Превращаем эконормы в {" "}
                  <span className="text-green-600">вашу прибыль</span>
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Мы не просто готовим документы. Мы находим решения, которые защищают вас от штрафов, открывают новые рынки и делают вашу компанию лидером в заботе об окружающей среде.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white/90 backdrop-blur-sm border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2 hover:bg-green-50 transition-all duration-300">
                    <PlayCircle className="w-5 h-5" />
                    Наши проекты
                  </button>
                  <NavigationLink
                    href="/contact"
                    className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg"
                  >
                    <ArrowRight className="w-5 h-5" />
                    Начать с аудита
                  </NavigationLink>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1683402964714-a161848996d0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Environmental documentation"
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Наши <span className="text-green-600">услуги</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Комплексные консалтинговые услуги в области экологии, адаптированные под ваши конкретные потребности и нормативные требования.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={`service-${service.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="mb-6">
                    <service.icon className="w-12 h-12 text-green-600" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 leading-tight mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex flex-col gap-3 mt-auto">
                    <NavigationLink
                      href="/services"
                      className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors duration-300"
                    >
                      Подробнее
                      <ArrowRight className="w-4 h-4" />
                    </NavigationLink>
                    <NavigationLink
                      href="/contact"
                      className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 inline-flex items-center justify-center gap-2"
                    >
                      <ArrowRight className="w-4 h-4" />
                      Заказать
                    </NavigationLink>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <NavigationLink
              href="/services"
              className="bg-white border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 inline-flex items-center gap-2 shadow-md"
            >
              Все наши услуги
              <ArrowRight className="w-5 h-5" />
            </NavigationLink>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Сделайте экологию <span className="text-green-600">вашим преимуществом.</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Правильный подход к экологии — это не затраты, а инвестиция в будущее. Давайте начнем сегодня.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavigationLink
              href="/contact"
              className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg"
            >
              <ArrowRight className="w-5 h-5" />
              Получить консультацию
            </NavigationLink>
            <NavigationLink
              href="/case-studies"
              className="bg-white border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Посмотреть кейсы
            </NavigationLink>
          </div>
        </div>
      </section>
    </div>
  );
}
