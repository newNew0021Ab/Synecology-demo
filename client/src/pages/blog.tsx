import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, ArrowRight, Clock, Tag } from "lucide-react";
import OrganicBlob from "@/components/OrganicBlob";
import GlassmorphicCard from "@/components/GlassmorphicCard";

export default function Blog() {
  const blogPosts = [
    {
      title: "Будущее технологий улавливания углерода",
      excerpt: "Исследование инновационных подходов к улавливанию и хранению углерода, которые могут революционизировать климатические действия.",
      category: "Технологии",
      date: "15 декабря 2024",
      readTime: "5 мин чтения",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Улавливание углерода", "Климатические технологии", "Инновации"],
      featured: true,
    },
    {
      title: "Тенденции инвестиций в возобновляемую энергетику",
      excerpt: "Анализ глобальных рынков возобновляемой энергетики и возникающих инвестиционных возможностей в чистых технологиях.",
      category: "Финансы",
      date: "12 декабря 2024",
      readTime: "7 мин чтения",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Возобновляемая энергия", "Инвестиции", "Рыночный анализ"],
      featured: false,
    },
    {
      title: "Стратегии сохранения биоразнообразия",
      excerpt: "Эффективные подходы к защите экосистем и исчезающих видов в городской и сельской среде.",
      category: "Охрана природы",
      date: "10 декабря 2024",
      readTime: "6 мин чтения",
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Биоразнообразие", "Охрана природы", "Экосистемы"],
      featured: false,
    },
    {
      title: "Лучшие практики устойчивого городского планирования",
      excerpt: "Как города внедряют зеленую инфраструктуру и принципы устойчивого дизайна в городское развитие.",
      category: "Городское планирование",
      date: "8 декабря 2024",
      readTime: "8 мин чтения",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Городское планирование", "Зеленая инфраструктура", "Устойчивость"],
      featured: false,
    },
    {
      title: "Решения проблемы нехватки воды для промышленных применений",
      excerpt: "Инновационные технологии водосбережения и переработки, помогающие отраслям снизить их воздействие на окружающую среду.",
      category: "Управление водными ресурсами",
      date: "5 декабря 2024",
      readTime: "6 мин чтения",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Управление водными ресурсами", "Промышленность", "Сохранение"],
      featured: false,
    },
    {
      title: "Обновление экологических норм 2024",
      excerpt: "Ключевые изменения в экологическом законодательстве, которые предприятия должны знать для планирования соответствия.",
      category: "Регулирование",
      date: "3 декабря 2024",
      readTime: "4 мин чтения",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Нормативы", "Соответствие", "Политика"],
      featured: false,
    },
  ];

  const categories = ["Все", "Технологии", "Финансы", "Охрана природы", "Городское планирование", "Управление водными ресурсами", "Регулирование"];

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
              Latest <span className="text-sea-green">Insights</span>
            </motion.h1>
            <motion.p
              className="text-xl text-dark-slate/70 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Stay updated with the latest environmental trends, regulations, and sustainable practices through our expert insights and industry analysis.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gradient-to-b from-off-white to-soft-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className="glassmorphic glassmorphic-hover px-6 py-2 rounded-full text-sea-green font-semibold text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-gradient-to-b from-soft-blue/20 to-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-heading font-bold text-dark-slate mb-4">Рекомендуемая статья</h2>
          </div>

          <GlassmorphicCard className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 lg:h-full object-cover rounded-xl"
                />
                <div className="absolute top-4 left-4 bg-sea-green text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Рекомендуемая
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-sm text-dark-slate/70">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    <span>{blogPosts[0].category}</span>
                  </div>
                </div>

                <h3 className="text-3xl font-heading font-bold text-dark-slate">
                  {blogPosts[0].title}
                </h3>

                <p className="text-lg text-dark-slate/70 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>

                <div className="flex flex-wrap gap-2">
                  {blogPosts[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-sea-green/10 text-sea-green text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="bg-sea-green text-white px-8 py-4 rounded-full font-semibold hover:bg-sea-green/90 transition-all duration-300 inline-flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  Читать полную статью
                </button>
              </div>
            </div>
          </GlassmorphicCard>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-heading font-bold text-dark-slate mb-4">Недавние статьи</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <GlassmorphicCard key={post.title} delay={index * 0.1}>
                <article className="space-y-4">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-sm text-sea-green">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-dark-slate line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-dark-slate/70 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-sea-green/10 text-sea-green text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="text-sea-green font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                    Читать далее <ArrowRight className="w-4 h-4" />
                  </button>
                </article>
              </GlassmorphicCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="glassmorphic glassmorphic-hover px-8 py-4 rounded-full text-sea-green font-semibold">
              Загрузить больше статей
            </button>
          </div>
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
              Stay <span className="text-sea-green">Informed</span>
            </motion.h2>
            <motion.p
              className="text-xl text-dark-slate/70 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Подпишитесь на нашу рассылку, чтобы получать последние экологические инсайты, отраслевые тренды и устойчивые решения прямо на вашу почту.
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