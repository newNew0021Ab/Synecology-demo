import { motion } from "framer-motion";
import { useRoute } from "wouter";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { GlassmorphicCard } from "../components/GlassmorphicCard";
import { OrganicBlob } from "../components/OrganicBlob";
import { useSEO } from "../hooks/useSEO";
import { useCase } from "../hooks/useStrapi";
import { getStrapiImageUrl } from "../lib/strapi";
import { MarkdownContent } from "../components/MarkdownContent";
import { Skeleton } from "../components/ui/skeleton";

export default function CaseStudyDetailPage() {
  const [match, params] = useRoute("/case-studies/:slug");
  const slug = params?.slug || "";
  const { data: caseStudy, isLoading, error } = useCase(slug);

  // Fallback данные для демонстрации
  const fallbackCaseStudy = {
    title: "Fallback Title",
    description: "Fallback Description",
    challenge: "Fallback Challenge",
    solution: "Fallback Solution",
    results: ["Fallback Result 1", "Fallback Result 2"],
    tags: ["fallback", "tag"],
    category: "Fallback Category",
    client: "Fallback Client",
    projectDate: "01.01.2024",
    image: "https://via.placeholder.com/400",
    gallery: ["https://via.placeholder.com/400", "https://via.placeholder.com/400"],
  };

  const displayData = caseStudy ? {
    title: caseStudy.attributes.title,
    description: caseStudy.attributes.preview_text,
    content: caseStudy.attributes.content,
    image: getStrapiImageUrl(caseStudy.attributes.cover_image),
    gallery: caseStudy.attributes.gallery?.data?.map(img => getStrapiImageUrl({ data: img })) || [],
    client: caseStudy.attributes.client,
    tags: caseStudy.attributes.tags.split(',').map((tag: string) => tag.trim()),
    category: caseStudy.attributes.category,
    projectDate: new Date(caseStudy.attributes.project_date).toLocaleDateString('ru-RU'),
    featured: caseStudy.attributes.featured
  } : fallbackCaseStudy;

  useSEO({
    title: `${displayData.title} - Кейс-стади`,
    description: displayData.description,
    keywords: displayData.tags.join(", ")
  });

  if (!match) {
    return <div>Кейс не найден</div>;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background text-foreground pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-destructive mb-4">Ошибка загрузки</h2>
            <p className="text-muted-foreground">Не удалось загрузить данные кейса</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Breadcrumbs 
          segments={[
            { label: 'Кейсы', href: '/case-studies' },
            { label: displayData.title }
          ]}
          className="mb-8"
        />

        <div className="mb-8">
          <div className="flex justify-between items-center">
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-6 w-3/4" />
              </div>
            ) : (
              <>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {displayData.title}
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {displayData.description}
                </p>
              </>
            )}
          </div>
          
          {isLoading ? (
              <Skeleton className="h-8 w-full mb-8" />
            ) : (
              <div className="flex flex-wrap gap-2 mb-8">
                {displayData.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {Array.from({ length: 3 }).map((_, index) => (
                  <Skeleton key={index} className="h-24 w-full" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <GlassmorphicCard className="p-6">
                  <h3 className="font-semibold mb-2">Клиент</h3>
                  <p className="text-muted-foreground">{displayData.client}</p>
                </GlassmorphicCard>
                <GlassmorphicCard className="p-6">
                  <h3 className="font-semibold mb-2">Категория</h3>
                  <p className="text-muted-foreground">{displayData.category}</p>
                </GlassmorphicCard>
                <GlassmorphicCard className="p-6">
                  <h3 className="font-semibold mb-2">Дата проекта</h3>
                  <p className="text-muted-foreground">{displayData.projectDate}</p>
                </GlassmorphicCard>
              </div>
            )}
        </div>

        {isLoading ? (
            <Skeleton className="w-full h-96 rounded-lg mb-12" />
          ) : (
            <div className="mb-12">
              <img 
                src={displayData.image} 
                alt={displayData.title}
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <GlassmorphicCard className="p-8">
                {isLoading ? (
                  <div className="space-y-4">
                    <Skeleton className="h-8 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                ) : caseStudy ? (
                  <MarkdownContent content={displayData.content} />
                ) : (
                  <div className="prose prose-lg max-w-none">
                    <h2 className="text-2xl font-bold mb-6">Описание проекта</h2>
                    <p className="mb-6">
                      {displayData.challenge}
                    </p>

                    <h3 className="text-xl font-bold mb-4">Решение</h3>
                    <p className="mb-6">
                      {displayData.solution}
                    </p>

                    <h3 className="text-xl font-bold mb-4">Результаты</h3>
                    <ul className="list-disc list-inside space-y-2">
                      {displayData.results?.map((result, index) => (
                        <li key={index}>{result}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </GlassmorphicCard>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard className="p-6">
                <h3 className="text-xl font-bold mb-4">Галерея проекта</h3>
                {isLoading ? (
                  <div className="grid grid-cols-1 gap-4">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <Skeleton key={index} className="w-full h-48 rounded-lg" />
                    ))}
                  </div>
                ) : displayData.gallery.length > 0 ? (
                  <div className="grid grid-cols-1 gap-4">
                    {displayData.gallery.map((image, index) => (
                      <img 
                        key={index}
                        src={image} 
                        alt={`Галерея ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">Изображения галереи недоступны</p>
                )}
              </GlassmorphicCard>
            </div>
          </div>
      </div>
    </div>
  );
}