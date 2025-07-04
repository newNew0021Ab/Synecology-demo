import { motion } from "framer-motion";
import { Link } from "wouter";
import { PlayCircle, ArrowRight, Leaf, Recycle, ShieldCheck, Droplets, Wind, Trees } from "lucide-react";
import OrganicBlob from "@/components/OrganicBlob";
import GlassmorphicCard from "@/components/GlassmorphicCard";

export default function Home() {
  const services = [
    {
      icon: Leaf,
      title: "Экологическая оценка",
      description: "Комплексные исследования воздействия на окружающую среду и оценка рисков для ваших проектов.",
    },
    {
      icon: Recycle,
      title: "Планирование устойчивости",
      description: "Стратегические дорожные карты устойчивости и стратегии сокращения углеродного следа.",
    },
    {
      icon: ShieldCheck,
      title: "Соответствие требованиям",
      description: "Экспертное руководство по экологическим нормам и получению разрешений.",
    },
    {
      icon: Droplets,
      title: "Управление водными ресурсами",
      description: "Инновационные решения по сохранению и очистке воды для всех отраслей.",
    },
    {
      icon: Wind,
      title: "Мониторинг качества воздуха",
      description: "Современная оценка качества воздуха и стратегии контроля выбросов.",
    },
    {
      icon: Trees,
      title: "Восстановление экосистем",
      description: "Восстановление среды обитания и управление проектами сохранения биоразнообразия.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <OrganicBlob className="absolute top-20 right-20 opacity-20" size="lg" />
        <OrganicBlob className="absolute bottom-20 left-20 opacity-15" size="md" delay={3} />
        
        <div
          className="absolute inset-0 parallax-bg opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')`,
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div
                className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1
                  className="text-5xl lg:text-6xl font-heading font-bold text-dark-slate leading-tight mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Экологические решения для{" "}
                  <span className="text-sea-green">устойчивого будущего</span>
                </motion.h1>
                <motion.p
                  className="text-xl text-dark-slate/80 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Мы объединяем передовые технологии с глубокой экологической экспертизой для предоставления инновационных консалтинговых услуг, которые защищают нашу планету и способствуют успеху бизнеса.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <button className="glassmorphic glassmorphic-hover px-8 py-4 rounded-full text-sea-green font-semibold inline-flex items-center gap-2">
                    <PlayCircle className="w-5 h-5" />
                    Наша история
                  </button>
                  <Link
                    href="/contact"
                    className="bg-sea-green text-white px-8 py-4 rounded-full font-semibold hover:bg-sea-green/90 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <ArrowRight className="w-5 h-5" />
                    Начать проект
                  </Link>
                </motion.div>
              </motion.div>
            </div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="glassmorphic rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                  alt="Modern sustainable building"
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative section-divider bg-gradient-to-b from-off-white to-soft-blue/20">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <GlassmorphicCard key={service.title} delay={index * 0.1}>
                <div className="w-16 h-16 bg-sea-green/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sea-green/30 transition-colors">
                  <service.icon className="w-8 h-8 text-sea-green" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-dark-slate mb-4">
                  {service.title}
                </h3>
                <p className="text-dark-slate/70 mb-6">{service.description}</p>
                <Link
                  href="/services"
                  className="text-sea-green font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Подробнее <ArrowRight className="w-4 h-4" />
                </Link>
              </GlassmorphicCard>
            ))}
          </div>
        </div>
      </section>

      {/* Quick CTA Section */}
      <section className="py-20 relative">
        <OrganicBlob className="absolute top-10 right-10 opacity-10" size="md" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassmorphicCard className="text-center">
            <motion.h2
              className="text-4xl font-heading font-bold text-dark-slate mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Готовы создать <span className="text-sea-green">экологическое воздействие</span>?
            </motion.h2>
            <motion.p
              className="text-xl text-dark-slate/70 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Присоединяйтесь к сотням организаций, которые изменили свой экологический след с помощью наших экспертных консалтинговых услуг.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Link
                href="/contact"
                className="bg-sea-green text-white px-8 py-4 rounded-full font-semibold hover:bg-sea-green/90 transition-all duration-300 inline-flex items-center gap-2"
              >
                <ArrowRight className="w-5 h-5" />
                Начать сегодня
              </Link>
              <Link
                href="/case-studies"
                className="glassmorphic glassmorphic-hover px-8 py-4 rounded-full text-sea-green font-semibold inline-flex items-center gap-2"
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
