import { motion } from "framer-motion";
import { Link } from "wouter";
import { ExternalLink, ArrowRight, TrendingUp, Users, Award, Calendar, CheckCircle, Plus } from "lucide-react";
import OrganicBlob from "@/components/OrganicBlob";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import { useState } from "react";

export default function CaseStudies() {
  const [showAdditionalCases, setShowAdditionalCases] = useState(false);
  
  const mainCaseStudies = [
    {
      title: "Комплексная экологическая документация для кофейного производства",
      category: "Пищевая промышленность",
      description: "Превратили обязательные экологические требования в источник дохода для ведущего обжарщика кофе, выстроив систему, которая не только защищает от штрафов, но и приносит прибыль.",
      results: [
        "Полный пакет документов «под ключ» за 90 дней.",
        "Полностью исключены риски штрафов и приостановки деятельности",
        "Гарантированное прохождение всех проверок с первого раза",
        "100% соответствие природоохранному законодательству",
      ],
      image: "https://i.ibb.co/8L56rbRx/Gemini-Generated-Image-q9hqoeq9hqoeq9hq.png",
      tags: ["Экологическая документация", "Пищевая промышленность", "Соответствие законодательству"],
      timeline: "3 месяца",
      completion: "15.12.2024",
      featured: true,
    },
    {
      title: "Переход на возобновляемую энергию",
      category: "Производственная отрасль",
      description: "Помогли производственной компании снизить выбросы на 85% и сократить затраты на электроэнергию на 4,2 млн рублей ежегодно.",
      results: [
        "85% снижение выбросов углекислого газа",
        "4,2 млн рублей экономии на электроэнергии в год",
        "Окупаемость инвестиций за 2,1 года",
        "Получение статуса «Зеленое предприятие»",
      ],
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Возобновляемая энергия", "Снижение выбросов", "Производство"],
      timeline: "8 месяцев",
      completion: "12.10.2024",
    },
    {
      title: "Восстановление природной экосистемы",
      category: "Природоохранный проект",
      description: "Успешно восстановили 300 гектаров природной экосистемы, увеличив биоразнообразие на 320% и получив федеральное финансирование в размере 15 млн рублей.",
      results: [
        "300 гектаров экосистемы восстановлено",
        "320% увеличение биоразнообразия",
        "15 млн рублей федерального финансирования",
        "42 редких вида флоры и фауны сохранено",
      ],
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Восстановление экосистем", "Биоразнообразие", "Охрана природы"],
      timeline: "14 месяцев",
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
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {mainCaseStudies.map((caseStudy, index) => (
              <GlassmorphicCard key={caseStudy.title} delay={index * 0.1}>
                <div className="flex flex-col h-full min-h-[600px]">
                    <div className="relative mb-6">
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="w-full h-64 object-cover rounded-xl"
                      />
                      {caseStudy.featured && (
                        <div className="absolute top-4 right-4 bg-sea-green text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                          Рекомендуемый
                        </div>
                      )}
                    </div>

                    <div className="space-y-5 flex-grow">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sea-green">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">{caseStudy.completion}</span>
                        </div>
                        <div className="bg-sea-green/10 text-sea-green px-4 py-2 rounded-full font-semibold text-sm">
                          {caseStudy.timeline}
                        </div>
                      </div>

                      <h3 className="text-2xl font-heading font-bold text-dark-slate leading-tight">
                        {caseStudy.title}
                      </h3>

                      <p className="text-dark-slate/70 text-base leading-relaxed">{caseStudy.description}</p>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-dark-slate text-base">Ключевые результаты:</h4>
                        <ul className="space-y-2">
                          {caseStudy.results.slice(0, 3).map((result, index) => (
                            <li key={index} className="flex items-start gap-3 text-sm text-dark-slate/70">
                              <CheckCircle className="w-4 h-4 text-sea-green flex-shrink-0 mt-0.5" />
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {caseStudy.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-sea-green/10 text-sea-green text-sm rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-dark-slate/10">
                      <Link
                        href={`/case-studies/${index === 0 ? 'coffee-environmental-documentation' : index === 1 ? 'solar-energy-transition' : 'wetlands-restoration'}`}
                        className="text-sea-green font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all text-base"
                      >
                        Подробнее <ArrowRight className="w-5 h-5" />
                      </Link>
                      <Link
                        href="/contact"
                        className="text-sea-green hover:text-sea-green/80 transition-colors text-sm font-medium"
                      >
                        Начать проект
                      </Link>
                    </div>
                  </div>
              </GlassmorphicCard>
            ))}
          </div>

          {/* More Cases Button */}
          <div className="text-center">
            <GlassmorphicCard delay={0.3}>
              <div className="text-center py-8">
                <button
                  onClick={() => setShowAdditionalCases(!showAdditionalCases)}
                  className="bg-sea-green text-white px-8 py-4 rounded-full font-semibold hover:bg-sea-green/90 transition-all duration-300 inline-flex items-center gap-2 mb-4"
                >
                  <Plus className="w-5 h-5" />
                  Ещё кейсы
                </button>
                
                {showAdditionalCases && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.5 }}
                    className="text-dark-slate/70 max-w-md mx-auto"
                  >
                    <div className="bg-soft-blue/20 rounded-xl p-6">
                      <h4 className="font-semibold text-dark-slate mb-2">Готовится к публикации</h4>
                      <p className="text-sm">
                        Мы работаем над оформлением дополнительных кейсов. Скоро здесь появятся новые истории успеха наших клиентов.
                      </p>
                      <div className="mt-4">
                        <Link
                          href="/contact"
                          className="text-sea-green font-semibold hover:text-sea-green/80 transition-colors text-sm"
                        >
                          Узнать о своем кейсе →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </GlassmorphicCard>
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