import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowLeft, Mail, Phone, MapPin, Clock, Award, FileText, ArrowRight, Quote, X } from "lucide-react";
import OrganicBlob from "@/components/OrganicBlob";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export default function TeamMember() {
  const { slug } = useParams();
  const [member, setMember] = useState<any>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);

  const teamMembers = {
    "egor-koryakin": {
      name: "Корякин Егор Дмитриевич",
      role: "Директор",
      quote: "Экология — это не препятствие для бизнеса, а инструмент для его защиты и развития. Моя задача — показать это каждому клиенту.",
      bio: "В Synecology я отвечаю за стратегическое развитие компании и контроль качества всех экологических проектов. Мой практический опыт работы в системе Минприроды позволяет мне понимать требования с обеих сторон — как регулятора, так и бизнеса.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      expertise: [
        "Экологическое законодательство",
        "Проекты системы Минприроды", 
        "Стратегическое планирование",
        "Управление экологическими проектами",
        "Согласование с государственными органами"
      ],
      approach: "Я убеждена, что лучший результат рождается в партнерстве. Поэтому никогда не работаю по шаблону. Прежде чем приступить к разработке документации, я всегда глубоко вникаю в специфику бизнеса клиента, чтобы понять не только его текущие задачи, но и планы на будущее. Это позволяет создавать решения, которые не просто соответствуют закону сегодня, но и закладывают прочный фундамент для роста компании.",
      keyProjects: [
        {
          title: "Экологическое сопровождение производства спешлти кофе",
          role: "Главный эколог проекта",
          description: "Разработка полного комплекса экологической документации для производства премиального кофе с получением международных сертификатов качества",
          link: "/case-studies/specialty-coffee"
        }
      ],
      articles: [
        {
          title: "Экосертификат для бизнеса в Беларуси: как подтвердить «зеленый» статус",
          link: "/blog/eco-certification-business-belarus"
        },
        {
          title: "Экологическое сопровождение: стратегии минимизации рисков",
          link: "/blog/ecological-support"
        }
      ],
      contact: {
        email: "egor@synecology.com",
        phone: "+375 29 123-45-67"
      },
      experience: "5+ лет",
      education: "Магистр экологии и природопользования, Белорусский государственный университет",
      certificates: [
        {
          title: "ISO 14001 Lead Auditor",
          issuer: "International Register of Certificated Auditors",
          year: "2019",
          image: "https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
        },
        {
          title: "Сертификат эколога-эксперта",
          issuer: "Министерство природных ресурсов РБ",
          year: "2018",
          image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
        },
        {
          title: "Green Building Certification",
          issuer: "LEED Green Associate",
          year: "2020",
          image: "https://images.unsplash.com/photo-1616077168079-7e6f17846f44?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
        },
        {
          title: "Сертификат специалиста по управлению качеством окружающей среды",
          issuer: "Европейская ассоциация экологов",
          year: "2021",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
        }
      ]
    },
    "inna-voloshko": {
      name: "Волошко Инна Владимировна", 
      role: "Коммерческий директор",
      quote: "Успешный бизнес начинается с правильно выстроенных процессов. Моя задача — сделать сотрудничество с нами максимально комфортным и эффективным.",
      bio: "В Synecology я отвечаю за коммерческое развитие и обеспечение высокого качества обслуживания клиентов. Мой многолетний опыт в управлении позволяет выстраивать долгосрочные партнерские отношения с предприятиями различных отраслей.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c56f84f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      expertise: [
        "Коммерческая деятельность",
        "Управление проектами", 
        "Развитие бизнеса",
        "Клиентский сервис",
        "Оптимизация бизнес-процессов",
        "Стратегическое планирование"
      ],
      approach: "Мой принцип — детальность и системность. Каждый технологический процесс клиента я изучаю досконально, чтобы найти не только соответствие нормативам, но и возможности для оптимизации. Часто удается значительно снизить экологические платежи, просто грамотно пересчитав выбросы или предложив техническое решение.",
      keyProjects: [],
      articles: [
        {
          title: "Выбросы в атмосферу в Беларуси: как легально работать и не платить лишнего",
          link: "/blog/atmospheric-emissions-belarus"
        }
      ],
      contact: {
        email: "inna@synecology.com", 
        phone: "+375 29 234-56-78"
      },
      experience: "10+ лет",
      education: "Магистр экономики и управления, Белорусский экономический университет",
      certificates: [
        {
          title: "Инженер-эколог",
          issuer: "Белорусская инженерная ассоциация",
          year: "2017",
          image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
        },
        {
          title: "Эксперт по ПДВ",
          issuer: "Минприроды РБ",
          year: "2019",
          image: "https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
        }
      ]
    },
    "emily-johnson": {
      name: "Эмили Джонсон",
      role: "Старший эколог",
      quote: "Природа не прощает ошибок, поэтому в экологии важна абсолютная точность — от расчетов до документооборота.",
      bio: "В Synecology я специализируюсь на оценке воздействия на окружающую среду и восстановлении экосистем. Мой опыт в морской биологии помогает комплексно подходить к решению экологических задач предприятий, особенно связанных с водными ресурсами.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      expertise: [
        "Оценка воздействия на окружающую среду (ОВОС)",
        "Восстановление экосистем и биоразнообразия",
        "Экологический мониторинг водных объектов",
        "Разработка программ экологического менеджмента",
        "Биологическая оценка территорий",
        "Морская и пресноводная экология"
      ],
      approach: "Каждая экосистема уникальна, как и каждое предприятие. Я всегда начинаю с тщательного изучения природного окружения объекта и только потом разрабатываю меры по минимизации воздействия. Мой подход позволяет не только соблюсти требования законодательства, но и реально сохранить природную ценность территории.",
      keyProjects: [
        {
          title: "Восстановление водно-болотных угодий",
          role: "Ведущий эколог",
          description: "Комплексный проект восстановления 500 акров водно-болотных угодий с возвращением редких видов",
          link: "/case-studies/wetland-restoration"
        },
        {
          title: "ОВОС для промышленного комплекса",
          role: "Старший специалист по ОВОС",
          description: "Оценка экологического воздействия с разработкой мер компенсации",
          link: "/case-studies/industrial-impact-assessment"
        }
      ],
      articles: [
        {
          title: "Биоразнообразие в промышленных зонах: как совместить развитие и сохранение",
          link: "/blog/biodiversity-industrial"
        }
      ],
      contact: {
        email: "emily@synecology.com",
        phone: "+375 29 345-67-89"
      },
      experience: "10+ лет",
      education: "PhD в области морской биологии, МГУ",
      certificates: [
        {
          title: "Marine Biology Expert",
          issuer: "International Marine Biology Association",
          year: "2018",
          image: "https://images.unsplash.com/photo-1616077168079-7e6f17846f44?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
        },
        {
          title: "ОВОС Специалист",
          issuer: "Минприроды РБ",
          year: "2020",
          image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
        }
      ]
    },
    "david-park": {
      name: "Дэвид Парк",
      role: "Менеджер водных ресурсов", 
      quote: "Чистая вода — основа жизни. Моя задача — обеспечить, чтобы деятельность предприятий не нарушала этот баланс.",
      bio: "В Synecology я отвечаю за все проекты, связанные с водными ресурсами — от разработки нормативов водопользования до проектирования систем очистки сточных вод. Мой гидрогеологический опыт позволяет находить оптимальные решения даже для самых сложных задач.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      expertise: [
        "Разработка нормативов водопользования",
        "Проектирование систем очистки сточных вод",
        "Гидрогеологические изыскания",
        "Оценка качества водных объектов",
        "Экологический мониторинг водных ресурсов",
        "Системы оборотного водоснабжения"
      ],
      approach: "Вода — это не просто ресурс, это сложная система. При разработке проектов я всегда учитываю не только текущие потребности предприятия, но и долгосрочное воздействие на водоносные горизонты и поверхностные воды. Такой подход позволяет создавать устойчивые решения, которые служат десятилетиями.",
      keyProjects: [
        {
          title: "Система очистки для пищевого производства",
          role: "Ведущий инженер проекта",
          description: "Разработка и внедрение замкнутой системы водооборота с 95% очисткой стоков",
          link: "/case-studies/food-water-treatment"
        },
        {
          title: "Оптимизация водопользования химического завода",
          role: "Главный гидролог проекта", 
          description: "Снижение водопотребления на 60% через внедрение системы рециркуляции",
          link: "/case-studies/chemical-water-optimization"
        }
      ],
      articles: [
        {
          title: "Управление водными ресурсами предприятия: современные подходы и технологии",
          link: "/blog/water-resources-management"
        }
      ],
      contact: {
        email: "david@synecology.com",
        phone: "+375 29 456-78-90"
      },
      experience: "14+ лет",
      education: "Магистр гидрогеологии, БГУ",
      certificates: [
        {
          title: "Гидрогеолог-эксперт",
          issuer: "Белорусское геологическое общество",
          year: "2016",
          image: "https://images.unsplash.com/photo-1554774853-719586f82d77?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
        },
        {
          title: "Water Treatment Specialist",
          issuer: "European Water Association",
          year: "2021",
          image: "https://images.unsplash.com/photo-1616077168079-7e6f17846f44?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
        }
      ]
    }
  };

  useEffect(() => {
    if (slug) {
      setMember(teamMembers[slug as keyof typeof teamMembers] || null);
    }
  }, [slug]);

  if (!member) {
    return (
      <div className="pt-24 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-heading font-bold text-dark-slate mb-4">
            Специалист не найден
          </h1>
          <Link href="/about" className="text-sea-green hover:underline">
            ← Вернуться к команде
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
              href="/about"
              className="inline-flex items-center gap-2 text-dark-slate/70 hover:text-sea-green transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Вернуться к команде
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-80 h-80 object-cover rounded-3xl shadow-2xl mx-auto lg:mx-0"
                />

              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl lg:text-6xl font-heading font-bold text-dark-slate mb-4">
                {member.name}
              </h1>
              <p className="text-2xl text-sea-green font-semibold mb-6">
                {member.role}
              </p>

              <div className="glassmorphic p-6 rounded-2xl mb-8">
                <Quote className="w-8 h-8 text-sea-green/50 mb-4" />
                <p className="text-lg text-dark-slate italic leading-relaxed">
                  {member.quote}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="glassmorphic p-4 rounded-xl">
                  <Mail className="w-5 h-5 text-sea-green mb-2" />
                  <p className="text-sm text-dark-slate/70">Email</p>
                  <a href={`mailto:${member.contact.email}`} className="text-dark-slate font-medium hover:text-sea-green transition-colors">
                    {member.contact.email}
                  </a>
                </div>
                <div className="glassmorphic p-4 rounded-xl">
                  <Phone className="w-5 h-5 text-sea-green mb-2" />
                  <p className="text-sm text-dark-slate/70">Телефон</p>
                  <a href={`tel:${member.contact.phone}`} className="text-dark-slate font-medium hover:text-sea-green transition-colors">
                    {member.contact.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialization Section */}
      <section className="py-20 bg-gradient-to-b from-off-white to-soft-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold text-dark-slate mb-8 text-center">
              Моя <span className="text-sea-green">специализация</span>
            </h2>

            <GlassmorphicCard className="mb-8">
              <p className="text-lg text-dark-slate/80 leading-relaxed mb-6">
                {member.bio}
              </p>

              <h3 className="text-2xl font-heading font-bold text-dark-slate mb-4">
                Ключевые компетенции:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {member.expertise.map((skill: string, index: number) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-sea-green rounded-full flex-shrink-0" />
                    <span className="text-dark-slate">{skill}</span>
                  </div>
                ))}
              </div>
            </GlassmorphicCard>
          </motion.div>
        </div>
      </section>

      {/* Certificates Gallery Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold text-dark-slate mb-8 text-center">
              Мои <span className="text-sea-green">сертификаты</span>
            </h2>

            {member.certificates && member.certificates.length > 3 ? (
              <Carousel 
                className="w-full max-w-7xl mx-auto"
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent className="-ml-4">
                  {member.certificates.map((certificate: any, index: number) => (
                    <CarouselItem key={certificate.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <GlassmorphicCard delay={index * 0.1} className="h-full flex flex-col">
                        <div 
                          className="aspect-[4/3] mb-4 overflow-hidden rounded-xl cursor-pointer flex-shrink-0"
                          onClick={() => setSelectedCertificate(certificate)}
                        >
                          <img
                            src={certificate.image}
                            alt={certificate.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 flex flex-col">
                          <h3 className="text-lg font-semibold text-dark-slate mb-2 min-h-[3.5rem] line-clamp-2">
                            {certificate.title}
                          </h3>
                          <p className="text-sea-green font-medium mb-2 min-h-[1.5rem]">
                            {certificate.issuer}
                          </p>
                          <p className="text-sm text-dark-slate/70 mt-auto">
                            {certificate.year}
                          </p>
                        </div>
                      </GlassmorphicCard>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-4 md:-left-12" />
                <CarouselNext className="-right-4 md:-right-12" />
              </Carousel>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {member.certificates?.map((certificate: any, index: number) => (
                  <GlassmorphicCard key={certificate.title} delay={index * 0.1} className="h-full flex flex-col">
                    <div 
                      className="aspect-[4/3] mb-4 overflow-hidden rounded-xl cursor-pointer flex-shrink-0"
                      onClick={() => setSelectedCertificate(certificate)}
                    >
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-lg font-semibold text-dark-slate mb-2 min-h-[3.5rem] line-clamp-2">
                        {certificate.title}
                      </h3>
                      <p className="text-sea-green font-medium mb-2 min-h-[1.5rem]">
                        {certificate.issuer}
                      </p>
                      <p className="text-sm text-dark-slate/70 mt-auto">
                        {certificate.year}
                      </p>
                    </div>
                  </GlassmorphicCard>
                )) || (
                  <div className="col-span-full text-center text-dark-slate/70">
                    <p>Галерея сертификатов скоро будет дополнена</p>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Key Projects Section - только если есть проекты */}
      {member.keyProjects && member.keyProjects.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-off-white to-soft-blue/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-heading font-bold text-dark-slate mb-8 text-center">
                Проекты, которыми <span className="text-sea-green">я горжусь</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {member.keyProjects.map((project: any, index: number) => (
                  <GlassmorphicCard key={project.title} delay={index * 0.1}>
                    <h3 className="text-xl font-heading font-bold text-dark-slate mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sea-green font-semibold mb-3">
                      {project.role}
                    </p>
                    <p className="text-dark-slate/70 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <Link
                      href={project.link}
                      className="inline-flex items-center gap-2 text-sea-green font-semibold hover:text-sea-green/80 transition-colors"
                    >
                      Узнать подробнее <ArrowRight className="w-4 h-4" />
                    </Link>
                  </GlassmorphicCard>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold text-dark-slate mb-8 text-center">
              Делюсь <span className="text-sea-green">опытом</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {member.articles.map((article: any, index: number) => (
                <GlassmorphicCard key={article.title} delay={index * 0.1}>
                  <div className="flex items-start gap-4">
                    <FileText className="w-6 h-6 text-sea-green flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-dark-slate mb-2">
                        {article.title}
                      </h3>
                      <Link
                        href={article.link}
                        className="text-sea-green font-medium hover:text-sea-green/80 transition-colors"
                      >
                        Читать статью →
                      </Link>
                    </div>
                  </div>
                </GlassmorphicCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-off-white to-soft-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassmorphicCard className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-6"
              />
              <h2 className="text-4xl font-heading font-bold text-dark-slate mb-6">
                Готовы обсудить <span className="text-sea-green">ваш проект?</span>
              </h2>
              <p className="text-xl text-dark-slate/70 mb-8 max-w-3xl mx-auto">
                Свяжитесь со мной или оставьте заявку, и мы вместе найдем лучшее решение для вашей задачи.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${member.contact.email}`}
                  className="bg-sea-green text-white px-8 py-4 rounded-full font-semibold hover:bg-sea-green/90 transition-all duration-300 inline-flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Связаться со мной
                </a>
                <Link
                  href="/contact"
                  className="glassmorphic glassmorphic-hover px-8 py-4 rounded-full text-sea-green font-semibold inline-flex items-center gap-2"
                >
                  <ArrowRight className="w-5 h-5" />
                  Оставить заявку
                </Link>
              </div>
            </motion.div>
          </GlassmorphicCard>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 overflow-y-auto"
          onClick={() => setSelectedCertificate(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute -top-2 -right-2 md:-top-12 md:right-0 bg-white/10 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none rounded-full p-2 md:p-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <div className="glassmorphic p-4 md:p-6 rounded-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-start lg:items-center">
                <div className="aspect-[4/3] overflow-hidden rounded-xl order-2 lg:order-1">
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-dark-slate mb-3 md:mb-4">
                    {selectedCertificate.title}
                  </h3>
                  <p className="text-lg md:text-xl text-sea-green font-semibold mb-3 md:mb-4">
                    {selectedCertificate.issuer}
                  </p>
                  <p className="text-base md:text-lg text-dark-slate/70 mb-4 md:mb-6">
                    Год получения: {selectedCertificate.year}
                  </p>
                  <button
                    onClick={() => setSelectedCertificate(null)}
                    className="w-full md:w-auto bg-sea-green text-white px-6 py-3 rounded-full font-semibold hover:bg-sea-green/90 transition-colors"
                  >
                    Закрыть
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}