import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, ArrowRight, Clock, Tag, Search, User } from "lucide-react";
import OrganicBlob from "@/components/OrganicBlob";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import { useState, useMemo } from "react";

export default function Blog() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Adding slugs for blog posts to use in URLs and keys
  const blogPosts = [
    {
      title: "Экосертификат для бизнеса в Беларуси: как подтвердить «зеленый» статус и обойти конкурентов",
      excerpt: "Получение экологического сертификата — это не альтруизм, а стратегический шаг, который позволяет увеличить целевую аудиторию, повысить доверие покупателей и получить решающее преимущество в конкурентной борьбе. Рассказываем, как получить органик-сертификат и ISO 14001 в Беларуси.",
      category: "Сертификация",
      date: "20.12.2024",
      readTime: "8 мин",
      image: "https://images.unsplash.com/photo-1727812100171-8af0e7211041?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Экосертификат", "Органик", "ISO 14001", "Беларусь"],
      featured: true,
      author: "Корякин Егор Дмитриевич",
      authorSlug: "egor-koryakin",
      slug: "eco-certification-business-belarus"
    },
    {
      title: "Отходы на предприятии в Беларуси: полное руководство по обращению от А до Я",
      excerpt: "Правильная организация системы обращения с отходами — это не просто забота о природе. В первую очередь, это вопрос финансовой безопасности и юридической защиты вашего бизнеса. Штрафы за нарушения могут достигать 40 000 рублей, а грамотная система экономит деньги на налогах.",
      category: "Отходы",
      date: "18.12.2024",
      readTime: "10 мин",
      image: "https://images.unsplash.com/photo-1684324278460-25fbb2e3f175?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Отходы", "Штрафы", "Инструкция", "ПОД-9", "ПОД-10"],
      featured: false,
      author: "Корякин Егор Дмитриевич",
      authorSlug: "egor-koryakin",
      slug: "waste-management-enterprise-belarus"
    },
    {
      title: "Выбросы в атмосферу в Беларуси: как легально работать и не платить лишнего",
      excerpt: "Разработка проекта нормативов допустимых выбросов — это не только исполнение закона, но и инструмент для существенной экономии на экологическом налоге и защита от многотысячных штрафов. Объясняем пошагово, как получить разрешение и избежать проблем с контролирующими органами.",
      category: "Выбросы",
      date: "16.12.2024",
      readTime: "9 мин",
      image: "https://images.unsplash.com/photo-1692934869616-3c4b9a0c0a4f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Выбросы", "ПДВ", "Экологический налог", "Разрешение"],
      featured: false,
      author: "Корякин Егор Дмитриевич",
      authorSlug: "egor-koryakin",
      slug: "atmospheric-emissions-belarus"
    },
    {
      title: "Экологическое сопровождение: как защитить бизнес от штрафов и претензий",
      excerpt: "Аутсорсинг экологического сопровождения — это решение для бизнеса, который хочет минимизировать риски и избежать штрафов. Мы берем на себя всю работу с документами и контролирующими органами, чтобы вы могли сосредоточиться на развитии своего дела.",
      category: "Экологическое сопровождение",
      date: "14.12.2024",
      readTime: "7 мин",
      image: "https://images.unsplash.com/photo-1726747849539-158043460661?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Экологическое сопровождение", "Штрафы", "Риски", "Аутсорсинг"],
      featured: false,
      author: "Иванова Анна Петровна",
      authorSlug: "anna-ivanova",
      slug: "ecological-support"
    },
    {
      title: "Экологический паспорт предприятия: обязательный документ или формальность?",
      excerpt: "Экологический паспорт — это не просто отчетность. Это комплексный документ, который отражает экологическую политику предприятия и его соответствие требованиям законодательства. Разбираемся, как его правильно составить и почему это важно для вашего бизнеса.",
      category: "Документация",
      date: "12.12.2024",
      readTime: "6 мин",
      image: "https://images.unsplash.com/photo-1700834334254-393f3f5c2c55?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Экологический паспорт", "Документация", "Законодательство", "Отчетность"],
      featured: false,
      author: "Иванова Анна Петровна",
      authorSlug: "anna-ivanova",
      slug: "ecological-passport"
    },
    {
      title: "Производственный экологический контроль: как избежать штрафов и наладить систему",
      excerpt: "Производственный экологический контроль (ПЭК) — ключевой элемент экологической безопасности на любом предприятии. Правильно организованная система ПЭК помогает не только избежать штрафов, но и оптимизировать расходы, связанные с воздействием на окружающую среду.",
      category: "Контроль",
      date: "10.12.2024",
      readTime: "8 мин",
      image: "https://images.unsplash.com/photo-1698526088101-7044e7c190a5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["ПЭК", "Контроль", "Штрафы", "Безопасность"],
      featured: false,
      author: "Петров Сергей Васильевич",
      authorSlug: "sergey-petrov",
      slug: "production-environmental-control"
    }
  ];

  // Собираем все уникальные теги
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [blogPosts]);

  // Фильтруем посты по тегам и поисковому запросу
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      // Для тегов используем логику "И" - пост должен содержать ВСЕ выбранные теги
      const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => post.tags.includes(tag));
      const matchesSearch = !searchTerm || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      return matchesTags && matchesSearch;
    });
  }, [blogPosts, selectedTags, searchTerm]);

  const clearFilters = () => {
    setSelectedTags([]);
    setSearchTerm("");
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

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
              Экология <span className="text-sea-green">простыми словами</span>
            </motion.h1>
            <motion.p
              className="text-xl text-dark-slate/70 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Превращаем запутанные инструкции и законы в четкие и понятные статьи. Наша цель — помочь вам быстро найти нужное решение и сэкономить ваше самое ценное время.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gradient-to-b from-off-white to-soft-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="mb-8 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-dark-slate/50 w-5 h-5" />
              <input
                type="text"
                placeholder="Поиск по статьям и тегам..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-dark-slate/20 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-sea-green focus:border-transparent text-dark-slate"
              />
            </div>
          </div>

          {/* Tag Filter */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedTags.includes(tag)
                      ? 'bg-sea-green text-white border-2 border-sea-green shadow-lg'
                      : 'bg-white/60 text-dark-slate/70 hover:bg-sea-green/10 hover:text-sea-green border border-dark-slate/20'
                  }`}
                >
                  <Tag className="w-3 h-3 inline mr-1" />
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Active Filters and Clear Button */}
          {(selectedTags.length > 0 || searchTerm) && (
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm text-dark-slate/70">
                <span>Активные фильтры{selectedTags.length > 1 ? ' (все должны совпадать)' : ''}:</span>
                {selectedTags.map(tag => (
                  <span key={tag} className="bg-sea-green text-white px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
                {searchTerm && (
                  <span className="bg-sea-green/20 text-sea-green px-3 py-1 rounded-full">
                    "{searchTerm}"
                  </span>
                )}
              </div>
              <button
                onClick={clearFilters}
                className="text-sm text-dark-slate/70 hover:text-sea-green transition-colors"
              >
                Очистить все
              </button>
            </div>
          )}

          {/* Results count */}
          <div className="text-center text-sm text-dark-slate/70">
            {filteredPosts.length === 0 ? (
              <span>Статьи не найдены</span>
            ) : (
              <span>Найдено {filteredPosts.length} {filteredPosts.length === 1 ? 'статья' : filteredPosts.length < 5 ? 'статьи' : 'статей'}</span>
            )}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.length > 0 && filteredPosts.some(post => post.featured) && (
        <section className="py-12 bg-gradient-to-b from-soft-blue/20 to-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-heading font-bold text-dark-slate mb-4">Рекомендуемая статья</h2>
            </div>

            {filteredPosts.filter(post => post.featured).map((post) => (
              <GlassmorphicCard key={post.title} className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 lg:h-full object-cover rounded-xl"
                    />
                    <div className="absolute top-4 left-4 bg-sea-green text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Рекомендуемая
                    </div>
                  </div>

                  <div className="space-y-6">

                    <div className="flex items-center gap-4 text-sm flex-wrap">
                        <div className="flex items-center gap-2 bg-sea-green/10 text-sea-green px-3 py-1 rounded-full">
                          <Calendar className="w-4 h-4" />
                          <span className="font-medium">{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-soft-blue/20 text-dark-slate px-3 py-1 rounded-full">
                          <Clock className="w-4 h-4" />
                          <span className="font-medium">{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-sandy-beige/50 text-dark-slate px-3 py-1 rounded-full">
                          <Tag className="w-4 h-4" />
                          <span className="font-medium">{post.category}</span>
                        </div>
                        <Link
                          href={`/team/${post.authorSlug}`}
                          className="flex items-center gap-2 bg-dark-slate/10 text-dark-slate hover:bg-dark-slate/20 transition-colors px-3 py-1 rounded-full"
                        >
                          <User className="w-4 h-4" />
                          <span className="font-medium">{post.author}</span>
                        </Link>
                      </div>

                    <h3 className="text-3xl font-heading font-bold text-dark-slate">
                      {post.title}
                    </h3>

                    <p className="text-lg text-dark-slate/70 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => toggleTag(tag)}
                          className={`px-3 py-1 text-sm rounded-full transition-all duration-300 cursor-pointer ${
                            selectedTags.includes(tag)
                              ? 'bg-sea-green text-white shadow-lg'
                              : 'bg-sea-green/10 text-sea-green hover:bg-sea-green/20'
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>

                    <Link
                        href={`/blog/${post.slug}`}
                        className="bg-sea-green text-white px-8 py-4 rounded-full font-semibold hover:bg-sea-green/90 transition-all duration-300 inline-flex items-center gap-2"
                      >
                        <ArrowRight className="w-5 h-5" />
                        Читать полную статью
                      </Link>
                  </div>
                </div>
              </GlassmorphicCard>
            ))}
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-heading font-bold text-dark-slate mb-4">
                {filteredPosts.some(post => post.featured) ? "Другие статьи" : "Статьи"}
              </h2>
            </div>
          )}

          {filteredPosts.length === 0 ? (
            <GlassmorphicCard className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 bg-sea-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-sea-green/50" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-dark-slate mb-2">
                  Статьи не найдены
                </h3>
                <p className="text-dark-slate/70 mb-4">
                  Попробуйте изменить критерии поиска или очистить фильтры
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-sea-green text-white px-6 py-3 rounded-full font-semibold hover:bg-sea-green/90 transition-all duration-300"
                >
                  Очистить фильтры
                </button>
              </div>
            </GlassmorphicCard>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.filter(post => !post.featured).map((post, index) => (
                <motion.div 
                  key={`blog-post-${post.slug}`}
                  initial={{ opacity: 0, y: 5 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.02, duration: 0.3, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.1 }}
                  className="group"
                >
                  <div 
                    className="group block h-full cursor-pointer" 
                    onClick={() => window.location.href = `/blog/${post.slug}`}
                  >
                  <GlassmorphicCard className="h-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                      <article className="flex flex-col h-full space-y-6">
                        <div className="relative">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-64 object-cover rounded-xl transition-transform duration-300 group-hover:scale-102"
                            loading="lazy"
                            style={{ 
                              aspectRatio: '16/9',
                              objectFit: 'cover'
                            }}
                          />
                        </div>

                        <div className="flex items-center gap-4 text-sm flex-wrap">
                          <div className="flex items-center gap-2 bg-sea-green/10 text-sea-green px-3 py-1 rounded-full">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{post.date}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-soft-blue/20 text-dark-slate px-3 py-1 rounded-full">
                            <Clock className="w-4 h-4" />
                            <span className="font-medium">{post.readTime}</span>
                          </div>
                          <div className="flex items-center gap-2 bg-sandy-beige/50 text-dark-slate px-3 py-1 rounded-full">
                            <Tag className="w-4 h-4" />
                            <span className="font-medium">{post.category}</span>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              window.location.href = `/team/${post.authorSlug}`;
                            }}
                            className="flex items-center gap-2 bg-dark-slate/10 text-dark-slate hover:bg-dark-slate/20 transition-colors px-3 py-1 rounded-full"
                          >
                            <User className="w-4 h-4" />
                            <span className="font-medium">{post.author}</span>
                          </button>
                        </div>

                        <h3 className="text-2xl font-heading font-bold text-dark-slate line-clamp-3 group-hover:text-sea-green transition-colors duration-300">
                          {post.title}
                        </h3>

                        <p className="text-dark-slate/70 line-clamp-4 flex-grow text-base leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-sm rounded-full bg-sea-green/10 text-sea-green pointer-events-none"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="bg-sea-green text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2 mt-auto justify-center group-hover:bg-sea-green/90">
                          <ArrowRight className="w-5 h-5" />
                          Читать полную статью
                        </div>
                      </article>
                    </GlassmorphicCard>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {filteredPosts.length > 0 && (
            <div className="text-center mt-12">
            <GlassmorphicCard className="max-w-md mx-auto">
                <p className="text-dark-slate/70 mb-4">
                  Мы готовим для вас ещё больше полезных статей
                </p>
                <button className="glassmorphic glassmorphic-hover px-8 py-4 rounded-full text-sea-green font-semibold opacity-50 cursor-not-allowed">
                  Статьи в процессе написания
                </button>
              </GlassmorphicCard>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-b from-off-white to-soft-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassmorphicCard className="text-center">
            <motion.h2
              className="text-4xl font-heading font-bold text-dark-slate mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Будьте <span className="text-sea-green">в курсе</span>
            </motion.h2>
            <motion.p
              className="text-xl text-dark-slate/70 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Подпишитесь, чтобы получать закрытые аналитические материалы, чек-листы для самопроверки и шаблоны документов, которые мы отправляем только нашим подписчикам.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <input
                type="email"
                placeholder="Введите ваш email"
                className="flex-1 px-6 py-4 rounded-full border border-dark-slate/20 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-sea-green focus:border-transparent"
              />
              <button className="bg-sea-green text-white px-8 py-4 rounded-full font-semibold hover:bg-sea-green/90 transition-all duration-300">
                Подписаться
              </button>
            </motion.div>
          </GlassmorphicCard>
        </div>
      </section>
    </div>
  );
}