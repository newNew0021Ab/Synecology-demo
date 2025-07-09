import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowLeft, CheckCircle, Clock, DollarSign, FileText, Share2, ArrowRight } from "lucide-react";
import OrganicBlob from "@/components/OrganicBlob";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import { useEffect, useState } from "react";

export default function ServiceDetail() {
  const { slug } = useParams();
  const [service, setService] = useState<any>(null);

  // Данные услуг (в будущем будут из Sanity)
  const services = {
    "emissions-inventory": {
      title: "Инвентаризация выбросов",
      shortTitle: "Разработка акта инвентаризации выбросов загрязняющих веществ в атмосферный воздух",
      description: "Комплексная инвентаризация источников выбросов для соблюдения экологических нормативов.",
      fullDescription: "Инвентаризация выбросов загрязняющих веществ в атмосферный воздух является обязательной процедурой для всех предприятий, осуществляющих хозяйственную деятельность. Наша компания предоставляет полный спектр услуг по проведению инвентаризации в соответствии с действующим законодательством РФ.",
      features: [
        "Инвентаризация источников выбросов",
        "Расчет валовых выбросов",
        "Составление каталога выбросов",
        "Анализ воздействия на атмосферу",
        "Рекомендации по снижению выбросов",
        "Подготовка отчетной документации"
      ],
      process: [
        {
          step: 1,
          title: "Предварительное обследование",
          description: "Анализ производственных процессов и определение источников выбросов"
        },
        {
          step: 2,
          title: "Измерения и расчеты",
          description: "Проведение инструментальных измерений и расчетов валовых выбросов"
        },
        {
          step: 3,
          title: "Составление каталога",
          description: "Систематизация данных и составление каталога источников выбросов"
        },
        {
          step: 4,
          title: "Подготовка документации",
          description: "Оформление акта инвентаризации в соответствии с требованиями"
        }
      ],
      benefits: [
        "Соответствие экологическому законодательству",
        "Снижение экологических рисков",
        "Оптимизация природоохранных мероприятий",
        "Получение экологических разрешений",
        "Планирование модернизации производства"
      ],
      deliverables: [
        "Акт инвентаризации выбросов",
        "Каталог источников выбросов",
        "Схемы размещения источников",
        "Расчеты валовых выбросов",
        "Рекомендации по снижению воздействия"
      ],
      timeline: "2-4 недели",
      pricing: "от 150 000 руб.",
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
      icon: "Factory",
      tags: ["Инвентаризация", "Выбросы", "Экология", "Соответствие нормам", "Атмосферный воздух"],
      seoTitle: "Инвентаризация выбросов загрязняющих веществ - Synecology",
      seoDescription: "Профессиональная инвентаризация источников выбросов в атмосферу. Составление актов, расчеты, соответствие экологическому законодательству.",
      seoKeywords: ["инвентаризация выбросов", "экологическая документация", "источники выбросов", "экологическое соответствие"]
    },
    "pdv-standards": {
      title: "Нормативы ПДВ",
      shortTitle: "Разработка проекта нормативов допустимых выбросов загрязняющих веществ в атмосферный воздух",
      description: "Определение предельно допустимых концентраций выбросов для предприятий.",
      fullDescription: "Проект нормативов предельно допустимых выбросов (ПДВ) является основным документом, регламентирующим воздействие предприятия на атмосферный воздух. Разработка проекта ПДВ обязательна для всех предприятий, имеющих стационарные источники выбросов.",
      features: [
        "Расчет нормативов ПДВ",
        "Моделирование рассеивания",
        "Согласование с экологическими органами",
        "Разработка программы контроля",
        "Подготовка технических решений",
        "Экспертиза проектной документации"
      ],
      process: [
        {
          step: 1,
          title: "Сбор исходных данных",
          description: "Анализ технологических процессов и характеристик источников выбросов"
        },
        {
          step: 2,
          title: "Расчеты рассеивания",
          description: "Моделирование рассеивания загрязняющих веществ в атмосфере"
        },
        {
          step: 3,
          title: "Определение нормативов",
          description: "Расчет предельно допустимых выбросов для каждого источника"
        },
        {
          step: 4,
          title: "Согласование",
          description: "Прохождение экологической экспертизы и получение разрешений"
        }
      ],
      benefits: [
        "Получение разрешения на выбросы",
        "Легальное осуществление деятельности",
        "Планирование природоохранных мероприятий",
        "Контроль экологического воздействия",
        "Соответствие требованиям Росприроднадзора"
      ],
      deliverables: [
        "Проект нормативов ПДВ",
        "Расчеты рассеивания",
        "Программа производственного экологического контроля",
        "Схемы расположения источников",
        "Разрешение на выбросы"
      ],
      timeline: "1-3 месяца",
      pricing: "от 250 000 руб.",
      image: "https://images.unsplash.com/photo-1497436072909-f5e4be425942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
      icon: "Recycle",
      tags: ["ПДВ", "Нормативы", "Рассеивание", "Разрешения", "Экологический контроль"],
      seoTitle: "Разработка нормативов ПДВ - проект допустимых выбросов",
      seoDescription: "Разработка проекта нормативов предельно допустимых выбросов (ПДВ). Расчеты рассеивания, получение разрешений на выбросы.",
      seoKeywords: ["нормативы ПДВ", "предельно допустимые выбросы", "рассеивание", "экологические разрешения"]
    },
    "ecological-passport": {
      title: "Экологический паспорт",
      shortTitle: "Разработка экологического паспорта предприятия",
      description: "Составление документа, отражающего экологическое состояние и воздействие предприятия.",
      fullDescription: "Экологический паспорт предприятия — это комплексный документ, содержащий характеристику хозяйственной деятельности предприятия в аспекте воздействия производства на окружающую среду, сведения об использовании предприятием природных ресурсов и определение влияния производства на экологическую обстановку в регионе.",
      features: [
        "Анализ экологического состояния",
        "Оценка воздействия на окружающую среду",
        "Разработка мероприятий по охране природы",
        "Ведение экологической отчетности",
        "Планирование природоохранных мероприятий",
        "Мониторинг экологических показателей"
      ],
      process: [
        {
          step: 1,
          title: "Экологическое обследование",
          description: "Комплексная оценка воздействия предприятия на окружающую среду"
        },
        {
          step: 2,
          title: "Анализ данных",
          description: "Систематизация информации о природопользовании и воздействии"
        },
        {
          step: 3,
          title: "Разработка мероприятий",
          description: "Планирование природоохранных и ресурсосберегающих мероприятий"
        },
        {
          step: 4,
          title: "Оформление паспорта",
          description: "Составление экологического паспорта в соответствии с ГОСТ"
        }
      ],
      benefits: [
        "Систематизация экологической информации",
        "Планирование природоохранной деятельности",
        "Повышение экологической ответственности",
        "Улучшение имиджа предприятия",
        "Базис для получения экологических сертификатов"
      ],
      deliverables: [
        "Экологический паспорт предприятия",
        "Характеристика производственных процессов",
        "Схемы материальных потоков",
        "План природоохранных мероприятий",
        "Программа экологического мониторинга"
      ],
      timeline: "3-6 недель",
      pricing: "от 200 000 руб.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
      icon: "FileText",
      tags: ["Экологический паспорт", "Природопользование", "Экологическая документация", "ГОСТ", "Мониторинг"],
      seoTitle: "Экологический паспорт предприятия - разработка по ГОСТ",
      seoDescription: "Разработка экологического паспорта предприятия в соответствии с ГОСТ. Анализ воздействия на окружающую среду, планирование мероприятий.",
      seoKeywords: ["экологический паспорт", "экологическая документация", "природопользование", "экологический мониторинг"]
    },
    "environmental-journals": {
      title: "Ведение книг и журналов учета в области экологии",
      shortTitle: "Ведение обязательной экологической отчетности",
      description: "Ведение обязательной экологической отчетности и документооборота.",
      fullDescription: "Ведение экологической отчетности является обязательным требованием для предприятий всех форм собственности. Наши специалисты обеспечивают качественное и своевременное заполнение всех необходимых журналов и отчетов в соответствии с требованиями законодательства.",
      features: [
        "Журнал учета отходов",
        "Журнал производственного контроля",
        "Журнал учета водопотребления",
        "Отчеты о природопользовании",
        "Статистическая экологическая отчетность",
        "Восстановление данных за предыдущие периоды",
      ],
      duration: "Постоянно",
      price: "от 15 000 руб/мес",
      tags: ["отчетность", "журналы", "документооборот", "контроль"],
      image: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      seoTitle: "Ведение книг и журналов учета в области экологии - Экологическая отчетность | Synecology",
      seoDescription: "Профессиональное ведение экологической отчетности и заполнение журналов ПОД. Качественно и в срок.",
    },
    "ecological-support": {
      title: "Экологическое сопровождение предприятий",
      shortTitle: "Аутсорсинг экологических функций",
      description: "Комплексная поддержка предприятий по всем вопросам экологии и охраны окружающей среды.",
      fullDescription: "Наш специалист становится вашим специалистом и работает по всем направлениям экологии. Мы предоставляем полный спектр услуг экологического сопровождения, позволяя вашему предприятию сосредоточиться на основной деятельности.",
      features: [
        "Аутсорсинг экологических функций",
        "Консультации по всем направлениям экологии",
        "Представительство в контролирующих органах",
        "Разработка экологических программ",
        "Мониторинг изменений в законодательстве",
      ],
      duration: "Постоянно",
      price: "от 25 000 руб/мес",
      tags: ["аутсорсинг", "сопровождение", "экология", "консультации"],
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      seoTitle: "Экологическое сопровождение предприятий - Аутсорсинг экологии | Synecology",
      seoDescription: "Комплексное экологическое сопровождение предприятий. Аутсорсинг экологических функций от экспертов.",
    },
    "environmental-analysis": {
      title: "Анализ действующей системы охраны окружающей среды",
      shortTitle: "Экологический аудит предприятия",
      description: "Комплексный анализ соответствия деятельности предприятия экологическим требованиям.",
      fullDescription: "Собственники, предпочитающие видеть проблему в целом и желающие улучшить экологический контроль, часто обращаются к нам за такой услугой. Проводится комплексный анализ всей документации и деятельности предприятия.",
      features: [
        "Экологический аудит предприятия",
        "Оценка соответствия законодательству",
        "Анализ экологических рисков",
        "Разработка корректирующих мероприятий",
        "Подготовка отчетов и рекомендаций",
      ],
      duration: "1-2 месяца",
      price: "от 50 000 руб",
      tags: ["аудит", "анализ", "оценка", "соответствие"],
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      seoTitle: "Анализ системы охраны окружающей среды - Экологический аудит | Synecology",
      seoDescription: "Комплексный анализ и аудит системы охраны окружающей среды на предприятии. Оценка соответствия требованиям.",
    },
    "instruction-documentation": {
      title: "Разработка документации по инструктажам",
      shortTitle: "Документация для экологических инструктажей",
      description: "Создание всей необходимой документации для проведения экологических инструктажей.",
      fullDescription: "Мы оформляем и предоставляем все необходимые документы для проведения инструктажей по охране окружающей среды. Все документы разрабатываются с учетом специфики деятельности заказчика.",
      features: [
        "Положение об организации проведения инструктажей",
        "Программа инструктажа по экологии",
        "Программа повторного инструктажа",
        "Приказы на утверждение и введение документации",
        "Приказы на проведение инструктажей и журналы",
      ],
      duration: "2-3 недели",
      price: "от 20 000 руб",
      tags: ["инструктажи", "документация", "программы", "обучение"],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      seoTitle: "Разработка документации по экологическим инструктажам | Synecology",
      seoDescription: "Профессиональная разработка документации для проведения экологических инструктажей на предприятии.",
    },
    "production-monitoring": {
      title: "Разработка инструкций по проведению ПН (ПЭК)",
      shortTitle: "Инструкции по производственному экологическому контролю",
      description: "Разработка документов, регламентирующих проведение производственных наблюдений.",
      fullDescription: "Мы разрабатываем все документы, регламентирующие проведение производственных наблюдений (производственного экологического контроля) в области охраны окружающей среды и рационального использования ресурсов.",
      features: [
        "Инструкция по осуществлению производственных наблюдений",
        "Планы мероприятий и планы-графики ПН (ПЭК)",
        "Приказы на утверждение документации",
        "Отчеты о проведении ПН (ПЭК)",
        "Учет специфики деятельности заказчика",
      ],
      duration: "3-4 недели",
      price: "от 30 000 руб",
      tags: ["ПН", "ПЭК", "контроль", "мониторинг", "наблюдения"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      seoTitle: "Разработка инструкций по ПН (ПЭК) - Производственный экологический контроль | Synecology",
      seoDescription: "Профессиональная разработка инструкций и документации по производственному экологическому контролю.",
    },
  };

  useEffect(() => {
    if (slug && services[slug as keyof typeof services]) {
      setService(services[slug as keyof typeof services]);
      // SEO оптимизация
      const serviceData = services[slug as keyof typeof services];
      document.title = serviceData.seoTitle;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', serviceData.seoDescription);
      }
    }
  }, [slug]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: service?.title,
        text: service?.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (!service) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <p className="text-xl text-dark-slate">Услуга не найдена</p>
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
              href="/services"
              className="inline-flex items-center gap-2 text-sea-green font-semibold hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Вернуться к услугам
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
                <div className="w-12 h-12 bg-sea-green/20 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-sea-green" />
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
                {service.title}
              </motion.h1>

              <motion.p
                className="text-xl text-dark-slate/70 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {service.fullDescription}
              </motion.p>

              <motion.div
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sea-green">
                    <Clock className="w-5 h-5" />
                    <span className="font-semibold">Сроки выполнения</span>
                  </div>
                  <p className="text-dark-slate text-lg">{service.timeline}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sea-green">
                    <DollarSign className="w-5 h-5" />
                    <span className="font-semibold">Стоимость</span>
                  </div>
                  <p className="text-dark-slate text-lg">{service.pricing}</p>
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
                src={service.image}
                alt={service.title}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-off-white to-soft-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-dark-slate mb-4">
              Что включает услуга
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature: string, index: number) => (
              <GlassmorphicCard key={feature} delay={index * 0.1}>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-sea-green flex-shrink-0" />
                  <span className="text-dark-slate font-medium">{feature}</span>
                </div>
              </GlassmorphicCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-dark-slate mb-4">
              Этапы выполнения работ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step: any, index: number) => (
              <GlassmorphicCard key={step.step} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-sea-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-dark-slate mb-3">
                    {step.title}
                  </h3>
                  <p className="text-dark-slate/70 text-sm">
                    {step.description}
                  </p>
                </div>
              </GlassmorphicCard>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Deliverables */}
      <section className="py-20 bg-gradient-to-b from-soft-blue/20 to-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <GlassmorphicCard>
              <h3 className="text-2xl font-heading font-bold text-dark-slate mb-6">
                Преимущества
              </h3>
              <div className="space-y-4">
                {service.benefits.map((benefit: string, index: number) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-sea-green flex-shrink-0" />
                    <span className="text-dark-slate">{benefit}</span>
                  </div>
                ))}
              </div>
            </GlassmorphicCard>

            <GlassmorphicCard>
              <h3 className="text-2xl font-heading font-bold text-dark-slate mb-6">
                Результаты работы
              </h3>
              <div className="space-y-4">
                {service.deliverables.map((deliverable: string, index: number) => (
                  <div key={index} className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-sea-green flex-shrink-0" />
                    <span className="text-dark-slate">{deliverable}</span>
                  </div>
                ))}
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-heading font-bold text-dark-slate mb-6">
              Ключевые направления
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {service.tags.map((tag: string) => (
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
      <section className="py-20 bg-gradient-to-b from-off-white to-soft-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassmorphicCard className="text-center">
            <h2 className="text-3xl font-heading font-bold text-dark-slate mb-6">
              Заказать услугу
            </h2>
            <p className="text-xl text-dark-slate/70 mb-8 max-w-3xl mx-auto">
              Получите профессиональную консультацию и расчет стоимости услуги для вашего предприятия.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-sea-green text-white px-8 py-4 rounded-full font-semibold hover:bg-sea-green/90 transition-all duration-300 inline-flex items-center gap-2"
              >
                <ArrowRight className="w-5 h-5" />
                Получить консультацию
              </Link>
              <Link
                href="/case-studies"
                className="glassmorphic glassmorphic-hover px-8 py-4 rounded-full text-sea-green font-semibold inline-flex items-center gap-2"
              >
                Посмотреть примеры работ
              </Link>
            </div>
          </GlassmorphicCard>
        </div>
      </section>
    </div>
  );
}