import { useParams } from "wouter";
import { motion } from "framer-motion";
import { Calendar, User, Tag, ArrowLeft, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import OptimizedImage from "@/components/OptimizedImage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useBlogPost } from "@/hooks/useDirectus";
import { getImageUrl, parseContent, safeArray } from "@/lib/directus";
import { useSEO } from "@/hooks/useSEO";

export default function BlogPost() {
  const { slug } = useParams();
  const { data: post, isLoading, error } = useBlogPost(slug || "");

  // SEO setup
  useSEO({
    title: post?.seo_title || post?.title || "Статья - Synecology",
    description: post?.seo_description || post?.excerpt || "Читайте статью на сайте Synecology",
    keywords: safeArray(post?.tags),
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <Skeleton className="h-4 w-32 mb-4" />
          </div>

          <div className="space-y-6">
            <Skeleton className="h-12 w-full" />
            <div className="flex gap-4">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-6 w-32" />
            </div>
            <Skeleton className="h-64 w-full" />
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
  if (error || !post) {
    return (
      <div className="min-h-screen pt-20 bg-gradient-to-br from-off-white via-soft-blue/10 to-sandy-beige/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-8">
            <Link href="/blog">
              <Button variant="ghost" className="gap-2 hover:bg-sea-green/10">
                <ArrowLeft className="w-4 h-4" />
                Вернуться к блогу
              </Button>
            </Link>
          </div>

          <Alert className="max-w-2xl">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              {error ? "Ошибка при загрузке статьи" : "Статья не найдена"}
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  const coverImageUrl = getImageUrl(post.cover_image);
  const postTags = safeArray(post.tags);
  const content = parseContent(post.content);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-off-white via-soft-blue/10 to-sandy-beige/20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back button */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/blog">
            <Button variant="ghost" className="gap-2 hover:bg-sea-green/10">
              <ArrowLeft className="w-4 h-4" />
              Вернуться к блогу
            </Button>
          </Link>
        </motion.div>

        <GlassmorphicCard>
          {/* Article header */}
          <motion.header
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {post.category && (
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>
            )}

            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-dark-slate mb-6 leading-tight">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="text-xl text-dark-slate/70 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-6 text-dark-slate/60 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{formatDate(post.published_date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>Synecology</span>
              </div>
            </div>

            {postTags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {postTags.map((tag) => (
                  <Badge key={tag} variant="outline" className="gap-1">
                    <Tag className="w-3 h-3" />
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </motion.header>

          {/* Cover image */}
          {coverImageUrl && (
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative h-64 sm:h-96 overflow-hidden rounded-lg">
                <OptimizedImage
                  src={coverImageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          )}

          {/* Article content */}
          <motion.div
            className="prose prose-lg max-w-none prose-headings:text-dark-slate prose-p:text-dark-slate/80 prose-strong:text-dark-slate prose-a:text-sea-green prose-a:no-underline hover:prose-a:underline"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {content ? (
              <div dangerouslySetInnerHTML={{ __html: content }} />
            ) : (
              <p className="text-dark-slate/60">Содержимое статьи загружается...</p>
            )}
          </motion.div>
        </GlassmorphicCard>
      </article>
    </div>
  );
}