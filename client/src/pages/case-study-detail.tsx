import { motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import { ArrowLeft, Calendar, Clock, CheckCircle, TrendingUp, Users, Award, Share2, Loader2 } from "lucide-react";
import OrganicBlob from "@/components/OrganicBlob";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import { useCaseStudy } from "@/hooks/useDirectus";
import { getDirectusImageUrl, formatDate } from "@/lib/directus";
import { Helmet } from "react-helmet-async";

export default function CaseStudyDetail() {
  const [, params] = useRoute('/case-studies/:slug');
  const slug = params?.slug || '';

  const { data: caseStudy, isLoading, error } = useCaseStudy(slug);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: caseStudy?.title,
          text: caseStudy?.preview_text,
          url: window.location.href,
        });
      } catch (err) {
        // Fallback to clipboard
        navigator.clipboard.writeText(window.location.href);
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (isLoading) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-sea-green" />
          <span className="text-dark-slate/70 text-lg">Загружаем кейс...</span>
        </div>
      </div>
    );
  }

  if (error || !caseStudy) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <GlassmorphicCard className="text-center max-w-md">
          <h2 className="text-2xl font-heading font-bold text-dark-slate mb-4">
            Кейс не найден
          </h2>
          <p className="text-dark-slate/70 mb-6">
            Возможно, кейс был удален или перемещен.
          </p>
          <Link
            href="/case-studies"
            className="bg-sea-green text-white px-6 py-3 rounded-full font-semibold hover:bg-sea-green/90 transition-all duration-300 inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Вернуться к кейсам
          </Link>
        </GlassmorphicCard>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{caseStudy.seo_title || caseStudy.title}</title>
        <meta name="description" content={caseStudy.seo_description || caseStudy.preview_text} />
        <meta name="keywords" content={caseStudy.seo_keywords} />
        <meta property="og:title" content={caseStudy.title} />
        <meta property="og:description" content={caseStudy.preview_text} />
        <meta property="og:image" content={getDirectusImageUrl(caseStudy.cover_image, { width: 1200, height: 630 })} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={caseStudy.title} />
        <meta name="twitter:description" content={caseStudy.preview_text} />
        <meta name="twitter:image" content={getDirectusImageUrl(caseStudy.cover_image, { width: 1200, height: 630 })} />
        {caseStudy.completion_date && (
          <meta property="article:published_time" content={caseStudy.completion_date} />
        )}
        {caseStudy.client && (
          <meta property="article:author" content={caseStudy.client} />
        )}
        <link rel="canonical" href={`${window.location.origin}/case-studies/${caseStudy.slug}`} />
      </Helmet>

      <div className="pt-24">
        {/* Navigation */}
        <section className="py-6 bg-soft-blue/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sea-green hover:text-sea-green/80 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Вернуться к кейсам
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <OrganicBlob className="absolute top-10 right-10 opacity-15" size="lg" />
          <OrganicBlob className="absolute bottom-10 left-10 opacity-10" size="md" delay={2} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  className="flex items-center gap-4 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {caseStudy.category && caseStudy.category.length > 0 && (
                    <div className="bg-sea-green/10 text-sea-green px-4 py-2 rounded-full font-semibold">
                      {caseStudy.category[0]}
                    </div>
                  )}
                  <button
                    onClick={handleShare}
                    className="flex items-center gap-2 text-dark-slate/70 hover:text-sea-green transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                    Поделиться
                  </button>
                </motion.div>

                <motion.h1
                  className="text-4xl lg:text-5xl font-heading font-bold text-dark-slate mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  {caseStudy.title}
                </motion.h1>

                <motion.p
                  className="text-xl text-dark-slate/70 mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  {caseStudy.full_description || caseStudy.preview_text}
                </motion.p>

                <motion.div
                  className="grid grid-cols-2 gap-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <div className="space-y-2">
                    {caseStudy.completion_date && (
                      <div className="flex items-center gap-2 text-sm text-dark-slate/70">
                        <Calendar className="w-4 h-4" />
                        <span>Завершен: {formatDate(caseStudy.completion_date)}</span>
                      </div>
                    )}
                    {caseStudy.timeline && (
                      <div className="flex items-center gap-2 text-sm text-dark-slate/70">
                        <Clock className="w-4 h-4" />
                        <span>Длительность: {caseStudy.timeline}</span>
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    {caseStudy.client && (
                      <p className="text-sm text-dark-slate/70">
                        <span className="font-semibold">Клиент:</span> {caseStudy.client}
                      </p>
                    )}
                    {caseStudy.team_size && (
                      <p className="text-sm text-dark-slate/70">
                        <span className="font-semibold">Команда:</span> {caseStudy.team_size}
                      </p>
                    )}
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <img
                  src={getDirectusImageUrl(caseStudy.cover_image, { width: 800, quality: 85 })}
                  alt={caseStudy.title}
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        {caseStudy.metrics && caseStudy.metrics.length > 0 && (
          <section className="py-20 bg-gradient-to-b from-off-white to-soft-blue/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-heading font-bold text-dark-slate mb-4">
                  Ключевые показатели
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudy.metrics.map((metric, index) => (
                  <GlassmorphicCard key={index} delay={index * 0.1}>
                    <div className="text-center">
                      <div className="w-16 h-16 text-sea-green mx-auto mb-4">
                        <TrendingUp className="w-full h-full" />
                      </div>
                      <div className="text-lg font-heading font-bold text-dark-slate">
                        {typeof metric === 'string' ? metric : metric.value || metric}
                      </div>
                    </div>
                  </GlassmorphicCard>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Challenge & Solution */}
        {(caseStudy.challenge || caseStudy.solution) && (
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {caseStudy.challenge && (
                  <GlassmorphicCard>
                    <h3 className="text-2xl font-heading font-bold text-dark-slate mb-6">
                      Вызов
                    </h3>
                    <div className="text-dark-slate/70 leading-relaxed prose max-w-none">
                      {caseStudy.challenge.includes('<') ? (
                        <div dangerouslySetInnerHTML={{ __html: caseStudy.challenge }} />
                      ) : (
                        <p>{caseStudy.challenge}</p>
                      )}
                    </div>
                  </GlassmorphicCard>
                )}

                {caseStudy.solution && (
                  <GlassmorphicCard>
                    <h3 className="text-2xl font-heading font-bold text-dark-slate mb-6">
                      Решение
                    </h3>
                    <div className="text-dark-slate/70 leading-relaxed prose max-w-none">
                      {caseStudy.solution.includes('<') ? (
                        <div dangerouslySetInnerHTML={{ __html: caseStudy.solution }} />
                      ) : (
                        <p>{caseStudy.solution}</p>
                      )}
                    </div>
                  </GlassmorphicCard>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Full Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <GlassmorphicCard>
              <div className="prose prose-lg max-w-none
                prose-headings:font-heading prose-headings:text-dark-slate
                prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                prose-p:text-dark-slate/80 prose-p:leading-relaxed prose-p:mb-6
                prose-strong:text-dark-slate prose-strong:font-semibold
                prose-a:text-sea-green prose-a:no-underline hover:prose-a:underline
                prose-ul:text-dark-slate/80 prose-li:mb-2
                prose-ol:text-dark-slate/80
                prose-blockquote:border-l-sea-green prose-blockquote:bg-sea-green/5
                prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
                prose-img:rounded-xl prose-img:shadow-lg
              ">
                {caseStudy.content ? (
                  caseStudy.content.includes('<') ? (
                    <div dangerouslySetInnerHTML={{ __html: caseStudy.content }} />
                  ) : (
                    <p className="text-lg leading-relaxed">{caseStudy.content}</p>
                  )
                ) : (
                  <p className="text-lg leading-relaxed text-dark-slate/70">
                    Содержимое кейса загружается...
                  </p>
                )}
              </div>
            </GlassmorphicCard>
          </div>
        </section>

        {/* Results */}
        {caseStudy.results && caseStudy.results.length > 0 && (
          <section className="py-20 bg-gradient-to-b from-soft-blue/20 to-off-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-heading font-bold text-dark-slate mb-4">
                  Достигнутые результаты
                </h2>
              </div>

              <GlassmorphicCard>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-sea-green flex-shrink-0" />
                      <span className="text-dark-slate">{result}</span>
                    </div>
                  ))}
                </div>
              </GlassmorphicCard>
            </div>
          </section>
        )}

        {/* Tags */}
        {caseStudy.tags && caseStudy.tags.length > 0 && (
          <section className="py-20 bg-gradient-to-b from-off-white to-soft-blue/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h3 className="text-xl font-heading font-bold text-dark-slate mb-6">
                  Ключевые теги
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {caseStudy.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-sea-green/10 text-sea-green rounded-full font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GlassmorphicCard className="text-center">
              <h2 className="text-3xl font-heading font-bold text-dark-slate mb-6">
                Готовы начать похожий проект?
              </h2>
              <p className="text-xl text-dark-slate/70 mb-8 max-w-3xl mx-auto">
                Свяжитесь с нами, чтобы обсудить, как мы можем помочь вашей организации достичь подобных результатов.
              </p>
              <Link
                href="/contact"
                className="bg-sea-green text-white px-8 py-4 rounded-full font-semibold hover:bg-sea-green/90 transition-all duration-300 inline-flex items-center gap-2"
              >
                Связаться с нами
              </Link>
            </GlassmorphicCard>
          </div>
        </section>
      </div>
    </>
  );
}