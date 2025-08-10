import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowLeft, Calendar, Clock, CheckCircle, TrendingUp, DollarSign, Leaf, Users, Share2 } from "lucide-react";
import OrganicBlob from "@/components/OrganicBlob";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import { useEffect, useState } from "react";
import { fetchCaseStudies, type CaseStudy } from "@/lib/directus";

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const [caseStudy, setCaseStudy] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Данные кейсов (в будущем будут из Sanity)
  const caseStudies = {
    "coffee-environmental-documentation": {
      title: "Экология как инвестиция: кейс ведущего обжарщика кофе в РБ.",
      category: "Пищевая промышленность",
      description: "Создали полную экологическую систему «с нуля» для ведущего обжарщика спешелти кофе в Республике Беларусь, обеспечив 100% соответствие законодательству.",
      fullDescription: "Масштабный проект по созданию комплексной экологической системы для лидера кофейной индустрии. Компания, являясь ведущим обжарщиком спешелти кофе, столкнулась с необходимостью срочного приведения деятельности в соответствие с природоохранным законодательством РБ. Наша команда обеспечила полное соответствие всем требованиям и создала устойчивую систему экологического контроля.",
      challenge: "На момент обращения на предприятии полностью отсутствовала какая-либо экологическая документация и система производственного контроля. Это создавало высокие риски крупных штрафов и приостановки деятельности при первой же проверке со стороны Минприроды. Компания нуждалась в срочном решении для обеспечения законности своей деятельности.",
      solution: "Был проведен комплексный анализ производственных процессов и разработана дорожная карта по созданию всей необходимой экологической документации «под ключ». Разработан полный пакет документов: Акт инвентаризации выбросов загрязняющих веществ в атмосферу, Инструкция по обращению с отходами производства и акт инвентаризации отходов, Паспортизация газоочистных установок (ГОУ), Инструкция по осуществлению производственных наблюдений в области охраны окружающей среды (ПЭК), восстановление и заполнение статистической отчетности.",
      results: [
        "100% соответствие природоохранному законодательству",
        "Полностью исключены риски штрафов и приостановки деятельности",
        "Получены все необходимые разрешения и согласования",
        "Успешно пройдено согласование в территориальных органах Минприроды",
        "Организована переработка отходов с получением дополнительного дохода",
        "Созданы условия для устойчивого развития бизнеса"
      ],
      metrics: [
        { icon: CheckCircle, value: "100%", label: "Соответствие закону", color: "text-sea-green" },
        { icon: TrendingUp, value: "50 000 BYN+", label: "Экономии на штрафах", color: "text-soft-blue" },
        { icon: Users, value: "100 000 BYN+", label: "Доход от отходов в год", color: "text-sandy-beige" },
        { icon: Leaf, value: "0", label: "Прекращений работы", color: "text-sea-green" }
      ],
      image: "https://images.unsplash.com/photo-1587734195342-39d4b9b2ff05?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      images: [
        "https://images.unsplash.com/photo-1554475901-4538ddfbccc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
      ],
      tags: ["Экологическая документация", "Пищевая промышленность", "Соответствие законодательству", "Производственный контроль", "Переработка отходов"],
      timeline: "6 месяцев",
      completion: "15.12.2024",
      client: "Ведущий обжарщик спешелти кофе в Республике Беларусь",
      location: "Республика Беларусь",
      teamSize: "6 специалистов",
      seoTitle: "Экологическая документация для кофейного производства - кейс Synecology",
      seoDescription: "Создание комплексной экологической системы для кофейного производства с 100% соответствием законодательству",
      seoKeywords: ["экологическая документация", "кофейное производство", "природоохранное законодательство", "производственный контроль"]
    },
    "solar-energy-transition": {
      title: "Переход на солнечную энергию",
      category: "Производственная отрасль",
      description: "Помогли производственной компании снизить выбросы углерода на 70% за счет стратегического внедрения солнечной энергии.",
      fullDescription: "Этот проект представляет собой комплексное решение по переходу крупного производственного предприятия на возобновляемые источники энергии. Наша команда провела детальный анализ энергопотребления, разработала стратегию поэтапного внедрения солнечных панелей и обеспечила полное сопровождение проекта от планирования до запуска.",
      challenge: "Предприятие сталкивалось с растущими затратами на электроэнергию и необходимостью соответствия новым экологическим стандартам. Основные вызовы включали: высокое энергопотребление производственных линий, устаревшую энергетическую инфраструктуру, необходимость минимизации простоев во время модернизации.",
      solution: "Мы разработали поэтапный план перехода на солнечную энергию, включающий: установку 2000 кВт солнечных панелей на крышах производственных зданий, модернизацию электрической сети предприятия, внедрение системы мониторинга энергопотребления, обучение персонала работе с новым оборудованием.",
      results: [
        "70% снижение выбросов углерода",
        "2,3 млн долларов годовой экономии энергозатрат",
        "15 000 МВтч чистой энергии в год",
        "Окупаемость за 3,2 года",
        "Создание 25 новых рабочих мест",
        "Получение статуса экологически ответственного предприятия"
      ],
      metrics: [
        { icon: TrendingUp, value: "70%", label: "Снижение выбросов CO₂", color: "text-sea-green" },
        { icon: DollarSign, value: "2.3М$", label: "Годовая экономия", color: "text-soft-blue" },
        { icon: Leaf, value: "15 000", label: "МВтч чистой энергии", color: "text-sandy-beige" },
        { icon: Users, value: "25", label: "Новых рабочих мест", color: "text-sea-green" }
      ],
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800",
      images: [
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
      ],
      tags: ["Солнечная энергия", "Снижение углерода", "Производство", "Возобновляемая энергия", "Энергоэффективность"],
      timeline: "18 месяцев",
      completion: "12.10.2024",
      client: "Промышленный комплекс «Энергия Будущего»",
      location: "Московская область, Россия",
      teamSize: "12 специалистов",
      seoTitle: "Переход на солнечную энергию - кейс Synecology",
      seoDescription: "Как мы помогли производственной компании снизить выбросы углерода на 70% и сэкономить 2,3 млн долларов в год",
      seoKeywords: ["солнечная энергия", "снижение выбросов", "производство", "экология", "возобновляемая энергия"]
    },
    "wetlands-restoration": {
      title: "Восстановление водно-болотных угодий",
      category: "Природоохранный проект",
      description: "Успешно восстановили 500 акров экосистемы водно-болотных угодий, увеличив местное биоразнообразие на 200%.",
      fullDescription: "Масштабный экологический проект по восстановлению деградировавших водно-болотных угодий в природоохранной зоне. Проект включал комплексные мероприятия по восстановлению гидрологического режима, реинтродукцию растений и животных, создание устойчивой экосистемы.",
      challenge: "Водно-болотные угодья были серьезно повреждены в результате промышленной деятельности. Основные проблемы: загрязнение почвы и воды, нарушение естественного водного режима, утрата биоразнообразия, эрозия берегов.",
      solution: "Комплексная программа восстановления включала: очистку загрязненных участков, восстановление естественного гидрологического режима, высадку местных видов растений, реинтродукцию животных, создание системы мониторинга экосистемы.",
      results: [
        "500 акров водно-болотных угодий восстановлено",
        "200% увеличение биоразнообразия",
        "85% улучшение качества воды",
        "30 исчезающих видов реинтродуцировано",
        "Создание рабочих мест для местного сообщества",
        "Развитие экотуризма в регионе"
      ],
      metrics: [
        { icon: Leaf, value: "500", label: "Акров восстановлено", color: "text-sea-green" },
        { icon: TrendingUp, value: "200%", label: "Рост биоразнообразия", color: "text-soft-blue" },
        { icon: TrendingUp, value: "85%", label: "Улучшение качества воды", color: "text-sandy-beige" },
        { icon: Users, value: "30", label: "Восстановленных видов", color: "text-sea-green" }
      ],
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800",
      images: [
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
      ],
      tags: ["Восстановление экосистем", "Биоразнообразие", "Охрана природы", "Водно-болотные угодья"],
      timeline: "24 месяца",
      completion: "03.05.2023",
      client: "Министерство природных ресурсов",
      location: "Астраханская область, Россия",
      teamSize: "15 специалистов",
      seoTitle: "Восстановление водно-болотных угодий - проект Synecology",
      seoDescription: "Восстановление 500 акров экосистемы с увеличением биоразнообразия на 200%",
      seoKeywords: ["восстановление экосистем", "биоразнообразие", "водно-болотные угодья", "охрана природы"]
    },
    "water-treatment-innovation": {
      title: "Инновации в очистке воды",
      category: "Промышленная вода",
      description: "Внедрили передовые системы очистки воды, сократив отходы на 85% для крупного промышленного клиента.",
      fullDescription: "Инновационный проект по внедрению современных технологий очистки промышленных сточных вод. Проект включал разработку и установку комплексной системы многоступенчатой очистки с применением передовых мембранных технологий.",
      challenge: "Промышленное предприятие сталкивалось с проблемой загрязнения сточных вод и высокими штрафами за превышение нормативов. Существующая система очистки была неэффективной и требовала модернизации.",
      solution: "Внедрение инновационной системы очистки включало: установку мембранных биореакторов, систему обратного осмоса, станцию доочистки сточных вод, автоматизированную систему контроля качества.",
      results: [
        "85% сокращение водных отходов",
        "99,5% эффективность очистки",
        "1,8 млн долларов годовой экономии",
        "Соответствие нормам нулевого сброза",
        "Возможность повторного использования воды",
        "Снижение экологических рисков"
      ],
      metrics: [
        { icon: TrendingUp, value: "85%", label: "Сокращение отходов", color: "text-sea-green" },
        { icon: TrendingUp, value: "99.5%", label: "Эффективность очистки", color: "text-soft-blue" },
        { icon: DollarSign, value: "1.8М$", label: "Годовая экономия", color: "text-sandy-beige" },
        { icon: Leaf, value: "100%", label: "Соответствие нормам", color: "text-sea-green" }
      ],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800",
      images: [
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
      ],
      tags: ["Очистка воды", "Промышленность", "Сокращение отходов", "Инновации"],
      timeline: "12 месяцев",
      completion: "18.11.2022",
      client: "Химический комбинат «Инновация»",
      location: "Нижегородская область, Россия",
      teamSize: "8 специалистов",
      seoTitle: "Инновации в очистке промышленных вод - кейс Synecology",
      seoDescription: "Сокращение водных отходов на 85% с эффективностью очистки 99,5%",
      seoKeywords: ["очистка воды", "промышленность", "сокращение отходов", "экологические технологии"]
    }
  };

  useEffect(() => {
    const loadCaseStudy = async () => {
      if (!slug) return;

      setLoading(true);
      setError(null);

      try {
        // First, try to find in static cases
        if (caseStudies[slug as keyof typeof caseStudies]) {
          const staticCase = caseStudies[slug as keyof typeof caseStudies];
          setCaseStudy(staticCase);
          
          // SEO оптимизация для статичных кейсов
          document.title = staticCase.seoTitle;
          const metaDescription = document.querySelector('meta[name="description"]');
          if (metaDescription) {
            metaDescription.setAttribute('content', staticCase.seoDescription);
          }
          setLoading(false);
          return;
        }

        // If not found in static, try to load from Directus
        const directusCases = await fetchCaseStudies();
        const directusCase = directusCases.find(c => c.slug === slug);
        
        if (directusCase) {
          // Convert Directus case to detail format
          const formattedCase = {
            title: directusCase.title,
            category: directusCase.category || 'Без категории',
            description: directusCase.previewText || directusCase.description || '',
            fullDescription: directusCase.description || directusCase.previewText || '',
            challenge: extractTextFromHTML(directusCase.challenge) || 'Информация о вызове недоступна.',
            solution: extractTextFromHTML(directusCase.solution) || 'Информация о решении недоступна.',
            results: directusCase.results || [],
            metrics: generateMetricsFromResults(directusCase.results),
            image: directusCase.coverImage || "/api/placeholder/1200/800",
            images: [directusCase.coverImage || "/api/placeholder/800/600"],
            tags: directusCase.tags || [],
            timeline: directusCase.timeline || 'N/A',
            completion: new Date(directusCase.completionDate).toLocaleDateString('ru-RU'),
            client: directusCase.client || 'Клиент не указан',
            location: directusCase.location || 'Локация не указана',
            teamSize: directusCase.team_size || 'Команда не указана',
            seoTitle: `${directusCase.title} - кейс Synecology`,
            seoDescription: directusCase.previewText || directusCase.description || '',
            seoKeywords: directusCase.tags || []
          };

          setCaseStudy(formattedCase);

          // SEO оптимизация для Directus кейсов
          document.title = formattedCase.seoTitle;
          const metaDescription = document.querySelector('meta[name="description"]');
          if (metaDescription) {
            metaDescription.setAttribute('content', formattedCase.seoDescription);
          }
        } else {
          setError('Кейс не найден');
        }
      } catch (err: any) {
        console.error('Error loading case study:', err);
        setError('Ошибка загрузки кейса');
      } finally {
        setLoading(false);
      }
    };

    loadCaseStudy();
  }, [slug]);

  // Helper function to extract text from HTML
  const extractTextFromHTML = (htmlString?: string): string => {
    if (!htmlString) return '';
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;
    return tempDiv.textContent || tempDiv.innerText || '';
  };

  // Helper function to generate metrics from results
  const generateMetricsFromResults = (results: string[]): any[] => {
    const metrics = [];
    
    results.forEach((result, index) => {
      if (index >= 4) return; // Limit to 4 metrics
      
      let icon = CheckCircle;
      let color = 'text-sea-green';
      let value = '✓';
      let label = result;

      // Try to extract numbers for better metrics
      const numberMatch = result.match(/(\d+(?:[.,]\d+)?)\s*([%$₽BYN]|\w+)/);
      if (numberMatch) {
        value = numberMatch[1] + (numberMatch[2] || '');
        label = result.replace(numberMatch[0], '').trim();
      }

      // Assign different icons and colors
      switch (index % 4) {
        case 0:
          icon = TrendingUp;
          color = 'text-sea-green';
          break;
        case 1:
          icon = DollarSign;
          color = 'text-soft-blue';
          break;
        case 2:
          icon = Leaf;
          color = 'text-sandy-beige';
          break;
        case 3:
          icon = Users;
          color = 'text-sea-green';
          break;
      }

      metrics.push({ icon, value, label, color });
    });

    return metrics;
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: caseStudy?.title,
        text: caseStudy?.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (loading) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-sea-green mb-4"></div>
          <p className="text-xl text-dark-slate">Загружаем кейс...</p>
        </div>
      </div>
    );
  }

  if (error || !caseStudy) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <p className="text-xl text-dark-slate mb-4">{error || 'Кейс не найден'}</p>
          <Link
            href="/case-studies"
            className="text-sea-green font-semibold hover:text-sea-green/80 transition-colors"
          >
            ← Вернуться к кейсам
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <OrganicBlob className="absolute top-10 right-10 opacity-15" size="lg" />
        <OrganicBlob className="absolute bottom-10 left-10 opacity-10" size="md" delay={2} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sea-green font-semibold hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Вернуться к кейсам
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                className="flex items-center gap-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-sea-green/10 text-sea-green px-4 py-2 rounded-full font-semibold">
                  {caseStudy.category}
                </div>
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

              <motion.div
                className="text-xl text-dark-slate/70 mb-8 leading-relaxed prose prose-lg max-w-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                dangerouslySetInnerHTML={{ __html: caseStudy.fullDescription }}
              />

              <motion.div
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-dark-slate/70">
                    <Calendar className="w-4 h-4" />
                    <span>Завершен: {caseStudy.completion}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-dark-slate/70">
                    <Clock className="w-4 h-4" />
                    <span>Длительность: {caseStudy.timeline}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-dark-slate/70">
                    <span className="font-semibold">Клиент:</span> {caseStudy.client}
                  </p>
                  <p className="text-sm text-dark-slate/70">
                    <span className="font-semibold">Команда:</span> {caseStudy.teamSize}
                  </p>
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
                src={caseStudy.image}
                alt={caseStudy.title}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-gradient-to-b from-off-white to-soft-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-dark-slate mb-4">
              Ключевые показатели
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(caseStudy.metrics || []).map((metric: any, index: number) => (
              <GlassmorphicCard key={metric.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className={`w-16 h-16 ${metric.color} mx-auto mb-4`}>
                    <metric.icon className="w-full h-full" />
                  </div>
                  <div className="text-4xl font-heading font-bold text-dark-slate mb-2">
                    {metric.value}
                  </div>
                  <div className="text-dark-slate/70">{metric.label}</div>
                </div>
              </GlassmorphicCard>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <GlassmorphicCard>
              <h3 className="text-2xl font-heading font-bold text-dark-slate mb-6">
                Вызов
              </h3>
              <p className="text-dark-slate/70 leading-relaxed">
                {caseStudy.challenge}
              </p>
            </GlassmorphicCard>

            <GlassmorphicCard>
              <h3 className="text-2xl font-heading font-bold text-dark-slate mb-6">
                Решение
              </h3>
              <p className="text-dark-slate/70 leading-relaxed">
                {caseStudy.solution}
              </p>
            </GlassmorphicCard>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gradient-to-b from-soft-blue/20 to-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-dark-slate mb-4">
              Достигнутые результаты
            </h2>
          </div>

          <GlassmorphicCard>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.results.map((result: string, index: number) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-sea-green flex-shrink-0" />
                  <span className="text-dark-slate">{result}</span>
                </div>
              ))}
            </div>
          </GlassmorphicCard>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-dark-slate mb-4">
              Этапы реализации проекта
            </h2>
            <p className="text-xl text-dark-slate/70 max-w-3xl mx-auto">
              Пошаговый процесс работы над проектом — от первичного анализа до финального результата
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <GlassmorphicCard delay={0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sea-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-sea-green text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-dark-slate mb-2">Анализ и аудит</h3>
                  <p className="text-sm text-dark-slate/70">Комплексная оценка текущего состояния предприятия</p>
                </div>
              </GlassmorphicCard>

              <GlassmorphicCard delay={0.2}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-soft-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-soft-blue text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-dark-slate mb-2">Планирование</h3>
                  <p className="text-sm text-dark-slate/70">Разработка стратегии и дорожной карты решений</p>
                </div>
              </GlassmorphicCard>

              <GlassmorphicCard delay={0.3}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sandy-beige/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-sandy-beige text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-dark-slate mb-2">Реализация</h3>
                  <p className="text-sm text-dark-slate/70">Внедрение решений и создание документации</p>
                </div>
              </GlassmorphicCard>

              <GlassmorphicCard delay={0.4}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sea-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-sea-green text-2xl font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-semibold text-dark-slate mb-2">Сопровождение</h3>
                  <p className="text-sm text-dark-slate/70">Поддержка и мониторинг после внедрения</p>
                </div>
              </GlassmorphicCard>
            </div>

            
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="py-20 bg-gradient-to-b from-off-white to-soft-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-heading font-bold text-dark-slate mb-6">
              Ключевые теги
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {caseStudy.tags.map((tag: string) => (
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
  );
}