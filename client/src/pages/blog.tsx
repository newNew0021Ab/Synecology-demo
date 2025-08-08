import { useState, useMemo } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, User, Tag, Search, Filter, AlertCircle } from "lucide-react";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import OptimizedImage from "@/components/OptimizedImage";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useBlogPosts, useBlogMeta } from "@/hooks/useDirectus";
import { getImageUrl, parseContent, safeArray } from "@/lib/directus";
import { useSEO } from "@/hooks/useSEO";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string>("");

  // Fetch data
  const { data: posts = [], isLoading: postsLoading, error: postsError } = useBlogPosts();
  const { data: meta, isLoading: metaLoading } = useBlogMeta();

  // SEO setup
  useSEO({
    title: "Блог - Synecology",
    description: "Читайте наши статьи об экологических решениях, новостях индустрии и практических советах по устойчивому развитию.",
    keywords: ["блог", "экология", "статьи", "новости", "устойчивое развитие"],
  });

  // Filter posts
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      if (!post || !post.title) return false;

      const matchesSearch = !searchTerm ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = !selectedCategory || post.category === selectedCategory;

      const postTags = safeArray(post.tags);
      const matchesTag = !selectedTag || postTags.includes(selectedTag);

      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [posts, searchTerm, selectedCategory, selectedTag]);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return 'Дата не указана';
    }
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSelectedTag("");
  };

  // Loading state
  if (postsLoading) {
    return (
      <div className="min-h-screen pt-20 bg-gradient-to-br from-off-white via-soft-blue/10 to-sandy-beige/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <Skeleton className="h-12 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="space-y-4">
                <Skeleton className="h-48 w-full" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (postsError) {
    return (
      <div className="min-h-screen pt-20 bg-gradient-to-br from-off-white via-soft-blue/10 to-sandy-beige/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Alert className="max-w-2xl mx-auto">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Не удалось загрузить статьи. Пожалуйста, попробуйте позже.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-off-white via-soft-blue/10 to-sandy-beige/20">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-5xl sm:text-6xl font-heading font-bold text-dark-slate mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Блог Synecology
          </motion.h1>
          <motion.p
            className="text-xl text-dark-slate/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Делимся знаниями, опытом и инсайтами в области экологического консалтинга и устойчивого развития
          </motion.p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassmorphicCard>
            <div className="space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-slate/50 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Поиск по статьям..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category and Tag filters */}
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-dark-slate/70" />
                  <span className="text-sm font-medium text-dark-slate/70">Категория:</span>
                </div>

                {!metaLoading && meta?.categories && (
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant={selectedCategory === "" ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => setSelectedCategory("")}
                    >
                      Все
                    </Badge>
                    {meta.categories.map((category) => (
                      <Badge
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                )}

                {!metaLoading && meta?.tags && meta.tags.length > 0 && (
                  <>
                    <div className="flex items-center gap-2 ml-4">
                      <Tag className="w-4 h-4 text-dark-slate/70" />
                      <span className="text-sm font-medium text-dark-slate/70">Теги:</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {meta.tags.slice(0, 8).map((tag) => (
                        <Badge
                          key={tag}
                          variant={selectedTag === tag ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => setSelectedTag(selectedTag === tag ? "" : tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </>
                )}

                {(searchTerm || selectedCategory || selectedTag) && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={clearFilters}
                    className="ml-auto"
                  >
                    Очистить фильтры
                  </Button>
                )}
              </div>
            </div>
          </GlassmorphicCard>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-dark-slate/60 mb-4">
                {posts.length === 0 ? "Статьи пока не добавлены" : "Статьи по вашему запросу не найдены"}
              </div>
              {(searchTerm || selectedCategory || selectedTag) && (
                <Button onClick={clearFilters} variant="outline">
                  Показать все статьи
                </Button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => {
                const coverImageUrl = getImageUrl(post.cover_image);
                const postTags = safeArray(post.tags);

                return (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link href={`/blog/${post.slug}`}>
                      <GlassmorphicCard className="h-full hover:scale-105 transition-transform duration-300 cursor-pointer group">
                        {coverImageUrl && (
                          <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                            <OptimizedImage
                              src={coverImageUrl}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        )}

                        <div className="flex flex-col h-full">
                          <div className="flex-1">
                            {post.category && (
                              <Badge variant="secondary" className="mb-2">
                                {post.category}
                              </Badge>
                            )}

                            <h3 className="text-xl font-heading font-bold text-dark-slate mb-3 line-clamp-2">
                              {post.title}
                            </h3>

                            {post.excerpt && (
                              <p className="text-dark-slate/70 mb-4 line-clamp-3">
                                {post.excerpt}
                              </p>
                            )}
                          </div>

                          <div className="mt-auto">
                            {postTags.length > 0 && (
                              <div className="flex flex-wrap gap-1 mb-3">
                                {postTags.slice(0, 3).map((tag) => (
                                  <Badge key={tag} variant="outline" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            )}

                            <div className="flex items-center gap-4 text-sm text-dark-slate/60">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {formatDate(post.published_date)}
                              </div>
                              <div className="flex items-center gap-1">
                                <User className="w-4 h-4" />
                                Synecology
                              </div>
                            </div>
                          </div>
                        </div>
                      </GlassmorphicCard>
                    </Link>
                  </motion.article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}