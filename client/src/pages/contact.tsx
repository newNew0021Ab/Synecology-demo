import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import OrganicBlob from "@/components/OrganicBlob";
import GlassmorphicCard from "@/components/GlassmorphicCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  firstName: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  lastName: z.string().min(2, "Фамилия должна содержать минимум 2 символа"),
  email: z.string().email("Введите корректный email адрес"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Выберите тип проекта"),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      projectType: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast({
        title: "Сообщение успешно отправлено!",
        description: "Мы свяжемся с вами в течение 24 часов.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Ошибка отправки сообщения",
        description: "Попробуйте еще раз позже.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Адрес",
      details: "г. Минск, ул. Якубова 66, корп.1, кв. 362",
    },
    {
      icon: Phone,
      title: "Телефон",
      details: "+375 (29) 602-42-80",
    },
    {
      icon: Mail,
      title: "Email",
      details: "synecology@yandex.by",
    },
    {
      icon: Clock,
      title: "Часы работы",
      details: "Пн-Пт: 9:00 - 18:00",
    },
  ];

  const projectTypes = [
    "Общая консультация",
    "Разработка проекта по выбросам (ПДВ)",
    "Разработка инструкции по отходам",
    "Проведение экологического аудита",
    "Получение экологического сертификата",
    "Паспортизация (отходы, ГОУ)",
    "Восстановление экосистем",
    "Другое",
  ];

  return (
    <div className="pt-24">
      {/* Contact Form & Info */}
      <section className="py-20 bg-subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <GlassmorphicCard>
              <h2 className="text-3xl font-heading font-bold text-dark-slate mb-6">Свяжитесь с нами</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-dark-slate font-medium">Имя</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="glassmorphic border-dark-slate/20 bg-white/50 focus:ring-sea-green focus:border-sea-green"
                              placeholder="Иван"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-dark-slate font-medium">Фамилия</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="glassmorphic border-dark-slate/20 bg-white/50 focus:ring-sea-green focus:border-sea-green"
                              placeholder="Петров"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-dark-slate font-medium">Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            className="glassmorphic border-dark-slate/20 bg-white/50 focus:ring-sea-green focus:border-sea-green"
                            placeholder="ivan@company.com"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-dark-slate font-medium">Компания (опционально)</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="glassmorphic border-dark-slate/20 bg-white/50 focus:ring-sea-green focus:border-sea-green"
                            placeholder="Ваша компания"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-dark-slate font-medium">Тип проекта</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="glassmorphic border-dark-slate/20 bg-white/50 focus:ring-sea-green focus:border-sea-green">
                              <SelectValue placeholder="Выберите тип проекта" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {projectTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-dark-slate font-medium">Сообщение (опционально)</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={4}
                            className="glassmorphic border-dark-slate/20 bg-white/50 focus:ring-sea-green focus:border-sea-green"
                            placeholder="Расскажите нам о вашем проекте..."
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-sea-green hover:bg-sea-green/90 text-white font-semibold py-4 rounded-full transition-all duration-300"
                    >
                      {isSubmitting ? (
                        "Отправка..."
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Отправить сообщение
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </GlassmorphicCard>

            {/* Contact Information */}
            <div className="space-y-8">
              <GlassmorphicCard>
                <h3 className="text-2xl font-heading font-bold text-dark-slate mb-6">Контактная информация</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                      <div className="w-12 h-12 bg-sea-green/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-sea-green" />
                      </div>
                      <div>
                        <div className="font-semibold text-dark-slate mb-1">{info.title}</div>
                        <div className="text-dark-slate/70">{info.details}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassmorphicCard>

              <GlassmorphicCard>
                <h3 className="text-2xl font-heading font-bold text-dark-slate mb-6">Почему выбрать Synecology?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sea-green rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-dark-slate">Экспертная команда</div>
                      <div className="text-dark-slate/70 text-sm">Вашей задачей займутся не просто теоретики, а практикующие экологи с реальным опытом решения самых сложных кейсов в Беларуси.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sea-green rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-dark-slate">Измеримый успех</div>
                      <div className="text-dark-slate/70 text-sm">Каждый наш проект нацелен на конкретный результат: снижение затрат, защита от штрафов, укрепление репутации.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sea-green rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-dark-slate">Прозрачные решения</div>
                      <div className="text-dark-slate/70 text-sm">Вы всегда будете в курсе каждого этапа. Мы работаем открыто, предоставляя понятные отчеты и четкие планы действий.</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sea-green rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-dark-slate">Полная поддержка</div>
                      <div className="text-dark-slate/70 text-sm">Мы остаемся на связи даже после завершения проекта, помогая вам с любыми возникающими вопросами.</div>
                    </div>
                  </div>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <OrganicBlob className="absolute top-10 right-10 opacity-10" size="md" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-heading font-bold text-dark-slate mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Часто задаваемые <span className="text-sea-green">вопросы</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassmorphicCard>
              <h3 className="text-xl font-heading font-bold text-dark-slate mb-4">
                Сколько времени занимает типичный проект?
              </h3>
              <p className="text-dark-slate/70">
                Сроки проектов варьируются в зависимости от масштаба и сложности. Небольшие оценки могут занять 2-4 недели, в то время как комплексное планирование устойчивости может занять 6-12 месяцев. Мы предоставим подробный график во время первичной консультации.
              </p>
            </GlassmorphicCard>

            <GlassmorphicCard>
              <h3 className="text-xl font-heading font-bold text-dark-slate mb-4">
                Какие отрасли вы обслуживаете?
              </h3>
              <p className="text-dark-slate/70">
                Мы работаем с клиентами в сферах производства, энергетики, сельского хозяйства, недвижимости, образования и муниципальных секторах. Наша экспертиза адаптируется к различным отраслевым экологическим вызовам.
              </p>
            </GlassmorphicCard>

            <GlassmorphicCard>
              <h3 className="text-xl font-heading font-bold text-dark-slate mb-4">
                Предоставляете ли вы постоянную поддержку?
              </h3>
              <p className="text-dark-slate/70">
                Да! Мы предлагаем долгосрочные партнерства, включая мониторинг, отчетность, управление соответствием и оптимизацию систем для обеспечения непрерывного успеха ваших экологических инициатив.
              </p>
            </GlassmorphicCard>

            <GlassmorphicCard>
              <h3 className="text-xl font-heading font-bold text-dark-slate mb-4">
                Как вы обеспечиваете соблюдение нормативных требований?
              </h3>
              <p className="text-dark-slate/70">
                Наша команда следит за всеми экологическими нормами и поддерживает отношения с регулирующими органами. Мы встраиваем соблюдение требований в каждое решение с самого начала.
              </p>
            </GlassmorphicCard>
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
              <span className="text-sea-green">Один звонок </span>
                до решения вашей задачи 
            </motion.h2>
            <motion.p
              className="text-xl text-dark-slate/70 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Не откладывайте. Свяжитесь с нами любым удобным способом, и мы начнем работать над вашей задачей уже сегодня. Консультация ни к чему вас не обязывает.
            </motion.p>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Button
                variant="outline"
                className="glassmorphic glassmorphic-hover border-sea-green text-sea-green font-semibold py-4 px-8 rounded-full"
              >
                <Phone className="w-5 h-5 mr-2" />
                Позвонить сейчас
              </Button>
            </motion.div>
          </GlassmorphicCard>
        </div>
      </section>
    </div>
  );
}
