import { useParams } from "wouter";
import { motion } from "framer-motion";
import { Calendar, Building, ArrowLeft, CheckCircle, AlertCircle, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import OptimizedImage from "@/components/OptimizedImage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useCaseStudy } from "@/hooks/useDirectus";
import { getImageUrl, parseContent, safeArray } from "@/lib/directus";
import { useSEO } from "@/hooks/useSEO";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const { data: caseStudy, isLoading, error } = useCaseStudy(slug || "");

  // SEO setup
  useSEO({
    title: caseStudy?.seo_title || caseStudy?.title || "Кейс - Synecology",
    description: caseStudy?.seo_description || caseStudy?.excerpt || "Изучите наш кейс на сайте Synecology",
    keywords: caseStudy?.project_type ? [caseStudy.project_type] : [],
  });

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

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 bg-gradient-to-br from-off-white via-soft-blue/10 to-sandy-beige/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <Skeleton className="h-4 w-32 mb-4" />
          </div>

          <div className="space-y-8">
            <Skeleton className="h-12 w-full" />
            <div className="flex gap-4">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-6 w-32" />
            </div>
            <Skeleton className="h-80 w-full" />
            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error or not found
  if (error || !caseStudy) {
    return (
      <div className="min-h-screen pt-20 bg-gradient-to-br from-off-white via-soft-blue/10 to-sandy-beige/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <Link href="/case-studies">
              <Button variant="ghost" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Вернуться к кейсам
              </Button>
            </Link>
          </div>

          <Alert className="max-w-2xl">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              {error ? "Ошибка при загрузке кейса" : "Кейс не найден"}
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  const coverImageUrl = getImageUrl(caseStudy.cover_image);
  const content = parseContent(caseStudy.content);
  const results = safeArray(caseStudy.results);
  const metrics = safeArray(caseStudy.metrics);
  const gallery = safeArray(caseStudy.gallery);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-off-white via-soft-blue/10 to-sandy-beige/20">
      <article className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back button */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/case-studies">
            <Button variant="ghost" className="gap-2 hover:bg-sea-green/10">
              <ArrowLeft className="w-4 h-4" />
              Вернуться к кейсам
            </Button>
          </Link>
        </motion.div>

        {/* Main content */}
        <div className="space-y-12">
          {/* Header */}
          <section>
            <GlassmorphicCard>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {caseStudy.project_type && (
                  <Badge variant="secondary" className="mb-4">
                    {caseStudy.project_type}
                  </Badge>
                )}

                <h1 className="text-4xl sm:text-5xl font-heading font-bold text-dark-slate mb-6 leading-tight">
                  {caseStudy.title}
                </h1>

                {caseStudy.excerpt && (
                  <p className="text-xl text-dark-slate/70 mb-8 leading-relaxed">
                    {caseStudy.excerpt}
                  </p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {caseStudy.client_name && (
                    <div className="flex items-center gap-3">
                      <Building className="w-5 h-5 text-sea-green" />
                      <div>
                        <div className="text-sm text-dark-slate/60">Клиент</div>
                        <div className="font-semibold text-dark-slate">
                          {caseStudy.client_name}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-sea-green" />
                    <div>
                      <div className="text-sm text-dark-slate/60">Завершен</div>
                      <div className="font-semibold text-dark-slate">
                        {formatDate(caseStudy.completion_date)}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </GlassmorphicCard>
          </section>

          {/* Cover Image */}
          {coverImageUrl && (
            <motion.section
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-64 md:h-96 overflow-hidden rounded-2xl">
                <OptimizedImage
                  src={coverImageUrl}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.section>
          )}

          {/* Metrics */}
          {metrics.length > 0 && (
            <section>
              <GlassmorphicCard>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-heading font-bold text-dark-slate mb-4">
                    Ключевые показатели
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-6 bg-gradient-to-br from-sea-green/10 to-soft-blue/10 rounded-xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                      <TrendingUp className="w-8 h-8 text-sea-green mx-auto mb-3" />
                      <div className="text-2xl font-bold text-dark-slate mb-2">
                        {metric.value}{metric.unit || ''}
                      </div>
                      <div className="text-dark-slate/70">{metric.name}</div>
                    </motion.div>
                  ))}
                </div>
              </GlassmorphicCard>
            </section>
          )}

          {/* Content */}
          <section>
            <GlassmorphicCard>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-heading font-bold text-dark-slate mb-4">
                  Описание проекта
                </h2>
              </div>

              <div className="prose prose-lg max-w-none prose-headings:text-dark-slate prose-p:text-dark-slate/80 prose-strong:text-dark-slate prose-a:text-sea-green prose-a:no-underline hover:prose-a:underline">
                {content ? (
                  <div dangerouslySetInnerHTML={{ __html: content }} />
                ) : (
                  <p className="text-dark-slate/60 text-center">
                    Содержимое кейса загружается...
                  </p>
                )}
              </div>
            </GlassmorphicCard>
          </section>

          {/* Results */}
          {results.length > 0 && (
            <section className="py-20 bg-gradient-to-b from-soft-blue/20 to-off-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-heading font-bold text-dark-slate mb-4">
                    Достигнутые результаты
                  </h2>
                </div>

                <GlassmorphicCard>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {results.map((result, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                      >
                        <CheckCircle className="w-6 h-6 text-sea-green flex-shrink-0 mt-1" />
                        <div className="text-dark-slate/80">{result}</div>
                      </motion.div>
                    ))}
                  </div>
                </GlassmorphicCard>
              </div>
            </section>
          )}

          {/* Gallery */}
          {gallery.length > 0 && (
            <section>
              <GlassmorphicCard>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-heading font-bold text-dark-slate mb-4">
                    Галерея проекта
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {gallery.map((image, index) => {
                    const imageUrl = getImageUrl(image);
                    if (!imageUrl) return null;

                    return (
                      <motion.div
                        key={index}
                        className="relative h-48 overflow-hidden rounded-lg group"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                      >
                        <OptimizedImage
                          src={imageUrl}
                          alt={`${caseStudy.title} - изображение ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </GlassmorphicCard>
            </section>
          )}
        </div>
      </article>
    </div>
  );
}