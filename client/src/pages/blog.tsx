import { motion } from "framer-motion";
import { useLocation, Link } from "wouter";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { GlassmorphicCard } from "../components/GlassmorphicCard";
import { OrganicBlob } from "../components/OrganicBlob";
import { useSEO } from "../hooks/useSEO";
import { useBlogPosts } from "../hooks/useStrapi";
import { getStrapiImageUrl } from "../lib/strapi";
import { Skeleton } from "../components/ui/skeleton";

export default function BlogPage() {
  const [location] = useLocation();
  const { data: blogPosts, isLoading, error } = useBlogPosts();

  useSEO({
    title: "Блог - Экологические новости и статьи",
    description: "Актуальные статьи об экологии, устойчивом развитии, экологическом праве и практических решениях для бизнеса.",
    keywords: "экология, блог, устойчивое развитие, экологическое право, зеленые технологии"
  });

  if (error) {
    return (
      <div className="min-h-screen bg-background text-foreground pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-destructive mb-4">Ошибка загрузки</h2>
            <p className="text-muted-foreground">Не удалось загрузить статьи блога</p>
          </div>
        </div>
      </div>
    );
  }

  const staticBlogPosts = [
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
    },
  ];

  // Собираем все уникальные теги
  /* const allTags = useMemo(() => {
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
  }; */

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-16">
      {/*   {/* Breadcrumbs */}
      {/*  <div className="container mx-auto px-4 mb-8">
        <Breadcrumbs segments={[
          { label: 'Главная', href: '/' },
          { label: 'Блог', href: '/blog' }
        ]} />
      </div> */}

      <div className="container mx-auto px-4">
        <section className="py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Экология <span className="text-primary">простыми словами</span>
          </h1>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            Превращаем запутанные инструкции и законы в четкие и понятные статьи. Наша цель — помочь вам быстро найти нужное решение и сэкономить ваше самое ценное время.
          </p>
        </section>

        <section className="py-8">
          {/*  <div className="mb-8 max-w-2xl mx-auto">
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
          </div> */}

          {/*  <div className="mb-4">
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
          </div> */}

          {/* Active Filters and Clear Button */}
          {/*  {(selectedTags.length > 0 || searchTerm) && (
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
          )} */}

          {/* Results count */}
          {/*  <div className="text-center text-sm text-dark-slate/70">
            {filteredPosts.length === 0 ? (
              <span>Статьи не найдены</span>
            ) : (
              <span>Найдено {filteredPosts.length} {filteredPosts.length === 1 ? 'статья' : filteredPosts.length < 5 ? 'статьи' : 'статей'}</span>
            )}
          </div> */}
        </section>

        <section className="py-16">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="space-y-4">
                  <Skeleton className="h-48 w-full rounded-lg" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ))
            ) : (
              (blogPosts || staticBlogPosts).map((post, index) => {
                const isStrapi = 'attributes' in post;
                const postData = isStrapi ? {
                  slug: post.attributes.slug,
                  title: post.attributes.title,
                  excerpt: post.attributes.excerpt,
                  image: getStrapiImageUrl(post.attributes.cover_image),
                  date: new Date(post.attributes.time).toLocaleDateString('ru-RU'),
                  readTime: post.attributes.read_time,
                  author: post.attributes.author,
                  tags: post.attributes.tags.split(',').map((tag: string) => tag.trim())
                } : post;

                return (
                  <motion.div
                    key={postData.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <GlassmorphicCard className="h-full hover:scale-105 transition-all duration-300 group cursor-pointer">
                      <Link href={`/blog/${postData.slug}`}>
                        <div className="overflow-hidden rounded-t-lg">
                          <img 
                            src={postData.image} 
                            alt={postData.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm text-muted-foreground">{postData.date}</span>
                            <span className="text-sm text-muted-foreground">{postData.readTime}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                            {postData.title}
                          </h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed">
                            {postData.excerpt}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {postData.tags.map((tag, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">
                              {postData.author}
                            </span>
                            <motion.div
                              whileHover={{ x: 5 }}
                              className="text-primary"
                            >
                              →
                            </motion.div>
                          </div>
                        </div>
                      </Link>
                    </GlassmorphicCard>
                  </motion.div>
                );
              })
            )}
          </div>
        </section>

        <section className="py-12">
          <div className="text-center">
            <GlassmorphicCard className="max-w-md mx-auto">
              <p className="text-muted-foreground mb-4">
                Мы готовим для вас ещё больше полезных статей
              </p>
              <Button variant="secondary" size="lg" className="opacity-50 cursor-not-allowed">
                Статьи в процессе написания
              </Button>
            </GlassmorphicCard>
          </div>
        </section>
      </div>
    </div>
  );
}