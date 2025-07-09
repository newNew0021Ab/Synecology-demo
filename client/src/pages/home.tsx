import { motion } from "framer-motion";
import { Link } from "wouter";
import { PlayCircle, ArrowRight, Factory, Recycle, FileText, Droplets, Trash2, ClipboardList } from "lucide-react";
import OrganicBlob from "@/components/OrganicBlob";
import GlassmorphicCard from "@/components/GlassmorphicCard";

export default function Home() {
  const services = [
    {
      icon: Factory,
      title: "Разработка акта инвентаризации выбросов загрязняющих веществ в атмосферный воздух",
      description: "Комплексная инвентаризация источников выбросов для соблюдения экологических нормативов.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    },
    {
      icon: Recycle,
      title: "Разработка проекта нормативов допустимых выбросов загрязняющих веществ в атмосферный воздух",
      description: "Определение предельно допустимых концентраций выбросов для предприятий.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    },
    {
      icon: FileText,
      title: "Разработка экологического паспорта предприятия",
      description: "Составление документа, отражающего экологическое состояние и воздействие предприятия.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    },
    {
      icon: Droplets,
      title: "Разработка паспорта газоочистной установки (ГОУ)",
      description: "Техническая документация для систем очистки промышленных газов.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    },
    {
      icon: Trash2,
      title: "Разработка инструкции по обращению с отходами",
      description: "Правила и процедуры безопасного обращения с промышленными отходами.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    },
    {
      icon: ClipboardList,
      title: "Ведение книг и журналов учета в области экологии",
      description: "Ведение обязательной экологической отчетности и документооборота.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden pt-20 md:pt-0">
        <OrganicBlob className="absolute top-20 right-20 opacity-20" size="lg" />
        <OrganicBlob className="absolute bottom-20 left-20 opacity-15" size="md" delay={3} />

        <div
          className="absolute inset-0 parallax-bg opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <motion.div
                className="bg-white/40 backdrop-blur-sm  rounded-3xl p-4 md:p-8 shadow-lg "
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1
                  className="hero-title text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-dark-slate leading-tight mb-4 md:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Превращаем эконормы в {" "}
                  <span className="text-sea-green">вашу прибыль</span>
                </motion.h1>
                <motion.p
                  className="hero-description text-lg md:text-xl text-dark-slate/80 mb-6 md:mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Мы не просто готовим документы. Мы находим решения, которые защищают вас от штрафов, открывают новые рынки и делают вашу компанию лидером в заботе об окружающей среде.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-3 md:gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <button className="glassmorphic glassmorphic-hover px-6 md:px-8 py-3 md:py-4 rounded-full text-sea-green font-semibold inline-flex items-center justify-center gap-2 text-sm md:text-base">
                    <PlayCircle className="w-4 h-4 md:w-5 md:h-5" />
                    Наши проекты
                  </button>
                  <Link
                    href="/contact"
                    className="bg-sea-green text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-sea-green/90 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    Начать с аудита
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              className="relative mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="glassmorphic rounded-3xl p-4 md:p-8 transform rotate-1 md:rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                  alt="Modern sustainable building"
                  className="rounded-xl shadow-lg w-full h-auto max-h-96 md:max-h-none object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl lg:text-5xl font-heading font-bold text-dark-slate mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Наши <span className="text-sea-green">услуги</span>
            </motion.h2>
            <motion.p
              className="text-xl text-dark-slate/70 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Комплексные консалтинговые услуги в области экологии, адаптированные под ваши конкретные потребности и нормативные требования.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.title} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group hover:scale-[1.02] transition-all duration-500 cursor-pointer"
              >
                <div 
                  className="relative rounded-3xl p-6 md:p-8 h-full backdrop-blur-xl border border-white/30 shadow-2xl hover:shadow-[0_25px_50px_rgba(46,139,87,0.15)] transition-all duration-500 overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(46, 139, 87, 0.08) 50%, rgba(255, 255, 255, 0.85) 100%)",
                  }}
                >
                  {/* Декоративный элемент */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-sea-green/20 to-sea-green/5 rounded-bl-[3rem] opacity-60"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-dark-slate leading-tight mb-4 md:mb-6 group-hover:text-sea-green transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-dark-slate/80 mb-6 md:mb-8 text-base md:text-lg leading-relaxed group-hover:text-dark-slate/90 transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-3 text-sea-green font-bold text-base md:text-lg group-hover:gap-4 transition-all duration-300 group-hover:text-sea-green/80"
                    >
                      Подробнее 
                      <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                  
                  {/* Hover эффект */}
                  <div className="absolute inset-0 bg-gradient-to-r from-sea-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12 md:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link
              href="/services"
              className="bg-white text-sea-green px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-sea-green hover:text-white transition-all duration-300 inline-flex items-center gap-2 text-sm md:text-base shadow-md hover:shadow-lg"
            >
              Все наши услуги
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick CTA Section */}
      <section className="py-20 relative">
        <OrganicBlob className="absolute top-10 right-10 opacity-10" size="md" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassmorphicCard className="text-center">
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-dark-slate mb-4 md:mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Готовы создать <span className="text-sea-green">экологическое воздействие</span>?
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-dark-slate/70 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Присоединяйтесь к сотням организаций, которые изменили свой экологический след с помощью наших экспертных консалтинговых услуг.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Link
                href="/contact"
                className="bg-sea-green text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-sea-green/90 transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                Получить консультацию
              </Link>
              <Link
                href="/case-studies"
                className="glassmorphic glassmorphic-hover px-6 md:px-8 py-3 md:py-4 rounded-full text-sea-green font-semibold inline-flex items-center justify-center gap-2 text-sm md:text-base"
              >
                Посмотреть кейсы
              </Link>
            </motion.div>
          </GlassmorphicCard>
        </div>
      </section>
    </div>
  );
}