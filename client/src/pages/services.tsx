import { motion } from "framer-motion";
import { Link } from "wouter";
import { Leaf, Recycle, ShieldCheck, Droplets, Wind, Trees, ArrowRight, CheckCircle } from "lucide-react";
import OrganicBlob from "@/components/OrganicBlob";
import GlassmorphicCard from "@/components/GlassmorphicCard";

export default function Services() {
  const services = [
    {
      icon: Leaf,
      title: "Экологическая оценка",
      description: "Комплексные исследования воздействия на окружающую среду и оценка рисков для ваших проектов.",
      features: [
        "Оценка воздействия на окружающую среду (ОВОС)",
        "Базовые экологические исследования",
        "Оценка и управление рисками",
        "Исследования загрязненных участков",
        "Экологические изыскания и мониторинг",
      ],
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    },
    {
      icon: Recycle,
      title: "Планирование устойчивости",
      description: "Стратегические дорожные карты устойчивости и стратегии сокращения углеродного следа.",
      features: [
        "Разработка стратегии устойчивости",
        "Анализ углеродного следа",
        "Оценка жизненного цикла (ОЖЦ)",
        "Внедрение циркулярной экономики",
        "Сертификация зеленых зданий",
      ],
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    },
    {
      icon: ShieldCheck,
      title: "Соответствие требованиям",
      description: "Экспертное руководство по экологическим нормам и получению разрешений.",
      features: [
        "Заявки на экологические разрешения",
        "Аудит соответствия",
        "Анализ регулятивного воздействия",
        "Поддержка юридической документации",
        "Услуги связи с государственными органами",
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    },
    {
      icon: Droplets,
      title: "Управление водными ресурсами",
      description: "Инновационные решения по сохранению и очистке воды для всех отраслей.",
      features: [
        "Оценка качества воды",
        "Проектирование очистки сточных вод",
        "Управление ливневыми водами",
        "Мониторинг подземных вод",
        "Стратегии водосбережения",
      ],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    },
    {
      icon: Wind,
      title: "Мониторинг качества воздуха",
      description: "Современная оценка качества воздуха и стратегии контроля выбросов.",
      features: [
        "Программы мониторинга качества воздуха",
        "Разработка реестра выбросов",
        "Атмосферное дисперсионное моделирование",
        "Оценка качества воздуха в помещениях",
        "Проектирование систем контроля выбросов",
      ],
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    },
    {
      icon: Trees,
      title: "Восстановление экосистем",
      description: "Восстановление среды обитания и управление проектами сохранения биоразнообразия.",
      features: [
        "Планирование восстановления среды обитания",
        "Сохранение биоразнообразия",
        "Восстановление водно-болотных угодий",
        "Реинтродукция местных видов",
        "Мониторинг экосистем",
      ],
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <OrganicBlob className="absolute top-10 right-10 opacity-15" size="lg" />
        <OrganicBlob className="absolute bottom-10 left-10 opacity-10" size="md" delay={2} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl lg:text-6xl font-heading font-bold text-dark-slate mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Наши <span className="text-sea-green">услуги</span>
            </motion.h1>
            <motion.p
              className="text-xl text-dark-slate/70 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Комплексные консалтинговые услуги в области экологии, призванные помочь вашей организации достичь целей устойчивости при обеспечении соответствия нормативным требованиям и операционного совершенства.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-off-white to-soft-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <GlassmorphicCard>
                    <div className="w-16 h-16 bg-sea-green/20 rounded-2xl flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-sea-green" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-dark-slate mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-dark-slate/70 mb-6">{service.description}</p>
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-sea-green flex-shrink-0" />
                          <span className="text-dark-slate/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className="bg-sea-green text-white px-8 py-4 rounded-full font-semibold hover:bg-sea-green/90 transition-all duration-300 inline-flex items-center gap-2"
                    >
                      <ArrowRight className="w-5 h-5" />
                      Начать
                    </Link>
                  </GlassmorphicCard>
                </div>
                
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="glassmorphic rounded-3xl p-8 transform hover:scale-105 transition-transform duration-500">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-xl shadow-lg w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <OrganicBlob className="absolute top-10 left-10 opacity-10" size="md" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassmorphicCard className="text-center">
            <motion.h2
              className="text-4xl font-heading font-bold text-dark-slate mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Готовы начать свой <span className="text-sea-green">экологический путь</span>?
            </motion.h2>
            <motion.p
              className="text-xl text-dark-slate/70 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Наша команда экспертов готова помочь вам справиться со сложными экологическими задачами и достичь ваших целей устойчивости.
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
                Записаться на консультацию
              </Link>
              <Link
                href="/case-studies"
                className="glassmorphic glassmorphic-hover px-8 py-4 rounded-full text-sea-green font-semibold inline-flex items-center gap-2"
              >
                Истории успеха
              </Link>
            </motion.div>
          </GlassmorphicCard>
        </div>
      </section>
    </div>
  );
}
