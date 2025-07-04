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
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
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
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      details: "123 Green Street, Eco City, EC 12345",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
    },
    {
      icon: Mail,
      title: "Email",
      details: "hello@synecology.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM PST",
    },
  ];

  const projectTypes = [
    "Environmental Assessment",
    "Sustainability Planning",
    "Regulatory Compliance",
    "Water Management",
    "Air Quality Monitoring",
    "Ecosystem Restoration",
    "Other",
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
              Начните свой <span className="text-sea-green">проект</span>
            </motion.h1>
            <motion.p
              className="text-xl text-dark-slate/70 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Готовы оказать положительное воздействие на окружающую среду? Давайте обсудим, как мы можем помочь вам достичь целей устойчивости с помощью инновационных решений.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-b from-off-white to-soft-blue/20">
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
                        <FormLabel className="text-dark-slate font-medium">Сообщение</FormLabel>
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
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-sea-green hover:bg-sea-green/90 text-white font-semibold py-4 rounded-full transition-all duration-300"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </GlassmorphicCard>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <GlassmorphicCard>
                <h3 className="text-2xl font-heading font-bold text-dark-slate mb-6">Contact Information</h3>
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
                <h3 className="text-2xl font-heading font-bold text-dark-slate mb-6">Why Choose Synecology?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sea-green rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-dark-slate">Expert Team</div>
                      <div className="text-dark-slate/70 text-sm">25+ environmental professionals with decades of experience</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sea-green rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-dark-slate">Proven Results</div>
                      <div className="text-dark-slate/70 text-sm">150+ successful projects with measurable environmental impact</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sea-green rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-dark-slate">Innovative Solutions</div>
                      <div className="text-dark-slate/70 text-sm">Cutting-edge technology combined with scientific expertise</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-sea-green rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-dark-slate">Full Support</div>
                      <div className="text-dark-slate/70 text-sm">End-to-end project management and ongoing consultation</div>
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
              Frequently Asked <span className="text-sea-green">Questions</span>
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassmorphicCard>
              <h3 className="text-xl font-heading font-bold text-dark-slate mb-4">
                How long does a typical project take?
              </h3>
              <p className="text-dark-slate/70">
                Project timelines vary based on scope and complexity. Small assessments may take 2-4 weeks, while comprehensive sustainability planning can take 6-12 months. We'll provide a detailed timeline during our initial consultation.
              </p>
            </GlassmorphicCard>
            
            <GlassmorphicCard>
              <h3 className="text-xl font-heading font-bold text-dark-slate mb-4">
                What industries do you serve?
              </h3>
              <p className="text-dark-slate/70">
                We work with clients across manufacturing, energy, agriculture, real estate, education, and municipal sectors. Our expertise adapts to various industry-specific environmental challenges.
              </p>
            </GlassmorphicCard>
            
            <GlassmorphicCard>
              <h3 className="text-xl font-heading font-bold text-dark-slate mb-4">
                Do you provide ongoing support?
              </h3>
              <p className="text-dark-slate/70">
                Yes! We offer long-term partnerships including monitoring, reporting, compliance management, and system optimization to ensure continued success of your environmental initiatives.
              </p>
            </GlassmorphicCard>
            
            <GlassmorphicCard>
              <h3 className="text-xl font-heading font-bold text-dark-slate mb-4">
                How do you ensure regulatory compliance?
              </h3>
              <p className="text-dark-slate/70">
                Our team stays current with all environmental regulations and maintains relationships with regulatory agencies. We build compliance into every solution from the ground up.
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
              Ready to Make an <span className="text-sea-green">Impact</span>?
            </motion.h2>
            <motion.p
              className="text-xl text-dark-slate/70 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              Don't wait to start your environmental journey. Contact us today for a free consultation and discover how we can help achieve your sustainability goals.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={() => {
                  const formSection = document.querySelector('form');
                  formSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-sea-green hover:bg-sea-green/90 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Button>
              <Button
                variant="outline"
                className="glassmorphic glassmorphic-hover border-sea-green text-sea-green font-semibold py-4 px-8 rounded-full"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </motion.div>
          </GlassmorphicCard>
        </div>
      </section>
    </div>
  );
}
