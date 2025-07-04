import { motion } from "framer-motion";
import { Link } from "wouter";
import { ExternalLink, ArrowRight, TrendingUp, Users, Award } from "lucide-react";
import OrganicBlob from "@/components/OrganicBlob";
import GlassmorphicCard from "@/components/GlassmorphicCard";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Переход на солнечную энергию",
      category: "Производственная отрасль",
      description: "Помогли производственной компании снизить выбросы углерода на 70% за счет стратегического внедрения солнечной энергии.",
      results: [
        "70% снижение выбросов углерода",
        "2,3 млн долларов годовой экономии энергозатрат",
        "15 000 МВтч чистой энергии в год",
        "Окупаемость за 3,2 года",
      ],
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Солнечная энергия", "Снижение углерода", "Производство"],
      timeline: "18 месяцев",
    },
    {
      title: "Восстановление водно-болотных угодий",
      category: "Природоохранный проект",
      description: "Успешно восстановили 500 акров экосистемы водно-болотных угодий, увеличив местное биоразнообразие на 200%.",
      results: [
        "500 акров водно-болотных угодий восстановлено",
        "200% увеличение биоразнообразия",
        "85% улучшение качества воды",
        "30 исчезающих видов реинтродуцировано",
      ],
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Восстановление экосистем", "Биоразнообразие", "Охрана природы"],
      timeline: "24 месяца",
    },
    {
      title: "Инновации в очистке воды",
      category: "Промышленная вода",
      description: "Внедрили передовые системы очистки воды, сократив отходы на 85% для крупного промышленного клиента.",
      results: [
        "85% сокращение водных отходов",
        "99,5% эффективность очистки",
        "1,8 млн долларов годовой экономии",
        "Соответствие нормам нулевого сброса",
      ],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Очистка воды", "Промышленность", "Сокращение отходов"],
      timeline: "12 месяцев",
    },
    {
      title: "Городская зеленая инфраструктура",
      category: "Городское планирование",
      description: "Создали системы зеленых крыш в 12 городских зданиях, снизив эффект городского теплового острова на 30%.",
      results: [
        "30% снижение эффекта городского теплового острова",
        "12 зданий с зеленой инфраструктурой",
        "40% улучшение качества воздуха",
        "25% сокращение ливневого стока",
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Зеленая инфраструктура", "Городское планирование", "Климатическая адаптация"],
      timeline: "36 месяцев",
    },
    {
      title: "Углеродно-нейтральный кампус",
      category: "Образовательный сектор",
      description: "Превратили университетский кампус в углеродно-нейтральное учреждение с помощью комплексных мер устойчивости.",
      results: [
        "100% углеродная нейтральность достигнута",
        "60% снижение энергопотребления",
        "1,2 млн долларов годовой экономии",
        "Сертификация LEED Platinum",
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Углеродная нейтральность", "Образование", "Сертификация LEED"],
      timeline: "30 месяцев",
    },
    {
      title: "Защита морских местообитаний",
      category: "Прибрежная охрана",
      description: "Разработали и внедрили комплексный план защиты морских ресурсов для 50-мильной береговой линии.",
      results: [
        "50 миль береговой линии защищено",
        "75% увеличение морских видов",
        "90% сокращение инцидентов загрязнения",
        "Запущена программа вовлечения сообщества",
      ],
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Охрана морской среды", "Защита берегов", "Биоразнообразие"],
      timeline: "42 месяца",
    },
  ];

  const stats = [
    { icon: TrendingUp, value: "150+", label: "Проектов завершено", color: "text-sea-green" },
    { icon: Users, value: "500+", label: "Клиентов обслужено", color: "text-soft-blue" },
    { icon: Award, value: "95%", label: "Процент успеха", color: "text-sandy-beige" },
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
              Истории <span className="text-sea-green">успеха</span>
            </motion.h1>
            <motion.p
              className="text-xl text-dark-slate/70 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Узнайте, как мы помогли организациям в различных отраслях достичь экологических целей с помощью инновационных решений и экспертного руководства.
            </motion.p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => (
              <GlassmorphicCard key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className={`w-16 h-16 ${stat.color} mx-auto mb-4`}>
                    <stat.icon className="w-full h-full" />
                  </div>
                  <div className="text-4xl font-heading font-bold text-dark-slate mb-2">
                    {stat.value}
                  </div>
                  <div className="text-dark-slate/70">{stat.label}</div>
                </div>
              </GlassmorphicCard>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gradient-to-b from-off-white to-soft-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <GlassmorphicCard key={study.title} delay={index * 0.1}>
                <div className="space-y-6">
                  <div className="relative">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                    <div className="absolute top-4 right-4 bg-sea-green/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-sm font-semibold text-sea-green">
                        {study.timeline}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 text-sm text-sea-green mb-2">
                      <span className="font-semibold">{study.category}</span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-dark-slate mb-3">
                      {study.title}
                    </h3>
                    <p className="text-dark-slate/70 mb-4">{study.description}</p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-dark-slate">Ключевые результаты:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-sm text-dark-slate/70 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-sea-green rounded-full flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-sea-green/10 text-sea-green text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-dark-slate/10">
                    <Link
                      href="/contact"
                      className="text-sea-green font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Начать похожий проект <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button className="text-sea-green hover:text-sea-green/80 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </GlassmorphicCard>
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
              Готовы создать свою <span className="text-sea-green">историю успеха</span>?
            </motion.h2>
            <motion.p
              className="text-xl text-dark-slate/70 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Давайте работать вместе, чтобы разработать инновационные экологические решения, которые обеспечат измеримые результаты для вашей организации.
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
                Начать проект
              </Link>
              <Link
                href="/services"
                className="glassmorphic glassmorphic-hover px-8 py-4 rounded-full text-sea-green font-semibold inline-flex items-center gap-2"
              >
                Изучить наши услуги
              </Link>
            </motion.div>
          </GlassmorphicCard>
        </div>
      </section>
    </div>
  );
}
