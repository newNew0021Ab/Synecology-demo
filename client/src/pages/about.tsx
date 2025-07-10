import { motion } from "framer-motion";
import { Link } from "wouter";
import { Users, Award, TrendingUp, ArrowRight, Linkedin, Twitter, Mail } from "lucide-react";
import OrganicBlob from "@/components/OrganicBlob";
import GlassmorphicCard from "@/components/GlassmorphicCard";

export default function About() {
  const stats = [
    { value: "150+", label: "Проектов завершено", icon: TrendingUp },
    { value: "25+", label: "Экспертов в команде", icon: Users },
    { value: "9", label: "Лет опыта", icon: Award },
  ];

  const teamMembers = [
    {
      name: "Др. Сара Чен",
      role: "Основатель и генеральный директор",
      bio: "Эколог с более чем 15-летним опытом консультирования по устойчивости и разработки политики.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      expertise: ["Экологическая политика", "Климатология", "Стратегическое планирование"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@synecology.com",
      },
    },
    {
      name: "Михаил Родригес",
      role: "Директор по операциям",
      bio: "Инженерный лидер, специализирующийся на системах возобновляемой энергии и развитии устойчивой инфраструктуры.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      expertise: ["Возобновляемая энергия", "Управление проектами", "Системная инженерия"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@synecology.com",
      },
    },
    {
      name: "Др. Эмили Джонсон",
      role: "Старший эколог",
      bio: "Морской биолог и специалист по охране природы с экспертизой в восстановлении экосистем и оценке биоразнообразия.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      expertise: ["Морская биология", "Восстановление экосистем", "Оценка биоразнообразия"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@synecology.com",
      },
    },
    {
      name: "Дэвид Парк",
      role: "Менеджер водных ресурсов",
      bio: "Гидрогеолог с обширным опытом в системах очистки воды и решениях устойчивого управления водными ресурсами.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400",
      expertise: ["Водные ресурсы", "Гидрогеология", "Системы очистки"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@synecology.com",
      },
    },
  ];

  const values = [
    {
      title: "Инновации",
      description: "Мы применяем передовые технологии и креативные решения для решения сложных экологических задач.",
      icon: <TrendingUp className="w-8 h-8 text-sea-green" />,
    },
    {
      title: "Устойчивость",
      description: "Каждое решение, которое мы разрабатываем, приоритизирует долгосрочное экологическое здоровье и сохранение ресурсов.",
      icon: <Award className="w-8 h-8 text-sea-green" />,
    },
    {
      title: "Сотрудничество",
      description: "Мы верим в тесную работу с нашими клиентами и сообществами для достижения общих экологических целей.",
      icon: <Users className="w-8 h-8 text-sea-green" />,
    },
    {
      title: "Совершенство",
      description: "Мы поддерживаем высочайшие стандарты научной строгости и профессионального сервиса во всей нашей работе.",
      icon: <ArrowRight className="w-8 h-8 text-sea-green" />,
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <OrganicBlob className="absolute top-10 right-10 opacity-15" size="lg" />
        <OrganicBlob className="absolute bottom-10 left-10 opacity-10" size="md" delay={2} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h1
                className="text-5xl lg:text-6xl font-heading font-bold text-dark-slate mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                О <span className="text-sea-green">Synecology</span>
              </motion.h1>
              <motion.p
                className="text-xl text-dark-slate/70 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Основанная в 2015 году, Synecology представляет собой глубокую экспертизу и руку помощи. Для нас каждый проект — это в первую очередь результат для клиента. За это время мы научились не просто помогать получить документы, а выстроить надежную систему, которая экономит деньги и защищает от рисков.
              </motion.p>
              <motion.div
                className="grid grid-cols-3 gap-8 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-heading font-bold text-sea-green mb-2">
                      {stat.value}
                    </div>
                    <div className="text-dark-slate/70 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Link
                  href="/contact"
                  className="glassmorphic glassmorphic-hover px-8 py-4 rounded-full text-sea-green font-semibold inline-flex items-center gap-2"
                >
                  <Users className="w-5 h-5" />
                  Работать с нами
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="glassmorphic rounded-3xl p-8 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                  alt="Environmental consulting team"
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              <div className="glassmorphic absolute -bottom-6 -right-6 px-6 py-4 rounded-2xl">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-sea-green" />
                  <span className="text-sm font-semibold text-dark-slate">Награжденная команда</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <OrganicBlob className="absolute top-10 right-10 opacity-10" size="md" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl lg:text-5xl font-heading font-bold text-dark-slate mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Познакомьтесь с нашей <span className="text-sea-green">командой</span>
            </motion.h2>
            <motion.p
              className="text-xl text-dark-slate/70 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Наша разнообразная команда экспертов объединяет десятилетия опыта в области экологических наук, инженерии и политики для предоставления инновационных решений.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <GlassmorphicCard key={member.name} delay={index * 0.1}>
                <div className="flex flex-col sm:flex-row gap-6 h-full">
                  <div className="flex-shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-dark-slate mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sea-green font-semibold mb-3">{member.role}</p>
                    <p className="text-dark-slate/70 mb-4 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-sea-green/10 text-sea-green text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={member.social.linkedin}
                        className="text-dark-slate/60 hover:text-sea-green transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="text-dark-slate/60 hover:text-sea-green transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="text-dark-slate/60 hover:text-sea-green transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </GlassmorphicCard>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gradient-to-b from-off-white to-soft-blue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl lg:text-5xl font-heading font-bold text-dark-slate mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Наша миссия: <span className="text-sea-green">Делать экологию выгодной</span>
            </motion.h2>
            <motion.p
              className="text-xl text-dark-slate/70 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Мы верим, что ответственный подход к экологии — это не расходы, а умные инвестиции в репутацию, рост и будущее вашего бизнеса.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 card-grid">
            {values.map((value, index) => (
              <GlassmorphicCard key={value.title} delay={index * 0.1}>
                <div className="text-center card-content">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-heading font-bold text-dark-slate mb-4">
                    {value.title}
                  </h3>
                  <p className="text-dark-slate/70 flex-grow">{value.description}</p>
                </div>
              </GlassmorphicCard>
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
              Готовы работать <span className="text-sea-green">вместе</span>?
            </motion.h2>
            <motion.p
              className="text-xl text-dark-slate/70 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Давайте сотрудничать, чтобы создать инновационные экологические решения, которые окажут долгосрочное положительное воздействие на нашу планету.
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
                Посмотреть наши работы
              </Link>
            </motion.div>
          </GlassmorphicCard>
        </div>
      </section>
    </div>
  );
}