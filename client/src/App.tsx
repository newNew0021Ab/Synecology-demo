import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { CustomCursor } from '@/components/CustomCursor';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { queryClient } from '@/lib/queryClient';

// Ленивая загрузка компонентов для code-splitting
const Home = lazy(() => import('@/pages/home'));
const About = lazy(() => import('@/pages/about'));
const Services = lazy(() => import('@/pages/services'));
const ServiceDetail = lazy(() => import('@/pages/service-detail'));
const CaseStudies = lazy(() => import('@/pages/case-studies'));
const CaseStudyDetail = lazy(() => import('@/pages/case-study-detail'));
const Blog = lazy(() => import('@/pages/blog'));
const BlogPost = lazy(() => import('@/pages/blog-post'));
const FAQ = lazy(() => import('@/pages/faq'));
const Contact = lazy(() => import('@/pages/contact'));
const TeamMember = lazy(() => import('@/pages/team-member'));
const NotFound = lazy(() => import('@/pages/not-found'));

// Оптимизированный компонент загрузки
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background">
        <CustomCursor />
        <Header />
        <main>
          <Suspense fallback={<LoadingFallback />}>
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/services" component={Services} />
              <Route path="/services/:slug" component={ServiceDetail} />
              <Route path="/case-studies" component={CaseStudies} />
              <Route path="/case-studies/:slug" component={CaseStudyDetail} />
              <Route path="/blog" component={Blog} />
              <Route path="/blog/:slug" component={BlogPost} />
              <Route path="/faq" component={FAQ} />
              <Route path="/contact" component={Contact} />
              <Route path="/team/:slug" component={TeamMember} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </main>
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;