import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Services from "@/pages/services";
import ServiceDetail from "@/pages/service-detail";
import CaseStudies from "@/pages/case-studies";
import CaseStudyDetail from "@/pages/case-study-detail";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import FAQ from "@/pages/faq";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamMember from "@/pages/team-member";


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/case-studies/:slug" component={CaseStudyDetail} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/faq" component={FAQ} />
      <Route path="/team/:slug" component={TeamMember} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useScrollToTop();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-off-white text-dark-slate overflow-x-hidden custom-cursor">

          <Header />
          <main>
            <Router />
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;