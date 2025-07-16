import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowLeft, Mail, Phone, MapPin, Clock, Award, FileText, ArrowRight, Quote, X } from "lucide-react";
import OrganicBlob from "@/components/OrganicBlob";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import { useEffect, useState } from "react";

export default function TeamMember() {
  const { slug } = useParams();
  const [member, setMember] = useState<any>(null);

  const teamData = {
    "sara-chen": {
      name: "Др. Сара Чен",
      role: "Основатель и генеральный директор",
      quote: "Экология — это не препятствие для бизнеса, а возможность создать устойчивое будущее.",
      bio: "Эколог с более чем 15-летним опытом консультирования по устойчивости и разработки политики.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      expertise: ["Экологическая политика", "Климатология", "Стратегическое планирование", "Устойчивое развитие", "Консалтинг"],
      achievements: [
        "Разработала экологическую стратегию для 50+ компаний",
        "Автор 30+ научных публикаций по экологии",
        "Участие в разработке национальной экологической политики",
        "Лауреат премии 'Эколог года' 2022"
      ],
      experience: "15+ лет",
      education: "PhD в области экологии, Гарвардский университет",
      contact: {
        email: "sara@synecology.com",
        phone: "+375 29 123-45-67"
      }
    },
    "michael-rodriguez": {
      name: "Михаил Родригес",
      role: "Директор по операциям", 
      quote: "Инновации в области экологии — это ключ к процветанию современного бизнеса.",
      bio: "Инженерный лидер, специализирующийся на системах возобновляемой энергии и развитии устойчивой инфраструктуры.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      expertise: ["Возобновляемая энергия", "Управление проектами", "Системная инженерия", "Энергоэффективность", "Автоматизация"],
      achievements: [
        "Руководил проектами по внедрению возобновляемых источников энергии на 40+ предприятиях",
        "Сертифицированный специалист по управлению проектами (PMP)",
        "Автор патента на систему энергосбережения",
        "Снижение энергозатрат клиентов в среднем на 35%"
      ],
      experience: "12+ лет",
      education: "Магистр инженерии, Белорусский национальный технический университет",
      contact: {
        email: "michael@synecology.com",
        phone: "+375 29 234-56-78"
      }
    },
    "emily-johnson": {
      name: "Др. Эмили Джонсон",
      role: "Старший эколог",
      quote: "Каждая экосистема уникальна, и мой подход к её сохранению всегда индивидуален.",
      bio: "Морской биолог и специалист по охране природы с экспертизой в восстановлении экосистем и оценке биоразнообразия.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      expertise: ["Морская биология", "Восстановление экосистем", "Оценка биоразнообразия", "Экомониторинг", "Исследования"],
      achievements: [
        "Провела оценку биоразнообразия для 25+ крупных проектов",
        "Участие в восстановлении 15+ экосистем",
        "Автор 45+ научных работ по морской биологии",
        "Международный эксперт по сохранению водных ресурсов"
      ],
      experience: "10+ лет",
      education: "PhD в области морской биологии, МГУ",
      contact: {
        email: "emily@synecology.com",
        phone: "+375 29 345-67-89"
      }
    },
    "david-park": {
      name: "Дэвид Парк",
      role: "Менеджер водных ресурсов", 
      quote: "Чистая вода — основа жизни. Моя задача — обеспечить, чтобы каждое предприятие использовало этот ресурс ответственно.",
      bio: "Гидрогеолог с обширным опытом в системах очистки воды и решениях устойчивого управления водными ресурсами.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      expertise: ["Водные ресурсы", "Гидрогеология", "Системы очистки", "Водоподготовка", "Экогидрология"],
      achievements: [
        "Разработал системы очистки воды для 60+ предприятий",
        "Сертифицированный специалист по водоподготовке",
        "Автор методики оценки качества промышленных стоков",
        "Экономия водных ресурсов клиентов до 45%"
      ],
      experience: "8+ лет",
      education: "Магистр гидрогеологии, Белорусский государственный университет",
      contact: {
        email: "david@synecology.com",
        phone: "+375 29 456-78-90"
      }
    }
  };

  useEffect(() => {
    if (slug && teamData[slug as keyof typeof teamData]) {
      setMember(teamData[slug as keyof typeof teamData]);
    }
  }, [slug]);

  if (!member) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-dark-slate mb-4">
            Специалист не найден
          </h1>
          <Link href="/about" className="btn-primary">
            Вернуться к команде
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
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sea-green hover:text-sea-green/80 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Вернуться к команде
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.h1
                className="text-4xl lg:text-5xl font-heading font-bold text-dark-slate mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {member.name}
              </motion.h1>
              <motion.p
                className="text-xl text-sea-green font-semibold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {member.role}
              </motion.p>
              <motion.div
                className="glassmorphic rounded-2xl p-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <Quote className="w-8 h-8 text-sea-green mb-4" />
                <p className="text-lg text-dark-slate italic leading-relaxed">
                  {member.quote}
                </p>
              </motion.div>
              <motion.p
                className="text-lg text-dark-slate/70 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {member.bio}
              </motion.p>
            </div>

            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <GlassmorphicCard>
                <div className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 mx-auto rounded-full object-cover mb-6"
                  />
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-sea-green" />
                      <span className="text-dark-slate">
                        <strong>Опыт:</strong> {member.experience}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-sea-green" />
                      <span className="text-dark-slate">
                        <strong>Образование:</strong> {member.education}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-sea-green" />
                      <a
                        href={`mailto:${member.contact.email}`}
                        className="text-dark-slate hover:text-sea-green transition-colors"
                      >
                        {member.contact.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-sea-green" />
                      <a
                        href={`tel:${member.contact.phone}`}
                        className="text-dark-slate hover:text-sea-green transition-colors"
                      >
                        {member.contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </GlassmorphicCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gradient-to-b from-off-white to-soft-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading font-bold text-dark-slate mb-4">
              Экспертиза
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {member.expertise.map((skill: string, index: number) => (
              <motion.div
                key={skill}
                className="glassmorphic rounded-xl p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-sea-green font-semibold">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading font-bold text-dark-slate mb-4">
              Ключевые достижения
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {member.achievements.map((achievement: string, index: number) => (
              <motion.div
                key={achievement}
                className="glassmorphic rounded-xl p-6 flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 bg-sea-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 text-sea-green" />
                </div>
                <span className="text-dark-slate leading-relaxed">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-off-white to-soft-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GlassmorphicCard className="text-center">
            <motion.h2
              className="text-4xl font-heading font-bold text-dark-slate mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Готовы работать с <span className="text-sea-green">{member.name.split(' ')[member.name.split(' ').length - 1]}</span>?
            </motion.h2>
            <motion.p
              className="text-xl text-dark-slate/70 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Свяжитесь с нами для консультации по вашему проекту. Мы поможем найти оптимальное решение для ваших экологических задач.
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
                Связаться с нами
              </Link>
              <Link
                href="/about"
                className="glassmorphic glassmorphic-hover px-8 py-4 rounded-full text-sea-green font-semibold inline-flex items-center gap-2"
              >
                Вся команда
              </Link>
            </motion.div>
          </GlassmorphicCard>
        </div>
      </section>
    </div>
  );
}