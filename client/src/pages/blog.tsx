
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, ArrowRight, Clock, Tag, Search, User, Loader2 } from "lucide-react";
import OrganicBlob from "@/components/OrganicBlob";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import { useState, useMemo } from "react";
import { useBlogPosts, useBlogFilters } from "@/hooks/useDirectus";
import { getDirectusImageUrl, formatDate } from "@/lib/directus";

export default function Blog() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  // Fetch blog posts with filters
  const blogQuery = useBlogPosts({
    limit: postsPerPage,
    offset: (currentPage - 1) * postsPerPage,
    sort: ['-published_date'],
    filter: {
      ...(selectedCategories.length > 0 && { category: selectedCategories }),
      ...(selectedTags.length > 0 && { 
        tags: { _intersects: selectedTags }
      }),
    },
    ...(searchTerm && { search: searchTerm }),
  });

  // Fetch filter options
  const filtersQuery = useBlogFilters();

  const { data: blogData, isLoading, error } = blogQuery;
  const { data: filtersData } = filtersQuery;

  const blogPosts = blogData?.data || [];
  const totalCount = blogData?.meta?.total_count || 0;
  const totalPages = Math.ceil(totalCount / postsPerPage);

  const clearFilters = () => {
    setSelectedTags([]);
    setSelectedCategories([]);
    setSearchTerm("");
    setCurrentPage(1);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
    setCurrentPage(1);
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
    setCurrentPage(1);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  if (error) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <GlassmorphicCard className="text-center">
          <h2 className="text-2xl font-heading font-bold text-dark-slate mb-4">
            Ошибка загрузки
          </h2>
          <p className="text-dark-slate/70 mb-4">
            Не удалось загрузить статьи. Попробуйте обновить страницу.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-sea-green text-white px-6 py-3 rounded-full font-semibold hover:bg-sea-green/90 transition-all duration-300"
          >
            Обновить страницу
          </button>
        </GlassmorphicCard>
      </div>
    );
  }

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
                placeholder="Поиск по статьям..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-dark-slate/20 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-sea-green focus:border-transparent text-dark-slate"
              />
            </div>
          </div>

          {/* Category Filter */}
          {filtersData?.categories && filtersData.categories.length > 0 && (
            <div className="mb-4">
              <h3 className="text-center text-dark-slate/70 mb-3 text-sm font-medium">Категории:</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {filtersData.categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategories.includes(category)
                        ? 'bg-sea-green text-white border-2 border-sea-green shadow-lg'
                        : 'bg-white/60 text-dark-slate/70 hover:bg-sea-green/10 hover:text-sea-green border border-dark-slate/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tag Filter */}
          {filtersData?.tags && filtersData.tags.length > 0 && (
            <div className="mb-4">
              <h3 className="text-center text-dark-slate/70 mb-3 text-sm font-medium">Теги:</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {filtersData.tags.slice(0, 15).map((tag) => (
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
          )}

          {/* Active Filters and Clear Button */}
          {(selectedTags.length > 0 || selectedCategories.length > 0 || searchTerm) && (
            <div className="flex justify-center items-center gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm text-dark-slate/70 flex-wrap justify-center">
                <span>Активные фильтры:</span>
                {selectedCategories.map(category => (
                  <span key={category} className="bg-sea-green text-white px-3 py-1 rounded-full">
                    {category}
                  </span>
                ))}
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
            {isLoading ? (
              <span>Загрузка...</span>
            ) : (
              <span>
                {totalCount === 0 ? (
                  "Статьи не найдены"
                ) : (
                  `Найдено ${totalCount} ${totalCount === 1 ? 'статья' : totalCount < 5 ? 'статьи' : 'статей'}`
                )}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-sea-green" />
              <span className="ml-3 text-dark-slate/70">Загружаем статьи...</span>
            </div>
          ) : blogPosts.length === 0 ? (
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
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.div 
                    key={post.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: index * 0.1, 
                      duration: 0.6,
                      ease: "easeOut"
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="group h-full card-stable visible"
                  >
                    <Link href={`/blog/${post.slug}`} className="block h-full">
                      <GlassmorphicCard className="h-full transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg cursor-pointer">
                        <article className="flex flex-col h-full space-y-6">
                          <div className="relative">
                            <img
                              src={getDirectusImageUrl(post.cover_image, { width: 600, height: 300, quality: 80 })}
                              alt={post.title}
                              className="w-full h-64 object-cover rounded-xl transition-transform duration-300 group-hover:scale-102"
                              loading="lazy"
                            />
                            {post.featured && (
                              <div className="absolute top-4 right-4 bg-sea-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                                Рекомендуемая
                              </div>
                            )}
                          </div>

                          <div className="flex items-center gap-4 text-sm flex-wrap">
                            {post.published_date && (
                              <div className="flex items-center gap-2 bg-sea-green/10 text-sea-green px-3 py-1 rounded-full">
                                <Calendar className="w-4 h-4" />
                                <span className="font-medium">{formatDate(post.published_date)}</span>
                              </div>
                            )}
                            {post.read_time && (
                              <div className="flex items-center gap-2 bg-soft-blue/20 text-dark-slate px-3 py-1 rounded-full">
                                <Clock className="w-4 h-4" />
                                <span className="font-medium">{post.read_time}</span>
                              </div>
                            )}
                            {post.category && (
                              <div className="flex items-center gap-2 bg-sandy-beige/50 text-dark-slate px-3 py-1 rounded-full">
                                <Tag className="w-4 h-4" />
                                <span className="font-medium">{post.category}</span>
                              </div>
                            )}
                          </div>

                          <h3 className="text-xl font-heading font-bold text-dark-slate line-clamp-3 group-hover:text-sea-green transition-colors duration-300">
                            {post.title}
                          </h3>

                          {post.excerpt && (
                            <p className="text-dark-slate/70 line-clamp-4 flex-grow text-base leading-relaxed">
                              {post.excerpt}
                            </p>
                          )}

                          {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {post.tags.slice(0, 3).map((tag) => (
                                <span
                                  key={tag}
                                  className="px-3 py-1 text-sm rounded-full bg-sea-green/10 text-sea-green"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}

                          <div className="bg-sea-green text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center gap-2 mt-auto justify-center group-hover:bg-sea-green/90">
                            <ArrowRight className="w-5 h-5" />
                            Читать полную статью
                          </div>
                        </article>
                      </GlassmorphicCard>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex justify-center">
                  <GlassmorphicCard className="p-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded-full bg-sea-green/10 text-sea-green disabled:opacity-50 disabled:cursor-not-allowed hover:bg-sea-green/20 transition-colors"
                      >
                        ← Предыдущая
                      </button>
                      
                      <div className="flex items-center gap-1">
                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                          let pageNum;
                          if (totalPages <= 5) {
                            pageNum = i + 1;
                          } else if (currentPage <= 3) {
                            pageNum = i + 1;
                          } else if (currentPage >= totalPages - 2) {
                            pageNum = totalPages - 4 + i;
                          } else {
                            pageNum = currentPage - 2 + i;
                          }
                          
                          return (
                            <button
                              key={pageNum}
                              onClick={() => setCurrentPage(pageNum)}
                              className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                                currentPage === pageNum
                                  ? 'bg-sea-green text-white'
                                  : 'hover:bg-sea-green/10 text-dark-slate'
                              }`}
                            >
                              {pageNum}
                            </button>
                          );
                        })}
                      </div>
                      
                      <button
                        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 rounded-full bg-sea-green/10 text-sea-green disabled:opacity-50 disabled:cursor-not-allowed hover:bg-sea-green/20 transition-colors"
                      >
                        Следующая →
                      </button>
                    </div>
                  </GlassmorphicCard>
                </div>
              )}
            </>
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
