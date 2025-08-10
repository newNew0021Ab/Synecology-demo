import { motion } from "framer-motion";
import { Link } from "wouter";
import { ExternalLink, ArrowRight, TrendingUp, Users, Award, Calendar, CheckCircle, Plus } from "lucide-react";
import OrganicBlob from "@/components/OrganicBlob";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import { useState, useEffect } from "react";

export default function CaseStudies() {
  const [showAdditionalCases, setShowAdditionalCases] = useState(false);
  const [cases, setCases] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  

  // Fetch case studies from Directus API
  useEffect(() => {
    const fetchDirectusCases = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/directus-cases'); // Assuming you have an API endpoint for Directus
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCases(data.data); // Assuming Directus returns data in a 'data' field
      } catch (err) {
        console.error("Failed to fetch case studies:", err);
        setError("Could not load case studies. Displaying examples.");
        // Fallback to the original hardcoded cases if API fails
        setCases([
          {
            title: "Экология как инвестиция: кейс ведущего обжарщика кофе в РБ.",
            category: "Пищевая промышленность",
            description: "Превратили обязательные экологические требования в источник дохода для ведущего обжарщика кофе, выстроив систему, которая не только защищает от штрафов, но и приносит прибыль.",
            results: [
              "Полный пакет документов «под ключ» за 90 дней.",
              "Полностью исключены риски штрафов и приостановки деятельности",
              "Гарантированное прохождение всех проверок с первого раза",
              "100% соответствие природоохранному законодательству",
            ],
            image: "https://images.unsplash.com/photo-1587734195342-39d4b9b2ff05?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
            tags: ["Экологическая документация", "Пищевая промышленность", "Соответствие законодательству"],
            timeline: "3 месяца",
            completion: "15.12.2024",
            featured: true,
            slug: "coffee-environmental-documentation",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchDirectusCases();
  }, []);

  const displayCases = cases.length > 0 ? cases : [
    {
      title: "Экология как инвестиция: кейс ведущего обжарщика кофе в РБ.",
      category: "Пищевая промышленность",
      description: "Превратили обязательные экологические требования в источник дохода для ведущего обжарщика кофе, выстроив систему, которая не только защищает от штрафов, но и приносит прибыль.",
      results: [
        "Полный пакет документов «под ключ» за 90 дней.",
        "Полностью исключены риски штрафов и приостановки деятельности",
        "Гарантированное прохождение всех проверок с первого раза",
        "100% соответствие природоохранному законодательству",
      ],
      image: "https://images.unsplash.com/photo-1587734195342-39d4b9b2ff05?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
      tags: ["Экологическая документация", "Пищевая промышленность", "Соответствие законодательству"],
      timeline: "3 месяца",
      completion: "15.12.2024",
      featured: true,
      slug: "coffee-environmental-documentation",
    },
  ];

  const stats = [
    { icon: TrendingUp, value: "100%", label: "Проектов завершено в срок", color: "text-sea-green" },
    { icon: Users, value: "50+", label: "Предприятий обслужено", color: "text-soft-blue" },
    { icon: Award, value: "98%", label: "Документов принято с первого раза", color: "text-sandy-beige" },
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
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="card-stable visible"
              >
                <GlassmorphicCard>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gradient-to-b from-off-white to-soft-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading && !error && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-sea-green"></div>
              <p className="mt-4 text-dark-slate/70">Загружаем кейсы...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-500 mb-4">{error}</p>
              <p className="text-dark-slate/70">Показываем примеры кейсов</p>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {displayCases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.slug || index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="group card-stable visible"
              >
                {/* Desktop version - clickable */}
                <Link
                  href={`/case-studies/${caseStudy.slug || `example-${index}`}`}
                  className="hidden md:block"
                >
                  <GlassmorphicCard delay={index * 0.1} className="h-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg cursor-pointer">
                    <div className="flex flex-col h-full min-h-[700px]">
                        <div className="relative mb-6">
                          <img
                            src={caseStudy.coverImage || caseStudy.image || "/api/placeholder/600/400"}
                            alt={caseStudy.title}
                            className="w-full h-64 object-cover rounded-xl transition-transform duration-300 group-hover:scale-102"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "/api/placeholder/600/400";
                            }}
                          />
                          {caseStudy.featured && (
                            <div className="absolute top-4 right-4 bg-sea-green text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                              Рекомендуемый
                            </div>
                          )}
                        </div>

                        <div className="space-y-5 flex-grow">
                          <h3 className="text-2xl font-heading font-bold text-dark-slate leading-tight group-hover:text-sea-green transition-colors duration-300">
                            {caseStudy.title}
                          </h3>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sea-green">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm font-medium">{caseStudy.completion || new Date(caseStudy.completionDate || Date.now()).toLocaleDateString('ru-RU')}</span>
                            </div>
                            <div className="bg-sea-green/10 text-sea-green px-4 py-2 rounded-full font-semibold text-sm">
                              {caseStudy.timeline || 'N/A'}
                            </div>
                          </div>

                          <p className="text-dark-slate/70 text-base leading-relaxed">{caseStudy.description || caseStudy.previewText || 'No description available.'}</p>

                          <div className="space-y-3">
                            <h4 className="font-semibold text-dark-slate text-base">Ключевые результаты:</h4>
                            <ul className="space-y-2">
                              {(caseStudy.results || []).slice(0, 3).map((result, resultIndex) => (
                                <li key={resultIndex} className="flex items-start gap-3 text-sm text-dark-slate">
                                  <CheckCircle className="w-4 h-4 text-sea-green flex-shrink-0 mt-0.5" />
                                  <span className="font-medium">{result}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {(caseStudy.tags || []).slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-sea-green/10 text-sea-green text-sm rounded-full font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-center mt-8 pt-6 border-t border-dark-slate/10">
                          <div className="text-sea-green font-semibold inline-flex items-center gap-2 text-base">
                            Подробнее <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>
                    </div>
                  </GlassmorphicCard>
                </Link>

                {/* Mobile version - not clickable */}
                <div className="md:hidden">
                  <GlassmorphicCard delay={index * 0.1}>
                    <div className="flex flex-col h-full min-h-[700px]">
                        <div className="relative mb-6">
                          <img
                            src={caseStudy.coverImage || caseStudy.image || "/api/placeholder/600/400"}
                            alt={caseStudy.title}
                            className="w-full h-64 object-cover rounded-xl"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "/api/placeholder/600/400";
                            }}
                          />
                          {caseStudy.featured && (
                            <div className="absolute top-4 right-4 bg-sea-green text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                              Рекомендуемый
                            </div>
                          )}
                        </div>

                        <div className="space-y-5 flex-grow">
                          <h3 className="text-2xl font-heading font-bold text-dark-slate leading-tight">
                            {caseStudy.title}
                          </h3>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sea-green">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm font-medium">{caseStudy.completion || new Date(caseStudy.completionDate || Date.now()).toLocaleDateString('ru-RU')}</span>
                            </div>
                            <div className="bg-sea-green/10 text-sea-green px-4 py-2 rounded-full font-semibold text-sm">
                              {caseStudy.timeline || 'N/A'}
                            </div>
                          </div>

                          <p className="text-dark-slate/70 text-base leading-relaxed">{caseStudy.description || caseStudy.previewText || 'No description available.'}</p>

                          <div className="space-y-3">
                            <h4 className="font-semibold text-dark-slate text-base">Ключевые результаты:</h4>
                            <ul className="space-y-2">
                              {(caseStudy.results || []).slice(0, 3).map((result, resultIndex) => (
                                <li key={resultIndex} className="flex items-start gap-3 text-sm text-dark-slate">
                                  <CheckCircle className="w-4 h-4 text-sea-green flex-shrink-0 mt-0.5" />
                                  <span className="font-medium">{result}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {(caseStudy.tags || []).slice(0, 2).map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-sea-green/10 text-sea-green text-sm rounded-full font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-center mt-8 pt-6 border-t border-dark-slate/10">
                          <Link
                            href={`/case-studies/${caseStudy.slug || `example-${index}`}`}
                            className="text-sea-green font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all text-base"
                          >
                            Подробнее <ArrowRight className="w-5 h-5" />
                          </Link>
                        </div>
                    </div>
                  </GlassmorphicCard>
                </div>
              </motion.div>
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