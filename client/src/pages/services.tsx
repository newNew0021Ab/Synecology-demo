
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Factory, Recycle, FileText, Droplets, Trash2, ClipboardList, ArrowRight, CheckCircle, X } from "lucide-react";
import OrganicBlob from "@/components/OrganicBlob";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import { useEffect, useState } from "react";

export default function Services() {
  const [location] = useLocation();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [filteredServices, setFilteredServices] = useState<typeof services>([]);

  const services = [
    {
      icon: Factory,
      title: "Инвентаризация выбросов",
      description: "Комплексная инвентаризация источников выбросов для соблюдения экологических нормативов.",
      features: [
        "Инвентаризация источников выбросов",
        "Расчет валовых выбросов",
        "Анализ воздействия на атмосферу",
        "Рекомендации по снижению выбросов",
      ],
      image: "https://images.unsplash.com/photo-1688763699666-88cef43ac4e4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Инвентаризация", "Выбросы", "ЭкоНиП", "Минприроды", "Атмосферный воздух"],
      slug: "emissions-inventory"
    },
    {
      icon: Recycle,
      title: "Нормативы ПДВ",
      description: "Определение предельно допустимых концентраций выбросов для предприятий.",
      features: [
        "Расчет нормативов ПДВ",
        "Согласование с органами Минприроды",
        "Подготовка технических решений",
      ],
      image: "https://images.unsplash.com/photo-1695391533533-fcad0ac7b8ae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["НДВ", "Нормативы", "Разрешения", "ЦГиЭ", "Минприроды"],
      slug: "pdv-standards"
    },
    {
      icon: FileText,
      title: "Экологический паспорт",
      description: "Составление документа, отражающего экологическое состояние и воздействие предприятия.",
      features: [
        "Анализ экологического состояния",
        "Оценка воздействия на окружающую среду",
        "Заполнение всех разделов согласно ТКП 17.02-08-2012",
        "Ведение экологической отчетности",
        "Консультации по обновлению паспорта",
      ],
      image: "https://images.unsplash.com/photo-1693328397193-b858f1b38c60?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Экологический паспорт", "ТКП", "Природопользование", "Документация", "Экологическое право"],
      slug: "ecological-passport"
    },
    {
      icon: Droplets,
      title: "Паспорт газоочистной установки",
      description: "Техническая документация для систем очистки промышленных газов.",
      features: [
        "Техническое описание установки",
        "Расчет эффективности очистки",
        "Режимы работы оборудования",
        "План технического обслуживания",
        "Контроль параметров очистки",
      ],
      image: "https://images.unsplash.com/photo-1745921180154-084875e95722?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
      tags: ["ГОУ", "Газоочистка", "Паспорт", "Регистрация", "Оборудование"],
      slug: "gas-treatment-passport"
    },
    {
      icon: Trash2,
      title: "Инструкции по обращению с отходами",
      description: "Правила и процедуры безопасного обращения с промышленными отходами.",
      features: [
        "Классификация отходов",
        "Правила сбора и хранения",
        "Процедуры транспортировки",
        "Методы утилизации и переработки",
        "Контроль за обращением с отходами",
      ],
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Отходы", "Инструкция", "Нормативы", "Согласование", "ПОД"],
      slug: "waste-management-instructions"
    },
    {
      icon: ClipboardList,
      title: "Ведение книг и журналов учета в области экологии",
      description: "Ведение обязательной экологической отчетности и документооборота.",
      features: [
        "Журнал учета отходов",
        "Журнал производственного контроля",
        "Журнал учета водопотребления",
        "Отчеты о природопользовании",
        "Статистическая экологическая отчетность",
        "Восстановление данных за предыдущие периоды",
      ],
      image: "https://plus.unsplash.com/premium_photo-1682379784551-f36d725abf3f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D &auto=format&fit=crop&w=800&h=600",
      tags: ["Отчетность", "Журналы", "ПОД", "Учет", "Налог"],
      slug: "environmental-journals"
    },
    {
      icon: FileText,
      title: "Экологическое сопровождение предприятий",
      description: "Комплексная поддержка предприятий по всем вопросам экологии и охраны окружающей среды.",
      features: [
        "Аутсорсинг экологических функций",
        "Консультации по всем направлениям экологии",
        "Представительство в контролирующих органах",
        "Разработка экологических программ",
        "Мониторинг изменений в законодательстве",
      ],
      image: "https://images.unsplash.com/photo-1752159400890-d906038f1b35?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
      tags: ["Аутсорсинг", "Сопровождение", "Эколог", "Консультации", "Отчетность"],
      slug: "ecological-support"
    },
    {
      icon: Factory,
      title: "Анализ действующей системы охраны окружающей среды",
      description: "Комплексный анализ соответствия деятельности предприятия экологическим требованиям.",
      features: [
        "Экологический аудит предприятия",
        "Оценка соответствия законодательству",
        "Анализ экологических рисков",
        "Разработка корректирующих мероприятий",
        "Подготовка отчетов и рекомендаций",
      ],
      image: "https://images.unsplash.com/photo-1625384827802-1118262acfa6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Аудит", "Анализ", "Проверка", "Нарушения", "Минприроды"],
      slug: "environmental-analysis"
    },
    {
      icon: FileText,
      title: "Разработка документации по инструктажам",
      description: "Создание всей необходимой документации для проведения экологических инструктажей.",
      features: [
        "Положение об организации проведения инструктажей",
        "Программа инструктажа по экологии",
        "Программа повторного инструктажа",
        "Приказы на утверждение и введение документации",
        "Приказы на проведение инструктажей и журналы",
      ],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      tags: ["Инструктажи", "ПЭК", "Документация", "Обучение", "ООС"],
      slug: "instruction-documentation"
    },
    {
      icon: ClipboardList,
      title: "Разработка инструкций по проведению ПН (ПЭК)",
      description: "Разработка документов, регламентирующих проведение производственных наблюдений.",
      features: [
        "Инструкция по осуществлению производственных наблюдений",
        "Планы мероприятий и планы-графики ПН (ПЭК)",
        "Приказы на утверждение документации",
        "Отчеты о проведении ПН (ПЭК)",
        "Учет специфики деятельности заказчика",
      ],
      image: "https://images.unsplash.com/photo-1737502483541-92e91801cfaf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600",
      tags: ["ПЭК", "Контроль", "Мониторинг", "ЭкоНиП", "Наблюдения"],
      slug: "production-monitoring"
    },
  ];

  // Извлекаем все уникальные теги
  const allTags = Array.from(new Set(services.flatMap(service => service.tags)));
  
  // Самые популярные теги
  const popularTags = ["Минприроды", "Документация", "Отчетность", "ПЭК", "Нормативы", "Экологическое право"];

  // Функция для применения фильтра
  const applyFilter = (tag: string | null) => {
    if (!tag) {
      setFilteredServices(services);
      setActiveFilter(null);
    } else {
      const filtered = services.filter(service => 
        service.tags.some(serviceTag => serviceTag.toLowerCase() === tag.toLowerCase())
      );
      setFilteredServices(filtered);
      setActiveFilter(tag);
    }
  };

  // Инициализация фильтра при загрузке страницы
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tagParam = urlParams.get('tag');
    
    if (tagParam) {
      applyFilter(tagParam);
    } else {
      applyFilter(null);
    }
  }, []);

  // Следим за изменениями в URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tagParam = urlParams.get('tag');
    
    if (tagParam !== activeFilter) {
      applyFilter(tagParam);
    }
  }, [location]);

  const handleTagClick = (tag: string) => {
    const newUrl = `/services?tag=${encodeURIComponent(tag)}`;
    window.history.pushState({}, '', newUrl);
    applyFilter(tag);
  };

  const clearFilter = () => {
    window.history.pushState({}, '', '/services');
    applyFilter(null);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <OrganicBlob className="absolute top-10 right-10 opacity-15" size="lg" />
        <OrganicBlob className="absolute bottom-10 left-10 opacity-10" size="md" delay={2} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl lg:text-6xl font-heading font-bold text-dark-slate mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Наши <span className="text-sea-green">услуги</span>
            </motion.h1>
            <motion.p
              className="text-xl text-dark-slate/70 max-w-4xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              От разработки всей экологической документации «под ключ» до полного сопровождения при проверках. Мы не просто готовим бумаги — мы строим систему, которая гарантирует соответствие закону и защищает ваш бизнес от штрафов. Доверьте нам бюрократию, чтобы вы могли сосредоточиться на росте.
            </motion.p>

            {/* Popular Tags */}
            {!activeFilter && (
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <h3 className="text-lg font-heading font-semibold text-dark-slate mb-4">Популярные категории:</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {popularTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      className="glassmorphic glassmorphic-hover px-4 py-2 rounded-full text-sea-green font-medium hover:scale-105 transition-all duration-300 border border-sea-green/20 cursor-pointer"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Active Filter Display */}
            {activeFilter && (
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-3 bg-sea-green/10 border border-sea-green/30 rounded-full px-6 py-3">
                  <span className="text-sea-green font-medium">Фильтр: {activeFilter}</span>
                  <button
                    onClick={clearFilter}
                    className="text-sea-green hover:text-sea-green/70 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-dark-slate/60 mt-2">Найдено услуг: {filteredServices.length}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {filteredServices.map((service, index) => (
              <motion.div
                key={`${service.slug}-${activeFilter}`}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <GlassmorphicCard>
                    <div className="flex flex-col h-full">
                      <div className="w-16 h-16 bg-sea-green/20 rounded-2xl flex items-center justify-center mb-6">
                        <service.icon className="w-8 h-8 text-sea-green" />
                      </div>
                      <h2 className="text-3xl font-heading font-bold text-dark-slate mb-4">
                        {service.title}
                      </h2>
                      <p className="text-lg text-dark-slate/70 mb-6">{service.description}</p>
                      <div className="space-y-3 mb-8 flex-grow">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-sea-green flex-shrink-0" />
                            <span className="text-dark-slate/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                        <Link
                          href={`/services/${service.slug}`}
                          className="btn-secondary"
                        >
                          Подробнее
                        </Link>
                        <Link
                          href="/contact"
                          className="btn-primary"
                        >
                          <ArrowRight className="w-4 h-4" />
                          Заказать
                        </Link>
                      </div>
                    </div>
                  </GlassmorphicCard>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="glassmorphic rounded-3xl p-8 transform hover:scale-105 transition-transform duration-500 cursor-pointer"
                       onClick={() => window.location.href = `/services/${service.slug}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-xl shadow-lg w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-heading font-bold text-dark-slate mb-4">
                  Услуги не найдены
                </h3>
                <p className="text-dark-slate/70 mb-6">
                  По выбранному фильтру "{activeFilter}" услуги не найдены.
                </p>
                <button
                  onClick={clearFilter}
                  className="btn-primary"
                >
                  Показать все услуги
                </button>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <OrganicBlob className="absolute top-10 left-10 opacity-10" size="md" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassmorphicCard className="text-center">
            <motion.h2
              className="text-4xl font-heading font-bold text-dark-slate mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Нашли то,<span className="text-sea-green">что искали?</span>
            </motion.h2>
            <motion.p
              className="text-xl text-dark-slate/70 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Выбор правильной услуги — важный шаг. Если у вас остались вопросы или вы не уверены, что подойдет именно вам, — просто свяжитесь с нами. Мы поможем определить оптимальное решение без каких-либо обязательств.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
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
                Истории успеха
              </Link>
            </motion.div>
          </GlassmorphicCard>
        </div>
      </section>
    </div>
  );
}
