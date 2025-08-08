import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, Building, ArrowRight, AlertCircle } from "lucide-react";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import OptimizedImage from "@/components/OptimizedImage";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useCaseStudies } from "@/hooks/useDirectus";
import { getImageUrl } from "@/lib/directus";
import { useSEO } from "@/hooks/useSEO";

export default function CaseStudies() {
  const { data: caseStudies = [], isLoading, error } = useCaseStudies();

  useSEO({
    title: "Кейсы - Synecology",
    description: "Изучите наши успешные проекты в области экологического консалтинга и устойчивого развития.",
    keywords: ["кейсы", "проекты", "экология", "результаты", "консалтинг"],
  });

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long'
      });
    } catch {
      return 'Дата не указана';
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 bg-gradient-to-br from-off-white via-soft-blue/10 to-sandy-beige/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="space-y-4">
                <Skeleton className="h-64 w-full" />
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
  if (error) {
    return (
      <div className="min-h-screen pt-20 bg-gradient-to-br from-off-white via-soft-blue/10 to-sandy-beige/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Alert className="max-w-2xl mx-auto">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              Не удалось загрузить кейсы. Пожалуйста, попробуйте позже.
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
            Наши кейсы
          </motion.h1>
          <motion.p
            className="text-xl text-dark-slate/70 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Реальные проекты и достигнутые результаты в области экологического консалтинга
          </motion.p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {caseStudies.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-dark-slate/60 mb-4">
                Кейсы пока не добавлены
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((caseStudy, index) => {
                if (!caseStudy || !caseStudy.title) return null;

                const coverImageUrl = getImageUrl(caseStudy.cover_image);

                return (
                  <motion.article
                    key={caseStudy.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link href={`/case-studies/${caseStudy.slug}`}>
                      <GlassmorphicCard className="h-full hover:scale-105 transition-all duration-300 cursor-pointer group">
                        {coverImageUrl && (
                          <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                            <OptimizedImage
                              src={coverImageUrl}
                              alt={caseStudy.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        )}

                        <div className="flex flex-col h-full">
                          <div className="flex-1">
                            {caseStudy.project_type && (
                              <Badge variant="secondary" className="mb-3">
                                {caseStudy.project_type}
                              </Badge>
                            )}

                            <h3 className="text-2xl font-heading font-bold text-dark-slate mb-4 line-clamp-2">
                              {caseStudy.title}
                            </h3>

                            {caseStudy.excerpt && (
                              <p className="text-dark-slate/70 mb-6 line-clamp-3">
                                {caseStudy.excerpt}
                              </p>
                            )}
                          </div>

                          <div className="mt-auto">
                            <div className="flex items-center justify-between mb-4">
                              <div className="space-y-2">
                                {caseStudy.client_name && (
                                  <div className="flex items-center gap-2 text-sm text-dark-slate/60">
                                    <Building className="w-4 h-4" />
                                    <span>{caseStudy.client_name}</span>
                                  </div>
                                )}
                                <div className="flex items-center gap-2 text-sm text-dark-slate/60">
                                  <Calendar className="w-4 h-4" />
                                  <span>{formatDate(caseStudy.completion_date)}</span>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 text-sea-green font-medium group-hover:gap-3 transition-all">
                              <span>Подробнее</span>
                              <ArrowRight className="w-4 h-4" />
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