
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ExternalLink, ArrowRight, TrendingUp, Users, Award, Calendar, CheckCircle, Plus, Clock } from "lucide-react";
import { useState } from "react";
import OrganicBlob from "@/components/OrganicBlob";
import GlassmorphicCard from "@/components/GlassmorphicCard";

export default function CaseStudies() {
  const [showMoreCases, setShowMoreCases] = useState(false);

  const mainCaseStudies = [
    {
      title: "Комплексная экологическая документация для кофейного производства",
      category: "Пищевая промышленность",
      description: "Создали полную экологическую систему «с нуля» для ведущего обжарщика спешелти кофе, обеспечив 100% соответствие законодательству.",
      results: [
        "100% соответствие природоохранному законодательству",
        "Предотвращены штрафы до 50 000 BYN",
        "Получены все необходимые разрешения за рекордные 6 месяцев",
        "Создан дополнительный источник дохода от переработки отходов",
      ],
      metrics: [
        { label: "Соответствие закону", value: "100%", icon: "✓" },
        { label: "Предотвращено штрафов", value: "50 000 BYN", icon: "💰" },
        { label: "Скорость реализации", value: "6 мес", icon: "⚡" },
        { label: "Доп. доход от отходов", value: "+15%", icon: "📈" }
      ],
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Экологическая документация", "Пищевая промышленность", "Соответствие законодательству"],
      timeline: "6 месяцев",
      completion: "15.12.2024",
      featured: true,
    },
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
      metrics: [
        { label: "Снижение выбросов", value: "70%", icon: "🌱" },
        { label: "Годовая экономия", value: "2.3М$", icon: "💵" },
        { label: "Чистая энергия", value: "15К МВтч", icon: "☀️" },
        { label: "Окупаемость", value: "3.2 года", icon: "📊" }
      ],
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Солнечная энергия", "Снижение углерода", "Производство"],
      timeline: "18 месяцев",
      completion: "12.10.2024",
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
      metrics: [
        { label: "Восстановлено", value: "500 акров", icon: "🌿" },
        { label: "Рост биоразнообразия", value: "200%", icon: "🦆" },
        { label: "Качество воды", value: "+85%", icon: "💧" },
        { label: "Видов спасено", value: "30", icon: "🐟" }
      ],
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Восстановление экосистем", "Биоразнообразие", "Охрана природы"],
      timeline: "24 месяца",
      completion: "03.05.2023",
    },
  ];

  const additionalCaseStudies = [
    {
      title: "Инновации в очистке воды",
      category: "Промышленная вода",
      description: "Внедрили передовые системы очистки воды, сократив отходы на 85% для крупного промышленного клиента.",
      status: "В процессе публикации"
    },
    {
      title: "Городская зеленая инфраструктура",
      category: "Городское планирование", 
      description: "Создали системы зеленых крыш в 12 городских зданиях, снизив эффект городского теплового острова на 30%.",
      status: "В процессе публикации"
    },
    {
      title: "Углеродно-нейтральный кампус",
      category: "Образовательный сектор",
      description: "Превратили университетский кампус в углеродно-нейтральное учреждение с помощью комплексных мер устойчивости.",
      status: "В процессе публикации"
    }
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
              Наш опыт —  <span className="text-sea-green">ваша уверенность</span>
            </motion.h1>
            <motion.p
              className="text-xl text-dark-slate/70 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Мы гордимся каждым проектом. Посмотрите, как мы уже помогли другим компаниям. Возможно, в одном из этих кейсов вы узнаете свою ситуацию?
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

      {/* Main Case Studies */}
      <section className="py-20 bg-gradient-to-b from-off-white to-soft-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {mainCaseStudies.map((caseStudy, index) => (
              <GlassmorphicCard key={caseStudy.title} delay={index * 0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-80 object-cover rounded-xl"
                    />
                    {caseStudy.featured && (
                      <div className="absolute top-4 right-4 bg-sea-green text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Рекомендуемый
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-sea-green">
                        <Calendar className="w-4 h-4" />
                        <span>{caseStudy.completion}</span>
                      </div>
                      <div className="bg-sea-green/10 text-sea-green px-3 py-1 rounded-full font-semibold">
                        {caseStudy.timeline}
                      </div>
                    </div>

                    <div className="bg-sea-green/5 text-sea-green px-4 py-2 rounded-lg inline-block font-semibold text-sm">
                      {caseStudy.category}
                    </div>

                    <h3 className="text-3xl font-heading font-bold text-dark-slate">
                      {caseStudy.title}
                    </h3>

                    <p className="text-dark-slate/70 text-lg">{caseStudy.description}</p>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {caseStudy.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="bg-white/50 p-4 rounded-lg border border-sea-green/10">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{metric.icon}</span>
                            <div>
                              <div className="text-2xl font-bold text-sea-green">{metric.value}</div>
                              <div className="text-sm text-dark-slate/70">{metric.label}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Results */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-dark-slate">Ключевые результаты:</h4>
                      <ul className="space-y-2">
                        {caseStudy.results.slice(0, 3).map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center gap-3 text-dark-slate/70">
                            <CheckCircle className="w-5 h-5 text-sea-green flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-sea-green/10 text-sea-green text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Link
                        href={`/case-studies/${index === 0 ? 'coffee-environmental-documentation' : index === 1 ? 'solar-energy-transition' : 'wetlands-restoration'}`}
                        className="bg-sea-green text-white px-6 py-3 rounded-full font-semibold hover:bg-sea-green/90 transition-all duration-300 inline-flex items-center gap-2 text-center justify-center"
                      >
                        Подробнее <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href="/contact"
                        className="glassmorphic glassmorphic-hover px-6 py-3 rounded-full text-sea-green font-semibold inline-flex items-center gap-2 text-center justify-center"
                      >
                        Начать проект
                      </Link>
                    </div>
                  </div>
                </div>
              </GlassmorphicCard>
            ))}
          </div>

          {/* Show More Button */}
          <div className="text-center mt-16">
            <motion.button
              onClick={() => setShowMoreCases(!showMoreCases)}
              className="bg-sea-green text-white px-8 py-4 rounded-full font-semibold hover:bg-sea-green/90 transition-all duration-300 inline-flex items-center gap-3 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className={`w-5 h-5 transition-transform duration-300 ${showMoreCases ? 'rotate-45' : ''}`} />
              {showMoreCases ? 'Скрыть дополнительные кейсы' : 'Ещё кейсы'}
            </motion.button>
          </div>

          {/* Additional Cases */}
          {showMoreCases && (
            <motion.div
              className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {additionalCaseStudies.map((caseStudy, index) => (
                <GlassmorphicCard key={caseStudy.title} delay={index * 0.1}>
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-sea-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-sea-green" />
                    </div>
                    
                    <div className="bg-sandy-beige/20 text-sandy-beige px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                      {caseStudy.category}
                    </div>
                    
                    <h3 className="text-xl font-heading font-bold text-dark-slate mb-3">
                      {caseStudy.title}
                    </h3>
                    
                    <p className="text-dark-slate/70 text-sm mb-4">
                      {caseStudy.description}
                    </p>
                    
                    <div className="bg-gradient-to-r from-sea-green/10 to-soft-blue/10 p-4 rounded-lg">
                      <div className="text-sea-green font-semibold text-sm mb-2">
                        📝 {caseStudy.status}
                      </div>
                      <div className="text-dark-slate/60 text-xs">
                        Детальный кейс с результатами и метриками будет опубликован в ближайшее время
                      </div>
                    </div>
                  </div>
                </GlassmorphicCard>
              ))}
            </motion.div>
          )}
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
              Хотите такие же  <span className="text-sea-green">результаты?</span>
            </motion.h2>
            <motion.p
              className="text-xl text-dark-slate/70 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Каждый из этих успешных кейсов начинался с одного простого шага — консультации. Сделайте этот шаг, чтобы превратить ваши экологические задачи в вашу личную историю успеха.
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
