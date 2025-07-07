
import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowLeft, Calendar, Clock, Tag, Share2, User } from "lucide-react";
import OrganicBlob from "@/components/OrganicBlob";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import { useEffect, useState } from "react";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);

  // Данные статей блога (в будущем будут из Sanity)
  const blogPosts = {
    "carbon-capture-future": {
      title: "Будущее технологий улавливания углерода",
      excerpt: "Исследование инновационных подходов к улавливанию и хранению углерода, которые могут революционизировать климатические действия.",
      category: "Технологии",
      date: "15.12.2024",
      readTime: "5 мин",
      author: {
        name: "Мария Петрова",
        role: "Ведущий эколог",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b17c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
      },
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
      content: `
        <p>Технологии улавливания углерода представляют собой одно из самых перспективных направлений в борьбе с изменением климата. В последние годы мы наблюдаем значительный прогресс в разработке и внедрении решений, способных эффективно извлекать CO₂ из атмосферы и промышленных выбросов.</p>

        <h2>Современные методы улавливания углерода</h2>
        <p>Существует несколько основных подходов к улавливанию углерода:</p>
        <ul>
          <li><strong>Прямое улавливание из воздуха (DAC)</strong> - технология, позволяющая извлекать CO₂ непосредственно из атмосферы</li>
          <li><strong>Улавливание на промышленных объектах</strong> - интеграция систем улавливания в производственные процессы</li>
          <li><strong>Биологическое улавливание</strong> - использование растений и микроорганизмов для поглощения углерода</li>
        </ul>

        <h2>Инновационные технологии</h2>
        <p>Наиболее перспективными на сегодняшний день являются:</p>
        <ol>
          <li><strong>Твердые сорбенты</strong> - новые материалы с высокой селективностью к CO₂</li>
          <li><strong>Жидкие растворители</strong> - улучшенные химические составы для эффективного поглощения</li>
          <li><strong>Мембранные технологии</strong> - селективное разделение газов на молекулярном уровне</li>
        </ol>

        <h2>Экономические аспекты</h2>
        <p>Стоимость улавливания углерода значительно снизилась за последние годы. Если в 2010 году цена составляла около $600 за тонну CO₂, то сегодня она находится в диапазоне $150-$300 за тонну.</p>

        <h2>Перспективы развития</h2>
        <p>Эксперты прогнозируют, что к 2030 году мощности по улавливанию углерода могут достичь 1 гигатонны CO₂ в год. Это станет важным вкладом в достижение целей Парижского соглашения.</p>

        <p>Ключевыми факторами успеха станут государственная поддержка, инвестиции в НИОКР и развитие инфраструктуры для транспортировки и хранения улавливаемого углерода.</p>
      `,
      tags: ["Улавливание углерода", "Климатические технологии", "Инновации", "Экология", "Будущее"],
      seoTitle: "Будущее технологий улавливания углерода - Synecology Blog",
      seoDescription: "Инновационные подходы к улавливанию и хранению углерода, которые могут революционизировать климатические действия",
      seoKeywords: ["улавливание углерода", "климатические технологии", "экология", "инновации", "зеленые технологии"]
    },
    "renewable-energy-investments": {
      title: "Тенденции инвестиций в возобновляемую энергетику",
      excerpt: "Анализ глобальных рынков возобновляемой энергетики и возникающих инвестиционных возможностей в чистых технологиях.",
      category: "Финансы",
      date: "12.12.2024",
      readTime: "7 мин",
      author: {
        name: "Александр Сидоров",
        role: "Финансовый аналитик",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
      },
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
      content: `
        <p>Рынок возобновляемой энергетики переживает период беспрецедентного роста. В 2024 году глобальные инвестиции в чистую энергию достигли рекордных $1,8 трлн, что на 15% больше показателей предыдущего года.</p>

        <h2>Ключевые тренды рынка</h2>
        <p>Основными драйверами роста являются:</p>
        <ul>
          <li>Снижение стоимости солнечных панелей и ветряных турбин</li>
          <li>Государственные программы поддержки зеленой энергетики</li>
          <li>Корпоративные обязательства по углеродной нейтральности</li>
          <li>Технологические прорывы в области накопления энергии</li>
        </ul>

        <h2>Региональный анализ</h2>
        <p>Лидерами инвестиций в возобновляемую энергетику остаются:</p>
        <ol>
          <li><strong>Китай</strong> - $676 млрд (37% от общего объема)</li>
          <li><strong>США</strong> - $303 млрд (17% от общего объема)</li>
          <li><strong>Европейский союз</strong> - $180 млрд (10% от общего объема)</li>
        </ol>

        <h2>Перспективные сектора</h2>
        <p>Наибольший потенциал роста демонстрируют:</p>
        <ul>
          <li><strong>Офшорная ветроэнергетика</strong> - ожидаемый рост 25% в год</li>
          <li><strong>Солнечная энергетика с накопителями</strong> - интегрированные решения</li>
          <li><strong>Зеленый водород</strong> - новый энергоноситель будущего</li>
        </ul>

        <h2>Инвестиционные возможности</h2>
        <p>Для инвесторов открываются новые возможности в следующих направлениях:</p>
        <ul>
          <li>Проекты зеленой энергетики в развивающихся странах</li>
          <li>Технологии накопления и передачи энергии</li>
          <li>Цифровизация энергетических систем</li>
          <li>Переработка и утилизация оборудования</li>
        </ul>

        <h2>Риски и вызовы</h2>
        <p>Несмотря на позитивные тенденции, инвесторы должны учитывать:</p>
        <ul>
          <li>Волатильность цен на сырье и материалы</li>
          <li>Регулятивные изменения в разных юрисдикциях</li>
          <li>Технологические риски и устаревание оборудования</li>
          <li>Конкуренцию с традиционными источниками энергии</li>
        </ul>

        <p>Эксперты прогнозируют, что к 2030 году объем инвестиций в возобновляемую энергетику достигнет $4 трлн в год, что сделает этот сектор одним из крупнейших в мировой экономике.</p>
      `,
      tags: ["Возобновляемая энергия", "Инвестиции", "Рыночный анализ", "Финансы", "Энергетика"],
      seoTitle: "Тенденции инвестиций в возобновляемую энергетику - анализ рынка",
      seoDescription: "Анализ глобальных рынков возобновляемой энергетики и инвестиционных возможностей в чистых технологиях",
      seoKeywords: ["возобновляемая энергия", "инвестиции", "рыночный анализ", "чистые технологии", "энергетика"]
    },
    "biodiversity-conservation": {
      title: "Стратегии сохранения биоразнообразия",
      excerpt: "Эффективные подходы к защите экосистем и исчезающих видов в городской и сельской среде.",
      category: "Охрана природы",
      date: "10.12.2024",
      readTime: "6 мин",
      author: {
        name: "Елена Волкова",
        role: "Биолог-эколог",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
      },
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
      content: `
        <p>Биоразнообразие является основой устойчивости экосистем и благополучия человека. За последние 50 лет мы потеряли 69% популяций диких животных, что делает вопросы сохранения биоразнообразия критически важными.</p>

        <h2>Основные угрозы биоразнообразию</h2>
        <p>Главными факторами утраты биоразнообразия являются:</p>
        <ul>
          <li><strong>Потеря местообитаний</strong> - уничтожение и фрагментация природных экосистем</li>
          <li><strong>Изменение климата</strong> - нарушение естественных циклов и миграционных путей</li>
          <li><strong>Загрязнение</strong> - химическое и пластиковое загрязнение окружающей среды</li>
          <li><strong>Инвазивные виды</strong> - конкуренция с местными видами</li>
          <li><strong>Чрезмерная эксплуатация</strong> - перелов, охота и сбор</li>
        </ul>

        <h2>Стратегии сохранения</h2>
        
        <h3>1. Создание охраняемых территорий</h3>
        <p>Система особо охраняемых природных территорий (ООПТ) остается ключевым инструментом сохранения:</p>
        <ul>
          <li>Строгие природные заповедники</li>
          <li>Национальные парки</li>
          <li>Природные памятники</li>
          <li>Заказники и резерваты</li>
        </ul>

        <h3>2. Экологические коридоры</h3>
        <p>Создание связанных территорий, позволяющих животным мигрировать и поддерживать генетическое разнообразие популяций.</p>

        <h3>3. Восстановление экосистем</h3>
        <p>Активные мероприятия по восстановлению деградировавших территорий:</p>
        <ul>
          <li>Лесовосстановление и лесоразведение</li>
          <li>Восстановление водно-болотных угодий</li>
          <li>Рекультивация нарушенных земель</li>
          <li>Реинтродукция исчезнувших видов</li>
        </ul>

        <h2>Городское биоразнообразие</h2>
        <p>Города могут стать важными центрами сохранения биоразнообразия:</p>
        <ul>
          <li><strong>Зеленые крыши и стены</strong> - создание микроместообитаний</li>
          <li><strong>Городские парки и скверы</strong> - островки природы в урбанизированной среде</li>
          <li><strong>Экологические тропы</strong> - образовательные маршруты</li>
          <li><strong>Городские пруды и водоемы</strong> - места обитания водных видов</li>
        </ul>

        <h2>Сельскохозяйственное биоразнообразие</h2>
        <p>Устойчивые методы ведения сельского хозяйства:</p>
        <ul>
          <li>Агроэкологические практики</li>
          <li>Севооборот и поликультуры</li>
          <li>Сохранение диких участков в агроландшафте</li>
          <li>Органическое земледелие</li>
        </ul>

        <h2>Международное сотрудничество</h2>
        <p>Сохранение биоразнообразия требует глобальных усилий:</p>
        <ul>
          <li><strong>Конвенция о биологическом разнообразии</strong> - международное соглашение</li>
          <li><strong>CITES</strong> - контроль торговли редкими видами</li>
          <li><strong>Рамсарская конвенция</strong> - охрана водно-болотных угодий</li>
          <li><strong>Программа ООН по окружающей среде</strong> - координация усилий</li>
        </ul>

        <h2>Роль технологий</h2>
        <p>Современные технологии открывают новые возможности:</p>
        <ul>
          <li>Дистанционное зондирование для мониторинга экосистем</li>
          <li>ДНК-штрихкодирование для идентификации видов</li>
          <li>Искусственный интеллект для анализа больших данных</li>
          <li>Геномные технологии для сохранения генетического разнообразия</li>
        </ul>

        <p>Успех в сохранении биоразнообразия зависит от интеграции научных знаний, политической воли, экономических стимулов и общественного участия. Каждый человек может внести свой вклад в сохранение природного наследия планеты.</p>
      `,
      tags: ["Биоразнообразие", "Охрана природы", "Экосистемы", "Сохранение видов", "Экология"],
      seoTitle: "Стратегии сохранения биоразнообразия - эффективные подходы",
      seoDescription: "Эффективные подходы к защите экосистем и исчезающих видов в городской и сельской среде",
      seoKeywords: ["биоразнообразие", "охрана природы", "сохранение видов", "экосистемы", "экология"]
    }
  };

  useEffect(() => {
    if (slug && blogPosts[slug as keyof typeof blogPosts]) {
      setPost(blogPosts[slug as keyof typeof blogPosts]);
      // SEO оптимизация
      const article = blogPosts[slug as keyof typeof blogPosts];
      document.title = article.seoTitle;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', article.seoDescription);
      }
    }
  }, [slug]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title,
        text: post?.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (!post) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <p className="text-xl text-dark-slate">Статья не найдена</p>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <OrganicBlob className="absolute top-10 right-10 opacity-15" size="lg" />
        <OrganicBlob className="absolute bottom-10 left-10 opacity-10" size="md" delay={2} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sea-green font-semibold hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Вернуться к блогу
            </Link>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Article Header */}
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-sea-green/10 text-sea-green px-4 py-2 rounded-full font-semibold">
                  {post.category}
                </div>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 text-dark-slate/70 hover:text-sea-green transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  Поделиться
                </button>
              </div>

              <h1 className="text-4xl lg:text-5xl font-heading font-bold text-dark-slate mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-dark-slate/70 mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-dark-slate/70">
                <div className="flex items-center gap-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-dark-slate">{post.author.name}</div>
                    <div>{post.author.role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} чтения</span>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-12">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>

            {/* Article Content */}
            <GlassmorphicCard>
              <div 
                className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-dark-slate prose-p:text-dark-slate/80 prose-li:text-dark-slate/80 prose-strong:text-dark-slate prose-a:text-sea-green hover:prose-a:text-sea-green/80"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </GlassmorphicCard>

            {/* Tags */}
            <div className="mt-12">
              <h3 className="text-lg font-heading font-semibold text-dark-slate mb-4">
                Теги статьи
              </h3>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="flex items-center gap-2 px-4 py-2 bg-sea-green/10 text-sea-green rounded-full font-semibold text-sm"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12">
              <GlassmorphicCard>
                <div className="flex items-center gap-6">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-xl font-heading font-semibold text-dark-slate mb-2">
                      {post.author.name}
                    </h4>
                    <p className="text-dark-slate/70 mb-2">{post.author.role}</p>
                    <p className="text-dark-slate/60 text-sm">
                      Эксперт в области экологии с более чем 10-летним опытом работы в сфере устойчивого развития и охраны окружающей среды.
                    </p>
                  </div>
                </div>
              </GlassmorphicCard>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-gradient-to-b from-off-white to-soft-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-dark-slate mb-4">
              Похожие статьи
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(blogPosts)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, relatedPost]) => (
                <GlassmorphicCard key={key}>
                  <Link href={`/blog/${key}`}>
                    <article className="space-y-4 cursor-pointer">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover rounded-xl"
                      />
                      <div className="space-y-2">
                        <div className="text-sm text-sea-green font-semibold">
                          {relatedPost.category}
                        </div>
                        <h3 className="text-lg font-heading font-semibold text-dark-slate line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-dark-slate/70 text-sm line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-dark-slate/60">
                          <span>{relatedPost.date}</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </GlassmorphicCard>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassmorphicCard className="text-center">
            <h2 className="text-3xl font-heading font-bold text-dark-slate mb-6">
              Хотите узнать больше?
            </h2>
            <p className="text-xl text-dark-slate/70 mb-8 max-w-3xl mx-auto">
              Свяжитесь с нами для получения персональной консультации по вопросам экологии и устойчивого развития.
            </p>
            <Link
              href="/contact"
              className="bg-sea-green text-white px-8 py-4 rounded-full font-semibold hover:bg-sea-green/90 transition-all duration-300 inline-flex items-center gap-2"
            >
              Получить консультацию
            </Link>
          </GlassmorphicCard>
        </div>
      </section>
    </div>
  );
}
