import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, ArrowRight, Clock, Tag } from "lucide-react";
import OrganicBlob from "@/components/OrganicBlob";
import GlassmorphicCard from "@/components/GlassmorphicCard";

export default function Blog() {
  const blogPosts = [
    {
      title: "Экосертификат для бизнеса в Беларуси: как подтвердить «зеленый» статус и обойти конкурентов",
      excerpt: "Получение экологического сертификата — это не альтруизм, а стратегический шаг, который позволяет увеличить целевую аудиторию, повысить доверие покупателей и получить решающее преимущество в конкурентной борьбе.",
      category: "Сертификация",
      date: "20.12.2024",
      readTime: "8 мин",
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Экосертификат", "Органик", "ISO 14001", "Беларусь"],
      featured: true,
    },
    {
      title: "Отходы на предприятии в Беларуси: полное руководство по обращению от А до Я",
      excerpt: "Правильная организация системы обращения с отходами — это не просто забота о природе. В первую очередь, это вопрос финансовой безопасности и юридической защиты вашего бизнеса.",
      category: "Отходы",
      date: "18.12.2024",
      readTime: "10 мин",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Отходы", "Штрафы", "Инструкция", "ПОД-9", "ПОД-10"],
      featured: false,
    },
    {
      title: "Выбросы в атмосферу в Беларуси: как легально работать и не платить лишнего",
      excerpt: "Разработка проекта нормативов допустимых выбросов — это не только исполнение закона, но и инструмент для существенной экономии на экологическом налоге и защита от многотысячных штрафов.",
      category: "Выбросы",
      date: "16.12.2024",
      readTime: "9 мин",
      image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Выбросы", "ПДВ", "Экологический налог", "Разрешение"],
      featured: false,
    },
    {
      title: "Лучшие практики устойчивого городского планирования",
      excerpt: "Как города внедряют зеленую инфраструктуру и принципы устойчивого дизайна в городское развитие.",
      category: "Городское планирование",
      date: "08.12.2024",
      readTime: "8 мин",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Городское планирование", "Зеленая инфраструктура", "Устойчивость"],
      featured: false,
    },
    {
      title: "Решения проблемы нехватки воды для промышленных применений",
      excerpt: "Инновационные технологии водосбережения и переработки, помогающие отраслям снизить их воздействие на окружающую среду.",
      category: "Управление водными ресурсами",
      date: "05.12.2024",
      readTime: "6 мин",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Управление водными ресурсами", "Промышленность", "Сохранение"],
      featured: false,
    },
    {
      title: "Обновление экологических норм 2024",
      excerpt: "Ключевые изменения в экологическом законодательстве, которые предприятия должны знать для планирования соответствия.",
      category: "Регулирование",
      date: "03.12.2024",
      readTime: "4 мин",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Нормативы", "Соответствие", "Политика"],
      featured: false,
    },
  ];

  const categories = ["Все", "Сертификация", "Отходы", "Выбросы", "Городское планирование", "Управление водными ресурсами", "Регулирование"];

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
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2 bg-sea-green/10 text-sea-green px-3 py-1 rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-soft-blue/20 text-dark-slate px-3 py-1 rounded-full">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">{blogPosts[0].readTime}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-sandy-beige/50 text-dark-slate px-3 py-1 rounded-full">
                    <Tag className="w-4 h-4" />
                    <span className="font-medium">{blogPosts[0].category}</span>
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

                <Link
                    href="/blog/eco-certification-belarus"
                    className="bg-sea-green text-white px-8 py-4 rounded-full font-semibold hover:bg-sea-green/90 transition-all duration-300 inline-flex items-center gap-2"
                  >
                    <ArrowRight className="w-5 h-5" />
                    Читать полную статью
                  </Link>
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
                <article className="flex flex-col h-full space-y-4">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <div className="flex items-center gap-1 bg-sea-green/10 text-sea-green px-2 py-1 rounded-md">
                      <Calendar className="w-3 h-3" />
                      <span className="font-medium">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1 bg-soft-blue/20 text-dark-slate px-2 py-1 rounded-md">
                      <Clock className="w-3 h-3" />
                      <span className="font-medium">{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-dark-slate line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-dark-slate/70 line-clamp-3 flex-grow">
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

                  <Link
                    href={index === 0 ? "/blog/waste-management-belarus" : index === 1 ? "/blog/air-emissions-belarus" : "/blog/carbon-capture-future"}
                    className="text-sea-green font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all mt-auto"
                  >
                    Читать далее <ArrowRight className="w-4 h-4" />
                  </Link>
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