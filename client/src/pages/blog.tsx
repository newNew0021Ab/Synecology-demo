import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, ArrowRight, Clock, Tag } from "lucide-react";
import OrganicBlob from "@/components/OrganicBlob";
import GlassmorphicCard from "@/components/GlassmorphicCard";

export default function Blog() {
  const blogPosts = [
    {
      title: "Экосертификат для бизнеса в Беларуси: как подтвердить «зеленый» статус и обойти конкурентов",
      excerpt: "Получение экологического сертификата — это не альтруизм, а стратегический шаг, который позволяет увеличить целевую аудиторию, повысить доверие покупателей и получить решающее преимущество в конкурентной борьбе. Рассказываем, как получить органик-сертификат и ISO 14001 в Беларуси.",
      category: "Сертификация",
      date: "20.12.2024",
      readTime: "8 мин",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Экосертификат", "Органик", "ISO 14001", "Беларусь"],
      featured: true,
    },
    {
      title: "Отходы на предприятии в Беларуси: полное руководство по обращению от А до Я",
      excerpt: "Правильная организация системы обращения с отходами — это не просто забота о природе. В первую очередь, это вопрос финансовой безопасности и юридической защиты вашего бизнеса. Штрафы за нарушения могут достигать 40 000 рублей, а грамотная система экономит деньги на налогах.",
      category: "Отходы",
      date: "18.12.2024",
      readTime: "10 мин",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Отходы", "Штрафы", "Инструкция", "ПОД-9", "ПОД-10"],
      featured: false,
    },
    {
      title: "Выбросы в атмосферу в Беларуси: как легально работать и не платить лишнего",
      excerpt: "Разработка проекта нормативов допустимых выбросов — это не только исполнение закона, но и инструмент для существенной экономии на экологическом налоге и защита от многотысячных штрафов. Объясняем пошагово, как получить разрешение и избежать проблем с контролирующими органами.",
      category: "Выбросы",
      date: "16.12.2024",
      readTime: "9 мин",
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Выбросы", "ПДВ", "Экологический налог", "Разрешение"],
      featured: false,
    },
    {
      title: "Экологическое сопровождение: как защитить бизнес от штрафов и претензий",
      excerpt: "Комплексное экологическое сопровождение предприятий — это не роскошь, а необходимость для современного бизнеса. Рассказываем, как выбрать подходящий формат сопровождения и что включает полный аутсорсинг экологических функций.",
      category: "Сопровождение",
      date: "08.12.2024",
      readTime: "8 мин",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Сопровождение", "Аутсорсинг", "Экология", "Консалтинг"],
      featured: false,
    },
    {
      title: "Экологический паспорт предприятия: обязательный документ или формальность?",
      excerpt: "Экологический паспорт — это документ, который отражает реальное воздействие предприятия на окружающую среду. Разбираемся, кому он нужен, как его правильно составить и какие выгоды он может принести бизнесу.",
      category: "Документооборот",
      date: "05.12.2024",
      readTime: "6 мин",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Экологический паспорт", "Документооборот", "Отчетность"],
      featured: false,
    },
    {
      title: "Производственный экологический контроль: как не попасть на штрафы",
      excerpt: "Производственный экологический контроль — это не просто формальность, а реальный инструмент управления экологическими рисками. Рассказываем, как правильно организовать ПЭК и избежать нарушений при проверках.",
      category: "Контроль",
      date: "03.12.2024",
      readTime: "7 мин",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["ПЭК", "Контроль", "Мониторинг", "Проверки"],
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
                <div className="absolute top-4 left-4 bg-sea-green text-white px-4 py-2 rounded-full text-sm font-semibold">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <GlassmorphicCard key={post.title} delay={index * 0.1}>
                <article className="flex flex-col h-full space-y-6">
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  </div>

                  <div className="flex items-center gap-4 text-sm">
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
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-dark-slate line-clamp-3">
                    {post.title}
                  </h3>

                  <p className="text-dark-slate/70 line-clamp-4 flex-grow text-base leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-sea-green/10 text-sea-green text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={index === 0 ? "/blog/waste-management-belarus" : index === 1 ? "/blog/air-emissions-belarus" : index === 2 ? "/blog/ecological-support" : index === 3 ? "/blog/ecological-passport" : "/blog/production-environmental-control"}
                    className="bg-sea-green text-white px-6 py-3 rounded-full font-semibold hover:bg-sea-green/90 transition-all duration-300 inline-flex items-center gap-2 mt-auto"
                  >
                    <ArrowRight className="w-5 h-5" />
                    Читать полную статью
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