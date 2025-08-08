import { motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, Loader2 } from "lucide-react";
import OrganicBlob from "@/components/OrganicBlob";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import { useBlogPost } from "@/hooks/useDirectus";
import { getDirectusImageUrl, formatDate } from "@/lib/directus";
import { Helmet } from "react-helmet-async";

export default function BlogPost() {
  const [, params] = useRoute('/blog/:slug');
  const slug = params?.slug || '';

  const { data: post, isLoading, error } = useBlogPost(slug);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post?.title,
          text: post?.excerpt,
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
          <span className="text-dark-slate/70 text-lg">Загружаем статью...</span>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <GlassmorphicCard className="text-center max-w-md">
          <h2 className="text-2xl font-heading font-bold text-dark-slate mb-4">
            Статья не найдена
          </h2>
          <p className="text-dark-slate/70 mb-6">
            Возможно, статья была удалена или перемещена.
          </p>
          <Link
            href="/blog"
            className="bg-sea-green text-white px-6 py-3 rounded-full font-semibold hover:bg-sea-green/90 transition-all duration-300 inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Вернуться к блогу
          </Link>
        </GlassmorphicCard>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.seo_title || post.title}</title>
        <meta name="description" content={post.seo_description || post.excerpt} />
        <meta name="keywords" content={post.seo_keywords} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={getDirectusImageUrl(post.cover_image, { width: 1200, height: 630 })} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={getDirectusImageUrl(post.cover_image, { width: 1200, height: 630 })} />
        {post.published_date && (
          <meta property="article:published_time" content={post.published_date} />
        )}
        {post.author_name && (
          <meta property="article:author" content={post.author_name} />
        )}
        <link rel="canonical" href={`${window.location.origin}/blog/${post.slug}`} />
      </Helmet>

      <div className="pt-24">
        {/* Navigation */}
        <section className="py-6 bg-soft-blue/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sea-green hover:text-sea-green/80 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Вернуться к блогу
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12 relative overflow-hidden">
          <OrganicBlob className="absolute top-10 right-10 opacity-10" size="md" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Category and Tags */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                {post.category && (
                  <span className="bg-sea-green/10 text-sea-green px-4 py-2 rounded-full font-semibold text-sm">
                    {post.category}
                  </span>
                )}
                {post.featured && (
                  <span className="bg-sandy-beige text-dark-slate px-4 py-2 rounded-full font-semibold text-sm">
                    Рекомендуемая статья
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-4xl lg:text-5xl font-heading font-bold text-dark-slate mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              {post.excerpt && (
                <p className="text-xl text-dark-slate/70 mb-8 leading-relaxed">
                  {post.excerpt}
                </p>
              )}

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 mb-8 text-sm">
                {post.published_date && (
                  <div className="flex items-center gap-2 text-dark-slate/70">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(post.published_date)}</span>
                  </div>
                )}

                {post.read_time && (
                  <div className="flex items-center gap-2 text-dark-slate/70">
                    <Clock className="w-4 h-4" />
                    <span>{post.read_time}</span>
                  </div>
                )}

                {post.author_name && (
                  <div className="flex items-center gap-2 text-dark-slate/70">
                    <User className="w-4 h-4" />
                    <span>{post.author_name}</span>
                    {post.author_role && (
                      <span className="text-dark-slate/50">• {post.author_role}</span>
                    )}
                  </div>
                )}

                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 text-sea-green hover:text-sea-green/80 transition-colors ml-auto"
                  title="Поделиться статьей"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Поделиться</span>
                </button>
              </div>

              {/* Cover Image */}
              <div className="mb-12">
                <img
                  src={getDirectusImageUrl(post.cover_image, { width: 1200, quality: 85 })}
                  alt={post.title}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </motion.article>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <GlassmorphicCard>
                <div 
                  className="prose prose-lg max-w-none
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
                  "
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </GlassmorphicCard>
            </motion.div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-12"
              >
                <GlassmorphicCard>
                  <h3 className="text-lg font-heading font-semibold text-dark-slate mb-4 flex items-center gap-2">
                    <Tag className="w-5 h-5" />
                    Теги статьи
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog?tag=${encodeURIComponent(tag)}`}
                        className="px-4 py-2 bg-sea-green/10 text-sea-green rounded-full font-medium hover:bg-sea-green/20 transition-colors text-sm"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </GlassmorphicCard>
              </motion.div>
            )}
          </div>
        </section>

        {/* Related Articles or CTA */}
        <section className="py-20 bg-gradient-to-b from-off-white to-soft-blue/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <GlassmorphicCard className="text-center">
              <motion.h2
                className="text-3xl font-heading font-bold text-dark-slate mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Читайте также
              </motion.h2>
              <motion.p
                className="text-lg text-dark-slate/70 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                Изучите другие полезные статьи в нашем блоге
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/blog"
                  className="bg-sea-green text-white px-8 py-4 rounded-full font-semibold hover:bg-sea-green/90 transition-all duration-300 inline-flex items-center gap-2"
                >
                  Все статьи блога
                </Link>
                <Link
                  href="/contact"
                  className="glassmorphic glassmorphic-hover px-8 py-4 rounded-full text-sea-green font-semibold inline-flex items-center gap-2"
                >
                  Задать вопрос экспертам
                </Link>
              </motion.div>
            </GlassmorphicCard>
          </div>
        </section>
      </div>
    </>
  );
}