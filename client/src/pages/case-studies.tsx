
import { useState, useEffect, useMemo } from 'react';
import { motion } from "framer-motion";
import { Search, Filter, ArrowRight, Calendar, MapPin, Users, CheckCircle2, TrendingUp, Award } from "lucide-react";
import { Link } from "wouter";
import OrganicBlob from "@/components/OrganicBlob";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import StructuredData from "@/components/StructuredData";
import NavigationLink from "@/components/NavigationLink";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSEO } from "@/hooks/useSEO";
import { fetchDirectusCases, type CaseStudy } from "@/lib/directus";

export default function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const isMobile = useIsMobile();

  // SEO optimization
  useSEO({
    title: "Кейсы - Synecology | Примеры экологических проектов в Беларуси",
    description: "Изучите наши успешные экологические проекты и кейсы. Примеры разработки ПДВ, экологических паспортов и других услуг в области экологического консалтинга.",
    keywords: "кейсы, экологические проекты, примеры работ, ПДВ проекты, экологический паспорт, Беларусь, Минск",
    ogTitle: "Кейсы Synecology - Примеры экологических проектов",
    ogDescription: "Изучите наши успешные экологические проекты и решения для предприятий Беларуси.",
    canonical: "https://synecology.ru/case-studies"
  });

  useEffect(() => {
    const loadCaseStudies = async () => {
      try {
        setIsLoading(true);
        const cases = await fetchDirectusCases();
        setCaseStudies(cases);
      } catch (error) {
        console.error('Error loading case studies:', error);
        setError('Ошибка загрузки кейсов');
      } finally {
        setIsLoading(false);
      }
    };

    loadCaseStudies();
  }, []);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set<string>();
    caseStudies.forEach(study => {
      if (study.category && Array.isArray(study.category)) {
        study.category.forEach(cat => cats.add(cat));
      }
    });
    return Array.from(cats).sort();
  }, [caseStudies]);

  // Filter case studies
  const filteredCaseStudies = useMemo(() => {
    return caseStudies.filter(study => {
      const matchesSearch = !searchTerm || 
        study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.client?.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = !selectedCategory || 
        (study.category && Array.isArray(study.category) && study.category.includes(selectedCategory));
      
      return matchesSearch && matchesCategory;
    });
  }, [caseStudies, searchTerm, selectedCategory]);

  const breadcrumbItems = [
    { label: 'Главная', href: '/' },
    { label: 'Кейсы', href: '/case-studies' }
  ];

  const stats = [
    { icon: TrendingUp, value: "100%", label: "Проектов завершено в срок", color: "text-sea-green" },
    { icon: Users, value: "50+", label: "Предприятий обслужено", color: "text-soft-blue" },
    { icon: Award, value: "98%", label: "Документов принято с первого раза", color: "text-sandy-beige" },
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sea-green mx-auto mb-4"></div>
          <p className="text-dark-slate/70">Загрузка кейсов...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <StructuredData
        type="WebPage"
        data={{
          title: "Кейсы - Synecology | Примеры экологических проектов",
          description: "Изучите наши успешные экологические проекты и кейсы",
          url: "https://synecology.ru/case-studies"
        }}
      />
      
      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

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
                Наш опыт — <span className="text-sea-green">ваша уверенность</span>
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

            {/* Filters */}
            <motion.div
              className="mb-12 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {/* Search */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-slate/50" />
                <input
                  type="text"
                  placeholder="Поиск кейсов..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sea-green focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              {categories.length > 0 && (
                <div className="flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => setSelectedCategory('')}
                    className={`px-4 py-2 rounded-full transition-all duration-300 ${
                      !selectedCategory
                        ? 'bg-sea-green text-white'
                        : 'bg-white text-dark-slate border border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    Все категории
                  </button>
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-sea-green text-white'
                          : 'bg-white text-dark-slate border border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 bg-gradient-to-b from-off-white to-soft-blue/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {error ? (
              <div className="text-center py-12">
                <p className="text-red-600 mb-4">{error}</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="bg-sea-green text-white px-6 py-3 rounded-full font-semibold hover:bg-sea-green/90 transition-colors"
                >
                  Попробовать снова
                </button>
              </div>
            ) : filteredCaseStudies.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-dark-slate/70 text-lg mb-4">
                  {searchTerm || selectedCategory ? 'Кейсы не найдены' : 'Кейсы пока не загружены'}
                </p>
                <Link
                  href="/contact"
                  className="text-sea-green font-semibold hover:text-sea-green/80 transition-colors"
                >
                  Свяжитесь с нами
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredCaseStudies.map((caseStudy, index) => (
                  <motion.div
                    key={caseStudy.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Link href={`/case-studies/${caseStudy.slug}`}>
                      <GlassmorphicCard className="h-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg cursor-pointer">
                        <div className="flex flex-col h-full min-h-[500px]">
                          {caseStudy.coverImage && (
                            <div className="relative mb-6">
                              <img
                                src={caseStudy.coverImage}
                                alt={caseStudy.title || 'Case study image'}
                                className="w-full h-64 object-cover rounded-xl transition-transform duration-300 group-hover:scale-102"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                }}
                              />
                              {caseStudy.featured && (
                                <div className="absolute top-4 right-4 bg-sea-green text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                  Рекомендуемый
                                </div>
                              )}
                            </div>
                          )}

                          {!caseStudy.coverImage && caseStudy.featured && (
                            <div className="mb-4">
                              <div className="bg-sea-green text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg inline-block">
                                Рекомендуемый
                              </div>
                            </div>
                          )}

                          <div className="space-y-5 flex-grow">
                            <h3 className="text-2xl font-heading font-bold text-dark-slate leading-tight group-hover:text-sea-green transition-colors duration-300">
                              {caseStudy.title || 'Untitled Case Study'}
                            </h3>

                            {(caseStudy.completionDate || caseStudy.timeline) && (
                              <div className="flex items-center justify-between">
                                {caseStudy.completionDate && (
                                  <div className="flex items-center gap-2 text-sea-green">
                                    <Calendar className="w-4 h-4" />
                                    <span className="text-sm font-medium">
                                      {new Date(caseStudy.completionDate).toLocaleDateString('ru-RU')}
                                    </span>
                                  </div>
                                )}
                                {caseStudy.timeline && (
                                  <div className="bg-sea-green/10 text-sea-green px-4 py-2 rounded-full font-semibold text-sm">
                                    {caseStudy.timeline}
                                  </div>
                                )}
                              </div>
                            )}

                            {(caseStudy.excerpt || caseStudy.content) && (
                              <p className="text-dark-slate/70 text-base leading-relaxed">
                                {caseStudy.excerpt || caseStudy.content || 'Описание недоступно.'}
                              </p>
                            )}

                            {caseStudy.results && caseStudy.results.length > 0 && (
                              <div className="space-y-3">
                                <h4 className="font-semibold text-dark-slate text-base">Ключевые результаты:</h4>
                                <ul className="space-y-2">
                                  {caseStudy.results.slice(0, 3).map((result, resultIndex) => (
                                    <li key={resultIndex} className="flex items-start gap-3 text-sm text-dark-slate">
                                      <CheckCircle2 className="w-4 h-4 text-sea-green flex-shrink-0 mt-0.5" />
                                      <span className="font-medium">{result}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {caseStudy.tags && caseStudy.tags.length > 0 && (
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
                            )}
                          </div>

                          <div className="flex items-center justify-center mt-8 pt-6 border-t border-dark-slate/10">
                            <div className="text-sea-green font-semibold inline-flex items-center gap-2 text-base">
                              Подробнее <ArrowRight className="w-5 h-5" />
                            </div>
                          </div>
                        </div>
                      </GlassmorphicCard>
                    </Link>
                  </motion.div>
                ))}
              </div>
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
                Хотите такие же <span className="text-sea-green">результаты?</span>
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
    </>
  );
}
