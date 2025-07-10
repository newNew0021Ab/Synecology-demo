
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ExternalLink, ArrowRight, TrendingUp, Users, Award, Calendar, CheckCircle, Clock } from "lucide-react";
import OrganicBlob from "@/components/OrganicBlob";
import GlassmorphicCard from "@/components/GlassmorphicCard";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Комплексная экологическая документация для кофейного производства",
      category: "Пищевая промышленность",
      description: "Создали полную экологическую систему «с нуля» для ведущего обжарщика спешелти кофе, обеспечив 100% соответствие законодательству.",
      results: [
        "100% соответствие природоохранному законодательству",
        "Полностью исключены риски штрафов и приостановки деятельности",
        "Получены все необходимые разрешения и согласования",
        "Организована переработка отходов с получением дополнительного дохода",
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
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Восстановление экосистем", "Биоразнообразие", "Охрана природы"],
      timeline: "24 месяца",
      completion: "03.05.2023",
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

      {/* Case Studies Grid */}
      <section className="py-20 bg-gradient-to-b from-off-white to-soft-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <GlassmorphicCard className="h-full">
                  <div className="flex flex-col h-full">
                    {/* Header with date and timeline */}
                    <div className="flex items-center justify-between text-sm mb-4">
                      <div className="flex items-center gap-2 text-sea-green">
                        <Calendar className="w-4 h-4" />
                        <span>{caseStudy.completion}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-sea-green/10 text-sea-green px-3 py-1 rounded-full font-semibold">
                        <Clock className="w-4 h-4" />
                        <span>{caseStudy.timeline}</span>
                      </div>
                    </div>

                    {/* Category */}
                    <div className="bg-sea-green/10 text-sea-green px-4 py-2 rounded-full font-semibold inline-block self-start mb-4">
                      {caseStudy.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-heading font-bold text-dark-slate mb-4 line-clamp-2">
                      {caseStudy.title}
                    </h3>

                    {/* Image */}
                    <div className="relative mb-6 rounded-xl overflow-hidden">
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="w-full h-48 object-cover"
                      />
                      {caseStudy.featured && (
                        <div className="absolute top-4 right-4 bg-sea-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Рекомендуемый
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-dark-slate/70 leading-relaxed mb-6 line-clamp-3 flex-grow">
                      {caseStudy.description}
                    </p>

                    {/* Key Results */}
                    <div className="space-y-3 mb-6">
                      <h4 className="text-lg font-semibold text-dark-slate">Ключевые результаты:</h4>
                      <ul className="space-y-2">
                        {caseStudy.results.slice(0, 3).map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start gap-3 text-sm text-dark-slate/70">
                            <CheckCircle className="w-4 h-4 text-sea-green flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{result}</span>
                          </li>
                        ))}
                        {caseStudy.results.length > 3 && (
                          <li className="text-sm text-sea-green font-semibold">
                            +{caseStudy.results.length - 3} еще результатов
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {caseStudy.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-sea-green/10 text-sea-green text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {caseStudy.tags.length > 2 && (
                        <span className="px-3 py-1 bg-dark-slate/10 text-dark-slate/70 text-sm rounded-full">
                          +{caseStudy.tags.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3 mt-auto">
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
                </GlassmorphicCard>
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
