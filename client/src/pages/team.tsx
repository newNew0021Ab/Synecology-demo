
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Mail, Phone, MapPin, Award, Users, BookOpen, ArrowRight } from "lucide-react";
import OrganicBlob from "@/components/OrganicBlob";
import GlassmorphicCard from "@/components/GlassmorphicCard";

export default function Team() {
  const teamMembers = [
    {
      name: "Корякин Егор Дмитриевич",
      position: "Директор",
      description: "Опытный специалист с более чем 5-летним стажем в сфере экологии и природопользования. Имеет практический опыт работы в системе Минприроды, где участвовал в разработке и реализации различных проектов.",
      experience: "5+ лет",
      expertise: ["Экологическое законодательство", "Проекты Минприроды", "Стратегическое планирование", "Управление проектами"],
      icon: Award,
      color: "text-sea-green"
    },
    {
      name: "Волошко Инна Владимировна",
      position: "Коммерческий директор",
      description: "Опытный управленец с более чем 10-летним стажем в коммерческой деятельности и руководящих должностях. Обеспечивает эффективное развитие бизнеса и поддержание высоких стандартов обслуживания клиентов.",
      experience: "10+ лет",
      expertise: ["Коммерческая деятельность", "Управление командой", "Развитие бизнеса", "Клиентский сервис"],
      icon: Users,
      color: "text-soft-blue"
    }
  ];

  const companyStats = [
    { icon: Award, value: "15+", label: "Лет опыта команды", color: "text-sea-green" },
    { icon: Users, value: "500+", label: "Довольных клиентов", color: "text-soft-blue" },
    { icon: BookOpen, value: "100%", label: "Соответствие стандартам", color: "text-sandy-beige" },
  ];

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
              Наша <span className="text-sea-green">команда</span>
            </motion.h1>
            <motion.p
              className="text-xl text-dark-slate/70 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              За каждым успешным проектом стоят профессионалы с многолетним опытом. Знакомьтесь с экспертами, которые превращают сложные экологические задачи в простые и понятные решения.
            </motion.p>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {companyStats.map((stat, index) => (
              <GlassmorphicCard key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className={`w-16 h-16 ${stat.color} mx-auto mb-4`}>
                    <stat.icon className="w-full h-full" />
                  </div>
                  <div className="text-4xl font-heading font-bold text-dark-slate mb-2">
                    {stat.value}
                  </div>
                  <div className="text-dark-slate/70">{stat.label}</div>
                </div>
              </GlassmorphicCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-gradient-to-b from-off-white to-soft-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <GlassmorphicCard>
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 ${member.color} bg-opacity-20 rounded-2xl flex items-center justify-center`}>
                        <member.icon className={`w-8 h-8 ${member.color}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-heading font-bold text-dark-slate">
                          {member.name}
                        </h3>
                        <p className={`text-lg font-semibold ${member.color}`}>
                          {member.position}
                        </p>
                      </div>
                    </div>

                    <p className="text-dark-slate/70 text-base leading-relaxed mb-6">
                      {member.description}
                    </p>

                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-5 h-5 text-sea-green" />
                        <span className="font-semibold text-dark-slate">Опыт работы: {member.experience}</span>
                      </div>
                    </div>

                    <div className="space-y-3 flex-grow">
                      <h4 className="font-semibold text-dark-slate">Экспертиза:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill) => (
                          <span
                            key={skill}
                            className={`px-3 py-1 bg-opacity-10 text-sm rounded-full font-medium ${
                              member.color === 'text-sea-green' ? 'bg-sea-green text-sea-green' : 'bg-soft-blue text-soft-blue'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassmorphicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-heading font-bold text-dark-slate mb-6">
              Наши <span className="text-sea-green">принципы</span>
            </h2>
            <p className="text-xl text-dark-slate/70 max-w-3xl mx-auto">
              Мы работаем не просто как исполнители, а как партнёры, которые понимают ваш бизнес и помогают достичь целей.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassmorphicCard delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-sea-green/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-sea-green" />
                </div>
                <h3 className="text-xl font-heading font-bold text-dark-slate mb-3">
                  Экспертность
                </h3>
                <p className="text-dark-slate/70">
                  Глубокие знания экологического законодательства и многолетний практический опыт в системе Минприроды.
                </p>
              </div>
            </GlassmorphicCard>

            <GlassmorphicCard delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-soft-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-soft-blue" />
                </div>
                <h3 className="text-xl font-heading font-bold text-dark-slate mb-3">
                  Индивидуальный подход
                </h3>
                <p className="text-dark-slate/70">
                  Учитываем специфику каждого бизнеса и находим оптимальные решения для конкретных задач.
                </p>
              </div>
            </GlassmorphicCard>

            <GlassmorphicCard delay={0.3}>
              <div className="text-center">
                <div className="w-16 h-16 bg-sandy-beige/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-dark-slate" />
                </div>
                <h3 className="text-xl font-heading font-bold text-dark-slate mb-3">
                  Результативность
                </h3>
                <p className="text-dark-slate/70">
                  Гарантируем качество работы и соблюдение всех сроков для достижения поставленных целей.
                </p>
              </div>
            </GlassmorphicCard>
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
              Готовы <span className="text-sea-green">работать вместе?</span>
            </motion.h2>
            <motion.p
              className="text-xl text-dark-slate/70 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Наша команда готова взять на себя все экологические вопросы вашего бизнеса. Свяжитесь с нами для консультации.
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
                href="/services"
                className="glassmorphic glassmorphic-hover px-8 py-4 rounded-full text-sea-green font-semibold inline-flex items-center gap-2"
              >
                Наши услуги
              </Link>
            </motion.div>
          </GlassmorphicCard>
        </div>
      </section>
    </div>
  );
}
