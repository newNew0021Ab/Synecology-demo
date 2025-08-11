import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowLeft, Calendar, Clock, Tag, Share2, User } from "lucide-react";
import OrganicBlob from "@/components/OrganicBlob";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import { useEffect, useState } from "react";
import { fetchBlogPosts, type BlogPost, getImageUrl } from "@/lib/blog";
import { BackButton } from "@/components/BackButton";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Статичные посты как fallback
  const staticPosts = {
    "eco-certification-business-belarus": {
      id: "static-1",
      title: "Экосертификат для бизнеса в Беларуси: как подтвердить «зеленый» статус и обойти конкурентов",
      excerpt: "В современном мире экологичность перестала быть просто модной тенденцией. Сегодня это прагматичный и мощный бизнес-инструмент для увеличения целевой аудитории и получения решающего преимущества в конкурентной борьбе.",
      category: ["Сертификация"],
      publishedDate: "2024-12-20",
      readTime: "12 мин",
      authorName: "Корякин Егор Дмитриевич",
      authorRole: "Директор",
      authorSlug: "egor-koryakin",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
      slug: "eco-certification-business-belarus",
      coverImage: "https://images.unsplash.com/photo-1727812100171-8af0e7211041?q=80&w=1170&auto=format&fit=crop&w=1200&h=600",
      content: `
        <h2>Введение: Почему «зеленый» — это новый черный в мире бизнеса</h2>
        <p>В современном мире экологичность перестала быть просто модной тенденцией. Сегодня это прагматичный и мощный бизнес-инструмент. Потребители все чаще делают выбор в пользу товаров, производители которых заботятся об окружающей среде, а крупные ритейлеры и государственные корпорации вводят экологические требования как обязательное условие для сотрудничества. Получение экологического сертификата — это не альтруизм, а стратегический шаг, который позволяет увеличить целевую аудиторию, повысить доверие покупателей и получить решающее преимущество в конкурентной борьбе.</p>

        <p>Однако здесь кроется важный нюанс. Формально, по законодательству Республики Беларусь, экологическая сертификация является добровольной. За ее отсутствие не предусмотрено прямых штрафов. Но на практике рынок диктует свои, куда более жесткие правила. Без заветного знака «ЭКО» на упаковке практически невозможно попасть на полки крупных торговых сетей, выиграть государственный тендер или начать экспорт продукции. Таким образом, юридическая добровольность превращается в фактическую необходимость для любого бизнеса, который стремится к росту и развитию. Эта статья — подробное руководство о том, как превратить экологические требования из барьера в трамплин для вашего бизнеса в Беларуси.</p>

        <h2>Что такое экологический сертификат и что говорит закон?</h2>
        <p>Экологический сертификат — это официальный документ, который подтверждает, что продукция, услуга или производственный процесс соответствуют установленным экологическим нормам и безопасны для здоровья человека и окружающей среды. Он удостоверяет, что содержание вредных веществ не превышает предельно допустимых значений, а при производстве используются экологически чистые технологии и сырье.</p>

        <p>Правовую основу для этого процесса в Беларуси закладывают два ключевых закона:</p>
        <ul>
          <li><strong>Закон Республики Беларусь «Об охране окружающей среды»</strong>, который определяет цели и принципы экологической сертификации.</li>
          <li><strong>Закон Республики Беларусь «О техническом нормировании и стандартизации»</strong>, который устанавливает общие принципы добровольного подтверждения соответствия в рамках Национальной системы подтверждения соответствия Республики Беларусь.</li>
        </ul>

        <h2>Разбираемся в видах: ЭКО, Органик и ISO. Какой выбрать?</h2>
        <p>На белорусском рынке существует несколько систем добровольной сертификации. Выбор конкретной системы зависит от типа вашей продукции и стратегических целей.</p>

        <h2>Заключение: Чек-лист для руководителя «Готовы ли мы к экосертификации?»</h2>
        <p>Чтобы принять окончательное решение, ответьте на несколько вопросов:</p>
        <ul>
          <li>Ценит ли ваша целевая аудитория экологичность и натуральность?</li>
          <li>Планируете ли вы поставлять продукцию в крупные торговые сети или участвовать в госзакупках?</li>
          <li>Рассматриваете ли вы выход на международные рынки?</li>
          <li>Соответствует ли ваша продукция и производство высоким экологическим стандартам на самом деле?</li>
          <li>Хотите ли вы укрепить репутацию бренда и повысить его стоимость?</li>
        </ul>

        <p>Если вы ответили «да» хотя бы на два из этих вопросов, экологическая сертификация — это ваш следующий шаг к успеху. Свяжитесь с нашими экспертами для бесплатной консультации, и мы поможем вам выбрать оптимальный путь для подтверждения «зеленого» статуса вашего бизнеса в Беларуси.</p>
      `,
      tags: ["Экосертификация", "Зеленый бизнес", "Органик", "ISO 14001"],
      featured: false
    },
    "waste-management-enterprise-belarus": {
      id: "static-2",
      title: "Отходы на предприятии в Беларуси: полное руководство по обращению от А до Я",
      excerpt: "Многие руководители в Минске и других городах Беларуси считают, что экологические требования — это нечто абстрактное. Эта иллюзия может стоить очень дорого. Штраф до 40 000 рублей за нарушение законодательства об обращении с отходами.",
      category: ["Отходы"],
      publishedDate: "2024-12-18",
      readTime: "15 мин",
      authorName: "Корякин Егор Дмитриевич",
      authorRole: "Директор",
      authorSlug: "egor-koryakin",
      authorAvatar: "https://i.ibb.co/0RCtbCgY/5192954527513441803-1-1.jpg",
      slug: "waste-management-enterprise-belarus",
      coverImage: "https://images.unsplash.com/photo-1684324278460-25fbb2e3f175?q=80&w=764&auto=format&fit=crop&w=1200&h=600",
      content: `
        <h2>Введение: Штраф до 40 000 рублей за беспорядок. Почему обращение с отходами — это про деньги, а не только про экологию</h2>
        <p>Многие руководители в Минске и других городах Беларуси считают, что экологические требования — это нечто абстрактное и далекое от реального бизнеса. Эта иллюзия может стоить очень дорого. Знаете ли вы, что за нарушение законодательства об обращении с отходами на вашу компанию могут наложить штраф в размере до 1000 базовых величин? На сегодняшний день это до 40 000 белорусских рублей. И это лишь одно из множества нарушений, за которые предусмотрена серьезная административная ответственность по статье 16.24 КоАП РБ.</p>

        <h2>Начнем с основ: Что такое отходы и как их классифицируют?</h2>
        <p>Согласно Закону Республики Беларусь «Об обращении с отходами», отходы — это вещества или предметы, не являющиеся продукцией, которые образовались в процессе производства, потребления или иной деятельности и от которых собственник избавляется, намеревается или должен избавиться.</p>

        <h2>Заключение: Как спать спокойно. Чек-лист по обращению с отходами</h2>
        <p>Проверьте свою компанию по этому краткому списку:</p>
        <ul>
          <li>Назначены ли приказом ответственные за обращение с отходами?</li>
          <li>Проведена ли инвентаризация и утверждены ли нормативы образования отходов?</li>
          <li>Разработана и согласована ли с Минприроды Инструкция по обращению с отходами?</li>
          <li>Оборудованы ли места хранения в соответствии с требованиями?</li>
          <li>Ведутся ли книги учета отходов ПОД-9 и ПОД-10?</li>
          <li>Заключены ли договоры с надежными, лицензированными подрядчиками?</li>
        </ul>
      `,
      tags: ["Отходы", "Экологическое право", "ПОД-9", "ПОД-10"],
      featured: false
    },
    "atmospheric-emissions-belarus": {
      id: "static-3",
      title: "Выбросы в атмосферу в Беларуси: как легально работать и не платить лишнего",
      excerpt: "Если на вашем предприятии есть хотя бы один стационарный источник выбросов, эта статья для вас. Разработка проекта нормативов допустимых выбросов — это инструмент для существенной экономии на экологическом налоге и защита от многотысячных штрафов.",
      category: ["Выбросы"],
      publishedDate: "2024-12-16",
      readTime: "10 мин",
      authorName: "Корякин Егор Дмитриевич",
      authorRole: "Директор",
      authorSlug: "egor-koryakin",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200",
      slug: "atmospheric-emissions-belarus",
      coverImage: "https://images.unsplash.com/photo-1692934869616-3c4b9a0c0a4f?q=80&w=1170&auto=format&fit=crop&w=1200&h=600",
      content: `
        <h2>Введение: У вас есть труба, котельная или покрасочная камера? Значит, эта статья для вас</h2>
        <p>Если на вашем предприятии в Минске или любом другом городе Беларуси есть хотя бы один стационарный источник, который что-либо выбрасывает в атмосферу — будь то заводская труба, вытяжка из сварочного цеха, дизель-генератор или даже организованная парковка для автотранспорта — эта статья для вас.</p>

        <h2>Что такое нормативы выбросов и кому они нужны по закону?</h2>
        <p>Нормативы допустимых выбросов загрязняющих веществ в атмосферный воздух — это документ, который содержит расчеты и обоснования того, какое максимальное количество загрязняющих веществ ваше предприятие может выбрасывать в атмосферу, не создавая при этом угрозы для здоровья населения и окружающей среды.</p>

        <h2>Заключение: Нормативы выбросов — это не страшно, если действовать по плану</h2>
        <p>Разработка и согласование нормативов допустимых выбросов — действительно сложная и многоэтапная процедура, требующая специальных знаний и опыта взаимодействия с госорганами. Однако это обязательное условие для законной работы любого предприятия с источниками выбросов.</p>
      `,
      tags: ["Выбросы", "ПДВ", "Экологический налог", "Разрешение"],
      featured: false
    }
  };

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) return;

      setIsLoading(true);
      setError(null);

      try {
        // Сначала пробуем загрузить из Directus
        const posts = await fetchBlogPosts();
        const directusPost = posts.find(p => p.slug === slug);

        if (directusPost) {
          setPost(directusPost);
          // Получаем связанные посты (исключая текущий)
          const related = posts.filter(p => p.slug !== slug).slice(0, 3);
          setRelatedPosts(related);
        } else {
          // Fallback к статичным постам
          const staticPost = staticPosts[slug as keyof typeof staticPosts];
          if (staticPost) {
            setPost(staticPost as BlogPost);
            // Получаем другие статичные посты как связанные
            const relatedStatic = Object.values(staticPosts)
              .filter(p => p.slug !== slug)
              .slice(0, 3)
              .map(p => p as BlogPost);
            setRelatedPosts(relatedStatic);
          } else {
            setError('Статья не найдена');
          }
        }
      } catch (err) {
        console.error('Error loading blog post:', err);
        // При ошибке пробуем загрузить статичный пост
        const staticPost = staticPosts[slug as keyof typeof staticPosts];
        if (staticPost) {
          setPost(staticPost as BlogPost);
          const relatedStatic = Object.values(staticPosts)
            .filter(p => p.slug !== slug)
            .slice(0, 3)
            .map(p => p as BlogPost);
          setRelatedPosts(relatedStatic);
        } else {
          setError('Статья не найдена');
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  useEffect(() => {
    if (post) {
      // SEO оптимизация с использованием специальных SEO полей из Directus
      const seoTitle = (post as any).seoTitle || post.title;
      const seoDescription = (post as any).seoDescription || post.excerpt;
      const seoKeywords = (post as any).seoKeywords;

      document.title = `${seoTitle} | ЭкоПартнер`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription && seoDescription) {
        metaDescription.setAttribute('content', seoDescription);
      }

      // Добавляем или обновляем meta keywords если они есть
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (seoKeywords && Array.isArray(seoKeywords) && seoKeywords.length > 0) {
        if (!metaKeywords) {
          metaKeywords = document.createElement('meta');
          metaKeywords.setAttribute('name', 'keywords');
          document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute('content', seoKeywords.join(', '));
      }

      // Open Graph теги для социальных сетей
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (!ogTitle) {
        ogTitle = document.createElement('meta');
        ogTitle.setAttribute('property', 'og:title');
        document.head.appendChild(ogTitle);
      }
      ogTitle.setAttribute('content', seoTitle);

      let ogDescription = document.querySelector('meta[property="og:description"]');
      if (!ogDescription) {
        ogDescription = document.createElement('meta');
        ogDescription.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescription);
      }
      if (seoDescription) {
        ogDescription.setAttribute('content', seoDescription);
      }

      if (post.coverImage) {
        let ogImage = document.querySelector('meta[property="og:image"]');
        if (!ogImage) {
          ogImage = document.createElement('meta');
          ogImage.setAttribute('property', 'og:image');
          document.head.appendChild(ogImage);
        }
        ogImage.setAttribute('content', post.coverImage);
      }
    }
  }, [post]);

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

  // Функция для нормализации категории в массив
  const normalizeCategory = (category: string | string[] | undefined): string[] => {
    if (!category) return [];
    if (Array.isArray(category)) return category.filter(Boolean);
    if (typeof category === 'string') return [category];
    return [];
  };

  // Функция для нормализации тегов в массив
  const normalizeTags = (tags: string | string[] | undefined): string[] => {
    if (!tags) return [];
    if (Array.isArray(tags)) return tags.filter(Boolean);
    if (typeof tags === 'string') return [tags];
    return [];
  };

  // Функция для проверки наличия данных автора
  const hasAuthorData = (post: BlogPost): boolean => {
    return !!(post.authorName || post.authorAvatar);
  };

  if (isLoading) {
    return (
      <div className="pt-24 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="h-16 bg-gray-200 rounded w-full mb-6"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-8"></div>
            <div className="h-96 bg-gray-200 rounded mb-12"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold text-dark-slate mb-4">
            Статья не найдена
          </h1>
          <p className="text-dark-slate/70 mb-8">
            Возможно, статья была удалена или перемещена
          </p>
          <Link
            href="/blog"
            className="bg-sea-green text-white px-6 py-3 rounded-full font-semibold hover:bg-sea-green/90 transition-all duration-300"
          >
            Вернуться к блогу
          </Link>
        </div>
      </div>
    );
  }

  const categoryArray = normalizeCategory(post.category);
  const tagsArray = normalizeTags(post.tags);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <OrganicBlob className="absolute top-10 right-10 opacity-15" size="lg" />
        <OrganicBlob className="absolute bottom-10 left-10 opacity-10" size="md" delay={2} />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <BackButton className="inline-flex items-center gap-2 text-sea-green font-semibold hover:text-sea-green/90 transition-all" />
          </div>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Article Header */}
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                {categoryArray.length > 0 && (
                  <div className="bg-sea-green/10 text-sea-green px-4 py-2 rounded-full font-semibold">
                    {categoryArray[0]}
                  </div>
                )}
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

              {post.excerpt && (
                <p className="text-xl text-dark-slate/70 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
              )}

              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-dark-slate/70">
                {hasAuthorData(post) && post.authorSlug && (
                  <Link href={`/team/${post.authorSlug}`}>
                    <div className="flex items-center gap-3">
                      {post.authorAvatar && (
                        <img
                          src={post.authorAvatar}
                          alt={post.authorName || 'Автор'}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      )}
                      <div>
                        {post.authorName && (
                          <div className="font-semibold text-dark-slate">{post.authorName}</div>
                        )}
                        {post.authorRole && <div>{post.authorRole}</div>}
                      </div>
                    </div>
                  </Link>
                )}

                {post.publishedDate && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.publishedDate).toLocaleDateString('ru-RU')}</span>
                  </div>
                )}

                {post.readTime && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime} чтения</span>
                  </div>
                )}
              </div>
            </header>

            {/* Featured Image */}
            {post.coverImage && (
              <div className="mb-12">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
              </div>
            )}

            {/* Article Content */}
            {post.content && (
              <GlassmorphicCard>
                <div
                  className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-dark-slate prose-p:text-dark-slate/80 prose-li:text-dark-slate/80 prose-strong:text-dark-slate prose-a:text-sea-green hover:prose-a:text-sea-green/80"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </GlassmorphicCard>
            )}

            {/* Tags */}
            {tagsArray.length > 0 && (
              <div className="mt-12">
                <h3 className="text-lg font-heading font-semibold text-dark-slate mb-4">
                  Теги статьи
                </h3>
                <div className="flex flex-wrap gap-3">
                  {tagsArray.map((tag: string) => (
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
            )}

            {/* Author Bio */}
            {hasAuthorData(post) && (
              <div className="mt-12">
                <GlassmorphicCard>
                  <div className="flex items-center gap-6">
                    {post.authorSlug && post.authorAvatar && (
                      <Link href={`/team/${post.authorSlug}`}>
                        <img
                          src={post.authorAvatar}
                          alt={post.authorName || 'Автор'}
                          className="w-16 h-16 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                        />
                      </Link>
                    )}
                    {!post.authorSlug && post.authorAvatar && (
                      <img
                        src={post.authorAvatar}
                        alt={post.authorName || 'Автор'}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    )}
                    <div>
                      {post.authorName && (
                        <>
                          {post.authorSlug ? (
                            <Link href={`/team/${post.authorSlug}`}>
                              <h4 className="text-xl font-heading font-semibold text-dark-slate mb-2 cursor-pointer hover:text-sea-green transition-colors">
                                {post.authorName}
                              </h4>
                            </Link>
                          ) : (
                            <h4 className="text-xl font-heading font-semibold text-dark-slate mb-2">
                              {post.authorName}
                            </h4>
                          )}
                        </>
                      )}
                      {post.authorRole && (
                        <p className="text-dark-slate/70 mb-2">{post.authorRole}</p>
                      )}
                      <p className="text-dark-slate/60 text-sm">
                        Эксперт в области экологии с более чем 10-летним опытом работы в сфере устойчивого развития и охраны окружающей среды.
                      </p>
                    </div>
                  </div>
                </GlassmorphicCard>
              </div>
            )}
          </motion.article>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-off-white to-soft-blue/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-dark-slate mb-4">
                Похожие статьи
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {relatedPosts.map((relatedPost) => {
                const relatedCategoryArray = normalizeCategory(relatedPost.category);
                return (
                  <GlassmorphicCard key={relatedPost.slug} className="mb-8">
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <article className="space-y-4 cursor-pointer">
                        {relatedPost.coverImage && (
                          <img
                            src={relatedPost.coverImage}
                            alt={relatedPost.title}
                            className="w-full h-48 object-cover rounded-xl"
                          />
                        )}
                        <div className="space-y-2">
                          {relatedCategoryArray.length > 0 && (
                            <div className="text-sm text-sea-green font-semibold">
                              {relatedCategoryArray[0]}
                            </div>
                          )}
                          <h3 className="text-lg font-heading font-semibold text-dark-slate line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          {relatedPost.excerpt && (
                            <p className="text-dark-slate/70 text-sm line-clamp-2">
                              {relatedPost.excerpt}
                            </p>
                          )}
                          <div className="flex items-center gap-4 text-xs text-dark-slate/60">
                            {relatedPost.publishedDate && (
                              <span>{new Date(relatedPost.publishedDate).toLocaleDateString('ru-RU')}</span>
                            )}
                            {relatedPost.readTime && (
                              <span>{relatedPost.readTime}</span>
                            )}
                          </div>
                        </div>
                      </article>
                    </Link>
                  </GlassmorphicCard>
                );
              })}
            </div>
          </div>
        </section>
      )}

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